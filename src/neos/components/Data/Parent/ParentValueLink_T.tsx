import { member, Member, Component } from "../../../core";
    
    export interface ParentValueLink_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MatchTag?: member<any>;
Target?: member<any>;
WriteBack?: member<boolean>;
DefaultValue?: member<any>;
    }
    
    export function ParentValueLink_T(props: ParentValueLink_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
MatchTag,
Target,
WriteBack,
DefaultValue, } = props;
    
      return (
        <Component type={`FrooxEngine.ParentValueLink\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="MatchTag" id={typeof MatchTag === "object" && "id" in MatchTag ? MatchTag?.id : undefined} value={typeof MatchTag === "object" && "value" in MatchTag ? MatchTag?.value : MatchTag} /* default: null */  isRaw={typeof MatchTag === "object" && "isRaw" in MatchTag && MatchTag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WriteBack" id={typeof WriteBack === "object" && "id" in WriteBack ? WriteBack?.id : undefined} value={typeof WriteBack === "object" && "value" in WriteBack ? WriteBack?.value : WriteBack} /* default: null */  isRaw={typeof WriteBack === "object" && "isRaw" in WriteBack && WriteBack.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="DefaultValue" id={typeof DefaultValue === "object" && "id" in DefaultValue ? DefaultValue?.id : undefined} value={typeof DefaultValue === "object" && "value" in DefaultValue ? DefaultValue?.value : DefaultValue} /* default: null */  isRaw={typeof DefaultValue === "object" && "isRaw" in DefaultValue && DefaultValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    