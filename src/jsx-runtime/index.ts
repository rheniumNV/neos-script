import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

export type JSX_Member = {
  name: string;
  id?: string;
  type?: string;
  value?: any;
  idOnly?: true;
  readOnly?: true;
  isRaw?: true;
};

export type JSX_Member_Element = {
  [key: string]: { ID: string; Data: any } | string | any;
};

export type JSX_Component = { children: JSX_Member_Element[] };
export type JSX_Components = { children: JSX_Component[] | undefined };
export type JSX_SlotData = { children: JSX_Member_Element };
export type JSX_Slot = { children: [JSX_SlotData, JSX_Components] };
export type JSX_Children = { children: JSX_Slot[] | undefined };
export type JSX_Raw = { json: any };
export type JSX_IdSpace = { children: {} | JSX.Element | JSX.Element[] };
export type JSX_Id = { key?: string };

declare global {
  export namespace JSX {
    type Element = any;

    interface ElementChildrenAttribute {
      children: any;
    }
    type IntrinsicElements = {
      slot: any;
      slotData: { children: JSX_Member_Element | Array<JSX_Member_Element> };
      components: any;
      component: any;
      children: any;
      assets: any;
      member: JSX_Member;
      raw: JSX_Raw;
      idSpace: JSX_IdSpace;
      id: JSX_Id;
      common: any;
    };
  }
}

type Props = {
  children: JSX.IntrinsicElements | JSX.IntrinsicElements[];
};

const keyMap = new Map<string, string>();
function clearKeyMap() {
  keyMap.clear();
}
function generateId(key?: string) {
  const id = key ? keyMap.get(key) ?? uuidv4() : uuidv4();
  if (key) {
    keyMap.set(key, id);
  }
  return id;
}

function jsx(statement: string | any, rawProps: any, ...a: any[]) {
  if (typeof statement === "function") {
    if (statement.prototype !== undefined) {
      return new statement(rawProps);
    }
    return statement(rawProps);
  }

  const { children: rawChildren, ...props } = rawProps;
  const children: any[] = !rawChildren
    ? []
    : _.isArray(rawChildren)
    ? rawChildren.flatMap((v) => v)
    : [rawChildren];

  switch (statement) {
    case "member":
      const { name, id, value, readOnly, idOnly, isRaw } = props;
      return {
        [name]:
          readOnly || isRaw
            ? value
            : idOnly
            ? id ?? generateId()
            : { ID: id ?? generateId(), Data: value },
      };
    case "slotData":
      return {
        tag: "slotData",
        data: _.reduce(
          children,
          (prev, curr) => {
            return { ...prev, ...curr };
          },
          {}
        ),
      };
    case "component":
      const { type, version } = props;
      return {
        Type: type,
        version,
        Data: _.reduce(
          children,
          (prev, curr) => {
            return { ...prev, ...curr };
          },
          {}
        ),
      };
    case "children":
      return { tag: "slotChildren", data: children.filter((v) => v) };
    case "components":
      return { tag: "components", data: children };
    case "assets":
      return { tag: "assets", data: children };
    case "slot":
      let slotData: any;
      let slotChildren: any = [];
      let components: any = [];
      let assets: any = [];
      _.forEach(children, ({ tag, data }) => {
        switch (tag) {
          case "slotData":
            slotData = data;
            break;
          case "slotChildren":
            slotChildren = data;
            break;
          case "components":
            components = data;
            break;
          case "assets":
            assets = data;
            break;
        }
      });
      let typeVersions: { [key: string]: number } = {};
      components.forEach((component: any) => {
        typeVersions = {
          ...typeVersions,
          ...(component.version && component.version !== 0
            ? { [component.Type]: component.version }
            : {}),
        };
      });
      assets.forEach((component: any) => {
        typeVersions = {
          ...typeVersions,
          ...(component.version && component.version !== 0
            ? { [component.Type]: component.version }
            : {}),
        };
      });

      const slotId = slotData["ID"];
      const Children = _.map(
        slotChildren ?? [],
        ({ Object, Assets, TypeVersions }) => {
          assets = [
            ...(assets ?? []),
            ...(Assets ?? []).filter(
              (asset: any) =>
                !_.has(
                  assets?.map((asset: unknown) =>
                    _.get(asset, ["Data", "ID"])
                  ) ?? [],
                  _.get(asset, ["Data", "ID"])
                )
            ),
          ];
          typeVersions = { ...TypeVersions, ...typeVersions };
          return { ...Object, ...{ ParentReference: uuidv4() } };
        }
      );

      const Components = {
        ID: generateId(),
        Data: components.map(({ version, ...component }: any) => component),
      };
      return {
        Object: {
          ...(slotData ?? {}),
          Components,
          Children,
        },
        Assets: assets,
        TypeVersions: typeVersions,
      };
    case "raw":
      const { json } = props;
      return json;
    case "idSpace":
      clearKeyMap();
      return children;
    case "id":
      const { key } = props;
      return generateId(key);
  }
}

function Fragment(props: Props) {
  return props.children;
}

class Component<P = {}> {
  element = null;
  readonly props: P;

  constructor(props: P) {
    this.props = props;
  }

  render(): JSX.IntrinsicElements[] | null {
    return null;
  }
}

export { jsx, jsx as jsxs, Fragment, Component };
