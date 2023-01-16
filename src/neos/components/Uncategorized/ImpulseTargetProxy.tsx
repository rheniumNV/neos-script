import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ImpulseTargetProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ImpulseTarget?: member<any>;
    }
    
    export function ImpulseTargetProxy(props: ImpulseTargetProxyInput){
      const { id, persistentId, updateOrder, Enabled,
ImpulseTarget, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ImpulseTargetProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action]`} name="ImpulseTarget" id={typeof ImpulseTarget === "object" && "id" in ImpulseTarget ? ImpulseTarget?.id : undefined} value={typeof ImpulseTarget === "object" && "value" in ImpulseTarget ? ImpulseTarget?.value : ImpulseTarget} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    