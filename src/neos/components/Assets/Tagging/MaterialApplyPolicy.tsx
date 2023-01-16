import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface MaterialApplyPolicyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CanApply?: member<boolean>;
    }
    
    export function MaterialApplyPolicy(props: MaterialApplyPolicyInput){
      const { id, persistentId, updateOrder, Enabled,
CanApply, } = props;
    
      return (
        <Component type="FrooxEngine.MaterialApplyPolicy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CanApply" id={typeof CanApply === "object" && "id" in CanApply ? CanApply?.id : undefined} value={typeof CanApply === "object" && "value" in CanApply ? CanApply?.value : CanApply} /* default: false */  />
        </Component>
      );
    };
    