import { member, Member, Component } from "../../../core";
    
    export interface BooleanReferenceDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
State?: member<boolean>;
TargetReference?: member<any>;
falseTarget?: member<any>;
trueTarget?: member<any>;
    }
    
    export function BooleanReferenceDriver_T(props: BooleanReferenceDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
State,
TargetReference,
falseTarget,
trueTarget, } = props;
    
      return (
        <Component type={`FrooxEngine.BooleanReferenceDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="State" id={typeof State === "object" && "id" in State ? State?.id : undefined} value={typeof State === "object" && "value" in State ? State?.value : State} /* default: null */  />
<Member type={`FrooxEngine.RefDrive\`1[${T}]`} name="TargetReference" id={typeof TargetReference === "object" && "id" in TargetReference ? TargetReference?.id : undefined} value={typeof TargetReference === "object" && "value" in TargetReference ? TargetReference?.value : TargetReference} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="falseTarget" id={typeof falseTarget === "object" && "id" in falseTarget ? falseTarget?.id : undefined} value={typeof falseTarget === "object" && "value" in falseTarget ? falseTarget?.value : falseTarget} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="trueTarget" id={typeof trueTarget === "object" && "id" in trueTarget ? trueTarget?.id : undefined} value={typeof trueTarget === "object" && "value" in trueTarget ? trueTarget?.value : trueTarget} /* default: null */  />
        </Component>
      );
    };
    