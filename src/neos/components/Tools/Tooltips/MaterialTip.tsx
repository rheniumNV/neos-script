import { member, Member, Component } from "../../../core";
    
    export interface MaterialTipInput {
        
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
_orbSlot?: member<any>;
ReplacementMode?: member<any>;
AreaRadius?: member<number>;
_areaIndicator?: member<any>;
_areaIndicatorRadius?: member<any>;
_areaIndicatorOffset?: member<any>;
_areaIndicatorActive?: member<any>;
_knobControlActive?: member<any>;
    }
    
    export function MaterialTip(props: MaterialTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
_orbSlot,
ReplacementMode,
AreaRadius,
_areaIndicator,
_areaIndicatorRadius,
_areaIndicatorOffset,
_areaIndicatorActive,
_knobControlActive, } = props;
    
      return (
        <Component type="FrooxEngine.MaterialTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_orbSlot" id={typeof _orbSlot === "object" && "id" in _orbSlot ? _orbSlot?.id : undefined} value={typeof _orbSlot === "object" && "value" in _orbSlot ? _orbSlot?.value : _orbSlot} /* default: ID0 */  isRaw={typeof _orbSlot === "object" && "isRaw" in _orbSlot && _orbSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AssetToolReplacementMode]`} name="ReplacementMode" id={typeof ReplacementMode === "object" && "id" in ReplacementMode ? ReplacementMode?.id : undefined} value={typeof ReplacementMode === "object" && "value" in ReplacementMode ? ReplacementMode?.value : ReplacementMode} /* default: Ray */  isRaw={typeof ReplacementMode === "object" && "isRaw" in ReplacementMode && ReplacementMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AreaRadius" id={typeof AreaRadius === "object" && "id" in AreaRadius ? AreaRadius?.id : undefined} value={typeof AreaRadius === "object" && "value" in AreaRadius ? AreaRadius?.value : AreaRadius} /* default: 0 */  isRaw={typeof AreaRadius === "object" && "isRaw" in AreaRadius && AreaRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_areaIndicator" id={typeof _areaIndicator === "object" && "id" in _areaIndicator ? _areaIndicator?.id : undefined} value={typeof _areaIndicator === "object" && "value" in _areaIndicator ? _areaIndicator?.value : _areaIndicator} /* default: ID0 */  isRaw={typeof _areaIndicator === "object" && "isRaw" in _areaIndicator && _areaIndicator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_areaIndicatorRadius" id={typeof _areaIndicatorRadius === "object" && "id" in _areaIndicatorRadius ? _areaIndicatorRadius?.id : undefined} value={typeof _areaIndicatorRadius === "object" && "value" in _areaIndicatorRadius ? _areaIndicatorRadius?.value : _areaIndicatorRadius} /* default: ID0 */  isRaw={typeof _areaIndicatorRadius === "object" && "isRaw" in _areaIndicatorRadius && _areaIndicatorRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_areaIndicatorOffset" id={typeof _areaIndicatorOffset === "object" && "id" in _areaIndicatorOffset ? _areaIndicatorOffset?.id : undefined} value={typeof _areaIndicatorOffset === "object" && "value" in _areaIndicatorOffset ? _areaIndicatorOffset?.value : _areaIndicatorOffset} /* default: ID0 */  isRaw={typeof _areaIndicatorOffset === "object" && "isRaw" in _areaIndicatorOffset && _areaIndicatorOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_areaIndicatorActive" id={typeof _areaIndicatorActive === "object" && "id" in _areaIndicatorActive ? _areaIndicatorActive?.id : undefined} value={typeof _areaIndicatorActive === "object" && "value" in _areaIndicatorActive ? _areaIndicatorActive?.value : _areaIndicatorActive} /* default: ID0 */  isRaw={typeof _areaIndicatorActive === "object" && "isRaw" in _areaIndicatorActive && _areaIndicatorActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_knobControlActive" id={typeof _knobControlActive === "object" && "id" in _knobControlActive ? _knobControlActive?.id : undefined} value={typeof _knobControlActive === "object" && "value" in _knobControlActive ? _knobControlActive?.value : _knobControlActive} /* default: ID0 */  isRaw={typeof _knobControlActive === "object" && "isRaw" in _knobControlActive && _knobControlActive.isRaw ? true : undefined} />
        </Component>
      );
    };
    