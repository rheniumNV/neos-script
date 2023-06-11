import { member, Member, Component } from "../../../core";
    
    export interface ButtonPlaybackActionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Playback?: member<any>;
OnHover?: member<any>;
OnLeave?: member<any>;
OnPress?: member<any>;
OnRelease?: member<any>;
    }
    
    export function ButtonPlaybackAction(props: ButtonPlaybackActionInput){
      const { id, persistentId, updateOrder, Enabled,
Playback,
OnHover,
OnLeave,
OnPress,
OnRelease, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonPlaybackAction" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`} name="Playback" id={typeof Playback === "object" && "id" in Playback ? Playback?.id : undefined} value={typeof Playback === "object" && "value" in Playback ? Playback?.value : Playback} /* default: ID0 */  isRaw={typeof Playback === "object" && "isRaw" in Playback && Playback.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PlaybackAction]`} name="OnHover" id={typeof OnHover === "object" && "id" in OnHover ? OnHover?.id : undefined} value={typeof OnHover === "object" && "value" in OnHover ? OnHover?.value : OnHover} /* default: None */  isRaw={typeof OnHover === "object" && "isRaw" in OnHover && OnHover.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PlaybackAction]`} name="OnLeave" id={typeof OnLeave === "object" && "id" in OnLeave ? OnLeave?.id : undefined} value={typeof OnLeave === "object" && "value" in OnLeave ? OnLeave?.value : OnLeave} /* default: None */  isRaw={typeof OnLeave === "object" && "isRaw" in OnLeave && OnLeave.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PlaybackAction]`} name="OnPress" id={typeof OnPress === "object" && "id" in OnPress ? OnPress?.id : undefined} value={typeof OnPress === "object" && "value" in OnPress ? OnPress?.value : OnPress} /* default: None */  isRaw={typeof OnPress === "object" && "isRaw" in OnPress && OnPress.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PlaybackAction]`} name="OnRelease" id={typeof OnRelease === "object" && "id" in OnRelease ? OnRelease?.id : undefined} value={typeof OnRelease === "object" && "value" in OnRelease ? OnRelease?.value : OnRelease} /* default: None */  isRaw={typeof OnRelease === "object" && "isRaw" in OnRelease && OnRelease.isRaw ? true : undefined} />
        </Component>
      );
    };
    