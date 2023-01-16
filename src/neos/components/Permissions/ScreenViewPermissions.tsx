import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ScreenViewPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ListMode?: member<any>;
ViewFilters?: member<any>;
    }
    
    export function ScreenViewPermissions(props: ScreenViewPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
ListMode,
ViewFilters, } = props;
    
      return (
        <Component type="FrooxEngine.ScreenViewPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ListFilterMode]`} name="ListMode" id={typeof ListMode === "object" && "id" in ListMode ? ListMode?.id : undefined} value={typeof ListMode === "object" && "value" in ListMode ? ListMode?.value : ListMode} /* default: Whitelist */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.ScreenViewPermissions+ViewTargettingFilter]`} name="ViewFilters" id={typeof ViewFilters === "object" && "id" in ViewFilters ? ViewFilters?.id : undefined} value={typeof ViewFilters === "object" && "value" in ViewFilters ? ViewFilters?.value : ViewFilters} /* default: FrooxEngine.SyncList`1[FrooxEngine.ScreenViewPermissions+ViewTargettingFilter] */  />
        </Component>
      );
    };
    