import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GrabbablePermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Tags?: member<any>;
ValidateTypeListMode?: member<any>;
    }
    
    export function GrabbablePermissions(props: GrabbablePermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
Tags,
ValidateTypeListMode, } = props;
    
      return (
        <Component type="FrooxEngine.GrabbablePermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.TagFilter`} name="Tags" id={typeof Tags === "object" && "id" in Tags ? Tags?.id : undefined} value={typeof Tags === "object" && "value" in Tags ? Tags?.value : Tags} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TagFilter,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ListFilterMode]`} name="ValidateTypeListMode" id={typeof ValidateTypeListMode === "object" && "id" in ValidateTypeListMode ? ValidateTypeListMode?.id : undefined} value={typeof ValidateTypeListMode === "object" && "value" in ValidateTypeListMode ? ValidateTypeListMode?.value : ValidateTypeListMode} /* default: Whitelist */  />
        </Component>
      );
    };
    