import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RadiantDashInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CurrentScreen?: member<any>;
Open?: member<boolean>;
AnimationSpeed?: member<number>;
TintColor?: member<[number, number, number, number]>;
ScreenProjection?: member<boolean>;
Curvature?: member<number>;
AspectRatioCompensation?: member<any>;
ScreenSwitchingEnabled?: member<boolean>;
_screensContainer?: member<any>;
_camera?: member<any>;
_renderTexture?: member<any>;
_topContainer?: member<any>;
_topMesh?: member<any>;
_screenMesh?: member<any>;
_buttonsMesh?: member<any>;
_topMaterial?: member<any>;
_screenMaterial?: member<any>;
_buttonsMaterial?: member<any>;
_overlayEffectMaterial?: member<any>;
_topBorderMaterial?: member<any>;
_screenBorderMaterial?: member<any>;
_buttonsBorderMaterial?: member<any>;
_renderRoot?: member<any>;
_topRoot?: member<any>;
_screenRoot?: member<any>;
_buttonsRoot?: member<any>;
_visualsRoot?: member<any>;
_effectRoot?: member<any>;
_buttonsUIroot?: member<any>;
_emitter?: member<any>;
_topCollider?: member<any>;
_screenCollider?: member<any>;
_buttonsCollider?: member<any>;
    }
    
    export function RadiantDash(props: RadiantDashInput){
      const { id, persistentId, updateOrder, Enabled,
CurrentScreen,
Open,
AnimationSpeed,
TintColor,
ScreenProjection,
Curvature,
AspectRatioCompensation,
ScreenSwitchingEnabled,
_screensContainer,
_camera,
_renderTexture,
_topContainer,
_topMesh,
_screenMesh,
_buttonsMesh,
_topMaterial,
_screenMaterial,
_buttonsMaterial,
_overlayEffectMaterial,
_topBorderMaterial,
_screenBorderMaterial,
_buttonsBorderMaterial,
_renderRoot,
_topRoot,
_screenRoot,
_buttonsRoot,
_visualsRoot,
_effectRoot,
_buttonsUIroot,
_emitter,
_topCollider,
_screenCollider,
_buttonsCollider, } = props;
    
      return (
        <Component type="FrooxEngine.RadiantDash" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RadiantDashScreen]`} name="CurrentScreen" id={typeof CurrentScreen === "object" && "id" in CurrentScreen ? CurrentScreen?.id : undefined} value={typeof CurrentScreen === "object" && "value" in CurrentScreen ? CurrentScreen?.value : CurrentScreen} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Open" id={typeof Open === "object" && "id" in Open ? Open?.id : undefined} value={typeof Open === "object" && "value" in Open ? Open?.value : Open} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnimationSpeed" id={typeof AnimationSpeed === "object" && "id" in AnimationSpeed ? AnimationSpeed?.id : undefined} value={typeof AnimationSpeed === "object" && "value" in AnimationSpeed ? AnimationSpeed?.value : AnimationSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="TintColor" id={typeof TintColor === "object" && "id" in TintColor ? TintColor?.id : undefined} value={typeof TintColor === "object" && "value" in TintColor ? TintColor?.value : TintColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScreenProjection" id={typeof ScreenProjection === "object" && "id" in ScreenProjection ? ScreenProjection?.id : undefined} value={typeof ScreenProjection === "object" && "value" in ScreenProjection ? ScreenProjection?.value : ScreenProjection} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Curvature" id={typeof Curvature === "object" && "id" in Curvature ? Curvature?.id : undefined} value={typeof Curvature === "object" && "value" in Curvature ? Curvature?.value : Curvature} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CurvedPlaneMesh+CurvatureAspectRatioCompensation]`} name="AspectRatioCompensation" id={typeof AspectRatioCompensation === "object" && "id" in AspectRatioCompensation ? AspectRatioCompensation?.id : undefined} value={typeof AspectRatioCompensation === "object" && "value" in AspectRatioCompensation ? AspectRatioCompensation?.value : AspectRatioCompensation} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScreenSwitchingEnabled" id={typeof ScreenSwitchingEnabled === "object" && "id" in ScreenSwitchingEnabled ? ScreenSwitchingEnabled?.id : undefined} value={typeof ScreenSwitchingEnabled === "object" && "value" in ScreenSwitchingEnabled ? ScreenSwitchingEnabled?.value : ScreenSwitchingEnabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_screensContainer" id={typeof _screensContainer === "object" && "id" in _screensContainer ? _screensContainer?.id : undefined} value={typeof _screensContainer === "object" && "value" in _screensContainer ? _screensContainer?.value : _screensContainer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Camera]`} name="_camera" id={typeof _camera === "object" && "id" in _camera ? _camera?.id : undefined} value={typeof _camera === "object" && "value" in _camera ? _camera?.value : _camera} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RenderTextureProvider]`} name="_renderTexture" id={typeof _renderTexture === "object" && "id" in _renderTexture ? _renderTexture?.id : undefined} value={typeof _renderTexture === "object" && "value" in _renderTexture ? _renderTexture?.value : _renderTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_topContainer" id={typeof _topContainer === "object" && "id" in _topContainer ? _topContainer?.id : undefined} value={typeof _topContainer === "object" && "value" in _topContainer ? _topContainer?.value : _topContainer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CurvedPlaneMesh]`} name="_topMesh" id={typeof _topMesh === "object" && "id" in _topMesh ? _topMesh?.id : undefined} value={typeof _topMesh === "object" && "value" in _topMesh ? _topMesh?.value : _topMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CurvedPlaneMesh]`} name="_screenMesh" id={typeof _screenMesh === "object" && "id" in _screenMesh ? _screenMesh?.id : undefined} value={typeof _screenMesh === "object" && "value" in _screenMesh ? _screenMesh?.value : _screenMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CurvedPlaneMesh]`} name="_buttonsMesh" id={typeof _buttonsMesh === "object" && "id" in _buttonsMesh ? _buttonsMesh?.id : undefined} value={typeof _buttonsMesh === "object" && "value" in _buttonsMesh ? _buttonsMesh?.value : _buttonsMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_topMaterial" id={typeof _topMaterial === "object" && "id" in _topMaterial ? _topMaterial?.id : undefined} value={typeof _topMaterial === "object" && "value" in _topMaterial ? _topMaterial?.value : _topMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_screenMaterial" id={typeof _screenMaterial === "object" && "id" in _screenMaterial ? _screenMaterial?.id : undefined} value={typeof _screenMaterial === "object" && "value" in _screenMaterial ? _screenMaterial?.value : _screenMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_buttonsMaterial" id={typeof _buttonsMaterial === "object" && "id" in _buttonsMaterial ? _buttonsMaterial?.id : undefined} value={typeof _buttonsMaterial === "object" && "value" in _buttonsMaterial ? _buttonsMaterial?.value : _buttonsMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UI_UnlitMaterial]`} name="_overlayEffectMaterial" id={typeof _overlayEffectMaterial === "object" && "id" in _overlayEffectMaterial ? _overlayEffectMaterial?.id : undefined} value={typeof _overlayEffectMaterial === "object" && "value" in _overlayEffectMaterial ? _overlayEffectMaterial?.value : _overlayEffectMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UV_RectMaterial]`} name="_topBorderMaterial" id={typeof _topBorderMaterial === "object" && "id" in _topBorderMaterial ? _topBorderMaterial?.id : undefined} value={typeof _topBorderMaterial === "object" && "value" in _topBorderMaterial ? _topBorderMaterial?.value : _topBorderMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UV_RectMaterial]`} name="_screenBorderMaterial" id={typeof _screenBorderMaterial === "object" && "id" in _screenBorderMaterial ? _screenBorderMaterial?.id : undefined} value={typeof _screenBorderMaterial === "object" && "value" in _screenBorderMaterial ? _screenBorderMaterial?.value : _screenBorderMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UV_RectMaterial]`} name="_buttonsBorderMaterial" id={typeof _buttonsBorderMaterial === "object" && "id" in _buttonsBorderMaterial ? _buttonsBorderMaterial?.id : undefined} value={typeof _buttonsBorderMaterial === "object" && "value" in _buttonsBorderMaterial ? _buttonsBorderMaterial?.value : _buttonsBorderMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_renderRoot" id={typeof _renderRoot === "object" && "id" in _renderRoot ? _renderRoot?.id : undefined} value={typeof _renderRoot === "object" && "value" in _renderRoot ? _renderRoot?.value : _renderRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_topRoot" id={typeof _topRoot === "object" && "id" in _topRoot ? _topRoot?.id : undefined} value={typeof _topRoot === "object" && "value" in _topRoot ? _topRoot?.value : _topRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_screenRoot" id={typeof _screenRoot === "object" && "id" in _screenRoot ? _screenRoot?.id : undefined} value={typeof _screenRoot === "object" && "value" in _screenRoot ? _screenRoot?.value : _screenRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_buttonsRoot" id={typeof _buttonsRoot === "object" && "id" in _buttonsRoot ? _buttonsRoot?.id : undefined} value={typeof _buttonsRoot === "object" && "value" in _buttonsRoot ? _buttonsRoot?.value : _buttonsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualsRoot" id={typeof _visualsRoot === "object" && "id" in _visualsRoot ? _visualsRoot?.id : undefined} value={typeof _visualsRoot === "object" && "value" in _visualsRoot ? _visualsRoot?.value : _visualsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_effectRoot" id={typeof _effectRoot === "object" && "id" in _effectRoot ? _effectRoot?.id : undefined} value={typeof _effectRoot === "object" && "value" in _effectRoot ? _effectRoot?.value : _effectRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_buttonsUIroot" id={typeof _buttonsUIroot === "object" && "id" in _buttonsUIroot ? _buttonsUIroot?.id : undefined} value={typeof _buttonsUIroot === "object" && "value" in _buttonsUIroot ? _buttonsUIroot?.value : _buttonsUIroot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BoxEmitter]`} name="_emitter" id={typeof _emitter === "object" && "id" in _emitter ? _emitter?.id : undefined} value={typeof _emitter === "object" && "value" in _emitter ? _emitter?.value : _emitter} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshCollider]`} name="_topCollider" id={typeof _topCollider === "object" && "id" in _topCollider ? _topCollider?.id : undefined} value={typeof _topCollider === "object" && "value" in _topCollider ? _topCollider?.value : _topCollider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshCollider]`} name="_screenCollider" id={typeof _screenCollider === "object" && "id" in _screenCollider ? _screenCollider?.id : undefined} value={typeof _screenCollider === "object" && "value" in _screenCollider ? _screenCollider?.value : _screenCollider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshCollider]`} name="_buttonsCollider" id={typeof _buttonsCollider === "object" && "id" in _buttonsCollider ? _buttonsCollider?.id : undefined} value={typeof _buttonsCollider === "object" && "value" in _buttonsCollider ? _buttonsCollider?.value : _buttonsCollider} /* default: ID0 */  />
        </Component>
      );
    };
    