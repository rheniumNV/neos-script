import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ContextMenuInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Owner?: member<any>;
Pointer?: member<any>;
Separation?: member<number>;
LabelSize?: member<[number, number]>;
RadiusRatio?: member<number>;
_currentSummoner?: member<any>;
_canvas?: member<any>;
_arcLayout?: member<any>;
_canvasActive?: member<any>;
_colliderEnabled?: member<any>;
_iconImage?: member<any>;
_separation?: member<any>;
_offsetMin?: member<any>;
_offsetMax?: member<any>;
_innerCircle?: member<any>;
_innerCircleButton?: member<any>;
_innerCircleAnchorMin?: member<any>;
_innerCircleAnchorMax?: member<any>;
_itemsRoot?: member<any>;
_arcMaterial?: member<any>;
_fontMaterial?: member<any>;
_spriteMaterial?: member<any>;
_arcOverlay?: member<any>;
_fontOverlay?: member<any>;
_spriteOverlay?: member<any>;
_arcZTest?: member<any>;
_fontZTest?: member<any>;
_spriteZTest?: member<any>;
_zwriteArc?: member<any>;
_zwriteText?: member<any>;
_arcRenderQueue?: member<any>;
_fontRenderQueue?: member<any>;
_spriteRenderQueue?: member<any>;
_canvasOffset?: member<any>;
_fillFade?: member<any>;
_outlineFade?: member<any>;
_textFade?: member<any>;
_iconFade?: member<any>;
_lerp?: member<number>;
_state?: member<any>;
_flickModeActive?: member<boolean>;
_flickEnabled?: member<boolean>;
_hidden?: member<boolean>;
_selectedItem?: member<any>;
    }
    
    export function ContextMenu(props: ContextMenuInput){
      const { id, persistentId, updateOrder, Enabled,
Owner,
Pointer,
Separation,
LabelSize,
RadiusRatio,
_currentSummoner,
_canvas,
_arcLayout,
_canvasActive,
_colliderEnabled,
_iconImage,
_separation,
_offsetMin,
_offsetMax,
_innerCircle,
_innerCircleButton,
_innerCircleAnchorMin,
_innerCircleAnchorMax,
_itemsRoot,
_arcMaterial,
_fontMaterial,
_spriteMaterial,
_arcOverlay,
_fontOverlay,
_spriteOverlay,
_arcZTest,
_fontZTest,
_spriteZTest,
_zwriteArc,
_zwriteText,
_arcRenderQueue,
_fontRenderQueue,
_spriteRenderQueue,
_canvasOffset,
_fillFade,
_outlineFade,
_textFade,
_iconFade,
_lerp,
_state,
_flickModeActive,
_flickEnabled,
_hidden,
_selectedItem, } = props;
    
      return (
        <Component type="FrooxEngine.ContextMenu" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="Owner" id={typeof Owner === "object" && "id" in Owner ? Owner?.id : undefined} value={typeof Owner === "object" && "value" in Owner ? Owner?.value : Owner} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Pointer" id={typeof Pointer === "object" && "id" in Pointer ? Pointer?.id : undefined} value={typeof Pointer === "object" && "value" in Pointer ? Pointer?.value : Pointer} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Separation" id={typeof Separation === "object" && "id" in Separation ? Separation?.id : undefined} value={typeof Separation === "object" && "value" in Separation ? Separation?.value : Separation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="LabelSize" id={typeof LabelSize === "object" && "id" in LabelSize ? LabelSize?.id : undefined} value={typeof LabelSize === "object" && "value" in LabelSize ? LabelSize?.value : LabelSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RadiusRatio" id={typeof RadiusRatio === "object" && "id" in RadiusRatio ? RadiusRatio?.id : undefined} value={typeof RadiusRatio === "object" && "value" in RadiusRatio ? RadiusRatio?.value : RadiusRatio} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef`} name="_currentSummoner" id={typeof _currentSummoner === "object" && "id" in _currentSummoner ? _currentSummoner?.id : undefined} value={typeof _currentSummoner === "object" && "value" in _currentSummoner ? _currentSummoner?.value : _currentSummoner} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.ArcLayout]`} name="_arcLayout" id={typeof _arcLayout === "object" && "id" in _arcLayout ? _arcLayout?.id : undefined} value={typeof _arcLayout === "object" && "value" in _arcLayout ? _arcLayout?.value : _arcLayout} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_canvasActive" id={typeof _canvasActive === "object" && "id" in _canvasActive ? _canvasActive?.id : undefined} value={typeof _canvasActive === "object" && "value" in _canvasActive ? _canvasActive?.value : _canvasActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_colliderEnabled" id={typeof _colliderEnabled === "object" && "id" in _colliderEnabled ? _colliderEnabled?.id : undefined} value={typeof _colliderEnabled === "object" && "value" in _colliderEnabled ? _colliderEnabled?.value : _colliderEnabled} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_iconImage" id={typeof _iconImage === "object" && "id" in _iconImage ? _iconImage?.id : undefined} value={typeof _iconImage === "object" && "value" in _iconImage ? _iconImage?.value : _iconImage} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_separation" id={typeof _separation === "object" && "id" in _separation ? _separation?.id : undefined} value={typeof _separation === "object" && "value" in _separation ? _separation?.value : _separation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_offsetMin" id={typeof _offsetMin === "object" && "id" in _offsetMin ? _offsetMin?.id : undefined} value={typeof _offsetMin === "object" && "value" in _offsetMin ? _offsetMin?.value : _offsetMin} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_offsetMax" id={typeof _offsetMax === "object" && "id" in _offsetMax ? _offsetMax?.id : undefined} value={typeof _offsetMax === "object" && "value" in _offsetMax ? _offsetMax?.value : _offsetMax} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.OutlinedArc]`} name="_innerCircle" id={typeof _innerCircle === "object" && "id" in _innerCircle ? _innerCircle?.id : undefined} value={typeof _innerCircle === "object" && "value" in _innerCircle ? _innerCircle?.value : _innerCircle} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_innerCircleButton" id={typeof _innerCircleButton === "object" && "id" in _innerCircleButton ? _innerCircleButton?.id : undefined} value={typeof _innerCircleButton === "object" && "value" in _innerCircleButton ? _innerCircleButton?.value : _innerCircleButton} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_innerCircleAnchorMin" id={typeof _innerCircleAnchorMin === "object" && "id" in _innerCircleAnchorMin ? _innerCircleAnchorMin?.id : undefined} value={typeof _innerCircleAnchorMin === "object" && "value" in _innerCircleAnchorMin ? _innerCircleAnchorMin?.value : _innerCircleAnchorMin} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_innerCircleAnchorMax" id={typeof _innerCircleAnchorMax === "object" && "id" in _innerCircleAnchorMax ? _innerCircleAnchorMax?.id : undefined} value={typeof _innerCircleAnchorMax === "object" && "value" in _innerCircleAnchorMax ? _innerCircleAnchorMax?.value : _innerCircleAnchorMax} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_itemsRoot" id={typeof _itemsRoot === "object" && "id" in _itemsRoot ? _itemsRoot?.id : undefined} value={typeof _itemsRoot === "object" && "value" in _itemsRoot ? _itemsRoot?.value : _itemsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UI_CircleSegment]`} name="_arcMaterial" id={typeof _arcMaterial === "object" && "id" in _arcMaterial ? _arcMaterial?.id : undefined} value={typeof _arcMaterial === "object" && "value" in _arcMaterial ? _arcMaterial?.value : _arcMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UI_TextUnlitMaterial]`} name="_fontMaterial" id={typeof _fontMaterial === "object" && "id" in _fontMaterial ? _fontMaterial?.id : undefined} value={typeof _fontMaterial === "object" && "value" in _fontMaterial ? _fontMaterial?.value : _fontMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UI_UnlitMaterial]`} name="_spriteMaterial" id={typeof _spriteMaterial === "object" && "id" in _spriteMaterial ? _spriteMaterial?.id : undefined} value={typeof _spriteMaterial === "object" && "value" in _spriteMaterial ? _spriteMaterial?.value : _spriteMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_arcOverlay" id={typeof _arcOverlay === "object" && "id" in _arcOverlay ? _arcOverlay?.id : undefined} value={typeof _arcOverlay === "object" && "value" in _arcOverlay ? _arcOverlay?.value : _arcOverlay} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_fontOverlay" id={typeof _fontOverlay === "object" && "id" in _fontOverlay ? _fontOverlay?.id : undefined} value={typeof _fontOverlay === "object" && "value" in _fontOverlay ? _fontOverlay?.value : _fontOverlay} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_spriteOverlay" id={typeof _spriteOverlay === "object" && "id" in _spriteOverlay ? _spriteOverlay?.id : undefined} value={typeof _spriteOverlay === "object" && "value" in _spriteOverlay ? _spriteOverlay?.value : _spriteOverlay} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[FrooxEngine.ZTest]`} name="_arcZTest" id={typeof _arcZTest === "object" && "id" in _arcZTest ? _arcZTest?.id : undefined} value={typeof _arcZTest === "object" && "value" in _arcZTest ? _arcZTest?.value : _arcZTest} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[FrooxEngine.ZTest]`} name="_fontZTest" id={typeof _fontZTest === "object" && "id" in _fontZTest ? _fontZTest?.id : undefined} value={typeof _fontZTest === "object" && "value" in _fontZTest ? _fontZTest?.value : _fontZTest} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[FrooxEngine.ZTest]`} name="_spriteZTest" id={typeof _spriteZTest === "object" && "id" in _spriteZTest ? _spriteZTest?.id : undefined} value={typeof _spriteZTest === "object" && "value" in _spriteZTest ? _spriteZTest?.value : _spriteZTest} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[FrooxEngine.ZWrite]`} name="_zwriteArc" id={typeof _zwriteArc === "object" && "id" in _zwriteArc ? _zwriteArc?.id : undefined} value={typeof _zwriteArc === "object" && "value" in _zwriteArc ? _zwriteArc?.value : _zwriteArc} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[FrooxEngine.ZWrite]`} name="_zwriteText" id={typeof _zwriteText === "object" && "id" in _zwriteText ? _zwriteText?.id : undefined} value={typeof _zwriteText === "object" && "value" in _zwriteText ? _zwriteText?.value : _zwriteText} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_arcRenderQueue" id={typeof _arcRenderQueue === "object" && "id" in _arcRenderQueue ? _arcRenderQueue?.id : undefined} value={typeof _arcRenderQueue === "object" && "value" in _arcRenderQueue ? _arcRenderQueue?.value : _arcRenderQueue} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_fontRenderQueue" id={typeof _fontRenderQueue === "object" && "id" in _fontRenderQueue ? _fontRenderQueue?.id : undefined} value={typeof _fontRenderQueue === "object" && "value" in _fontRenderQueue ? _fontRenderQueue?.value : _fontRenderQueue} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_spriteRenderQueue" id={typeof _spriteRenderQueue === "object" && "id" in _spriteRenderQueue ? _spriteRenderQueue?.id : undefined} value={typeof _spriteRenderQueue === "object" && "value" in _spriteRenderQueue ? _spriteRenderQueue?.value : _spriteRenderQueue} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_canvasOffset" id={typeof _canvasOffset === "object" && "id" in _canvasOffset ? _canvasOffset?.id : undefined} value={typeof _canvasOffset === "object" && "value" in _canvasOffset ? _canvasOffset?.value : _canvasOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_fillFade" id={typeof _fillFade === "object" && "id" in _fillFade ? _fillFade?.id : undefined} value={typeof _fillFade === "object" && "value" in _fillFade ? _fillFade?.value : _fillFade} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_outlineFade" id={typeof _outlineFade === "object" && "id" in _outlineFade ? _outlineFade?.id : undefined} value={typeof _outlineFade === "object" && "value" in _outlineFade ? _outlineFade?.value : _outlineFade} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_textFade" id={typeof _textFade === "object" && "id" in _textFade ? _textFade?.id : undefined} value={typeof _textFade === "object" && "value" in _textFade ? _textFade?.value : _textFade} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_iconFade" id={typeof _iconFade === "object" && "id" in _iconFade ? _iconFade?.id : undefined} value={typeof _iconFade === "object" && "value" in _iconFade ? _iconFade?.value : _iconFade} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_lerp" id={typeof _lerp === "object" && "id" in _lerp ? _lerp?.id : undefined} value={typeof _lerp === "object" && "value" in _lerp ? _lerp?.value : _lerp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ContextMenu+State]`} name="_state" id={typeof _state === "object" && "id" in _state ? _state?.id : undefined} value={typeof _state === "object" && "value" in _state ? _state?.value : _state} /* default: Closed */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_flickModeActive" id={typeof _flickModeActive === "object" && "id" in _flickModeActive ? _flickModeActive?.id : undefined} value={typeof _flickModeActive === "object" && "value" in _flickModeActive ? _flickModeActive?.value : _flickModeActive} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_flickEnabled" id={typeof _flickEnabled === "object" && "id" in _flickEnabled ? _flickEnabled?.id : undefined} value={typeof _flickEnabled === "object" && "value" in _flickEnabled ? _flickEnabled?.value : _flickEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_hidden" id={typeof _hidden === "object" && "id" in _hidden ? _hidden?.id : undefined} value={typeof _hidden === "object" && "value" in _hidden ? _hidden?.value : _hidden} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenuItem]`} name="_selectedItem" id={typeof _selectedItem === "object" && "id" in _selectedItem ? _selectedItem?.id : undefined} value={typeof _selectedItem === "object" && "value" in _selectedItem ? _selectedItem?.value : _selectedItem} /* default: ID0 */  />
        </Component>
      );
    };
    