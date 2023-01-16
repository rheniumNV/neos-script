import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RecordEditFormInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_worldOrb?: member<any>;
_name?: member<any>;
_description?: member<any>;
_path?: member<any>;
_tags?: member<any>;
_publicSetting?: member<any>;
_ownerUser?: member<any>;
_privateOptionText?: member<any>;
    }
    
    export function RecordEditForm(props: RecordEditFormInput){
      const { id, persistentId, updateOrder, Enabled,
_worldOrb,
_name,
_description,
_path,
_tags,
_publicSetting,
_ownerUser,
_privateOptionText, } = props;
    
      return (
        <Component type="FrooxEngine.RecordEditForm" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldOrb]`} name="_worldOrb" id={typeof _worldOrb === "object" && "id" in _worldOrb ? _worldOrb?.id : undefined} value={typeof _worldOrb === "object" && "value" in _worldOrb ? _worldOrb?.value : _worldOrb} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_name" id={typeof _name === "object" && "id" in _name ? _name?.id : undefined} value={typeof _name === "object" && "value" in _name ? _name?.value : _name} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_description" id={typeof _description === "object" && "id" in _description ? _description?.id : undefined} value={typeof _description === "object" && "value" in _description ? _description?.value : _description} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_path" id={typeof _path === "object" && "id" in _path ? _path?.id : undefined} value={typeof _path === "object" && "value" in _path ? _path?.value : _path} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_tags" id={typeof _tags === "object" && "id" in _tags ? _tags?.id : undefined} value={typeof _tags === "object" && "value" in _tags ? _tags?.value : _tags} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.RecordEditForm+PublicSetting]`} name="_publicSetting" id={typeof _publicSetting === "object" && "id" in _publicSetting ? _publicSetting?.id : undefined} value={typeof _publicSetting === "object" && "value" in _publicSetting ? _publicSetting?.value : _publicSetting} /* default: OnlyMe */  />
<Member type={`FrooxEngine.UserRef`} name="_ownerUser" id={typeof _ownerUser === "object" && "id" in _ownerUser ? _ownerUser?.id : undefined} value={typeof _ownerUser === "object" && "value" in _ownerUser ? _ownerUser?.value : _ownerUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_privateOptionText" id={typeof _privateOptionText === "object" && "id" in _privateOptionText ? _privateOptionText?.id : undefined} value={typeof _privateOptionText === "object" && "value" in _privateOptionText ? _privateOptionText?.value : _privateOptionText} /* default: ID0 */  />
        </Component>
      );
    };
    