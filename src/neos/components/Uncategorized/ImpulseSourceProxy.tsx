import { member, Member, Component } from "../../core";
    
    export interface ImpulseSourceProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ImpulseSource?: member<any>;
    }
    
    export function ImpulseSourceProxy(props: ImpulseSourceProxyInput){
      const { id, persistentId, updateOrder, Enabled,
ImpulseSource, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ImpulseSourceProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LogiX.Impulse]`} name="ImpulseSource" id={typeof ImpulseSource === "object" && "id" in ImpulseSource ? ImpulseSource?.id : undefined} value={typeof ImpulseSource === "object" && "value" in ImpulseSource ? ImpulseSource?.value : ImpulseSource} /* default: ID0 */  />
        </Component>
      );
    };
    