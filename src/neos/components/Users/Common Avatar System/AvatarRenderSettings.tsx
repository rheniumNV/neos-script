import { member, Member, Component } from "../../../core";
    
    export interface AvatarRenderSettingsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
NearClip?: member<any>;
FarClip?: member<any>;
    }
    
    export function AvatarRenderSettings(props: AvatarRenderSettingsInput){
      const { id, persistentId, updateOrder, Enabled,
NearClip,
FarClip, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarRenderSettings" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="NearClip" id={typeof NearClip === "object" && "id" in NearClip ? NearClip?.id : undefined} value={typeof NearClip === "object" && "value" in NearClip ? NearClip?.value : NearClip} /* default: <i>null</i> */  isRaw={typeof NearClip === "object" && "isRaw" in NearClip && NearClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="FarClip" id={typeof FarClip === "object" && "id" in FarClip ? FarClip?.id : undefined} value={typeof FarClip === "object" && "value" in FarClip ? FarClip?.value : FarClip} /* default: <i>null</i> */  isRaw={typeof FarClip === "object" && "isRaw" in FarClip && FarClip.isRaw ? true : undefined} />
        </Component>
      );
    };
    