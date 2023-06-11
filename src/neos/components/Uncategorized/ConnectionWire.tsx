import { member, Member, Component } from "../../core";
    
    export interface ConnectionWireInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
InputField?: member<any>;
TargetTangent?: member<[number, number, number]>;
TargetSlot?: member<any>;
TempWire?: member<boolean>;
SetupSource?: member<any>;
SetupMethod?: member<any>;
WirePoint?: member<any>;
WireTangent?: member<any>;
WireOrientation?: member<any>;
WireWidth?: member<any>;
WireSlot?: member<any>;
Material?: member<any>;
TypeColor?: member<[number, number, number, number]>;
    }
    
    export function ConnectionWire(props: ConnectionWireInput){
      const { id, persistentId, updateOrder, Enabled,
InputField,
TargetTangent,
TargetSlot,
TempWire,
SetupSource,
SetupMethod,
WirePoint,
WireTangent,
WireOrientation,
WireWidth,
WireSlot,
Material,
TypeColor, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ConnectionWire" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.ISyncRef]`} name="InputField" id={typeof InputField === "object" && "id" in InputField ? InputField?.id : undefined} value={typeof InputField === "object" && "value" in InputField ? InputField?.value : InputField} /* default: ID0 */  isRaw={typeof InputField === "object" && "isRaw" in InputField && InputField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetTangent" id={typeof TargetTangent === "object" && "id" in TargetTangent ? TargetTangent?.id : undefined} value={typeof TargetTangent === "object" && "value" in TargetTangent ? TargetTangent?.value : TargetTangent} /* default: [0; 0; 0] */  isRaw={typeof TargetTangent === "object" && "isRaw" in TargetTangent && TargetTangent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  isRaw={typeof TargetSlot === "object" && "isRaw" in TargetSlot && TargetSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TempWire" id={typeof TempWire === "object" && "id" in TempWire ? TempWire?.id : undefined} value={typeof TempWire === "object" && "value" in TempWire ? TempWire?.value : TempWire} /* default: false */  isRaw={typeof TempWire === "object" && "isRaw" in TempWire && TempWire.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IWorldElement]`} name="SetupSource" id={typeof SetupSource === "object" && "id" in SetupSource ? SetupSource?.id : undefined} value={typeof SetupSource === "object" && "value" in SetupSource ? SetupSource?.value : SetupSource} /* default: ID0 */  isRaw={typeof SetupSource === "object" && "isRaw" in SetupSource && SetupSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SetupMethod" id={typeof SetupMethod === "object" && "id" in SetupMethod ? SetupMethod?.id : undefined} value={typeof SetupMethod === "object" && "value" in SetupMethod ? SetupMethod?.value : SetupMethod} /* default: <i>null</i> */  isRaw={typeof SetupMethod === "object" && "isRaw" in SetupMethod && SetupMethod.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="WirePoint" id={typeof WirePoint === "object" && "id" in WirePoint ? WirePoint?.id : undefined} value={typeof WirePoint === "object" && "value" in WirePoint ? WirePoint?.value : WirePoint} /* default: ID0 */  isRaw={typeof WirePoint === "object" && "isRaw" in WirePoint && WirePoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="WireTangent" id={typeof WireTangent === "object" && "id" in WireTangent ? WireTangent?.id : undefined} value={typeof WireTangent === "object" && "value" in WireTangent ? WireTangent?.value : WireTangent} /* default: ID0 */  isRaw={typeof WireTangent === "object" && "isRaw" in WireTangent && WireTangent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="WireOrientation" id={typeof WireOrientation === "object" && "id" in WireOrientation ? WireOrientation?.id : undefined} value={typeof WireOrientation === "object" && "value" in WireOrientation ? WireOrientation?.value : WireOrientation} /* default: ID0 */  isRaw={typeof WireOrientation === "object" && "isRaw" in WireOrientation && WireOrientation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="WireWidth" id={typeof WireWidth === "object" && "id" in WireWidth ? WireWidth?.id : undefined} value={typeof WireWidth === "object" && "value" in WireWidth ? WireWidth?.value : WireWidth} /* default: ID0 */  isRaw={typeof WireWidth === "object" && "isRaw" in WireWidth && WireWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="WireSlot" id={typeof WireSlot === "object" && "id" in WireSlot ? WireSlot?.id : undefined} value={typeof WireSlot === "object" && "value" in WireSlot ? WireSlot?.value : WireSlot} /* default: ID0 */  isRaw={typeof WireSlot === "object" && "isRaw" in WireSlot && WireSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="TypeColor" id={typeof TypeColor === "object" && "id" in TypeColor ? TypeColor?.id : undefined} value={typeof TypeColor === "object" && "value" in TypeColor ? TypeColor?.value : TypeColor} /* default: [0; 0; 0; 0] */  isRaw={typeof TypeColor === "object" && "isRaw" in TypeColor && TypeColor.isRaw ? true : undefined} />
        </Component>
      );
    };
    