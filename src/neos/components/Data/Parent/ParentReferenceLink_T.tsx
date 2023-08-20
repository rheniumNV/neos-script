import { member, Member, Component } from "../../../core";
    
    export interface ParentReferenceLink_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MatchTag?: member<any>;
Target?: member<any>;
WriteBack?: member<boolean>;
DefaultReference?: member<any>;
    }
    
    export function ParentReferenceLink_T(props: ParentReferenceLink_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
MatchTag,
Target,
WriteBack,
DefaultReference, } = props;
    
      return (
        <Component type={`FrooxEngine.ParentReferenceLink\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="MatchTag" id={typeof MatchTag === "object" && "id" in MatchTag ? MatchTag?.id : undefined} value={typeof MatchTag === "object" && "value" in MatchTag ? MatchTag?.value : MatchTag} /* default: null */  isRaw={typeof MatchTag === "object" && "isRaw" in MatchTag && MatchTag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RefDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WriteBack" id={typeof WriteBack === "object" && "id" in WriteBack ? WriteBack?.id : undefined} value={typeof WriteBack === "object" && "value" in WriteBack ? WriteBack?.value : WriteBack} /* default: null */  isRaw={typeof WriteBack === "object" && "isRaw" in WriteBack && WriteBack.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="DefaultReference" id={typeof DefaultReference === "object" && "id" in DefaultReference ? DefaultReference?.id : undefined} value={typeof DefaultReference === "object" && "value" in DefaultReference ? DefaultReference?.value : DefaultReference} /* default: null */  isRaw={typeof DefaultReference === "object" && "isRaw" in DefaultReference && DefaultReference.isRaw ? true : undefined} />
        </Component>
      );
    };
    