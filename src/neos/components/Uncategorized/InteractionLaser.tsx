import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface InteractionLaserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SmoothSpeed?: member<number>;
SmoothModulateStartAngle?: member<number>;
SmoothModulateEndAngle?: member<number>;
SmoothModulateExp?: member<number>;
SmoothModulateMultiplier?: member<number>;
StickThreshold?: member<number>;
MaxTouchPenetrationDistance?: member<number>;
StickPointSpace?: member<any>;
StickPointPosition?: member<[number, number, number]>;
_commonTool?: member<any>;
_lastHit?: member<any>;
_lastInteractionTarget?: member<any>;
_lastInteractionModifier?: member<any>;
_hitColor?: member<[number, number, number, number]>;
_laserTextureSpeed?: member<number>;
_laserMesh?: member<any>;
_laserMaterial?: member<any>;
_laserTexture?: member<any>;
_behindLaserTint?: member<any>;
_laserRenderQueue?: member<any>;
_laserFrontTextureOffset?: member<any>;
_laserBehindTextureOffset?: member<any>;
_directPoint?: member<any>;
_actualPoint?: member<any>;
_startColor?: member<any>;
_endColor?: member<any>;
_pointSlot?: member<any>;
_pointSlotPos?: member<any>;
_laserVisible?: member<any>;
_cursorVisible?: member<any>;
_directCursorVisible?: member<any>;
_directCursorRoot?: member<any>;
_directCursorOffset?: member<any>;
_directCursorOrientation?: member<any>;
_directLineTarget?: member<any>;
_directLineMesh?: member<any>;
_segmentColorFront?: member<any>;
_segmentColorBehind?: member<any>;
_segmentRenderQueue?: member<any>;
_touchSource?: member<any>;
_cursorRoot?: member<any>;
_cursorTexture?: member<any>;
_cursorMaterial?: member<any>;
_cursorFrontTint?: member<any>;
_cursorBehindTint?: member<any>;
_cursorRenderQueue?: member<any>;
_cursorOrientation?: member<any>;
_cursorScale?: member<any>;
_cursorTint?: member<[number, number, number, number]>;
    }
    
    export function InteractionLaser(props: InteractionLaserInput){
      const { id, persistentId, updateOrder, Enabled,
SmoothSpeed,
SmoothModulateStartAngle,
SmoothModulateEndAngle,
SmoothModulateExp,
SmoothModulateMultiplier,
StickThreshold,
MaxTouchPenetrationDistance,
StickPointSpace,
StickPointPosition,
_commonTool,
_lastHit,
_lastInteractionTarget,
_lastInteractionModifier,
_hitColor,
_laserTextureSpeed,
_laserMesh,
_laserMaterial,
_laserTexture,
_behindLaserTint,
_laserRenderQueue,
_laserFrontTextureOffset,
_laserBehindTextureOffset,
_directPoint,
_actualPoint,
_startColor,
_endColor,
_pointSlot,
_pointSlotPos,
_laserVisible,
_cursorVisible,
_directCursorVisible,
_directCursorRoot,
_directCursorOffset,
_directCursorOrientation,
_directLineTarget,
_directLineMesh,
_segmentColorFront,
_segmentColorBehind,
_segmentRenderQueue,
_touchSource,
_cursorRoot,
_cursorTexture,
_cursorMaterial,
_cursorFrontTint,
_cursorBehindTint,
_cursorRenderQueue,
_cursorOrientation,
_cursorScale,
_cursorTint, } = props;
    
      return (
        <Component type="FrooxEngine.InteractionLaser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SmoothSpeed" id={typeof SmoothSpeed === "object" && "id" in SmoothSpeed ? SmoothSpeed?.id : undefined} value={typeof SmoothSpeed === "object" && "value" in SmoothSpeed ? SmoothSpeed?.value : SmoothSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SmoothModulateStartAngle" id={typeof SmoothModulateStartAngle === "object" && "id" in SmoothModulateStartAngle ? SmoothModulateStartAngle?.id : undefined} value={typeof SmoothModulateStartAngle === "object" && "value" in SmoothModulateStartAngle ? SmoothModulateStartAngle?.value : SmoothModulateStartAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SmoothModulateEndAngle" id={typeof SmoothModulateEndAngle === "object" && "id" in SmoothModulateEndAngle ? SmoothModulateEndAngle?.id : undefined} value={typeof SmoothModulateEndAngle === "object" && "value" in SmoothModulateEndAngle ? SmoothModulateEndAngle?.value : SmoothModulateEndAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SmoothModulateExp" id={typeof SmoothModulateExp === "object" && "id" in SmoothModulateExp ? SmoothModulateExp?.id : undefined} value={typeof SmoothModulateExp === "object" && "value" in SmoothModulateExp ? SmoothModulateExp?.value : SmoothModulateExp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SmoothModulateMultiplier" id={typeof SmoothModulateMultiplier === "object" && "id" in SmoothModulateMultiplier ? SmoothModulateMultiplier?.id : undefined} value={typeof SmoothModulateMultiplier === "object" && "value" in SmoothModulateMultiplier ? SmoothModulateMultiplier?.value : SmoothModulateMultiplier} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StickThreshold" id={typeof StickThreshold === "object" && "id" in StickThreshold ? StickThreshold?.id : undefined} value={typeof StickThreshold === "object" && "value" in StickThreshold ? StickThreshold?.value : StickThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTouchPenetrationDistance" id={typeof MaxTouchPenetrationDistance === "object" && "id" in MaxTouchPenetrationDistance ? MaxTouchPenetrationDistance?.id : undefined} value={typeof MaxTouchPenetrationDistance === "object" && "value" in MaxTouchPenetrationDistance ? MaxTouchPenetrationDistance?.value : MaxTouchPenetrationDistance} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="StickPointSpace" id={typeof StickPointSpace === "object" && "id" in StickPointSpace ? StickPointSpace?.id : undefined} value={typeof StickPointSpace === "object" && "value" in StickPointSpace ? StickPointSpace?.value : StickPointSpace} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="StickPointPosition" id={typeof StickPointPosition === "object" && "id" in StickPointPosition ? StickPointPosition?.id : undefined} value={typeof StickPointPosition === "object" && "value" in StickPointPosition ? StickPointPosition?.value : StickPointPosition} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_commonTool" id={typeof _commonTool === "object" && "id" in _commonTool ? _commonTool?.id : undefined} value={typeof _commonTool === "object" && "value" in _commonTool ? _commonTool?.value : _commonTool} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lastHit" id={typeof _lastHit === "object" && "id" in _lastHit ? _lastHit?.id : undefined} value={typeof _lastHit === "object" && "value" in _lastHit ? _lastHit?.value : _lastHit} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IInteractionTarget]`} name="_lastInteractionTarget" id={typeof _lastInteractionTarget === "object" && "id" in _lastInteractionTarget ? _lastInteractionTarget?.id : undefined} value={typeof _lastInteractionTarget === "object" && "value" in _lastInteractionTarget ? _lastInteractionTarget?.value : _lastInteractionTarget} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ILaserInteractionModifier]`} name="_lastInteractionModifier" id={typeof _lastInteractionModifier === "object" && "id" in _lastInteractionModifier ? _lastInteractionModifier?.id : undefined} value={typeof _lastInteractionModifier === "object" && "value" in _lastInteractionModifier ? _lastInteractionModifier?.value : _lastInteractionModifier} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="_hitColor" id={typeof _hitColor === "object" && "id" in _hitColor ? _hitColor?.id : undefined} value={typeof _hitColor === "object" && "value" in _hitColor ? _hitColor?.value : _hitColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_laserTextureSpeed" id={typeof _laserTextureSpeed === "object" && "id" in _laserTextureSpeed ? _laserTextureSpeed?.id : undefined} value={typeof _laserTextureSpeed === "object" && "value" in _laserTextureSpeed ? _laserTextureSpeed?.value : _laserTextureSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BentTubeMesh]`} name="_laserMesh" id={typeof _laserMesh === "object" && "id" in _laserMesh ? _laserMesh?.id : undefined} value={typeof _laserMesh === "object" && "value" in _laserMesh ? _laserMesh?.value : _laserMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayUnlitMaterial]`} name="_laserMaterial" id={typeof _laserMaterial === "object" && "id" in _laserMaterial ? _laserMaterial?.id : undefined} value={typeof _laserMaterial === "object" && "value" in _laserMaterial ? _laserMaterial?.value : _laserMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_laserTexture" id={typeof _laserTexture === "object" && "id" in _laserTexture ? _laserTexture?.id : undefined} value={typeof _laserTexture === "object" && "value" in _laserTexture ? _laserTexture?.value : _laserTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_behindLaserTint" id={typeof _behindLaserTint === "object" && "id" in _behindLaserTint ? _behindLaserTint?.id : undefined} value={typeof _behindLaserTint === "object" && "value" in _behindLaserTint ? _behindLaserTint?.value : _behindLaserTint} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_laserRenderQueue" id={typeof _laserRenderQueue === "object" && "id" in _laserRenderQueue ? _laserRenderQueue?.id : undefined} value={typeof _laserRenderQueue === "object" && "value" in _laserRenderQueue ? _laserRenderQueue?.value : _laserRenderQueue} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_laserFrontTextureOffset" id={typeof _laserFrontTextureOffset === "object" && "id" in _laserFrontTextureOffset ? _laserFrontTextureOffset?.id : undefined} value={typeof _laserFrontTextureOffset === "object" && "value" in _laserFrontTextureOffset ? _laserFrontTextureOffset?.value : _laserFrontTextureOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_laserBehindTextureOffset" id={typeof _laserBehindTextureOffset === "object" && "id" in _laserBehindTextureOffset ? _laserBehindTextureOffset?.id : undefined} value={typeof _laserBehindTextureOffset === "object" && "value" in _laserBehindTextureOffset ? _laserBehindTextureOffset?.value : _laserBehindTextureOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_directPoint" id={typeof _directPoint === "object" && "id" in _directPoint ? _directPoint?.id : undefined} value={typeof _directPoint === "object" && "value" in _directPoint ? _directPoint?.value : _directPoint} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_actualPoint" id={typeof _actualPoint === "object" && "id" in _actualPoint ? _actualPoint?.id : undefined} value={typeof _actualPoint === "object" && "value" in _actualPoint ? _actualPoint?.value : _actualPoint} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_startColor" id={typeof _startColor === "object" && "id" in _startColor ? _startColor?.id : undefined} value={typeof _startColor === "object" && "value" in _startColor ? _startColor?.value : _startColor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_endColor" id={typeof _endColor === "object" && "id" in _endColor ? _endColor?.id : undefined} value={typeof _endColor === "object" && "value" in _endColor ? _endColor?.value : _endColor} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_pointSlot" id={typeof _pointSlot === "object" && "id" in _pointSlot ? _pointSlot?.id : undefined} value={typeof _pointSlot === "object" && "value" in _pointSlot ? _pointSlot?.value : _pointSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_pointSlotPos" id={typeof _pointSlotPos === "object" && "id" in _pointSlotPos ? _pointSlotPos?.id : undefined} value={typeof _pointSlotPos === "object" && "value" in _pointSlotPos ? _pointSlotPos?.value : _pointSlotPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_laserVisible" id={typeof _laserVisible === "object" && "id" in _laserVisible ? _laserVisible?.id : undefined} value={typeof _laserVisible === "object" && "value" in _laserVisible ? _laserVisible?.value : _laserVisible} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_cursorVisible" id={typeof _cursorVisible === "object" && "id" in _cursorVisible ? _cursorVisible?.id : undefined} value={typeof _cursorVisible === "object" && "value" in _cursorVisible ? _cursorVisible?.value : _cursorVisible} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_directCursorVisible" id={typeof _directCursorVisible === "object" && "id" in _directCursorVisible ? _directCursorVisible?.id : undefined} value={typeof _directCursorVisible === "object" && "value" in _directCursorVisible ? _directCursorVisible?.value : _directCursorVisible} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_directCursorRoot" id={typeof _directCursorRoot === "object" && "id" in _directCursorRoot ? _directCursorRoot?.id : undefined} value={typeof _directCursorRoot === "object" && "value" in _directCursorRoot ? _directCursorRoot?.value : _directCursorRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_directCursorOffset" id={typeof _directCursorOffset === "object" && "id" in _directCursorOffset ? _directCursorOffset?.id : undefined} value={typeof _directCursorOffset === "object" && "value" in _directCursorOffset ? _directCursorOffset?.value : _directCursorOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_directCursorOrientation" id={typeof _directCursorOrientation === "object" && "id" in _directCursorOrientation ? _directCursorOrientation?.id : undefined} value={typeof _directCursorOrientation === "object" && "value" in _directCursorOrientation ? _directCursorOrientation?.value : _directCursorOrientation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_directLineTarget" id={typeof _directLineTarget === "object" && "id" in _directLineTarget ? _directLineTarget?.id : undefined} value={typeof _directLineTarget === "object" && "value" in _directLineTarget ? _directLineTarget?.value : _directLineTarget} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SegmentMesh]`} name="_directLineMesh" id={typeof _directLineMesh === "object" && "id" in _directLineMesh ? _directLineMesh?.id : undefined} value={typeof _directLineMesh === "object" && "value" in _directLineMesh ? _directLineMesh?.value : _directLineMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_segmentColorFront" id={typeof _segmentColorFront === "object" && "id" in _segmentColorFront ? _segmentColorFront?.id : undefined} value={typeof _segmentColorFront === "object" && "value" in _segmentColorFront ? _segmentColorFront?.value : _segmentColorFront} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_segmentColorBehind" id={typeof _segmentColorBehind === "object" && "id" in _segmentColorBehind ? _segmentColorBehind?.id : undefined} value={typeof _segmentColorBehind === "object" && "value" in _segmentColorBehind ? _segmentColorBehind?.value : _segmentColorBehind} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_segmentRenderQueue" id={typeof _segmentRenderQueue === "object" && "id" in _segmentRenderQueue ? _segmentRenderQueue?.id : undefined} value={typeof _segmentRenderQueue === "object" && "value" in _segmentRenderQueue ? _segmentRenderQueue?.value : _segmentRenderQueue} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RelayTouchSource]`} name="_touchSource" id={typeof _touchSource === "object" && "id" in _touchSource ? _touchSource?.id : undefined} value={typeof _touchSource === "object" && "value" in _touchSource ? _touchSource?.value : _touchSource} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_cursorRoot" id={typeof _cursorRoot === "object" && "id" in _cursorRoot ? _cursorRoot?.id : undefined} value={typeof _cursorRoot === "object" && "value" in _cursorRoot ? _cursorRoot?.value : _cursorRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_cursorTexture" id={typeof _cursorTexture === "object" && "id" in _cursorTexture ? _cursorTexture?.id : undefined} value={typeof _cursorTexture === "object" && "value" in _cursorTexture ? _cursorTexture?.value : _cursorTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayUnlitMaterial]`} name="_cursorMaterial" id={typeof _cursorMaterial === "object" && "id" in _cursorMaterial ? _cursorMaterial?.id : undefined} value={typeof _cursorMaterial === "object" && "value" in _cursorMaterial ? _cursorMaterial?.value : _cursorMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_cursorFrontTint" id={typeof _cursorFrontTint === "object" && "id" in _cursorFrontTint ? _cursorFrontTint?.id : undefined} value={typeof _cursorFrontTint === "object" && "value" in _cursorFrontTint ? _cursorFrontTint?.value : _cursorFrontTint} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_cursorBehindTint" id={typeof _cursorBehindTint === "object" && "id" in _cursorBehindTint ? _cursorBehindTint?.id : undefined} value={typeof _cursorBehindTint === "object" && "value" in _cursorBehindTint ? _cursorBehindTint?.value : _cursorBehindTint} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_cursorRenderQueue" id={typeof _cursorRenderQueue === "object" && "id" in _cursorRenderQueue ? _cursorRenderQueue?.id : undefined} value={typeof _cursorRenderQueue === "object" && "value" in _cursorRenderQueue ? _cursorRenderQueue?.value : _cursorRenderQueue} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_cursorOrientation" id={typeof _cursorOrientation === "object" && "id" in _cursorOrientation ? _cursorOrientation?.id : undefined} value={typeof _cursorOrientation === "object" && "value" in _cursorOrientation ? _cursorOrientation?.value : _cursorOrientation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_cursorScale" id={typeof _cursorScale === "object" && "id" in _cursorScale ? _cursorScale?.id : undefined} value={typeof _cursorScale === "object" && "value" in _cursorScale ? _cursorScale?.value : _cursorScale} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="_cursorTint" id={typeof _cursorTint === "object" && "id" in _cursorTint ? _cursorTint?.id : undefined} value={typeof _cursorTint === "object" && "value" in _cursorTint ? _cursorTint?.value : _cursorTint} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    