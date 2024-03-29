import { member, Member, Component } from "../../../core";
    
    export interface TutorialItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Show?: member<boolean>;
HideAngle?: member<number>;
NormalMaterial?: member<any>;
_highlightMaterials?: member<any>;
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
_highlightMaterials,
_normalColor,
_hueOffset,
ShowLerp,
TextColor, } = props;
    
      return (
        <Component type="FrooxEngine.TutorialItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Show" id={typeof Show === "object" && "id" in Show ? Show?.id : undefined} value={typeof Show === "object" && "value" in Show ? Show?.value : Show} /* default: false */  isRaw={typeof Show === "object" && "isRaw" in Show && Show.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HideAngle" id={typeof HideAngle === "object" && "id" in HideAngle ? HideAngle?.id : undefined} value={typeof HideAngle === "object" && "value" in HideAngle ? HideAngle?.value : HideAngle} /* default: 0 */  isRaw={typeof HideAngle === "object" && "isRaw" in HideAngle && HideAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="NormalMaterial" id={typeof NormalMaterial === "object" && "id" in NormalMaterial ? NormalMaterial?.id : undefined} value={typeof NormalMaterial === "object" && "value" in NormalMaterial ? NormalMaterial?.value : NormalMaterial} /* default: ID0 */  isRaw={typeof NormalMaterial === "object" && "isRaw" in NormalMaterial && NormalMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.TutorialItem+HighlightMaterial]`} name="_highlightMaterials" id={typeof _highlightMaterials === "object" && "id" in _highlightMaterials ? _highlightMaterials?.id : undefined} value={typeof _highlightMaterials === "object" && "value" in _highlightMaterials ? _highlightMaterials?.value : _highlightMaterials} /* default: FrooxEngine.SyncList`1[FrooxEngine.TutorialItem+HighlightMaterial] */  isRaw={typeof _highlightMaterials === "object" && "isRaw" in _highlightMaterials && _highlightMaterials.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_normalColor" id={typeof _normalColor === "object" && "id" in _normalColor ? _normalColor?.id : undefined} value={typeof _normalColor === "object" && "value" in _normalColor ? _normalColor?.value : _normalColor} /* default: ID0 */  isRaw={typeof _normalColor === "object" && "isRaw" in _normalColor && _normalColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_hueOffset" id={typeof _hueOffset === "object" && "id" in _hueOffset ? _hueOffset?.id : undefined} value={typeof _hueOffset === "object" && "value" in _hueOffset ? _hueOffset?.value : _hueOffset} /* default: 0 */  isRaw={typeof _hueOffset === "object" && "isRaw" in _hueOffset && _hueOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="ShowLerp" id={typeof ShowLerp === "object" && "id" in ShowLerp ? ShowLerp?.id : undefined} value={typeof ShowLerp === "object" && "value" in ShowLerp ? ShowLerp?.value : ShowLerp} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof ShowLerp === "object" && "isRaw" in ShowLerp && ShowLerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.color]`} name="TextColor" id={typeof TextColor === "object" && "id" in TextColor ? TextColor?.id : undefined} value={typeof TextColor === "object" && "value" in TextColor ? TextColor?.value : TextColor} /* default: FrooxEngine.RawOutput`1[BaseX.color] */  isRaw={typeof TextColor === "object" && "isRaw" in TextColor && TextColor.isRaw ? true : undefined} />
        </Component>
      );
    };
    