import { member, Member, Component } from "../../core";
    
    export interface SimpleLocalUserProfileInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_profileImage?: member<any>;
_username?: member<any>;
_loginLogout?: member<any>;
    }
    
    export function SimpleLocalUserProfile(props: SimpleLocalUserProfileInput){
      const { id, persistentId, updateOrder, Enabled,
_profileImage,
_username,
_loginLogout, } = props;
    
      return (
        <Component type="FrooxEngine.SimpleLocalUserProfile" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_profileImage" id={typeof _profileImage === "object" && "id" in _profileImage ? _profileImage?.id : undefined} value={typeof _profileImage === "object" && "value" in _profileImage ? _profileImage?.value : _profileImage} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_username" id={typeof _username === "object" && "id" in _username ? _username?.id : undefined} value={typeof _username === "object" && "value" in _username ? _username?.value : _username} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_loginLogout" id={typeof _loginLogout === "object" && "id" in _loginLogout ? _loginLogout?.id : undefined} value={typeof _loginLogout === "object" && "value" in _loginLogout ? _loginLogout?.value : _loginLogout} /* default: ID0 */  />
        </Component>
      );
    };
    