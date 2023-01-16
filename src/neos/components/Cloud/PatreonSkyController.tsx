import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PatreonSkyControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
NormalizedStart?: member<number>;
NormalizedEnd?: member<number>;
NameSize?: member<number>;
PictureSize?: member<number>;
MaxAngle?: member<number>;
NameColor?: member<[number, number, number, number]>;
    }
    
    export function PatreonSkyController(props: PatreonSkyControllerInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
NormalizedStart,
NormalizedEnd,
NameSize,
PictureSize,
MaxAngle,
NameColor, } = props;
    
      return (
        <Component type="FrooxEngine.PatreonSkyController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedStart" id={typeof NormalizedStart === "object" && "id" in NormalizedStart ? NormalizedStart?.id : undefined} value={typeof NormalizedStart === "object" && "value" in NormalizedStart ? NormalizedStart?.value : NormalizedStart} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedEnd" id={typeof NormalizedEnd === "object" && "id" in NormalizedEnd ? NormalizedEnd?.id : undefined} value={typeof NormalizedEnd === "object" && "value" in NormalizedEnd ? NormalizedEnd?.value : NormalizedEnd} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NameSize" id={typeof NameSize === "object" && "id" in NameSize ? NameSize?.id : undefined} value={typeof NameSize === "object" && "value" in NameSize ? NameSize?.value : NameSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PictureSize" id={typeof PictureSize === "object" && "id" in PictureSize ? PictureSize?.id : undefined} value={typeof PictureSize === "object" && "value" in PictureSize ? PictureSize?.value : PictureSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxAngle" id={typeof MaxAngle === "object" && "id" in MaxAngle ? MaxAngle?.id : undefined} value={typeof MaxAngle === "object" && "value" in MaxAngle ? MaxAngle?.value : MaxAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NameColor" id={typeof NameColor === "object" && "id" in NameColor ? NameColor?.id : undefined} value={typeof NameColor === "object" && "value" in NameColor ? NameColor?.value : NameColor} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    