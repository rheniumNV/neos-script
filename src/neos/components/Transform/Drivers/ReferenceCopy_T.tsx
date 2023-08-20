import { member, Member, Component } from "../../../core";
    
    export interface ReferenceCopy_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
Target?: member<any>;
WriteBack?: member<boolean>;
    }
    
    export function ReferenceCopy_T(props: ReferenceCopy_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Source,
Target,
WriteBack, } = props;
    
      return (
        <Component type={`FrooxEngine.ReferenceCopy\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: null */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RefDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WriteBack" id={typeof WriteBack === "object" && "id" in WriteBack ? WriteBack?.id : undefined} value={typeof WriteBack === "object" && "value" in WriteBack ? WriteBack?.value : WriteBack} /* default: null */  isRaw={typeof WriteBack === "object" && "isRaw" in WriteBack && WriteBack.isRaw ? true : undefined} />
        </Component>
      );
    };
    