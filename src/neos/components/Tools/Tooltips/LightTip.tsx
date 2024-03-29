import { member, Member, Component } from "../../../core";
    
    export interface LightTipInput {
        
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
LightMode?: member<any>;
Color?: member<[number, number, number, number]>;
Intensity?: member<number>;
ShadowType?: member<any>;
ShadowStrength?: member<number>;
Range?: member<number>;
SpotAngle?: member<number>;
PointLightVisual?: member<any>;
SpotlightVisual?: member<any>;
DirectionalLightVisual?: member<any>;
ColorIndicators?: member<any>;
ShowGizmo?: member<boolean>;
_pointLightItem?: member<any>;
_spotLightItem?: member<any>;
_directionalLightItem?: member<any>;
_shadowsItem?: member<any>;
_colorPicker?: member<any>;
    }
    
    export function LightTip(props: LightTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
LightMode,
Color,
Intensity,
ShadowType,
ShadowStrength,
Range,
SpotAngle,
PointLightVisual,
SpotlightVisual,
DirectionalLightVisual,
ColorIndicators,
ShowGizmo,
_pointLightItem,
_spotLightItem,
_directionalLightItem,
_shadowsItem,
_colorPicker, } = props;
    
      return (
        <Component type="FrooxEngine.LightTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.LightTip+Mode]`} name="LightMode" id={typeof LightMode === "object" && "id" in LightMode ? LightMode?.id : undefined} value={typeof LightMode === "object" && "value" in LightMode ? LightMode?.value : LightMode} /* default: PointLight */  isRaw={typeof LightMode === "object" && "isRaw" in LightMode && LightMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Intensity" id={typeof Intensity === "object" && "id" in Intensity ? Intensity?.id : undefined} value={typeof Intensity === "object" && "value" in Intensity ? Intensity?.value : Intensity} /* default: 0 */  isRaw={typeof Intensity === "object" && "isRaw" in Intensity && Intensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ShadowType]`} name="ShadowType" id={typeof ShadowType === "object" && "id" in ShadowType ? ShadowType?.id : undefined} value={typeof ShadowType === "object" && "value" in ShadowType ? ShadowType?.value : ShadowType} /* default: None */  isRaw={typeof ShadowType === "object" && "isRaw" in ShadowType && ShadowType.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowStrength" id={typeof ShadowStrength === "object" && "id" in ShadowStrength ? ShadowStrength?.id : undefined} value={typeof ShadowStrength === "object" && "value" in ShadowStrength ? ShadowStrength?.value : ShadowStrength} /* default: 0 */  isRaw={typeof ShadowStrength === "object" && "isRaw" in ShadowStrength && ShadowStrength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Range" id={typeof Range === "object" && "id" in Range ? Range?.id : undefined} value={typeof Range === "object" && "value" in Range ? Range?.value : Range} /* default: 0 */  isRaw={typeof Range === "object" && "isRaw" in Range && Range.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpotAngle" id={typeof SpotAngle === "object" && "id" in SpotAngle ? SpotAngle?.id : undefined} value={typeof SpotAngle === "object" && "value" in SpotAngle ? SpotAngle?.value : SpotAngle} /* default: 0 */  isRaw={typeof SpotAngle === "object" && "isRaw" in SpotAngle && SpotAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PointLightVisual" id={typeof PointLightVisual === "object" && "id" in PointLightVisual ? PointLightVisual?.id : undefined} value={typeof PointLightVisual === "object" && "value" in PointLightVisual ? PointLightVisual?.value : PointLightVisual} /* default: ID0 */  isRaw={typeof PointLightVisual === "object" && "isRaw" in PointLightVisual && PointLightVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SpotlightVisual" id={typeof SpotlightVisual === "object" && "id" in SpotlightVisual ? SpotlightVisual?.id : undefined} value={typeof SpotlightVisual === "object" && "value" in SpotlightVisual ? SpotlightVisual?.value : SpotlightVisual} /* default: ID0 */  isRaw={typeof SpotlightVisual === "object" && "isRaw" in SpotlightVisual && SpotlightVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="DirectionalLightVisual" id={typeof DirectionalLightVisual === "object" && "id" in DirectionalLightVisual ? DirectionalLightVisual?.id : undefined} value={typeof DirectionalLightVisual === "object" && "value" in DirectionalLightVisual ? DirectionalLightVisual?.value : DirectionalLightVisual} /* default: ID0 */  isRaw={typeof DirectionalLightVisual === "object" && "isRaw" in DirectionalLightVisual && DirectionalLightVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[BaseX.color]]`} name="ColorIndicators" id={typeof ColorIndicators === "object" && "id" in ColorIndicators ? ColorIndicators?.id : undefined} value={typeof ColorIndicators === "object" && "value" in ColorIndicators ? ColorIndicators?.value : ColorIndicators} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[BaseX.color]] */  isRaw={typeof ColorIndicators === "object" && "isRaw" in ColorIndicators && ColorIndicators.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowGizmo" id={typeof ShowGizmo === "object" && "id" in ShowGizmo ? ShowGizmo?.id : undefined} value={typeof ShowGizmo === "object" && "value" in ShowGizmo ? ShowGizmo?.value : ShowGizmo} /* default: false */  isRaw={typeof ShowGizmo === "object" && "isRaw" in ShowGizmo && ShowGizmo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_pointLightItem" id={typeof _pointLightItem === "object" && "id" in _pointLightItem ? _pointLightItem?.id : undefined} value={typeof _pointLightItem === "object" && "value" in _pointLightItem ? _pointLightItem?.value : _pointLightItem} /* default: ID0 */  isRaw={typeof _pointLightItem === "object" && "isRaw" in _pointLightItem && _pointLightItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_spotLightItem" id={typeof _spotLightItem === "object" && "id" in _spotLightItem ? _spotLightItem?.id : undefined} value={typeof _spotLightItem === "object" && "value" in _spotLightItem ? _spotLightItem?.value : _spotLightItem} /* default: ID0 */  isRaw={typeof _spotLightItem === "object" && "isRaw" in _spotLightItem && _spotLightItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_directionalLightItem" id={typeof _directionalLightItem === "object" && "id" in _directionalLightItem ? _directionalLightItem?.id : undefined} value={typeof _directionalLightItem === "object" && "value" in _directionalLightItem ? _directionalLightItem?.value : _directionalLightItem} /* default: ID0 */  isRaw={typeof _directionalLightItem === "object" && "isRaw" in _directionalLightItem && _directionalLightItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_shadowsItem" id={typeof _shadowsItem === "object" && "id" in _shadowsItem ? _shadowsItem?.id : undefined} value={typeof _shadowsItem === "object" && "value" in _shadowsItem ? _shadowsItem?.value : _shadowsItem} /* default: ID0 */  isRaw={typeof _shadowsItem === "object" && "isRaw" in _shadowsItem && _shadowsItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.NeosColorDialog]`} name="_colorPicker" id={typeof _colorPicker === "object" && "id" in _colorPicker ? _colorPicker?.id : undefined} value={typeof _colorPicker === "object" && "value" in _colorPicker ? _colorPicker?.value : _colorPicker} /* default: ID0 */  isRaw={typeof _colorPicker === "object" && "isRaw" in _colorPicker && _colorPicker.isRaw ? true : undefined} />
        </Component>
      );
    };
    