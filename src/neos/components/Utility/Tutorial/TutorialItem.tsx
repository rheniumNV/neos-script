import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TutorialItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Show?: member<boolean>;
HideAngle?: member<number>;
NormalMaterial?: member<any>;
_normalColor?: member<any>;
_hueOffset?: member<number>;
ShowLerp?: member<any>;
TextColor?: member<any>;
    }
    
    export function TutorialItem(props: TutorialItemInput){
      const { id, persistentId, updateOrder, Enabled,
Show,
HideAngle,
NormalMaterial,
_normalColor,
_hueOffset,
ShowLerp,
TextColor, } = props;
    
      return (
        <Component type="FrooxEngine.TutorialItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Show" id={typeof Show === "object" && "id" in Show ? Show?.id : undefined} value={typeof Show === "object" && "value" in Show ? Show?.value : Show} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HideAngle" id={typeof HideAngle === "object" && "id" in HideAngle ? HideAngle?.id : undefined} value={typeof HideAngle === "object" && "value" in HideAngle ? HideAngle?.value : HideAngle} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="NormalMaterial" id={typeof NormalMaterial === "object" && "id" in NormalMaterial ? NormalMaterial?.id : undefined} value={typeof NormalMaterial === "object" && "value" in NormalMaterial ? NormalMaterial?.value : NormalMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_normalColor" id={typeof _normalColor === "object" && "id" in _normalColor ? _normalColor?.id : undefined} value={typeof _normalColor === "object" && "value" in _normalColor ? _normalColor?.value : _normalColor} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_hueOffset" id={typeof _hueOffset === "object" && "id" in _hueOffset ? _hueOffset?.id : undefined} value={typeof _hueOffset === "object" && "value" in _hueOffset ? _hueOffset?.value : _hueOffset} /* default: 0 */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="ShowLerp" id={typeof ShowLerp === "object" && "id" in ShowLerp ? ShowLerp?.id : undefined} value={typeof ShowLerp === "object" && "value" in ShowLerp ? ShowLerp?.value : ShowLerp} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.color]`} name="TextColor" id={typeof TextColor === "object" && "id" in TextColor ? TextColor?.id : undefined} value={typeof TextColor === "object" && "value" in TextColor ? TextColor?.value : TextColor} /* default: FrooxEngine.RawOutput`1[BaseX.color] */  />
        </Component>
      );
    };
    