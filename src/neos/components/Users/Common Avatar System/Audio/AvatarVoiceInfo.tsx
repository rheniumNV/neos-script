import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarVoiceInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AudioSource?: member<any>;
    }
    
    export function AvatarVoiceInfo(props: AvatarVoiceInfoInput){
      const { id, persistentId, updateOrder, Enabled,
AudioSource, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarVoiceInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAudioSource]`} name="AudioSource" id={typeof AudioSource === "object" && "id" in AudioSource ? AudioSource?.id : undefined} value={typeof AudioSource === "object" && "value" in AudioSource ? AudioSource?.value : AudioSource} /* default: ID0 */  />
        </Component>
      );
    };
    