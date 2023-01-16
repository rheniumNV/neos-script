import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

declare global {
  export namespace JSX {
    interface IntrinsicElements {
      slot: any;
      slotData: any;
      components: any;
      component: any;
      children: any;
      assets: any;
      member: any;
    }
  }
}

type Props = {
  children: JSX.IntrinsicElements | JSX.IntrinsicElements[];
};

function generateId(key?: string) {
  return key ? key : uuidv4();
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
      const { name, id, value, readOnly, idOnly } = props;
      return {
        [name]: readOnly
          ? value
          : idOnly
          ? generateId(id)
          : { ID: generateId(id), Data: value },
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
      return { tag: "slotChildren", data: children };
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
      const Children = _.map(slotChildren ?? [], ({ Object, TypeVersions }) => {
        const { assets: childAssets, ...slot } = Object;
        assets = [...(assets ?? []), ...(childAssets ?? [])];
        typeVersions = { ...TypeVersions, typeVersions };
        return { ...slot, ...{ ParentReference: slotId } };
      });
      return {
        Object: {
          ...(slotData ?? {}),
          Components: { ID: generateId(), Data: components },
          Children,
        },
        Assets: assets,
        TypeVersions: typeVersions,
      };
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
