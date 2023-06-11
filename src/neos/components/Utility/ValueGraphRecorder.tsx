import { member, Member, Component } from "../../core";
    
    export interface ValueGraphRecorderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RecordingUser?: member<any>;
SourceValue?: member<any>;
UpdateInterval?: member<number>;
Points?: member<number>;
TargetArray?: member<any>;
TargetArrayOffset?: member<any>;
MinRangeAdjustThreshold?: member<number>;
MinRangeAdjustMultiplier?: member<number>;
MaxRangeAdjustThreshold?: member<number>;
MaxRangeAdjustMultiplier?: member<number>;
RangeMin?: member<any>;
RangeMax?: member<any>;
Drive?: member<boolean>;
_arrayDrive?: member<any>;
_arrayOffsetDrive?: member<any>;
_rangeMinDrive?: member<any>;
_rangeMaxDrive?: member<any>;
    }
    
    export function ValueGraphRecorder(props: ValueGraphRecorderInput){
      const { id, persistentId, updateOrder, Enabled,
RecordingUser,
SourceValue,
UpdateInterval,
Points,
TargetArray,
TargetArrayOffset,
MinRangeAdjustThreshold,
MinRangeAdjustMultiplier,
MaxRangeAdjustThreshold,
MaxRangeAdjustMultiplier,
RangeMin,
RangeMax,
Drive,
_arrayDrive,
_arrayOffsetDrive,
_rangeMinDrive,
_rangeMaxDrive, } = props;
    
      return (
        <Component type="FrooxEngine.ValueGraphRecorder" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="RecordingUser" id={typeof RecordingUser === "object" && "id" in RecordingUser ? RecordingUser?.id : undefined} value={typeof RecordingUser === "object" && "value" in RecordingUser ? RecordingUser?.value : RecordingUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof RecordingUser === "object" && "isRaw" in RecordingUser && RecordingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="SourceValue" id={typeof SourceValue === "object" && "id" in SourceValue ? SourceValue?.id : undefined} value={typeof SourceValue === "object" && "value" in SourceValue ? SourceValue?.value : SourceValue} /* default: ID0 */  isRaw={typeof SourceValue === "object" && "isRaw" in SourceValue && SourceValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UpdateInterval" id={typeof UpdateInterval === "object" && "id" in UpdateInterval ? UpdateInterval?.id : undefined} value={typeof UpdateInterval === "object" && "value" in UpdateInterval ? UpdateInterval?.value : UpdateInterval} /* default: 0 */  isRaw={typeof UpdateInterval === "object" && "isRaw" in UpdateInterval && UpdateInterval.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: 0 */  isRaw={typeof Points === "object" && "isRaw" in Points && Points.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncArray\`1[System.Single]]`} name="TargetArray" id={typeof TargetArray === "object" && "id" in TargetArray ? TargetArray?.id : undefined} value={typeof TargetArray === "object" && "value" in TargetArray ? TargetArray?.value : TargetArray} /* default: ID0 */  isRaw={typeof TargetArray === "object" && "isRaw" in TargetArray && TargetArray.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Int32]]`} name="TargetArrayOffset" id={typeof TargetArrayOffset === "object" && "id" in TargetArrayOffset ? TargetArrayOffset?.id : undefined} value={typeof TargetArrayOffset === "object" && "value" in TargetArrayOffset ? TargetArrayOffset?.value : TargetArrayOffset} /* default: ID0 */  isRaw={typeof TargetArrayOffset === "object" && "isRaw" in TargetArrayOffset && TargetArrayOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinRangeAdjustThreshold" id={typeof MinRangeAdjustThreshold === "object" && "id" in MinRangeAdjustThreshold ? MinRangeAdjustThreshold?.id : undefined} value={typeof MinRangeAdjustThreshold === "object" && "value" in MinRangeAdjustThreshold ? MinRangeAdjustThreshold?.value : MinRangeAdjustThreshold} /* default: 0 */  isRaw={typeof MinRangeAdjustThreshold === "object" && "isRaw" in MinRangeAdjustThreshold && MinRangeAdjustThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinRangeAdjustMultiplier" id={typeof MinRangeAdjustMultiplier === "object" && "id" in MinRangeAdjustMultiplier ? MinRangeAdjustMultiplier?.id : undefined} value={typeof MinRangeAdjustMultiplier === "object" && "value" in MinRangeAdjustMultiplier ? MinRangeAdjustMultiplier?.value : MinRangeAdjustMultiplier} /* default: 0 */  isRaw={typeof MinRangeAdjustMultiplier === "object" && "isRaw" in MinRangeAdjustMultiplier && MinRangeAdjustMultiplier.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxRangeAdjustThreshold" id={typeof MaxRangeAdjustThreshold === "object" && "id" in MaxRangeAdjustThreshold ? MaxRangeAdjustThreshold?.id : undefined} value={typeof MaxRangeAdjustThreshold === "object" && "value" in MaxRangeAdjustThreshold ? MaxRangeAdjustThreshold?.value : MaxRangeAdjustThreshold} /* default: 0 */  isRaw={typeof MaxRangeAdjustThreshold === "object" && "isRaw" in MaxRangeAdjustThreshold && MaxRangeAdjustThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxRangeAdjustMultiplier" id={typeof MaxRangeAdjustMultiplier === "object" && "id" in MaxRangeAdjustMultiplier ? MaxRangeAdjustMultiplier?.id : undefined} value={typeof MaxRangeAdjustMultiplier === "object" && "value" in MaxRangeAdjustMultiplier ? MaxRangeAdjustMultiplier?.value : MaxRangeAdjustMultiplier} /* default: 0 */  isRaw={typeof MaxRangeAdjustMultiplier === "object" && "isRaw" in MaxRangeAdjustMultiplier && MaxRangeAdjustMultiplier.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="RangeMin" id={typeof RangeMin === "object" && "id" in RangeMin ? RangeMin?.id : undefined} value={typeof RangeMin === "object" && "value" in RangeMin ? RangeMin?.value : RangeMin} /* default: ID0 */  isRaw={typeof RangeMin === "object" && "isRaw" in RangeMin && RangeMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="RangeMax" id={typeof RangeMax === "object" && "id" in RangeMax ? RangeMax?.id : undefined} value={typeof RangeMax === "object" && "value" in RangeMax ? RangeMax?.value : RangeMax} /* default: ID0 */  isRaw={typeof RangeMax === "object" && "isRaw" in RangeMax && RangeMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Drive" id={typeof Drive === "object" && "id" in Drive ? Drive?.id : undefined} value={typeof Drive === "object" && "value" in Drive ? Drive?.value : Drive} /* default: false */  isRaw={typeof Drive === "object" && "isRaw" in Drive && Drive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncArray\`1[System.Single]]`} name="_arrayDrive" id={typeof _arrayDrive === "object" && "id" in _arrayDrive ? _arrayDrive?.id : undefined} value={typeof _arrayDrive === "object" && "value" in _arrayDrive ? _arrayDrive?.value : _arrayDrive} /* default: ID0 */  isRaw={typeof _arrayDrive === "object" && "isRaw" in _arrayDrive && _arrayDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_arrayOffsetDrive" id={typeof _arrayOffsetDrive === "object" && "id" in _arrayOffsetDrive ? _arrayOffsetDrive?.id : undefined} value={typeof _arrayOffsetDrive === "object" && "value" in _arrayOffsetDrive ? _arrayOffsetDrive?.value : _arrayOffsetDrive} /* default: ID0 */  isRaw={typeof _arrayOffsetDrive === "object" && "isRaw" in _arrayOffsetDrive && _arrayOffsetDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_rangeMinDrive" id={typeof _rangeMinDrive === "object" && "id" in _rangeMinDrive ? _rangeMinDrive?.id : undefined} value={typeof _rangeMinDrive === "object" && "value" in _rangeMinDrive ? _rangeMinDrive?.value : _rangeMinDrive} /* default: ID0 */  isRaw={typeof _rangeMinDrive === "object" && "isRaw" in _rangeMinDrive && _rangeMinDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_rangeMaxDrive" id={typeof _rangeMaxDrive === "object" && "id" in _rangeMaxDrive ? _rangeMaxDrive?.id : undefined} value={typeof _rangeMaxDrive === "object" && "value" in _rangeMaxDrive ? _rangeMaxDrive?.value : _rangeMaxDrive} /* default: ID0 */  isRaw={typeof _rangeMaxDrive === "object" && "isRaw" in _rangeMaxDrive && _rangeMaxDrive.isRaw ? true : undefined} />
        </Component>
      );
    };
    