import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="MatchTag" id={typeof MatchTag === "object" && "id" in MatchTag ? MatchTag?.id : undefined} value={typeof MatchTag === "object" && "value" in MatchTag ? MatchTag?.value : MatchTag} /* default: null */  />
<Member type={`FrooxEngine.RefDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WriteBack" id={typeof WriteBack === "object" && "id" in WriteBack ? WriteBack?.id : undefined} value={typeof WriteBack === "object" && "value" in WriteBack ? WriteBack?.value : WriteBack} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="DefaultReference" id={typeof DefaultReference === "object" && "id" in DefaultReference ? DefaultReference?.id : undefined} value={typeof DefaultReference === "object" && "value" in DefaultReference ? DefaultReference?.value : DefaultReference} /* default: null */  />
        </Component>
      );
    };
    