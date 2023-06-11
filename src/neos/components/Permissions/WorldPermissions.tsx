import { member, Member, Component } from "../../core";
    
    export interface WorldPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AllowSavingItems?: member<boolean>;
AllowTransferingObjectsOut?: member<boolean>;
AllowSpawningObjects?: member<boolean>;
AllowSwappingAvatars?: member<boolean>;
SaveCopyPermission?: member<any>;
    }
    
    export function WorldPermissions(props: WorldPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
AllowSavingItems,
AllowTransferingObjectsOut,
AllowSpawningObjects,
AllowSwappingAvatars,
SaveCopyPermission, } = props;
    
      return (
        <Component type="FrooxEngine.WorldPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSavingItems" id={typeof AllowSavingItems === "object" && "id" in AllowSavingItems ? AllowSavingItems?.id : undefined} value={typeof AllowSavingItems === "object" && "value" in AllowSavingItems ? AllowSavingItems?.value : AllowSavingItems} /* default: false */  isRaw={typeof AllowSavingItems === "object" && "isRaw" in AllowSavingItems && AllowSavingItems.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowTransferingObjectsOut" id={typeof AllowTransferingObjectsOut === "object" && "id" in AllowTransferingObjectsOut ? AllowTransferingObjectsOut?.id : undefined} value={typeof AllowTransferingObjectsOut === "object" && "value" in AllowTransferingObjectsOut ? AllowTransferingObjectsOut?.value : AllowTransferingObjectsOut} /* default: false */  isRaw={typeof AllowTransferingObjectsOut === "object" && "isRaw" in AllowTransferingObjectsOut && AllowTransferingObjectsOut.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSpawningObjects" id={typeof AllowSpawningObjects === "object" && "id" in AllowSpawningObjects ? AllowSpawningObjects?.id : undefined} value={typeof AllowSpawningObjects === "object" && "value" in AllowSpawningObjects ? AllowSpawningObjects?.value : AllowSpawningObjects} /* default: false */  isRaw={typeof AllowSpawningObjects === "object" && "isRaw" in AllowSpawningObjects && AllowSpawningObjects.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSwappingAvatars" id={typeof AllowSwappingAvatars === "object" && "id" in AllowSwappingAvatars ? AllowSwappingAvatars?.id : undefined} value={typeof AllowSwappingAvatars === "object" && "value" in AllowSwappingAvatars ? AllowSwappingAvatars?.value : AllowSwappingAvatars} /* default: false */  isRaw={typeof AllowSwappingAvatars === "object" && "isRaw" in AllowSwappingAvatars && AllowSwappingAvatars.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.WorldPermissions+SavePermission]`} name="SaveCopyPermission" id={typeof SaveCopyPermission === "object" && "id" in SaveCopyPermission ? SaveCopyPermission?.id : undefined} value={typeof SaveCopyPermission === "object" && "value" in SaveCopyPermission ? SaveCopyPermission?.value : SaveCopyPermission} /* default: OnlyOwners */  isRaw={typeof SaveCopyPermission === "object" && "isRaw" in SaveCopyPermission && SaveCopyPermission.isRaw ? true : undefined} />
        </Component>
      );
    };
    