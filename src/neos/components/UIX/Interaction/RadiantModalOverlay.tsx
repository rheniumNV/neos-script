import { member, Member, Component } from "../../../core";
    
    export interface RadiantModalOverlayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ShowLerp?: member<number>;
AnimationTime?: member<number>;
SizeRoot?: member<any>;
ContentRoot?: member<any>;
CloseOnContextMenuAction?: member<boolean>;
BlurSpread?: member<number>;
BackgroundColor?: member<[number, number, number, number]>;
ContentAnimationScaleOffset?: member<number>;
Padding?: member<number>;
_blur?: member<any>;
_blurGraphic?: member<any>;
_blurSpread?: member<any>;
_backgroundColor?: member<any>;
_maskRect?: member<any>;
_overlayAnchorMin?: member<any>;
_overlayAnchorMax?: member<any>;
_contentOffsetMin?: member<any>;
_contentOffsetMax?: member<any>;
    }
    
    export function RadiantModalOverlay(props: RadiantModalOverlayInput){
      const { id, persistentId, updateOrder, Enabled,
ShowLerp,
AnimationTime,
SizeRoot,
ContentRoot,
CloseOnContextMenuAction,
BlurSpread,
BackgroundColor,
ContentAnimationScaleOffset,
Padding,
_blur,
_blurGraphic,
_blurSpread,
_backgroundColor,
_maskRect,
_overlayAnchorMin,
_overlayAnchorMax,
_contentOffsetMin,
_contentOffsetMax, } = props;
    
      return (
        <Component type="FrooxEngine.RadiantModalOverlay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShowLerp" id={typeof ShowLerp === "object" && "id" in ShowLerp ? ShowLerp?.id : undefined} value={typeof ShowLerp === "object" && "value" in ShowLerp ? ShowLerp?.value : ShowLerp} /* default: 0 */  isRaw={typeof ShowLerp === "object" && "isRaw" in ShowLerp && ShowLerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnimationTime" id={typeof AnimationTime === "object" && "id" in AnimationTime ? AnimationTime?.id : undefined} value={typeof AnimationTime === "object" && "value" in AnimationTime ? AnimationTime?.value : AnimationTime} /* default: 0 */  isRaw={typeof AnimationTime === "object" && "isRaw" in AnimationTime && AnimationTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="SizeRoot" id={typeof SizeRoot === "object" && "id" in SizeRoot ? SizeRoot?.id : undefined} value={typeof SizeRoot === "object" && "value" in SizeRoot ? SizeRoot?.value : SizeRoot} /* default: ID0 */  isRaw={typeof SizeRoot === "object" && "isRaw" in SizeRoot && SizeRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="ContentRoot" id={typeof ContentRoot === "object" && "id" in ContentRoot ? ContentRoot?.id : undefined} value={typeof ContentRoot === "object" && "value" in ContentRoot ? ContentRoot?.value : ContentRoot} /* default: ID0 */  isRaw={typeof ContentRoot === "object" && "isRaw" in ContentRoot && ContentRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CloseOnContextMenuAction" id={typeof CloseOnContextMenuAction === "object" && "id" in CloseOnContextMenuAction ? CloseOnContextMenuAction?.id : undefined} value={typeof CloseOnContextMenuAction === "object" && "value" in CloseOnContextMenuAction ? CloseOnContextMenuAction?.value : CloseOnContextMenuAction} /* default: false */  isRaw={typeof CloseOnContextMenuAction === "object" && "isRaw" in CloseOnContextMenuAction && CloseOnContextMenuAction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlurSpread" id={typeof BlurSpread === "object" && "id" in BlurSpread ? BlurSpread?.id : undefined} value={typeof BlurSpread === "object" && "value" in BlurSpread ? BlurSpread?.value : BlurSpread} /* default: 0 */  isRaw={typeof BlurSpread === "object" && "isRaw" in BlurSpread && BlurSpread.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BackgroundColor" id={typeof BackgroundColor === "object" && "id" in BackgroundColor ? BackgroundColor?.id : undefined} value={typeof BackgroundColor === "object" && "value" in BackgroundColor ? BackgroundColor?.value : BackgroundColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BackgroundColor === "object" && "isRaw" in BackgroundColor && BackgroundColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ContentAnimationScaleOffset" id={typeof ContentAnimationScaleOffset === "object" && "id" in ContentAnimationScaleOffset ? ContentAnimationScaleOffset?.id : undefined} value={typeof ContentAnimationScaleOffset === "object" && "value" in ContentAnimationScaleOffset ? ContentAnimationScaleOffset?.value : ContentAnimationScaleOffset} /* default: 0 */  isRaw={typeof ContentAnimationScaleOffset === "object" && "isRaw" in ContentAnimationScaleOffset && ContentAnimationScaleOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Padding" id={typeof Padding === "object" && "id" in Padding ? Padding?.id : undefined} value={typeof Padding === "object" && "value" in Padding ? Padding?.value : Padding} /* default: 0 */  isRaw={typeof Padding === "object" && "isRaw" in Padding && Padding.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BlurMaterial]`} name="_blur" id={typeof _blur === "object" && "id" in _blur ? _blur?.id : undefined} value={typeof _blur === "object" && "value" in _blur ? _blur?.value : _blur} /* default: ID0 */  isRaw={typeof _blur === "object" && "isRaw" in _blur && _blur.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RawGraphic]`} name="_blurGraphic" id={typeof _blurGraphic === "object" && "id" in _blurGraphic ? _blurGraphic?.id : undefined} value={typeof _blurGraphic === "object" && "value" in _blurGraphic ? _blurGraphic?.value : _blurGraphic} /* default: ID0 */  isRaw={typeof _blurGraphic === "object" && "isRaw" in _blurGraphic && _blurGraphic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_blurSpread" id={typeof _blurSpread === "object" && "id" in _blurSpread ? _blurSpread?.id : undefined} value={typeof _blurSpread === "object" && "value" in _blurSpread ? _blurSpread?.value : _blurSpread} /* default: ID0 */  isRaw={typeof _blurSpread === "object" && "isRaw" in _blurSpread && _blurSpread.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_backgroundColor" id={typeof _backgroundColor === "object" && "id" in _backgroundColor ? _backgroundColor?.id : undefined} value={typeof _backgroundColor === "object" && "value" in _backgroundColor ? _backgroundColor?.value : _backgroundColor} /* default: ID0 */  isRaw={typeof _backgroundColor === "object" && "isRaw" in _backgroundColor && _backgroundColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.Rect]`} name="_maskRect" id={typeof _maskRect === "object" && "id" in _maskRect ? _maskRect?.id : undefined} value={typeof _maskRect === "object" && "value" in _maskRect ? _maskRect?.value : _maskRect} /* default: ID0 */  isRaw={typeof _maskRect === "object" && "isRaw" in _maskRect && _maskRect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_overlayAnchorMin" id={typeof _overlayAnchorMin === "object" && "id" in _overlayAnchorMin ? _overlayAnchorMin?.id : undefined} value={typeof _overlayAnchorMin === "object" && "value" in _overlayAnchorMin ? _overlayAnchorMin?.value : _overlayAnchorMin} /* default: ID0 */  isRaw={typeof _overlayAnchorMin === "object" && "isRaw" in _overlayAnchorMin && _overlayAnchorMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_overlayAnchorMax" id={typeof _overlayAnchorMax === "object" && "id" in _overlayAnchorMax ? _overlayAnchorMax?.id : undefined} value={typeof _overlayAnchorMax === "object" && "value" in _overlayAnchorMax ? _overlayAnchorMax?.value : _overlayAnchorMax} /* default: ID0 */  isRaw={typeof _overlayAnchorMax === "object" && "isRaw" in _overlayAnchorMax && _overlayAnchorMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_contentOffsetMin" id={typeof _contentOffsetMin === "object" && "id" in _contentOffsetMin ? _contentOffsetMin?.id : undefined} value={typeof _contentOffsetMin === "object" && "value" in _contentOffsetMin ? _contentOffsetMin?.value : _contentOffsetMin} /* default: ID0 */  isRaw={typeof _contentOffsetMin === "object" && "isRaw" in _contentOffsetMin && _contentOffsetMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_contentOffsetMax" id={typeof _contentOffsetMax === "object" && "id" in _contentOffsetMax ? _contentOffsetMax?.id : undefined} value={typeof _contentOffsetMax === "object" && "value" in _contentOffsetMax ? _contentOffsetMax?.value : _contentOffsetMax} /* default: ID0 */  isRaw={typeof _contentOffsetMax === "object" && "isRaw" in _contentOffsetMax && _contentOffsetMax.isRaw ? true : undefined} />
        </Component>
      );
    };
    