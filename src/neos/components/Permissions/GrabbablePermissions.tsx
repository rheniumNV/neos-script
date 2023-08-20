import { member, Member, Component } from "../../core";
    
    export interface GrabbablePermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Tags?: member<any>;
ValidateTypeListMode?: member<any>;
ValidateTypes?: member<any>;
    }
    
    export function GrabbablePermissions(props: GrabbablePermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
Tags,
ValidateTypeListMode,
ValidateTypes, } = props;
    
      return (
        <Component type="FrooxEngine.GrabbablePermissions" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TagFilter`} name="Tags" id={typeof Tags === "object" && "id" in Tags ? Tags?.id : undefined} value={typeof Tags === "object" && "value" in Tags ? Tags?.value : Tags} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TagFilter,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Tags === "object" && "isRaw" in Tags && Tags.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ListFilterMode]`} name="ValidateTypeListMode" id={typeof ValidateTypeListMode === "object" && "id" in ValidateTypeListMode ? ValidateTypeListMode?.id : undefined} value={typeof ValidateTypeListMode === "object" && "value" in ValidateTypeListMode ? ValidateTypeListMode?.value : ValidateTypeListMode} /* default: Whitelist */  isRaw={typeof ValidateTypeListMode === "object" && "isRaw" in ValidateTypeListMode && ValidateTypeListMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncTypeList`} name="ValidateTypes" id={typeof ValidateTypes === "object" && "id" in ValidateTypes ? ValidateTypes?.id : undefined} value={typeof ValidateTypes === "object" && "value" in ValidateTypes ? ValidateTypes?.value : ValidateTypes} /* default: FrooxEngine.SyncTypeList */  isRaw={typeof ValidateTypes === "object" && "isRaw" in ValidateTypes && ValidateTypes.isRaw ? true : undefined} />
        </Component>
      );
    };
    