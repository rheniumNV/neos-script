import { member, Member, Component } from "../../core";
    
    export interface DistanceMeterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Anchors?: member<any>;
_legacyAnchor0?: member<any>;
_legacyAnchor1?: member<any>;
FormatUnit?: member<any>;
FormatNumber?: member<any>;
CompoundFormatUnits?: member<any>;
CompoundUseLongNames?: member<boolean>;
CompoundOverrideNames?: member<boolean>;
CompoundDiscardLastFraction?: member<boolean>;
CompoundSeparator?: member<any>;
CompoundZeroHandling?: member<any>;
MeasurementSpace?: member<any>;
DistanceText?: member<string>;
    }
    
    export function DistanceMeter(props: DistanceMeterInput){
      const { id, persistentId, updateOrder, Enabled,
Anchors,
_legacyAnchor0,
_legacyAnchor1,
FormatUnit,
FormatNumber,
CompoundFormatUnits,
CompoundUseLongNames,
CompoundOverrideNames,
CompoundDiscardLastFraction,
CompoundSeparator,
CompoundZeroHandling,
MeasurementSpace,
DistanceText, } = props;
    
      return (
        <Component type="FrooxEngine.DistanceMeter" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="Anchors" id={typeof Anchors === "object" && "id" in Anchors ? Anchors?.id : undefined} value={typeof Anchors === "object" && "value" in Anchors ? Anchors?.value : Anchors} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  isRaw={typeof Anchors === "object" && "isRaw" in Anchors && Anchors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_legacyAnchor0-ID" id={typeof _legacyAnchor0 === "object" && "id" in _legacyAnchor0 ? _legacyAnchor0?.id : undefined} value={typeof _legacyAnchor0 === "object" && "value" in _legacyAnchor0 ? _legacyAnchor0?.value : _legacyAnchor0} /* default: ID0 */ readOnly isRaw={typeof _legacyAnchor0 === "object" && "isRaw" in _legacyAnchor0 && _legacyAnchor0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_legacyAnchor1-ID" id={typeof _legacyAnchor1 === "object" && "id" in _legacyAnchor1 ? _legacyAnchor1?.id : undefined} value={typeof _legacyAnchor1 === "object" && "value" in _legacyAnchor1 ? _legacyAnchor1?.value : _legacyAnchor1} /* default: ID0 */ readOnly isRaw={typeof _legacyAnchor1 === "object" && "isRaw" in _legacyAnchor1 && _legacyAnchor1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="FormatUnit" id={typeof FormatUnit === "object" && "id" in FormatUnit ? FormatUnit?.id : undefined} value={typeof FormatUnit === "object" && "value" in FormatUnit ? FormatUnit?.value : FormatUnit} /* default: <i>null</i> */  isRaw={typeof FormatUnit === "object" && "isRaw" in FormatUnit && FormatUnit.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="FormatNumber" id={typeof FormatNumber === "object" && "id" in FormatNumber ? FormatNumber?.id : undefined} value={typeof FormatNumber === "object" && "value" in FormatNumber ? FormatNumber?.value : FormatNumber} /* default: <i>null</i> */  isRaw={typeof FormatNumber === "object" && "isRaw" in FormatNumber && FormatNumber.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="CompoundFormatUnits" id={typeof CompoundFormatUnits === "object" && "id" in CompoundFormatUnits ? CompoundFormatUnits?.id : undefined} value={typeof CompoundFormatUnits === "object" && "value" in CompoundFormatUnits ? CompoundFormatUnits?.value : CompoundFormatUnits} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof CompoundFormatUnits === "object" && "isRaw" in CompoundFormatUnits && CompoundFormatUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CompoundUseLongNames" id={typeof CompoundUseLongNames === "object" && "id" in CompoundUseLongNames ? CompoundUseLongNames?.id : undefined} value={typeof CompoundUseLongNames === "object" && "value" in CompoundUseLongNames ? CompoundUseLongNames?.value : CompoundUseLongNames} /* default: false */  isRaw={typeof CompoundUseLongNames === "object" && "isRaw" in CompoundUseLongNames && CompoundUseLongNames.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CompoundOverrideNames" id={typeof CompoundOverrideNames === "object" && "id" in CompoundOverrideNames ? CompoundOverrideNames?.id : undefined} value={typeof CompoundOverrideNames === "object" && "value" in CompoundOverrideNames ? CompoundOverrideNames?.value : CompoundOverrideNames} /* default: false */  isRaw={typeof CompoundOverrideNames === "object" && "isRaw" in CompoundOverrideNames && CompoundOverrideNames.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CompoundDiscardLastFraction" id={typeof CompoundDiscardLastFraction === "object" && "id" in CompoundDiscardLastFraction ? CompoundDiscardLastFraction?.id : undefined} value={typeof CompoundDiscardLastFraction === "object" && "value" in CompoundDiscardLastFraction ? CompoundDiscardLastFraction?.value : CompoundDiscardLastFraction} /* default: false */  isRaw={typeof CompoundDiscardLastFraction === "object" && "isRaw" in CompoundDiscardLastFraction && CompoundDiscardLastFraction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CompoundSeparator" id={typeof CompoundSeparator === "object" && "id" in CompoundSeparator ? CompoundSeparator?.id : undefined} value={typeof CompoundSeparator === "object" && "value" in CompoundSeparator ? CompoundSeparator?.value : CompoundSeparator} /* default: <i>null</i> */  isRaw={typeof CompoundSeparator === "object" && "isRaw" in CompoundSeparator && CompoundSeparator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[QuantityX.CompoundZeroHandling]`} name="CompoundZeroHandling" id={typeof CompoundZeroHandling === "object" && "id" in CompoundZeroHandling ? CompoundZeroHandling?.id : undefined} value={typeof CompoundZeroHandling === "object" && "value" in CompoundZeroHandling ? CompoundZeroHandling?.value : CompoundZeroHandling} /* default: LeaveAll */  isRaw={typeof CompoundZeroHandling === "object" && "isRaw" in CompoundZeroHandling && CompoundZeroHandling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="MeasurementSpace" id={typeof MeasurementSpace === "object" && "id" in MeasurementSpace ? MeasurementSpace?.id : undefined} value={typeof MeasurementSpace === "object" && "value" in MeasurementSpace ? MeasurementSpace?.value : MeasurementSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof MeasurementSpace === "object" && "isRaw" in MeasurementSpace && MeasurementSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="DistanceText" id={typeof DistanceText === "object" && "id" in DistanceText ? DistanceText?.id : undefined} value={typeof DistanceText === "object" && "value" in DistanceText ? DistanceText?.value : DistanceText} /* default: ID0 */  isRaw={typeof DistanceText === "object" && "isRaw" in DistanceText && DistanceText.isRaw ? true : undefined} />
        </Component>
      );
    };
    