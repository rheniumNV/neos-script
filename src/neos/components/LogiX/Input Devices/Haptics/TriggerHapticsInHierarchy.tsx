import { member, Member, Component } from "../../../../core";
    
    export interface TriggerHapticsInHierarchyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
TargetHierarchy?: member<any>;
RelativeIntensity?: member<any>;
OnTriggered?: member<any>;
    }
    
    export function TriggerHapticsInHierarchy(props: TriggerHapticsInHierarchyInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
TargetHierarchy,
RelativeIntensity,
OnTriggered, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.TriggerHapticsInHierarchy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="TargetHierarchy" id={typeof TargetHierarchy === "object" && "id" in TargetHierarchy ? TargetHierarchy?.id : undefined} value={typeof TargetHierarchy === "object" && "value" in TargetHierarchy ? TargetHierarchy?.value : TargetHierarchy} /* default: ID0 */  isRaw={typeof TargetHierarchy === "object" && "isRaw" in TargetHierarchy && TargetHierarchy.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="RelativeIntensity" id={typeof RelativeIntensity === "object" && "id" in RelativeIntensity ? RelativeIntensity?.id : undefined} value={typeof RelativeIntensity === "object" && "value" in RelativeIntensity ? RelativeIntensity?.value : RelativeIntensity} /* default: ID0 */  isRaw={typeof RelativeIntensity === "object" && "isRaw" in RelativeIntensity && RelativeIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnTriggered" id={typeof OnTriggered === "object" && "id" in OnTriggered ? OnTriggered?.id : undefined} value={typeof OnTriggered === "object" && "value" in OnTriggered ? OnTriggered?.value : OnTriggered} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnTriggered === "object" && "isRaw" in OnTriggered && OnTriggered.isRaw ? true : undefined} />
        </Component>
      );
    };
    