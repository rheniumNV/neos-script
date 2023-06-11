import { member, Member, Component } from "../../../../core";
    
    export interface AvatarAudioConfigurationInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Normal?: member<any>;
Shout?: member<any>;
Broadcast?: member<any>;
    }
    
    export function AvatarAudioConfiguration(props: AvatarAudioConfigurationInput){
      const { id, persistentId, updateOrder, Enabled,
Normal,
Shout,
Broadcast, } = props;
    
      return (
        <Component type="FrooxEngine.AvatarAudioConfiguration" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.VoiceModeConfig`} name="Normal" id={typeof Normal === "object" && "id" in Normal ? Normal?.id : undefined} value={typeof Normal === "object" && "value" in Normal ? Normal?.value : Normal} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.VoiceModeConfig,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Normal === "object" && "isRaw" in Normal && Normal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.VoiceModeConfig`} name="Shout" id={typeof Shout === "object" && "id" in Shout ? Shout?.id : undefined} value={typeof Shout === "object" && "value" in Shout ? Shout?.value : Shout} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.VoiceModeConfig,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Shout === "object" && "isRaw" in Shout && Shout.isRaw ? true : undefined} />
<Member type={`FrooxEngine.VoiceModeConfig`} name="Broadcast" id={typeof Broadcast === "object" && "id" in Broadcast ? Broadcast?.id : undefined} value={typeof Broadcast === "object" && "value" in Broadcast ? Broadcast?.value : Broadcast} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.VoiceModeConfig,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Broadcast === "object" && "isRaw" in Broadcast && Broadcast.isRaw ? true : undefined} />
        </Component>
      );
    };
    