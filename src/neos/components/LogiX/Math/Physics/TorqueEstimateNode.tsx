import { member, Member, Component } from "../../../../core";
    
    export interface TorqueEstimateNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
InitialTorque?: member<any>;
Drag?: member<any>;
Time?: member<any>;
    }
    
    export function TorqueEstimateNode(props: TorqueEstimateNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
InitialTorque,
Drag,
Time, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.TorqueEstimateNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="InitialTorque" id={typeof InitialTorque === "object" && "id" in InitialTorque ? InitialTorque?.id : undefined} value={typeof InitialTorque === "object" && "value" in InitialTorque ? InitialTorque?.value : InitialTorque} /* default: ID0 */  isRaw={typeof InitialTorque === "object" && "isRaw" in InitialTorque && InitialTorque.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Drag" id={typeof Drag === "object" && "id" in Drag ? Drag?.id : undefined} value={typeof Drag === "object" && "value" in Drag ? Drag?.value : Drag} /* default: ID0 */  isRaw={typeof Drag === "object" && "isRaw" in Drag && Drag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Time" id={typeof Time === "object" && "id" in Time ? Time?.id : undefined} value={typeof Time === "object" && "value" in Time ? Time?.value : Time} /* default: ID0 */  isRaw={typeof Time === "object" && "isRaw" in Time && Time.isRaw ? true : undefined} />
        </Component>
      );
    };
    