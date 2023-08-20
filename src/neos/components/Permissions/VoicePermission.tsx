import { member, Member, Component } from "../../core";
    
    export interface VoicePermissionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MaxAllowedVoiceMode?: member<any>;
AllowChangeOtherUsers?: member<boolean>;
    }
    
    export function VoicePermission(props: VoicePermissionInput){
      const { id, persistentId, updateOrder, Enabled,
MaxAllowedVoiceMode,
AllowChangeOtherUsers, } = props;
    
      return (
        <Component type="FrooxEngine.VoicePermission" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VoiceMode]`} name="MaxAllowedVoiceMode" id={typeof MaxAllowedVoiceMode === "object" && "id" in MaxAllowedVoiceMode ? MaxAllowedVoiceMode?.id : undefined} value={typeof MaxAllowedVoiceMode === "object" && "value" in MaxAllowedVoiceMode ? MaxAllowedVoiceMode?.value : MaxAllowedVoiceMode} /* default: Mute */  isRaw={typeof MaxAllowedVoiceMode === "object" && "isRaw" in MaxAllowedVoiceMode && MaxAllowedVoiceMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowChangeOtherUsers" id={typeof AllowChangeOtherUsers === "object" && "id" in AllowChangeOtherUsers ? AllowChangeOtherUsers?.id : undefined} value={typeof AllowChangeOtherUsers === "object" && "value" in AllowChangeOtherUsers ? AllowChangeOtherUsers?.value : AllowChangeOtherUsers} /* default: false */  isRaw={typeof AllowChangeOtherUsers === "object" && "isRaw" in AllowChangeOtherUsers && AllowChangeOtherUsers.isRaw ? true : undefined} />
        </Component>
      );
    };
    