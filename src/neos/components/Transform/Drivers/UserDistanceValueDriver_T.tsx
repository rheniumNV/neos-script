import { member, Member, Component } from "../../../core";
    
    export interface UserDistanceValueDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Node?: member<any>;
Distance?: member<number>;
TargetField?: member<any>;
NearValue?: member<any>;
FarValue?: member<any>;
    }
    
    export function UserDistanceValueDriver_T(props: UserDistanceValueDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Node,
Distance,
TargetField,
NearValue,
FarValue, } = props;
    
      return (
        <Component type={`FrooxEngine.UserDistanceValueDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: null */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Distance" id={typeof Distance === "object" && "id" in Distance ? Distance?.id : undefined} value={typeof Distance === "object" && "value" in Distance ? Distance?.value : Distance} /* default: null */  isRaw={typeof Distance === "object" && "isRaw" in Distance && Distance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="TargetField" id={typeof TargetField === "object" && "id" in TargetField ? TargetField?.id : undefined} value={typeof TargetField === "object" && "value" in TargetField ? TargetField?.value : TargetField} /* default: null */  isRaw={typeof TargetField === "object" && "isRaw" in TargetField && TargetField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="NearValue" id={typeof NearValue === "object" && "id" in NearValue ? NearValue?.id : undefined} value={typeof NearValue === "object" && "value" in NearValue ? NearValue?.value : NearValue} /* default: null */  isRaw={typeof NearValue === "object" && "isRaw" in NearValue && NearValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="FarValue" id={typeof FarValue === "object" && "id" in FarValue ? FarValue?.id : undefined} value={typeof FarValue === "object" && "value" in FarValue ? FarValue?.value : FarValue} /* default: null */  isRaw={typeof FarValue === "object" && "isRaw" in FarValue && FarValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    