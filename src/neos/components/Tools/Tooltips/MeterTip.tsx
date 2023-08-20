import { member, Member, Component } from "../../../core";
    
    export interface MeterTipInput {
        
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
_indicationColor?: member<any>;
MeterMode?: member<any>;
MeasureInObjectSpace?: member<boolean>;
RaycastIgnoresUsers?: member<boolean>;
MultiPoint?: member<boolean>;
_lastPoint?: member<any>;
_currentMeter?: member<any>;
_currentLineTransform?: member<any>;
_lastMultiPointValue?: member<boolean>;
    }
    
    export function MeterTip(props: MeterTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
_indicationColor,
MeterMode,
MeasureInObjectSpace,
RaycastIgnoresUsers,
MultiPoint,
_lastPoint,
_currentMeter,
_currentLineTransform,
_lastMultiPointValue, } = props;
    
      return (
        <Component type="FrooxEngine.MeterTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[BaseX.color]]`} name="_indicationColor" id={typeof _indicationColor === "object" && "id" in _indicationColor ? _indicationColor?.id : undefined} value={typeof _indicationColor === "object" && "value" in _indicationColor ? _indicationColor?.value : _indicationColor} /* default: ID0 */  isRaw={typeof _indicationColor === "object" && "isRaw" in _indicationColor && _indicationColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MeterTip+Mode]`} name="MeterMode" id={typeof MeterMode === "object" && "id" in MeterMode ? MeterMode?.id : undefined} value={typeof MeterMode === "object" && "value" in MeterMode ? MeterMode?.value : MeterMode} /* default: TwoPoints */  isRaw={typeof MeterMode === "object" && "isRaw" in MeterMode && MeterMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MeasureInObjectSpace" id={typeof MeasureInObjectSpace === "object" && "id" in MeasureInObjectSpace ? MeasureInObjectSpace?.id : undefined} value={typeof MeasureInObjectSpace === "object" && "value" in MeasureInObjectSpace ? MeasureInObjectSpace?.value : MeasureInObjectSpace} /* default: false */  isRaw={typeof MeasureInObjectSpace === "object" && "isRaw" in MeasureInObjectSpace && MeasureInObjectSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RaycastIgnoresUsers" id={typeof RaycastIgnoresUsers === "object" && "id" in RaycastIgnoresUsers ? RaycastIgnoresUsers?.id : undefined} value={typeof RaycastIgnoresUsers === "object" && "value" in RaycastIgnoresUsers ? RaycastIgnoresUsers?.value : RaycastIgnoresUsers} /* default: false */  isRaw={typeof RaycastIgnoresUsers === "object" && "isRaw" in RaycastIgnoresUsers && RaycastIgnoresUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MultiPoint" id={typeof MultiPoint === "object" && "id" in MultiPoint ? MultiPoint?.id : undefined} value={typeof MultiPoint === "object" && "value" in MultiPoint ? MultiPoint?.value : MultiPoint} /* default: false */  isRaw={typeof MultiPoint === "object" && "isRaw" in MultiPoint && MultiPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lastPoint" id={typeof _lastPoint === "object" && "id" in _lastPoint ? _lastPoint?.id : undefined} value={typeof _lastPoint === "object" && "value" in _lastPoint ? _lastPoint?.value : _lastPoint} /* default: ID0 */  isRaw={typeof _lastPoint === "object" && "isRaw" in _lastPoint && _lastPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.DistanceMeter]`} name="_currentMeter" id={typeof _currentMeter === "object" && "id" in _currentMeter ? _currentMeter?.id : undefined} value={typeof _currentMeter === "object" && "value" in _currentMeter ? _currentMeter?.value : _currentMeter} /* default: ID0 */  isRaw={typeof _currentMeter === "object" && "isRaw" in _currentMeter && _currentMeter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LineTransform]`} name="_currentLineTransform" id={typeof _currentLineTransform === "object" && "id" in _currentLineTransform ? _currentLineTransform?.id : undefined} value={typeof _currentLineTransform === "object" && "value" in _currentLineTransform ? _currentLineTransform?.value : _currentLineTransform} /* default: ID0 */  isRaw={typeof _currentLineTransform === "object" && "isRaw" in _currentLineTransform && _currentLineTransform.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_lastMultiPointValue" id={typeof _lastMultiPointValue === "object" && "id" in _lastMultiPointValue ? _lastMultiPointValue?.id : undefined} value={typeof _lastMultiPointValue === "object" && "value" in _lastMultiPointValue ? _lastMultiPointValue?.value : _lastMultiPointValue} /* default: false */  isRaw={typeof _lastMultiPointValue === "object" && "isRaw" in _lastMultiPointValue && _lastMultiPointValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    