import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonReferenceSet_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetReference?: member<any>;
SetReference?: member<any>;
    }
    
    export function ButtonReferenceSet_T(props: ButtonReferenceSet_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
TargetReference,
SetReference, } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonReferenceSet\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="TargetReference" id={typeof TargetReference === "object" && "id" in TargetReference ? TargetReference?.id : undefined} value={typeof TargetReference === "object" && "value" in TargetReference ? TargetReference?.value : TargetReference} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="SetReference" id={typeof SetReference === "object" && "id" in SetReference ? SetReference?.id : undefined} value={typeof SetReference === "object" && "value" in SetReference ? SetReference?.value : SetReference} /* default: null */  />
        </Component>
      );
    };
    