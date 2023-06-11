import { member, Member, Component } from "../../../core";
    
    export interface ConvexHullBrushTipInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TipReference?: member<any>;
BlockGripEquip?: member<boolean>;
BlockRemoteEquip?: member<boolean>;
EquipName?: member<any>;
_overrideActiveTool?: member<any>;
_gripPosesGenerated?: member<boolean>;
FixedMinimumPointDistance?: member<number>;
PositionSmoothing?: member<number>;
RotationSmoothing?: member<number>;
PressureSmoothing?: member<number>;
MaxStrokeLength?: member<number>;
StrokeFadeInLength?: member<number>;
StrokeFadeOutLength?: member<number>;
StrokeGroupFinishWaitTime?: member<number>;
ActivationThreshold?: member<number>;
DeactivationThresholdRatio?: member<number>;
SnapTip?: member<boolean>;
SnapLine?: member<boolean>;
StrokesRootOverride?: member<any>;
PickMaterials?: member<boolean>;
PickColors?: member<boolean>;
CurrentMaterial?: member<any>;
ColorMappings?: member<any>;
_colorPicker?: member<any>;
_pickedColor?: member<[number, number, number, number]>;
_hideOnStroke?: member<any>;
_lastUsedMaterial?: member<any>;
_lastCreatedMaterial?: member<any>;
MinHullPointDistance?: member<number>;
FlatShading?: member<boolean>;
PointSpread?: member<number>;
TipAnchor?: member<any>;
MaterialPreviews?: member<any>;
_currentHull?: member<any>;
_previewMesh?: member<any>;
_previewMeshOffset?: member<any>;
    }
    
    export function ConvexHullBrushTip(props: ConvexHullBrushTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
FixedMinimumPointDistance,
PositionSmoothing,
RotationSmoothing,
PressureSmoothing,
MaxStrokeLength,
StrokeFadeInLength,
StrokeFadeOutLength,
StrokeGroupFinishWaitTime,
ActivationThreshold,
DeactivationThresholdRatio,
SnapTip,
SnapLine,
StrokesRootOverride,
PickMaterials,
PickColors,
CurrentMaterial,
ColorMappings,
_colorPicker,
_pickedColor,
_hideOnStroke,
_lastUsedMaterial,
_lastCreatedMaterial,
MinHullPointDistance,
FlatShading,
PointSpread,
TipAnchor,
MaterialPreviews,
_currentHull,
_previewMesh,
_previewMeshOffset, } = props;
    
      return (
        <Component type="FrooxEngine.ConvexHullBrushTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FixedMinimumPointDistance" id={typeof FixedMinimumPointDistance === "object" && "id" in FixedMinimumPointDistance ? FixedMinimumPointDistance?.id : undefined} value={typeof FixedMinimumPointDistance === "object" && "value" in FixedMinimumPointDistance ? FixedMinimumPointDistance?.value : FixedMinimumPointDistance} /* default: 0 */  isRaw={typeof FixedMinimumPointDistance === "object" && "isRaw" in FixedMinimumPointDistance && FixedMinimumPointDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionSmoothing" id={typeof PositionSmoothing === "object" && "id" in PositionSmoothing ? PositionSmoothing?.id : undefined} value={typeof PositionSmoothing === "object" && "value" in PositionSmoothing ? PositionSmoothing?.value : PositionSmoothing} /* default: 0 */  isRaw={typeof PositionSmoothing === "object" && "isRaw" in PositionSmoothing && PositionSmoothing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RotationSmoothing" id={typeof RotationSmoothing === "object" && "id" in RotationSmoothing ? RotationSmoothing?.id : undefined} value={typeof RotationSmoothing === "object" && "value" in RotationSmoothing ? RotationSmoothing?.value : RotationSmoothing} /* default: 0 */  isRaw={typeof RotationSmoothing === "object" && "isRaw" in RotationSmoothing && RotationSmoothing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PressureSmoothing" id={typeof PressureSmoothing === "object" && "id" in PressureSmoothing ? PressureSmoothing?.id : undefined} value={typeof PressureSmoothing === "object" && "value" in PressureSmoothing ? PressureSmoothing?.value : PressureSmoothing} /* default: 0 */  isRaw={typeof PressureSmoothing === "object" && "isRaw" in PressureSmoothing && PressureSmoothing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxStrokeLength" id={typeof MaxStrokeLength === "object" && "id" in MaxStrokeLength ? MaxStrokeLength?.id : undefined} value={typeof MaxStrokeLength === "object" && "value" in MaxStrokeLength ? MaxStrokeLength?.value : MaxStrokeLength} /* default: 0 */  isRaw={typeof MaxStrokeLength === "object" && "isRaw" in MaxStrokeLength && MaxStrokeLength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrokeFadeInLength" id={typeof StrokeFadeInLength === "object" && "id" in StrokeFadeInLength ? StrokeFadeInLength?.id : undefined} value={typeof StrokeFadeInLength === "object" && "value" in StrokeFadeInLength ? StrokeFadeInLength?.value : StrokeFadeInLength} /* default: 0 */  isRaw={typeof StrokeFadeInLength === "object" && "isRaw" in StrokeFadeInLength && StrokeFadeInLength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrokeFadeOutLength" id={typeof StrokeFadeOutLength === "object" && "id" in StrokeFadeOutLength ? StrokeFadeOutLength?.id : undefined} value={typeof StrokeFadeOutLength === "object" && "value" in StrokeFadeOutLength ? StrokeFadeOutLength?.value : StrokeFadeOutLength} /* default: 0 */  isRaw={typeof StrokeFadeOutLength === "object" && "isRaw" in StrokeFadeOutLength && StrokeFadeOutLength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrokeGroupFinishWaitTime" id={typeof StrokeGroupFinishWaitTime === "object" && "id" in StrokeGroupFinishWaitTime ? StrokeGroupFinishWaitTime?.id : undefined} value={typeof StrokeGroupFinishWaitTime === "object" && "value" in StrokeGroupFinishWaitTime ? StrokeGroupFinishWaitTime?.value : StrokeGroupFinishWaitTime} /* default: 0 */  isRaw={typeof StrokeGroupFinishWaitTime === "object" && "isRaw" in StrokeGroupFinishWaitTime && StrokeGroupFinishWaitTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ActivationThreshold" id={typeof ActivationThreshold === "object" && "id" in ActivationThreshold ? ActivationThreshold?.id : undefined} value={typeof ActivationThreshold === "object" && "value" in ActivationThreshold ? ActivationThreshold?.value : ActivationThreshold} /* default: 0 */  isRaw={typeof ActivationThreshold === "object" && "isRaw" in ActivationThreshold && ActivationThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DeactivationThresholdRatio" id={typeof DeactivationThresholdRatio === "object" && "id" in DeactivationThresholdRatio ? DeactivationThresholdRatio?.id : undefined} value={typeof DeactivationThresholdRatio === "object" && "value" in DeactivationThresholdRatio ? DeactivationThresholdRatio?.value : DeactivationThresholdRatio} /* default: 0 */  isRaw={typeof DeactivationThresholdRatio === "object" && "isRaw" in DeactivationThresholdRatio && DeactivationThresholdRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapTip" id={typeof SnapTip === "object" && "id" in SnapTip ? SnapTip?.id : undefined} value={typeof SnapTip === "object" && "value" in SnapTip ? SnapTip?.value : SnapTip} /* default: false */  isRaw={typeof SnapTip === "object" && "isRaw" in SnapTip && SnapTip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapLine" id={typeof SnapLine === "object" && "id" in SnapLine ? SnapLine?.id : undefined} value={typeof SnapLine === "object" && "value" in SnapLine ? SnapLine?.value : SnapLine} /* default: false */  isRaw={typeof SnapLine === "object" && "isRaw" in SnapLine && SnapLine.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="StrokesRootOverride" id={typeof StrokesRootOverride === "object" && "id" in StrokesRootOverride ? StrokesRootOverride?.id : undefined} value={typeof StrokesRootOverride === "object" && "value" in StrokesRootOverride ? StrokesRootOverride?.value : StrokesRootOverride} /* default: ID0 */  isRaw={typeof StrokesRootOverride === "object" && "isRaw" in StrokesRootOverride && StrokesRootOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PickMaterials" id={typeof PickMaterials === "object" && "id" in PickMaterials ? PickMaterials?.id : undefined} value={typeof PickMaterials === "object" && "value" in PickMaterials ? PickMaterials?.value : PickMaterials} /* default: false */  isRaw={typeof PickMaterials === "object" && "isRaw" in PickMaterials && PickMaterials.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PickColors" id={typeof PickColors === "object" && "id" in PickColors ? PickColors?.id : undefined} value={typeof PickColors === "object" && "value" in PickColors ? PickColors?.value : PickColors} /* default: false */  isRaw={typeof PickColors === "object" && "isRaw" in PickColors && PickColors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="CurrentMaterial" id={typeof CurrentMaterial === "object" && "id" in CurrentMaterial ? CurrentMaterial?.id : undefined} value={typeof CurrentMaterial === "object" && "value" in CurrentMaterial ? CurrentMaterial?.value : CurrentMaterial} /* default: ID0 */  isRaw={typeof CurrentMaterial === "object" && "isRaw" in CurrentMaterial && CurrentMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.BrushTip+ColorMapping]`} name="ColorMappings" id={typeof ColorMappings === "object" && "id" in ColorMappings ? ColorMappings?.id : undefined} value={typeof ColorMappings === "object" && "value" in ColorMappings ? ColorMappings?.value : ColorMappings} /* default: FrooxEngine.SyncList`1[FrooxEngine.BrushTip+ColorMapping] */  isRaw={typeof ColorMappings === "object" && "isRaw" in ColorMappings && ColorMappings.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.NeosColorDialog]`} name="_colorPicker" id={typeof _colorPicker === "object" && "id" in _colorPicker ? _colorPicker?.id : undefined} value={typeof _colorPicker === "object" && "value" in _colorPicker ? _colorPicker?.value : _colorPicker} /* default: ID0 */  isRaw={typeof _colorPicker === "object" && "isRaw" in _colorPicker && _colorPicker.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="_pickedColor" id={typeof _pickedColor === "object" && "id" in _pickedColor ? _pickedColor?.id : undefined} value={typeof _pickedColor === "object" && "value" in _pickedColor ? _pickedColor?.value : _pickedColor} /* default: [0; 0; 0; 0] */  isRaw={typeof _pickedColor === "object" && "isRaw" in _pickedColor && _pickedColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="_hideOnStroke" id={typeof _hideOnStroke === "object" && "id" in _hideOnStroke ? _hideOnStroke?.id : undefined} value={typeof _hideOnStroke === "object" && "value" in _hideOnStroke ? _hideOnStroke?.value : _hideOnStroke} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  isRaw={typeof _hideOnStroke === "object" && "isRaw" in _hideOnStroke && _hideOnStroke.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="_lastUsedMaterial" id={typeof _lastUsedMaterial === "object" && "id" in _lastUsedMaterial ? _lastUsedMaterial?.id : undefined} value={typeof _lastUsedMaterial === "object" && "value" in _lastUsedMaterial ? _lastUsedMaterial?.value : _lastUsedMaterial} /* default: ID0 */  isRaw={typeof _lastUsedMaterial === "object" && "isRaw" in _lastUsedMaterial && _lastUsedMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="_lastCreatedMaterial" id={typeof _lastCreatedMaterial === "object" && "id" in _lastCreatedMaterial ? _lastCreatedMaterial?.id : undefined} value={typeof _lastCreatedMaterial === "object" && "value" in _lastCreatedMaterial ? _lastCreatedMaterial?.value : _lastCreatedMaterial} /* default: ID0 */  isRaw={typeof _lastCreatedMaterial === "object" && "isRaw" in _lastCreatedMaterial && _lastCreatedMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="MinHullPointDistance" id={typeof MinHullPointDistance === "object" && "id" in MinHullPointDistance ? MinHullPointDistance?.id : undefined} value={typeof MinHullPointDistance === "object" && "value" in MinHullPointDistance ? MinHullPointDistance?.value : MinHullPointDistance} /* default: 0 */  isRaw={typeof MinHullPointDistance === "object" && "isRaw" in MinHullPointDistance && MinHullPointDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FlatShading" id={typeof FlatShading === "object" && "id" in FlatShading ? FlatShading?.id : undefined} value={typeof FlatShading === "object" && "value" in FlatShading ? FlatShading?.value : FlatShading} /* default: false */  isRaw={typeof FlatShading === "object" && "isRaw" in FlatShading && FlatShading.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PointSpread" id={typeof PointSpread === "object" && "id" in PointSpread ? PointSpread?.id : undefined} value={typeof PointSpread === "object" && "value" in PointSpread ? PointSpread?.value : PointSpread} /* default: 0 */  isRaw={typeof PointSpread === "object" && "isRaw" in PointSpread && PointSpread.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipAnchor" id={typeof TipAnchor === "object" && "id" in TipAnchor ? TipAnchor?.id : undefined} value={typeof TipAnchor === "object" && "value" in TipAnchor ? TipAnchor?.value : TipAnchor} /* default: ID0 */  isRaw={typeof TipAnchor === "object" && "isRaw" in TipAnchor && TipAnchor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.MeshRenderer]`} name="MaterialPreviews" id={typeof MaterialPreviews === "object" && "id" in MaterialPreviews ? MaterialPreviews?.id : undefined} value={typeof MaterialPreviews === "object" && "value" in MaterialPreviews ? MaterialPreviews?.value : MaterialPreviews} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.MeshRenderer] */  isRaw={typeof MaterialPreviews === "object" && "isRaw" in MaterialPreviews && MaterialPreviews.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ConvexHullMesh]`} name="_currentHull" id={typeof _currentHull === "object" && "id" in _currentHull ? _currentHull?.id : undefined} value={typeof _currentHull === "object" && "value" in _currentHull ? _currentHull?.value : _currentHull} /* default: ID0 */  isRaw={typeof _currentHull === "object" && "isRaw" in _currentHull && _currentHull.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.ConvexHullMesh]`} name="_previewMesh" id={typeof _previewMesh === "object" && "id" in _previewMesh ? _previewMesh?.id : undefined} value={typeof _previewMesh === "object" && "value" in _previewMesh ? _previewMesh?.value : _previewMesh} /* default: ID0 */  isRaw={typeof _previewMesh === "object" && "isRaw" in _previewMesh && _previewMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_previewMeshOffset" id={typeof _previewMeshOffset === "object" && "id" in _previewMeshOffset ? _previewMeshOffset?.id : undefined} value={typeof _previewMeshOffset === "object" && "value" in _previewMeshOffset ? _previewMeshOffset?.value : _previewMeshOffset} /* default: ID0 */  isRaw={typeof _previewMeshOffset === "object" && "isRaw" in _previewMeshOffset && _previewMeshOffset.isRaw ? true : undefined} />
        </Component>
      );
    };
    