import { member, Member, Component } from "../../../core";
    
    export interface BoxBrushTipInput {
        
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
TipAnchor?: member<any>;
StrokePointRate?: member<number>;
ConstantPointRate?: member<number>;
PressureAffectsRate?: member<boolean>;
PressureAffectsRadius?: member<boolean>;
ParticleSpawnRadius?: member<number>;
PointRate?: member<any>;
ParticleOffset?: member<any>;
SnapPoints?: member<boolean>;
Pivot?: member<[number, number, number]>;
MinColor?: member<[number, number, number, number]>;
MaxColor?: member<[number, number, number, number]>;
ColorGap?: member<number>;
UniformSize?: member<boolean>;
MinSize?: member<[number, number, number]>;
MaxSize?: member<[number, number, number]>;
SizeGap?: member<number>;
MinRotation?: member<[number, number, number]>;
MaxRotation?: member<[number, number, number]>;
MinUVScale?: member<[number, number, number]>;
MaxUVScale?: member<[number, number, number]>;
UVScaleGap?: member<number>;
RotationSpace?: member<any>;
UseColor?: member<boolean>;
ScaleUVWithSize?: member<boolean>;
BoxColor?: member<any>;
BoxSize?: member<any>;
BoxRotation?: member<[number, number, number, number]>;
BoxUVScale?: member<any>;
_previewRenderer?: member<any>;
_previewMesh?: member<any>;
_previewMeshOffset?: member<any>;
_previewMeshRotation?: member<any>;
    }
    
    export function BoxBrushTip(props: BoxBrushTipInput){
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
TipAnchor,
StrokePointRate,
ConstantPointRate,
PressureAffectsRate,
PressureAffectsRadius,
ParticleSpawnRadius,
PointRate,
ParticleOffset,
SnapPoints,
Pivot,
MinColor,
MaxColor,
ColorGap,
UniformSize,
MinSize,
MaxSize,
SizeGap,
MinRotation,
MaxRotation,
MinUVScale,
MaxUVScale,
UVScaleGap,
RotationSpace,
UseColor,
ScaleUVWithSize,
BoxColor,
BoxSize,
BoxRotation,
BoxUVScale,
_previewRenderer,
_previewMesh,
_previewMeshOffset,
_previewMeshRotation, } = props;
    
      return (
        <Component type="FrooxEngine.BoxBrushTip" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
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
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipAnchor" id={typeof TipAnchor === "object" && "id" in TipAnchor ? TipAnchor?.id : undefined} value={typeof TipAnchor === "object" && "value" in TipAnchor ? TipAnchor?.value : TipAnchor} /* default: ID0 */  isRaw={typeof TipAnchor === "object" && "isRaw" in TipAnchor && TipAnchor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrokePointRate" id={typeof StrokePointRate === "object" && "id" in StrokePointRate ? StrokePointRate?.id : undefined} value={typeof StrokePointRate === "object" && "value" in StrokePointRate ? StrokePointRate?.value : StrokePointRate} /* default: 0 */  isRaw={typeof StrokePointRate === "object" && "isRaw" in StrokePointRate && StrokePointRate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ConstantPointRate" id={typeof ConstantPointRate === "object" && "id" in ConstantPointRate ? ConstantPointRate?.id : undefined} value={typeof ConstantPointRate === "object" && "value" in ConstantPointRate ? ConstantPointRate?.value : ConstantPointRate} /* default: 0 */  isRaw={typeof ConstantPointRate === "object" && "isRaw" in ConstantPointRate && ConstantPointRate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PressureAffectsRate" id={typeof PressureAffectsRate === "object" && "id" in PressureAffectsRate ? PressureAffectsRate?.id : undefined} value={typeof PressureAffectsRate === "object" && "value" in PressureAffectsRate ? PressureAffectsRate?.value : PressureAffectsRate} /* default: false */  isRaw={typeof PressureAffectsRate === "object" && "isRaw" in PressureAffectsRate && PressureAffectsRate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PressureAffectsRadius" id={typeof PressureAffectsRadius === "object" && "id" in PressureAffectsRadius ? PressureAffectsRadius?.id : undefined} value={typeof PressureAffectsRadius === "object" && "value" in PressureAffectsRadius ? PressureAffectsRadius?.value : PressureAffectsRadius} /* default: false */  isRaw={typeof PressureAffectsRadius === "object" && "isRaw" in PressureAffectsRadius && PressureAffectsRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ParticleSpawnRadius" id={typeof ParticleSpawnRadius === "object" && "id" in ParticleSpawnRadius ? ParticleSpawnRadius?.id : undefined} value={typeof ParticleSpawnRadius === "object" && "value" in ParticleSpawnRadius ? ParticleSpawnRadius?.value : ParticleSpawnRadius} /* default: 0 */  isRaw={typeof ParticleSpawnRadius === "object" && "isRaw" in ParticleSpawnRadius && ParticleSpawnRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="PointRate" id={typeof PointRate === "object" && "id" in PointRate ? PointRate?.id : undefined} value={typeof PointRate === "object" && "value" in PointRate ? PointRate?.value : PointRate} /* default: ID0 */  isRaw={typeof PointRate === "object" && "isRaw" in PointRate && PointRate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="ParticleOffset" id={typeof ParticleOffset === "object" && "id" in ParticleOffset ? ParticleOffset?.id : undefined} value={typeof ParticleOffset === "object" && "value" in ParticleOffset ? ParticleOffset?.value : ParticleOffset} /* default: ID0 */  isRaw={typeof ParticleOffset === "object" && "isRaw" in ParticleOffset && ParticleOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapPoints" id={typeof SnapPoints === "object" && "id" in SnapPoints ? SnapPoints?.id : undefined} value={typeof SnapPoints === "object" && "value" in SnapPoints ? SnapPoints?.value : SnapPoints} /* default: false */  isRaw={typeof SnapPoints === "object" && "isRaw" in SnapPoints && SnapPoints.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Pivot" id={typeof Pivot === "object" && "id" in Pivot ? Pivot?.id : undefined} value={typeof Pivot === "object" && "value" in Pivot ? Pivot?.value : Pivot} /* default: [0; 0; 0] */  isRaw={typeof Pivot === "object" && "isRaw" in Pivot && Pivot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MinColor" id={typeof MinColor === "object" && "id" in MinColor ? MinColor?.id : undefined} value={typeof MinColor === "object" && "value" in MinColor ? MinColor?.value : MinColor} /* default: [0; 0; 0; 0] */  isRaw={typeof MinColor === "object" && "isRaw" in MinColor && MinColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MaxColor" id={typeof MaxColor === "object" && "id" in MaxColor ? MaxColor?.id : undefined} value={typeof MaxColor === "object" && "value" in MaxColor ? MaxColor?.value : MaxColor} /* default: [0; 0; 0; 0] */  isRaw={typeof MaxColor === "object" && "isRaw" in MaxColor && MaxColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ColorGap" id={typeof ColorGap === "object" && "id" in ColorGap ? ColorGap?.id : undefined} value={typeof ColorGap === "object" && "value" in ColorGap ? ColorGap?.value : ColorGap} /* default: 0 */  isRaw={typeof ColorGap === "object" && "isRaw" in ColorGap && ColorGap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UniformSize" id={typeof UniformSize === "object" && "id" in UniformSize ? UniformSize?.id : undefined} value={typeof UniformSize === "object" && "value" in UniformSize ? UniformSize?.value : UniformSize} /* default: false */  isRaw={typeof UniformSize === "object" && "isRaw" in UniformSize && UniformSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MinSize" id={typeof MinSize === "object" && "id" in MinSize ? MinSize?.id : undefined} value={typeof MinSize === "object" && "value" in MinSize ? MinSize?.value : MinSize} /* default: [0; 0; 0] */  isRaw={typeof MinSize === "object" && "isRaw" in MinSize && MinSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MaxSize" id={typeof MaxSize === "object" && "id" in MaxSize ? MaxSize?.id : undefined} value={typeof MaxSize === "object" && "value" in MaxSize ? MaxSize?.value : MaxSize} /* default: [0; 0; 0] */  isRaw={typeof MaxSize === "object" && "isRaw" in MaxSize && MaxSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SizeGap" id={typeof SizeGap === "object" && "id" in SizeGap ? SizeGap?.id : undefined} value={typeof SizeGap === "object" && "value" in SizeGap ? SizeGap?.value : SizeGap} /* default: 0 */  isRaw={typeof SizeGap === "object" && "isRaw" in SizeGap && SizeGap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MinRotation" id={typeof MinRotation === "object" && "id" in MinRotation ? MinRotation?.id : undefined} value={typeof MinRotation === "object" && "value" in MinRotation ? MinRotation?.value : MinRotation} /* default: [0; 0; 0] */  isRaw={typeof MinRotation === "object" && "isRaw" in MinRotation && MinRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MaxRotation" id={typeof MaxRotation === "object" && "id" in MaxRotation ? MaxRotation?.id : undefined} value={typeof MaxRotation === "object" && "value" in MaxRotation ? MaxRotation?.value : MaxRotation} /* default: [0; 0; 0] */  isRaw={typeof MaxRotation === "object" && "isRaw" in MaxRotation && MaxRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MinUVScale" id={typeof MinUVScale === "object" && "id" in MinUVScale ? MinUVScale?.id : undefined} value={typeof MinUVScale === "object" && "value" in MinUVScale ? MinUVScale?.value : MinUVScale} /* default: [0; 0; 0] */  isRaw={typeof MinUVScale === "object" && "isRaw" in MinUVScale && MinUVScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MaxUVScale" id={typeof MaxUVScale === "object" && "id" in MaxUVScale ? MaxUVScale?.id : undefined} value={typeof MaxUVScale === "object" && "value" in MaxUVScale ? MaxUVScale?.value : MaxUVScale} /* default: [0; 0; 0] */  isRaw={typeof MaxUVScale === "object" && "isRaw" in MaxUVScale && MaxUVScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UVScaleGap" id={typeof UVScaleGap === "object" && "id" in UVScaleGap ? UVScaleGap?.id : undefined} value={typeof UVScaleGap === "object" && "value" in UVScaleGap ? UVScaleGap?.value : UVScaleGap} /* default: 0 */  isRaw={typeof UVScaleGap === "object" && "isRaw" in UVScaleGap && UVScaleGap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="RotationSpace" id={typeof RotationSpace === "object" && "id" in RotationSpace ? RotationSpace?.id : undefined} value={typeof RotationSpace === "object" && "value" in RotationSpace ? RotationSpace?.value : RotationSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof RotationSpace === "object" && "isRaw" in RotationSpace && RotationSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseColor" id={typeof UseColor === "object" && "id" in UseColor ? UseColor?.id : undefined} value={typeof UseColor === "object" && "value" in UseColor ? UseColor?.value : UseColor} /* default: false */  isRaw={typeof UseColor === "object" && "isRaw" in UseColor && UseColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScaleUVWithSize" id={typeof ScaleUVWithSize === "object" && "id" in ScaleUVWithSize ? ScaleUVWithSize?.id : undefined} value={typeof ScaleUVWithSize === "object" && "value" in ScaleUVWithSize ? ScaleUVWithSize?.value : ScaleUVWithSize} /* default: false */  isRaw={typeof ScaleUVWithSize === "object" && "isRaw" in ScaleUVWithSize && ScaleUVWithSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="BoxColor" id={typeof BoxColor === "object" && "id" in BoxColor ? BoxColor?.id : undefined} value={typeof BoxColor === "object" && "value" in BoxColor ? BoxColor?.value : BoxColor} /* default: ID0 */  isRaw={typeof BoxColor === "object" && "isRaw" in BoxColor && BoxColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="BoxSize" id={typeof BoxSize === "object" && "id" in BoxSize ? BoxSize?.id : undefined} value={typeof BoxSize === "object" && "value" in BoxSize ? BoxSize?.value : BoxSize} /* default: ID0 */  isRaw={typeof BoxSize === "object" && "isRaw" in BoxSize && BoxSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="BoxRotation" id={typeof BoxRotation === "object" && "id" in BoxRotation ? BoxRotation?.id : undefined} value={typeof BoxRotation === "object" && "value" in BoxRotation ? BoxRotation?.value : BoxRotation} /* default: ID0 */  isRaw={typeof BoxRotation === "object" && "isRaw" in BoxRotation && BoxRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="BoxUVScale" id={typeof BoxUVScale === "object" && "id" in BoxUVScale ? BoxUVScale?.id : undefined} value={typeof BoxUVScale === "object" && "value" in BoxUVScale ? BoxUVScale?.value : BoxUVScale} /* default: ID0 */  isRaw={typeof BoxUVScale === "object" && "isRaw" in BoxUVScale && BoxUVScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="_previewRenderer" id={typeof _previewRenderer === "object" && "id" in _previewRenderer ? _previewRenderer?.id : undefined} value={typeof _previewRenderer === "object" && "value" in _previewRenderer ? _previewRenderer?.value : _previewRenderer} /* default: ID0 */  isRaw={typeof _previewRenderer === "object" && "isRaw" in _previewRenderer && _previewRenderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BoxArrayMesh]`} name="_previewMesh" id={typeof _previewMesh === "object" && "id" in _previewMesh ? _previewMesh?.id : undefined} value={typeof _previewMesh === "object" && "value" in _previewMesh ? _previewMesh?.value : _previewMesh} /* default: ID0 */  isRaw={typeof _previewMesh === "object" && "isRaw" in _previewMesh && _previewMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_previewMeshOffset" id={typeof _previewMeshOffset === "object" && "id" in _previewMeshOffset ? _previewMeshOffset?.id : undefined} value={typeof _previewMeshOffset === "object" && "value" in _previewMeshOffset ? _previewMeshOffset?.value : _previewMeshOffset} /* default: ID0 */  isRaw={typeof _previewMeshOffset === "object" && "isRaw" in _previewMeshOffset && _previewMeshOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_previewMeshRotation" id={typeof _previewMeshRotation === "object" && "id" in _previewMeshRotation ? _previewMeshRotation?.id : undefined} value={typeof _previewMeshRotation === "object" && "value" in _previewMeshRotation ? _previewMeshRotation?.value : _previewMeshRotation} /* default: ID0 */  isRaw={typeof _previewMeshRotation === "object" && "isRaw" in _previewMeshRotation && _previewMeshRotation.isRaw ? true : undefined} />
        </Component>
      );
    };
    