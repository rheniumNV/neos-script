import { member, Member, Component } from "../../core";
    
    export interface AudioTypeGroupVolumeSliderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Slider?: member<any>;
Group?: member<any>;
    }
    
    export function AudioTypeGroupVolumeSlider(props: AudioTypeGroupVolumeSliderInput){
      const { id, persistentId, updateOrder, Enabled,
Slider,
Group, } = props;
    
      return (
        <Component type="FrooxEngine.AudioTypeGroupVolumeSlider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.UIX.Slider\`1[System.Single]]`} name="Slider" id={typeof Slider === "object" && "id" in Slider ? Slider?.id : undefined} value={typeof Slider === "object" && "value" in Slider ? Slider?.value : Slider} /* default: ID0 */  isRaw={typeof Slider === "object" && "isRaw" in Slider && Slider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AudioTypeGroup]`} name="Group" id={typeof Group === "object" && "id" in Group ? Group?.id : undefined} value={typeof Group === "object" && "value" in Group ? Group?.value : Group} /* default: SoundEffect */  isRaw={typeof Group === "object" && "isRaw" in Group && Group.isRaw ? true : undefined} />
        </Component>
      );
    };
    