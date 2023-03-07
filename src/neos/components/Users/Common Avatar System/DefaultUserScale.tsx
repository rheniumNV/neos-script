import { member, Member, Component } from "../../../core";
    
    export interface DefaultUserScaleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SetOnEquip?: member<boolean>;
DefaultScale?: member<number>;
_activeUser?: member<any>;
    }
    
    export function DefaultUserScale(props: DefaultUserScaleInput){
      const { id, persistentId, updateOrder, Enabled,
SetOnEquip,
DefaultScale,
_activeUser, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.DefaultUserScale" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetOnEquip" id={typeof SetOnEquip === "object" && "id" in SetOnEquip ? SetOnEquip?.id : undefined} value={typeof SetOnEquip === "object" && "value" in SetOnEquip ? SetOnEquip?.value : SetOnEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DefaultScale" id={typeof DefaultScale === "object" && "id" in DefaultScale ? DefaultScale?.id : undefined} value={typeof DefaultScale === "object" && "value" in DefaultScale ? DefaultScale?.value : DefaultScale} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_activeUser" id={typeof _activeUser === "object" && "id" in _activeUser ? _activeUser?.id : undefined} value={typeof _activeUser === "object" && "value" in _activeUser ? _activeUser?.value : _activeUser} /* default: ID0 */  />
        </Component>
      );
    };
    