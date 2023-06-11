import { member, Member, Component } from "../../../core";
    
    export interface AvatarTrackingOffsetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Offset?: member<[number, number, number]>;
_user?: member<any>;
    }
    
    export function AvatarTrackingOffset(props: AvatarTrackingOffsetInput){
      const { id, persistentId, updateOrder, Enabled,
Offset,
_user, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarTrackingOffset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_user" id={typeof _user === "object" && "id" in _user ? _user?.id : undefined} value={typeof _user === "object" && "value" in _user ? _user?.value : _user} /* default: ID0 */  isRaw={typeof _user === "object" && "isRaw" in _user && _user.isRaw ? true : undefined} />
        </Component>
      );
    };
    