import { member, Member, Component } from "../../core";
    
    export interface TalkVisualizerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Input?: member<any>;
BaseColor?: member<[number, number, number, number]>;
MaterialColor?: member<any>;
LightIntensity?: member<any>;
    }
    
    export function TalkVisualizer(props: TalkVisualizerInput){
      const { id, persistentId, updateOrder, Enabled,
Input,
BaseColor,
MaterialColor,
LightIntensity, } = props;
    
      return (
        <Component type="FrooxEngine.TalkVisualizer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RawOutput\`1[System.Single]]`} name="Input" id={typeof Input === "object" && "id" in Input ? Input?.id : undefined} value={typeof Input === "object" && "value" in Input ? Input?.value : Input} /* default: ID0 */  isRaw={typeof Input === "object" && "isRaw" in Input && Input.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BaseColor" id={typeof BaseColor === "object" && "id" in BaseColor ? BaseColor?.id : undefined} value={typeof BaseColor === "object" && "value" in BaseColor ? BaseColor?.value : BaseColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BaseColor === "object" && "isRaw" in BaseColor && BaseColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.color]]`} name="MaterialColor" id={typeof MaterialColor === "object" && "id" in MaterialColor ? MaterialColor?.id : undefined} value={typeof MaterialColor === "object" && "value" in MaterialColor ? MaterialColor?.value : MaterialColor} /* default: ID0 */  isRaw={typeof MaterialColor === "object" && "isRaw" in MaterialColor && MaterialColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[System.Single]]`} name="LightIntensity" id={typeof LightIntensity === "object" && "id" in LightIntensity ? LightIntensity?.id : undefined} value={typeof LightIntensity === "object" && "value" in LightIntensity ? LightIntensity?.value : LightIntensity} /* default: ID0 */  isRaw={typeof LightIntensity === "object" && "isRaw" in LightIntensity && LightIntensity.isRaw ? true : undefined} />
        </Component>
      );
    };
    