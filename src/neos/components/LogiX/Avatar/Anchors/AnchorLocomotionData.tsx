import { member, Member, Component } from "../../../../core";
    
    export interface AnchorLocomotionDataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Anchor?: member<any>;
LocomotionUpdate?: member<any>;
    }
    
    export function AnchorLocomotionData(props: AnchorLocomotionDataInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Anchor,
LocomotionUpdate, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Avatar.AnchorLocomotionData" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.CommonAvatar.AvatarAnchor]`} name="Anchor" id={typeof Anchor === "object" && "id" in Anchor ? Anchor?.id : undefined} value={typeof Anchor === "object" && "value" in Anchor ? Anchor?.value : Anchor} /* default: ID0 */  isRaw={typeof Anchor === "object" && "isRaw" in Anchor && Anchor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LocomotionUpdate" id={typeof LocomotionUpdate === "object" && "id" in LocomotionUpdate ? LocomotionUpdate?.id : undefined} value={typeof LocomotionUpdate === "object" && "value" in LocomotionUpdate ? LocomotionUpdate?.value : LocomotionUpdate} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof LocomotionUpdate === "object" && "isRaw" in LocomotionUpdate && LocomotionUpdate.isRaw ? true : undefined} />
        </Component>
      );
    };
    