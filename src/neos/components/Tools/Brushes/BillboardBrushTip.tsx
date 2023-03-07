import { member, Member, Component } from "../../../core";
    
    export interface BillboardBrushTipInput {
        
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
MinColor?: member<[number, number, number, number]>;
MaxColor?: member<[number, number, number, number]>;
ColorGap?: member<number>;
MinSize?: member<[number, number]>;
MaxSize?: member<[number, number]>;
SizeGap?: member<number>;
AtlasInfo?: member<any>;
PressureAffectsSize?: member<boolean>;
PressureAffectsAlpha?: member<boolean>;
PressureAffectsIntensity?: member<boolean>;
UseColor?: member<boolean>;
PointColor?: member<any>;
PointSize?: member<any>;
PointUV?: member<any>;
MinRotation?: member<number>;
MaxRotation?: member<number>;
RotationGap?: member<number>;
UseRotation?: member<boolean>;
UseSize?: member<boolean>;
UseUV?: member<boolean>;
PointRotation?: member<any>;
_previewRenderer?: member<any>;
_previewMesh?: member<any>;
_previewMeshOffset?: member<any>;
    }
    
    export function BillboardBrushTip(props: BillboardBrushTipInput){
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
MinColor,
MaxColor,
ColorGap,
MinSize,
MaxSize,
SizeGap,
AtlasInfo,
PressureAffectsSize,
PressureAffectsAlpha,
PressureAffectsIntensity,
UseColor,
PointColor,
PointSize,
PointUV,
MinRotation,
MaxRotation,
RotationGap,
UseRotation,
UseSize,
UseUV,
PointRotation,
_previewRenderer,
_previewMesh,
_previewMeshOffset, } = props;
    
      return (
        <Component type="FrooxEngine.BillboardBrushTip" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FixedMinimumPointDistance" id={typeof FixedMinimumPointDistance === "object" && "id" in FixedMinimumPointDistance ? FixedMinimumPointDistance?.id : undefined} value={typeof FixedMinimumPointDistance === "object" && "value" in FixedMinimumPointDistance ? FixedMinimumPointDistance?.value : FixedMinimumPointDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionSmoothing" id={typeof PositionSmoothing === "object" && "id" in PositionSmoothing ? PositionSmoothing?.id : undefined} value={typeof PositionSmoothing === "object" && "value" in PositionSmoothing ? PositionSmoothing?.value : PositionSmoothing} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RotationSmoothing" id={typeof RotationSmoothing === "object" && "id" in RotationSmoothing ? RotationSmoothing?.id : undefined} value={typeof RotationSmoothing === "object" && "value" in RotationSmoothing ? RotationSmoothing?.value : RotationSmoothing} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PressureSmoothing" id={typeof PressureSmoothing === "object" && "id" in PressureSmoothing ? PressureSmoothing?.id : undefined} value={typeof PressureSmoothing === "object" && "value" in PressureSmoothing ? PressureSmoothing?.value : PressureSmoothing} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxStrokeLength" id={typeof MaxStrokeLength === "object" && "id" in MaxStrokeLength ? MaxStrokeLength?.id : undefined} value={typeof MaxStrokeLength === "object" && "value" in MaxStrokeLength ? MaxStrokeLength?.value : MaxStrokeLength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrokeFadeInLength" id={typeof StrokeFadeInLength === "object" && "id" in StrokeFadeInLength ? StrokeFadeInLength?.id : undefined} value={typeof StrokeFadeInLength === "object" && "value" in StrokeFadeInLength ? StrokeFadeInLength?.value : StrokeFadeInLength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrokeFadeOutLength" id={typeof StrokeFadeOutLength === "object" && "id" in StrokeFadeOutLength ? StrokeFadeOutLength?.id : undefined} value={typeof StrokeFadeOutLength === "object" && "value" in StrokeFadeOutLength ? StrokeFadeOutLength?.value : StrokeFadeOutLength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrokeGroupFinishWaitTime" id={typeof StrokeGroupFinishWaitTime === "object" && "id" in StrokeGroupFinishWaitTime ? StrokeGroupFinishWaitTime?.id : undefined} value={typeof StrokeGroupFinishWaitTime === "object" && "value" in StrokeGroupFinishWaitTime ? StrokeGroupFinishWaitTime?.value : StrokeGroupFinishWaitTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ActivationThreshold" id={typeof ActivationThreshold === "object" && "id" in ActivationThreshold ? ActivationThreshold?.id : undefined} value={typeof ActivationThreshold === "object" && "value" in ActivationThreshold ? ActivationThreshold?.value : ActivationThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DeactivationThresholdRatio" id={typeof DeactivationThresholdRatio === "object" && "id" in DeactivationThresholdRatio ? DeactivationThresholdRatio?.id : undefined} value={typeof DeactivationThresholdRatio === "object" && "value" in DeactivationThresholdRatio ? DeactivationThresholdRatio?.value : DeactivationThresholdRatio} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapTip" id={typeof SnapTip === "object" && "id" in SnapTip ? SnapTip?.id : undefined} value={typeof SnapTip === "object" && "value" in SnapTip ? SnapTip?.value : SnapTip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapLine" id={typeof SnapLine === "object" && "id" in SnapLine ? SnapLine?.id : undefined} value={typeof SnapLine === "object" && "value" in SnapLine ? SnapLine?.value : SnapLine} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="StrokesRootOverride" id={typeof StrokesRootOverride === "object" && "id" in StrokesRootOverride ? StrokesRootOverride?.id : undefined} value={typeof StrokesRootOverride === "object" && "value" in StrokesRootOverride ? StrokesRootOverride?.value : StrokesRootOverride} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PickMaterials" id={typeof PickMaterials === "object" && "id" in PickMaterials ? PickMaterials?.id : undefined} value={typeof PickMaterials === "object" && "value" in PickMaterials ? PickMaterials?.value : PickMaterials} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PickColors" id={typeof PickColors === "object" && "id" in PickColors ? PickColors?.id : undefined} value={typeof PickColors === "object" && "value" in PickColors ? PickColors?.value : PickColors} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="CurrentMaterial" id={typeof CurrentMaterial === "object" && "id" in CurrentMaterial ? CurrentMaterial?.id : undefined} value={typeof CurrentMaterial === "object" && "value" in CurrentMaterial ? CurrentMaterial?.value : CurrentMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.BrushTip+ColorMapping]`} name="ColorMappings" id={typeof ColorMappings === "object" && "id" in ColorMappings ? ColorMappings?.id : undefined} value={typeof ColorMappings === "object" && "value" in ColorMappings ? ColorMappings?.value : ColorMappings} /* default: FrooxEngine.SyncList`1[FrooxEngine.BrushTip+ColorMapping] */  />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.NeosColorDialog]`} name="_colorPicker" id={typeof _colorPicker === "object" && "id" in _colorPicker ? _colorPicker?.id : undefined} value={typeof _colorPicker === "object" && "value" in _colorPicker ? _colorPicker?.value : _colorPicker} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="_pickedColor" id={typeof _pickedColor === "object" && "id" in _pickedColor ? _pickedColor?.id : undefined} value={typeof _pickedColor === "object" && "value" in _pickedColor ? _pickedColor?.value : _pickedColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="_hideOnStroke" id={typeof _hideOnStroke === "object" && "id" in _hideOnStroke ? _hideOnStroke?.id : undefined} value={typeof _hideOnStroke === "object" && "value" in _hideOnStroke ? _hideOnStroke?.value : _hideOnStroke} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="_lastUsedMaterial" id={typeof _lastUsedMaterial === "object" && "id" in _lastUsedMaterial ? _lastUsedMaterial?.id : undefined} value={typeof _lastUsedMaterial === "object" && "value" in _lastUsedMaterial ? _lastUsedMaterial?.value : _lastUsedMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="_lastCreatedMaterial" id={typeof _lastCreatedMaterial === "object" && "id" in _lastCreatedMaterial ? _lastCreatedMaterial?.id : undefined} value={typeof _lastCreatedMaterial === "object" && "value" in _lastCreatedMaterial ? _lastCreatedMaterial?.value : _lastCreatedMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipAnchor" id={typeof TipAnchor === "object" && "id" in TipAnchor ? TipAnchor?.id : undefined} value={typeof TipAnchor === "object" && "value" in TipAnchor ? TipAnchor?.value : TipAnchor} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrokePointRate" id={typeof StrokePointRate === "object" && "id" in StrokePointRate ? StrokePointRate?.id : undefined} value={typeof StrokePointRate === "object" && "value" in StrokePointRate ? StrokePointRate?.value : StrokePointRate} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ConstantPointRate" id={typeof ConstantPointRate === "object" && "id" in ConstantPointRate ? ConstantPointRate?.id : undefined} value={typeof ConstantPointRate === "object" && "value" in ConstantPointRate ? ConstantPointRate?.value : ConstantPointRate} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PressureAffectsRate" id={typeof PressureAffectsRate === "object" && "id" in PressureAffectsRate ? PressureAffectsRate?.id : undefined} value={typeof PressureAffectsRate === "object" && "value" in PressureAffectsRate ? PressureAffectsRate?.value : PressureAffectsRate} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PressureAffectsRadius" id={typeof PressureAffectsRadius === "object" && "id" in PressureAffectsRadius ? PressureAffectsRadius?.id : undefined} value={typeof PressureAffectsRadius === "object" && "value" in PressureAffectsRadius ? PressureAffectsRadius?.value : PressureAffectsRadius} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ParticleSpawnRadius" id={typeof ParticleSpawnRadius === "object" && "id" in ParticleSpawnRadius ? ParticleSpawnRadius?.id : undefined} value={typeof ParticleSpawnRadius === "object" && "value" in ParticleSpawnRadius ? ParticleSpawnRadius?.value : ParticleSpawnRadius} /* default: 0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="PointRate" id={typeof PointRate === "object" && "id" in PointRate ? PointRate?.id : undefined} value={typeof PointRate === "object" && "value" in PointRate ? PointRate?.value : PointRate} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="ParticleOffset" id={typeof ParticleOffset === "object" && "id" in ParticleOffset ? ParticleOffset?.id : undefined} value={typeof ParticleOffset === "object" && "value" in ParticleOffset ? ParticleOffset?.value : ParticleOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapPoints" id={typeof SnapPoints === "object" && "id" in SnapPoints ? SnapPoints?.id : undefined} value={typeof SnapPoints === "object" && "value" in SnapPoints ? SnapPoints?.value : SnapPoints} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MinColor" id={typeof MinColor === "object" && "id" in MinColor ? MinColor?.id : undefined} value={typeof MinColor === "object" && "value" in MinColor ? MinColor?.value : MinColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MaxColor" id={typeof MaxColor === "object" && "id" in MaxColor ? MaxColor?.id : undefined} value={typeof MaxColor === "object" && "value" in MaxColor ? MaxColor?.value : MaxColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ColorGap" id={typeof ColorGap === "object" && "id" in ColorGap ? ColorGap?.id : undefined} value={typeof ColorGap === "object" && "value" in ColorGap ? ColorGap?.value : ColorGap} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MinSize" id={typeof MinSize === "object" && "id" in MinSize ? MinSize?.id : undefined} value={typeof MinSize === "object" && "value" in MinSize ? MinSize?.value : MinSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MaxSize" id={typeof MaxSize === "object" && "id" in MaxSize ? MaxSize?.id : undefined} value={typeof MaxSize === "object" && "value" in MaxSize ? MaxSize?.value : MaxSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SizeGap" id={typeof SizeGap === "object" && "id" in SizeGap ? SizeGap?.id : undefined} value={typeof SizeGap === "object" && "value" in SizeGap ? SizeGap?.value : SizeGap} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AtlasInfo]`} name="AtlasInfo" id={typeof AtlasInfo === "object" && "id" in AtlasInfo ? AtlasInfo?.id : undefined} value={typeof AtlasInfo === "object" && "value" in AtlasInfo ? AtlasInfo?.value : AtlasInfo} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PressureAffectsSize" id={typeof PressureAffectsSize === "object" && "id" in PressureAffectsSize ? PressureAffectsSize?.id : undefined} value={typeof PressureAffectsSize === "object" && "value" in PressureAffectsSize ? PressureAffectsSize?.value : PressureAffectsSize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PressureAffectsAlpha" id={typeof PressureAffectsAlpha === "object" && "id" in PressureAffectsAlpha ? PressureAffectsAlpha?.id : undefined} value={typeof PressureAffectsAlpha === "object" && "value" in PressureAffectsAlpha ? PressureAffectsAlpha?.value : PressureAffectsAlpha} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PressureAffectsIntensity" id={typeof PressureAffectsIntensity === "object" && "id" in PressureAffectsIntensity ? PressureAffectsIntensity?.id : undefined} value={typeof PressureAffectsIntensity === "object" && "value" in PressureAffectsIntensity ? PressureAffectsIntensity?.value : PressureAffectsIntensity} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseColor" id={typeof UseColor === "object" && "id" in UseColor ? UseColor?.id : undefined} value={typeof UseColor === "object" && "value" in UseColor ? UseColor?.value : UseColor} /* default: false */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="PointColor" id={typeof PointColor === "object" && "id" in PointColor ? PointColor?.id : undefined} value={typeof PointColor === "object" && "value" in PointColor ? PointColor?.value : PointColor} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float2]`} name="PointSize" id={typeof PointSize === "object" && "id" in PointSize ? PointSize?.id : undefined} value={typeof PointSize === "object" && "value" in PointSize ? PointSize?.value : PointSize} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float4]`} name="PointUV" id={typeof PointUV === "object" && "id" in PointUV ? PointUV?.id : undefined} value={typeof PointUV === "object" && "value" in PointUV ? PointUV?.value : PointUV} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinRotation" id={typeof MinRotation === "object" && "id" in MinRotation ? MinRotation?.id : undefined} value={typeof MinRotation === "object" && "value" in MinRotation ? MinRotation?.value : MinRotation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxRotation" id={typeof MaxRotation === "object" && "id" in MaxRotation ? MaxRotation?.id : undefined} value={typeof MaxRotation === "object" && "value" in MaxRotation ? MaxRotation?.value : MaxRotation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RotationGap" id={typeof RotationGap === "object" && "id" in RotationGap ? RotationGap?.id : undefined} value={typeof RotationGap === "object" && "value" in RotationGap ? RotationGap?.value : RotationGap} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseRotation" id={typeof UseRotation === "object" && "id" in UseRotation ? UseRotation?.id : undefined} value={typeof UseRotation === "object" && "value" in UseRotation ? UseRotation?.value : UseRotation} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseSize" id={typeof UseSize === "object" && "id" in UseSize ? UseSize?.id : undefined} value={typeof UseSize === "object" && "value" in UseSize ? UseSize?.value : UseSize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseUV" id={typeof UseUV === "object" && "id" in UseUV ? UseUV?.id : undefined} value={typeof UseUV === "object" && "value" in UseUV ? UseUV?.value : UseUV} /* default: false */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="PointRotation" id={typeof PointRotation === "object" && "id" in PointRotation ? PointRotation?.id : undefined} value={typeof PointRotation === "object" && "value" in PointRotation ? PointRotation?.value : PointRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="_previewRenderer" id={typeof _previewRenderer === "object" && "id" in _previewRenderer ? _previewRenderer?.id : undefined} value={typeof _previewRenderer === "object" && "value" in _previewRenderer ? _previewRenderer?.value : _previewRenderer} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PointMesh]`} name="_previewMesh" id={typeof _previewMesh === "object" && "id" in _previewMesh ? _previewMesh?.id : undefined} value={typeof _previewMesh === "object" && "value" in _previewMesh ? _previewMesh?.value : _previewMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_previewMeshOffset" id={typeof _previewMeshOffset === "object" && "id" in _previewMeshOffset ? _previewMeshOffset?.id : undefined} value={typeof _previewMeshOffset === "object" && "value" in _previewMeshOffset ? _previewMeshOffset?.value : _previewMeshOffset} /* default: ID0 */  />
        </Component>
      );
    };
    