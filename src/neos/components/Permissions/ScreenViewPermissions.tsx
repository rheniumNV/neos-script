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
    }
    
    export function ScreenViewPermissions(props: ScreenViewPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
ListMode, } = props;
    
      return (
        <Component type="FrooxEngine.ScreenViewPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ListFilterMode]`} name="ListMode" id={typeof ListMode === "object" && "id" in ListMode ? ListMode?.id : undefined} value={typeof ListMode === "object" && "value" in ListMode ? ListMode?.value : ListMode} /* default: Whitelist */  />
        </Component>
      );
    };
    