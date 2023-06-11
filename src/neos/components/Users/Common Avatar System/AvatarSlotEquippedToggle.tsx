import { member, Member, Component } from "../../../core";
    
    export interface AvatarSlotEquippedToggleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ObjectSlot?: member<any>;
EquippedDrive?: member<any>;
DequippedDrive?: member<any>;
    }
    
    export function AvatarSlotEquippedToggle(props: AvatarSlotEquippedToggleInput){
      const { id, persistentId, updateOrder, Enabled,
ObjectSlot,
EquippedDrive,
DequippedDrive, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarSlotEquippedToggle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.CommonAvatar.AvatarObjectSlot]`} name="ObjectSlot" id={typeof ObjectSlot === "object" && "id" in ObjectSlot ? ObjectSlot?.id : undefined} value={typeof ObjectSlot === "object" && "value" in ObjectSlot ? ObjectSlot?.value : ObjectSlot} /* default: ID0 */  isRaw={typeof ObjectSlot === "object" && "isRaw" in ObjectSlot && ObjectSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="EquippedDrive" id={typeof EquippedDrive === "object" && "id" in EquippedDrive ? EquippedDrive?.id : undefined} value={typeof EquippedDrive === "object" && "value" in EquippedDrive ? EquippedDrive?.value : EquippedDrive} /* default: ID0 */  isRaw={typeof EquippedDrive === "object" && "isRaw" in EquippedDrive && EquippedDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="DequippedDrive" id={typeof DequippedDrive === "object" && "id" in DequippedDrive ? DequippedDrive?.id : undefined} value={typeof DequippedDrive === "object" && "value" in DequippedDrive ? DequippedDrive?.value : DequippedDrive} /* default: ID0 */  isRaw={typeof DequippedDrive === "object" && "isRaw" in DequippedDrive && DequippedDrive.isRaw ? true : undefined} />
        </Component>
      );
    };
    