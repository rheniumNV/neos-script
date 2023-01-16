import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DestroyProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DestroyTarget?: member<any>;
    }
    
    export function DestroyProxy(props: DestroyProxyInput){
      const { id, persistentId, updateOrder, Enabled,
DestroyTarget, } = props;
    
      return (
        <Component type="FrooxEngine.DestroyProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IDestroyable]`} name="DestroyTarget" id={typeof DestroyTarget === "object" && "id" in DestroyTarget ? DestroyTarget?.id : undefined} value={typeof DestroyTarget === "object" && "value" in DestroyTarget ? DestroyTarget?.value : DestroyTarget} /* default: ID0 */  />
        </Component>
      );
    };
    