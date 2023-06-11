import { member, Member, Component } from "../../../core";
    
    export interface CloudValueVariableDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Path?: member<any>;
Target?: member<any>;
IsLinkedToCloud?: member<any>;
WriteBack?: member<boolean>;
FallbackValue?: member<any>;
OverrideOwner?: member<any>;
    }
    
    export function CloudValueVariableDriver_T(props: CloudValueVariableDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Path,
Target,
IsLinkedToCloud,
WriteBack,
FallbackValue,
OverrideOwner, } = props;
    
      return (
        <Component type={`FrooxEngine.CloudValueVariableDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Path" id={typeof Path === "object" && "id" in Path ? Path?.id : undefined} value={typeof Path === "object" && "value" in Path ? Path?.value : Path} /* default: null */  isRaw={typeof Path === "object" && "isRaw" in Path && Path.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsLinkedToCloud" id={typeof IsLinkedToCloud === "object" && "id" in IsLinkedToCloud ? IsLinkedToCloud?.id : undefined} value={typeof IsLinkedToCloud === "object" && "value" in IsLinkedToCloud ? IsLinkedToCloud?.value : IsLinkedToCloud} /* default: null */  isRaw={typeof IsLinkedToCloud === "object" && "isRaw" in IsLinkedToCloud && IsLinkedToCloud.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WriteBack" id={typeof WriteBack === "object" && "id" in WriteBack ? WriteBack?.id : undefined} value={typeof WriteBack === "object" && "value" in WriteBack ? WriteBack?.value : WriteBack} /* default: null */  isRaw={typeof WriteBack === "object" && "isRaw" in WriteBack && WriteBack.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="FallbackValue" id={typeof FallbackValue === "object" && "id" in FallbackValue ? FallbackValue?.id : undefined} value={typeof FallbackValue === "object" && "value" in FallbackValue ? FallbackValue?.value : FallbackValue} /* default: null */  isRaw={typeof FallbackValue === "object" && "isRaw" in FallbackValue && FallbackValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="OverrideOwner" id={typeof OverrideOwner === "object" && "id" in OverrideOwner ? OverrideOwner?.id : undefined} value={typeof OverrideOwner === "object" && "value" in OverrideOwner ? OverrideOwner?.value : OverrideOwner} /* default: null */  isRaw={typeof OverrideOwner === "object" && "isRaw" in OverrideOwner && OverrideOwner.isRaw ? true : undefined} />
        </Component>
      );
    };
    