import { member, Member, Component } from "../../../../core";
    
    export interface IsGrabbableGrabbedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Grabbable?: member<any>;
    }
    
    export function IsGrabbableGrabbed(props: IsGrabbableGrabbedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Grabbable, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.IsGrabbableGrabbed" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IGrabbable]`} name="Grabbable" id={typeof Grabbable === "object" && "id" in Grabbable ? Grabbable?.id : undefined} value={typeof Grabbable === "object" && "value" in Grabbable ? Grabbable?.value : Grabbable} /* default: ID0 */  isRaw={typeof Grabbable === "object" && "isRaw" in Grabbable && Grabbable.isRaw ? true : undefined} />
        </Component>
      );
    };
    