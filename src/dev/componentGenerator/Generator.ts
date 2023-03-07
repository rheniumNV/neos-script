import _ from "lodash";

type TypeDefine<I, O> = {
  define: string;
  parser: (i: { value: I }) => O;
};

const BoolType = {
  define: "boolean",
  parser: ({ value }: { value: any }) => false,
};
const NumberType = {
  define: "number",
  parser: ({ value }: { value: any }) => value,
};
const Number2Type = {
  define: "[number, number]",
  parser: ({ value }: { value: any }) => [0, 0],
};
const Number3Type = {
  define: "[number, number, number]",
  parser: ({ value }: { value: any }) => [0, 0, 0],
};
const Number4Type = {
  define: "[number, number, number, number]",
  parser: ({ value }: { value: any }) => [0, 0, 0, 0],
};
const StringType = {
  define: "string",
  parser: ({ value }: { value: any }) => "",
};
const StringArrayType = {
  define: "Array<{ID:string, Data:string}>",
  parser: ({ value }: { value: any }) => [],
};

const TypeMap: { [key: string]: TypeDefine<any, any> } = {
  "FrooxEngine.Sync`1[System.Boolean]": BoolType,
  "FrooxEngine.Sync`1[System.Int16]": NumberType,
  "FrooxEngine.Sync`1[System.Int32]": NumberType,
  "FrooxEngine.Sync`1[System.Int64]": NumberType,
  "FrooxEngine.Sync`1[System.UInt16]": NumberType,
  "FrooxEngine.Sync`1[System.UInt32]": NumberType,
  "FrooxEngine.Sync`1[System.UInt64]": NumberType,
  "FrooxEngine.Sync`1[System.Single]": NumberType,
  "FrooxEngine.Sync`1[System.Double]": NumberType,
  "FrooxEngine.Sync`1[System.Decimal]": NumberType,
  "FrooxEngine.Sync`1[BaseX.int2]": Number2Type,
  "FrooxEngine.Sync`1[BaseX.float2]": Number2Type,
  "FrooxEngine.Sync`1[BaseX.float3]": Number3Type,
  "FrooxEngine.Sync`1[BaseX.float4]": Number4Type,
  "FrooxEngine.Sync`1[BaseX.color]": Number4Type,
  "FrooxEngine.LogiX.Input`1[BaseX.floatQ]": Number4Type,
  "FrooxEngine.FieldDrive`1[System.String]": StringType,
  "FrooxEngine.FieldDrive`1[System.Char]": StringType,
  "FrooxEngine.SyncAssetList`1[FrooxEngine.Material]": StringArrayType,
  "FrooxEngine.SyncList`1[FrooxEngine.UIX.InteractionElement+ColorDriver]": {
    define: `Array<{
        ID: string;
        ColorDrive:{ID:string; Data:string;};
        TintColorMode:{ID:string; Data:string|'Explicit';};
        NormalColor:{ID:string; Data:[number, number, number, number];};
        HighlightColor:{ID:string; Data:[number, number, number, number];};
        PressColor:{ID:string; Data:[number, number, number, number];};
        DisabledColor:{ID:string; Data:[number, number, number, number];};
      }>`,
    parser: ({ value }: { value: any }) => [],
  },
};
const anyType = {
  define: "any",
  parser: ({ value }: { value: any }) => value,
};

export function generateComponent({
  fixedName,
  fullName,
  members: rawMembers,
  types,
  depth,
  typeVersion,
}: {
  fixedName: string;
  fullName: string;
  members: {
    name: string;
    type: string;
    default: any;
    readonly: boolean;
  }[];
  types: string[];
  depth: number;
  typeVersion: number;
}) {
  const members = rawMembers.map(({ name, type, default: def, readonly }) => ({
    name: name === "true" ? "True" : name === "false" ? "False" : name,
    type,
    default: def,
    readonly,
  }));
  const interfaceUnit = _(members)
    .map(({ name, type }) => {
      return `${name}?: member<${_.get(TypeMap, type, anyType).define}>;`;
    })
    .join("\n");

  const typeInterfaceStr = _(types)
    .map((str) => `${str}: {name: string},`)
    .join("\n");
  const typeInterfaceUnit =
    _.size(types) > 0 ? `type:{${typeInterfaceStr}},` : "";

  const typePropStr = _(types)
    .map((str) => `${str}:{name: ${str}},`)
    .join("\n");
  const typePropUnit = _.size(types) > 0 ? `type:{${typePropStr}},` : "";

  const typeNameStr = _(types)
    .map((str) => `${str},`)
    .join("\n");

  const propsUnit = _(members)
    .map(({ name, type }) => {
      return `${name},`;
    })
    .join("\n");
  const memberUnit = _(members)
    .map(({ name, type, default: def, readonly }) => {
      const fixedName = readonly ? `${name}-ID` : name;
      return `<Member type={\`${_.replace(
        _.replace(type, new RegExp("`", "g"), "\\`"),
        "[T]",
        "[${T}]"
      )}\`} name="${fixedName}" id={typeof ${name} === "object" && "id" in ${name} ? ${name}?.id : undefined} value={typeof ${name} === "object" && "value" in ${name} ? ${name}?.value : ${name}} /* default: ${def} */ ${
        readonly ? "idOnly" : ""
      } />`;
    })
    .join("\n");

  const componentClassName =
    _.size(types) > 0
      ? `{\`${_.replace(
          fullName,
          new RegExp("`", "g"),
          "\\`"
        )}[\${[${typeNameStr}]}]\`}`
      : `"${fullName}"`;

  const data = `import { member, Member, Component } from "${_.range(depth)
    .map(() => "../")
    .join("")}core";
    
    export interface ${fixedName}Input {
        ${typeInterfaceUnit}
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        ${interfaceUnit}
    }
    
    export function ${fixedName}(props: ${fixedName}Input){
      const {${typePropUnit} id, persistentId, updateOrder, ${propsUnit} } = props;
    
      return (
        <Component type=${componentClassName} id={id} persistentId={persistentId} updateOrder={updateOrder}${
    typeVersion ? ` version={${typeVersion}}` : ""
  }>
        ${memberUnit}
        </Component>
      );
    };
    `;
  return data;
}
