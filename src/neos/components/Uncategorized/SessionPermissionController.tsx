import { member, Member, Component } from "../../core";
    
    export interface SessionPermissionControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_name?: member<any>;
_rolesButtons?: member<any>;
    }
    
    export function SessionPermissionController(props: SessionPermissionControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_name,
_rolesButtons, } = props;
    
      return (
        <Component type="FrooxEngine.SessionPermissionController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_name" id={typeof _name === "object" && "id" in _name ? _name?.id : undefined} value={typeof _name === "object" && "value" in _name ? _name?.value : _name} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.UIX.Button]`} name="_rolesButtons" id={typeof _rolesButtons === "object" && "id" in _rolesButtons ? _rolesButtons?.id : undefined} value={typeof _rolesButtons === "object" && "value" in _rolesButtons ? _rolesButtons?.value : _rolesButtons} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.UIX.Button] */  />
        </Component>
      );
    };
    