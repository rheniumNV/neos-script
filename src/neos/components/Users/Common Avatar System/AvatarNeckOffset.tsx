import { member, Member, Component } from "../../../core";
    
    export interface AvatarNeckOffsetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Priority?: member<number>;
Offset?: member<[number, number, number]>;
_activeUser?: member<any>;
    }
    
    export function AvatarNeckOffset(props: AvatarNeckOffsetInput){
      const { id, persistentId, updateOrder, Enabled,
Priority,
Offset,
_activeUser, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarNeckOffset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: 0 */  isRaw={typeof Priority === "object" && "isRaw" in Priority && Priority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_activeUser-ID" id={typeof _activeUser === "object" && "id" in _activeUser ? _activeUser?.id : undefined} value={typeof _activeUser === "object" && "value" in _activeUser ? _activeUser?.value : _activeUser} /* default: ID0 */ readOnly isRaw={typeof _activeUser === "object" && "isRaw" in _activeUser && _activeUser.isRaw ? true : undefined} />
        </Component>
      );
    };
    