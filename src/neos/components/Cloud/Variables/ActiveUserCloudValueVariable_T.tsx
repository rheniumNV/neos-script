import { member, Member, Component } from "../../../core";
    
    export interface ActiveUserCloudValueVariable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Path?: member<any>;
IsLinkedToCloud?: member<boolean>;
UpdateCloudVariable?: member<boolean>;
FallbackValue?: member<any>;
Value?: member<any>;
    }
    
    export function ActiveUserCloudValueVariable_T(props: ActiveUserCloudValueVariable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Path,
IsLinkedToCloud,
UpdateCloudVariable,
FallbackValue,
Value, } = props;
    
      return (
        <Component type={`FrooxEngine.ActiveUserCloudValueVariable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Path" id={typeof Path === "object" && "id" in Path ? Path?.id : undefined} value={typeof Path === "object" && "value" in Path ? Path?.value : Path} /* default: null */  isRaw={typeof Path === "object" && "isRaw" in Path && Path.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsLinkedToCloud" id={typeof IsLinkedToCloud === "object" && "id" in IsLinkedToCloud ? IsLinkedToCloud?.id : undefined} value={typeof IsLinkedToCloud === "object" && "value" in IsLinkedToCloud ? IsLinkedToCloud?.value : IsLinkedToCloud} /* default: null */  isRaw={typeof IsLinkedToCloud === "object" && "isRaw" in IsLinkedToCloud && IsLinkedToCloud.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UpdateCloudVariable" id={typeof UpdateCloudVariable === "object" && "id" in UpdateCloudVariable ? UpdateCloudVariable?.id : undefined} value={typeof UpdateCloudVariable === "object" && "value" in UpdateCloudVariable ? UpdateCloudVariable?.value : UpdateCloudVariable} /* default: null */  isRaw={typeof UpdateCloudVariable === "object" && "isRaw" in UpdateCloudVariable && UpdateCloudVariable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="FallbackValue" id={typeof FallbackValue === "object" && "id" in FallbackValue ? FallbackValue?.id : undefined} value={typeof FallbackValue === "object" && "value" in FallbackValue ? FallbackValue?.value : FallbackValue} /* default: null */  isRaw={typeof FallbackValue === "object" && "isRaw" in FallbackValue && FallbackValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
        </Component>
      );
    };
    