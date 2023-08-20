import { member, Member, Component } from "../../core";
    
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action]`} name="ImpulseTarget" id={typeof ImpulseTarget === "object" && "id" in ImpulseTarget ? ImpulseTarget?.id : undefined} value={typeof ImpulseTarget === "object" && "value" in ImpulseTarget ? ImpulseTarget?.value : ImpulseTarget} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof ImpulseTarget === "object" && "isRaw" in ImpulseTarget && ImpulseTarget.isRaw ? true : undefined} />
        </Component>
      );
    };
    