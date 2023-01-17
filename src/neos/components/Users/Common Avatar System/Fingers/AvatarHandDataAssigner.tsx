import { member, Member, Component } from "../../../../core";
    
    export interface AvatarHandDataAssignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetReference?: member<any>;
TouchSource?: member<any>;
VibrationRelay?: member<any>;
Chirality?: member<any>;
_equippingSlot?: member<any>;
    }
    
    export function AvatarHandDataAssigner(props: AvatarHandDataAssignerInput){
      const { id, persistentId, updateOrder, Enabled,
TargetReference,
TouchSource,
VibrationRelay,
Chirality,
_equippingSlot, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarHandDataAssigner" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncRef\`1[FrooxEngine.IFingerPoseSource]]`} name="TargetReference" id={typeof TargetReference === "object" && "id" in TargetReference ? TargetReference?.id : undefined} value={typeof TargetReference === "object" && "value" in TargetReference ? TargetReference?.value : TargetReference} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TipTouchSource]`} name="TouchSource" id={typeof TouchSource === "object" && "id" in TouchSource ? TouchSource?.id : undefined} value={typeof TouchSource === "object" && "value" in TouchSource ? TouchSource?.value : TouchSource} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VibrationDeviceRelay]`} name="VibrationRelay" id={typeof VibrationRelay === "object" && "id" in VibrationRelay ? VibrationRelay?.id : undefined} value={typeof VibrationRelay === "object" && "value" in VibrationRelay ? VibrationRelay?.value : VibrationRelay} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="Chirality" id={typeof Chirality === "object" && "id" in Chirality ? Chirality?.id : undefined} value={typeof Chirality === "object" && "value" in Chirality ? Chirality?.value : Chirality} /* default: Left */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarObjectSlot]`} name="_equippingSlot-ID" id={typeof _equippingSlot === "object" && "id" in _equippingSlot ? _equippingSlot?.id : undefined} value={typeof _equippingSlot === "object" && "value" in _equippingSlot ? _equippingSlot?.value : _equippingSlot} /* default: ID0 */ idOnly />
        </Component>
      );
    };
    