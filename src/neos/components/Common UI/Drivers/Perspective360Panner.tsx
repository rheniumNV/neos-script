import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface Perspective360PannerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
IdleFOV?: member<number>;
HoverFOV?: member<number>;
FOVSpeed?: member<number>;
HorizontalPanningAcceleration?: member<number>;
HorizontalPanningSpeed?: member<number>;
VerticalPanningSpeed?: member<number>;
VerticalRange?: member<number>;
AngleOffset?: member<[number, number]>;
FOV?: member<[number, number]>;
    }
    
    export function Perspective360Panner(props: Perspective360PannerInput){
      const { id, persistentId, updateOrder, Enabled,
IdleFOV,
HoverFOV,
FOVSpeed,
HorizontalPanningAcceleration,
HorizontalPanningSpeed,
VerticalPanningSpeed,
VerticalRange,
AngleOffset,
FOV, } = props;
    
      return (
        <Component type="FrooxEngine.Perspective360Panner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="IdleFOV" id={typeof IdleFOV === "object" && "id" in IdleFOV ? IdleFOV?.id : undefined} value={typeof IdleFOV === "object" && "value" in IdleFOV ? IdleFOV?.value : IdleFOV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HoverFOV" id={typeof HoverFOV === "object" && "id" in HoverFOV ? HoverFOV?.id : undefined} value={typeof HoverFOV === "object" && "value" in HoverFOV ? HoverFOV?.value : HoverFOV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FOVSpeed" id={typeof FOVSpeed === "object" && "id" in FOVSpeed ? FOVSpeed?.id : undefined} value={typeof FOVSpeed === "object" && "value" in FOVSpeed ? FOVSpeed?.value : FOVSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HorizontalPanningAcceleration" id={typeof HorizontalPanningAcceleration === "object" && "id" in HorizontalPanningAcceleration ? HorizontalPanningAcceleration?.id : undefined} value={typeof HorizontalPanningAcceleration === "object" && "value" in HorizontalPanningAcceleration ? HorizontalPanningAcceleration?.value : HorizontalPanningAcceleration} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HorizontalPanningSpeed" id={typeof HorizontalPanningSpeed === "object" && "id" in HorizontalPanningSpeed ? HorizontalPanningSpeed?.id : undefined} value={typeof HorizontalPanningSpeed === "object" && "value" in HorizontalPanningSpeed ? HorizontalPanningSpeed?.value : HorizontalPanningSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VerticalPanningSpeed" id={typeof VerticalPanningSpeed === "object" && "id" in VerticalPanningSpeed ? VerticalPanningSpeed?.id : undefined} value={typeof VerticalPanningSpeed === "object" && "value" in VerticalPanningSpeed ? VerticalPanningSpeed?.value : VerticalPanningSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VerticalRange" id={typeof VerticalRange === "object" && "id" in VerticalRange ? VerticalRange?.id : undefined} value={typeof VerticalRange === "object" && "value" in VerticalRange ? VerticalRange?.value : VerticalRange} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AngleOffset" id={typeof AngleOffset === "object" && "id" in AngleOffset ? AngleOffset?.id : undefined} value={typeof AngleOffset === "object" && "value" in AngleOffset ? AngleOffset?.value : AngleOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FOV" id={typeof FOV === "object" && "id" in FOV ? FOV?.id : undefined} value={typeof FOV === "object" && "value" in FOV ? FOV?.value : FOV} /* default: [0; 0] */  />
        </Component>
      );
    };
    