import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VoiceModeSyncInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FocusedWorldVoiceMode?: member<any>;
GlobalMute?: member<boolean>;
FocusedWorldMaxAllowedVoiceMode?: member<any>;
BroadcastAllowed?: member<any>;
ShoutAllowed?: member<any>;
NormalAllowed?: member<any>;
WhisperAllowed?: member<any>;
    }
    
    export function VoiceModeSync(props: VoiceModeSyncInput){
      const { id, persistentId, updateOrder, Enabled,
FocusedWorldVoiceMode,
GlobalMute,
FocusedWorldMaxAllowedVoiceMode,
BroadcastAllowed,
ShoutAllowed,
NormalAllowed,
WhisperAllowed, } = props;
    
      return (
        <Component type="FrooxEngine.VoiceModeSync" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VoiceMode]`} name="FocusedWorldVoiceMode" id={typeof FocusedWorldVoiceMode === "object" && "id" in FocusedWorldVoiceMode ? FocusedWorldVoiceMode?.id : undefined} value={typeof FocusedWorldVoiceMode === "object" && "value" in FocusedWorldVoiceMode ? FocusedWorldVoiceMode?.value : FocusedWorldVoiceMode} /* default: Mute */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="GlobalMute" id={typeof GlobalMute === "object" && "id" in GlobalMute ? GlobalMute?.id : undefined} value={typeof GlobalMute === "object" && "value" in GlobalMute ? GlobalMute?.value : GlobalMute} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[FrooxEngine.VoiceMode]`} name="FocusedWorldMaxAllowedVoiceMode" id={typeof FocusedWorldMaxAllowedVoiceMode === "object" && "id" in FocusedWorldMaxAllowedVoiceMode ? FocusedWorldMaxAllowedVoiceMode?.id : undefined} value={typeof FocusedWorldMaxAllowedVoiceMode === "object" && "value" in FocusedWorldMaxAllowedVoiceMode ? FocusedWorldMaxAllowedVoiceMode?.value : FocusedWorldMaxAllowedVoiceMode} /* default: FrooxEngine.RawOutput`1[FrooxEngine.VoiceMode] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="BroadcastAllowed" id={typeof BroadcastAllowed === "object" && "id" in BroadcastAllowed ? BroadcastAllowed?.id : undefined} value={typeof BroadcastAllowed === "object" && "value" in BroadcastAllowed ? BroadcastAllowed?.value : BroadcastAllowed} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="ShoutAllowed" id={typeof ShoutAllowed === "object" && "id" in ShoutAllowed ? ShoutAllowed?.id : undefined} value={typeof ShoutAllowed === "object" && "value" in ShoutAllowed ? ShoutAllowed?.value : ShoutAllowed} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="NormalAllowed" id={typeof NormalAllowed === "object" && "id" in NormalAllowed ? NormalAllowed?.id : undefined} value={typeof NormalAllowed === "object" && "value" in NormalAllowed ? NormalAllowed?.value : NormalAllowed} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="WhisperAllowed" id={typeof WhisperAllowed === "object" && "id" in WhisperAllowed ? WhisperAllowed?.id : undefined} value={typeof WhisperAllowed === "object" && "value" in WhisperAllowed ? WhisperAllowed?.value : WhisperAllowed} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
        </Component>
      );
    };
    