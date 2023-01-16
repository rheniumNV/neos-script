import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NeosSliderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Style?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
IsEnabledField?: member<boolean>;
IncrementPressed?: member<any>;
DecrementPressed?: member<any>;
DriveField?: member<any>;
AllowWriteBack?: member<boolean>;
CreateUndoStep?: member<boolean>;
Value?: member<number>;
Min?: member<number>;
Max?: member<number>;
Increment?: member<number>;
IntegerOnly?: member<boolean>;
ColorField?: member<[number, number, number, number]>;
SymmetricalField?: member<boolean>;
WidthField?: member<number>;
HeightField?: member<number>;
CursorRatioField?: member<number>;
ThicknessField?: member<number>;
SlantField?: member<number>;
SpacingRatioField?: member<number>;
TrackRatioField?: member<number>;
ButtonRatioField?: member<number>;
_trackMesh?: member<any>;
_leftMesh?: member<any>;
_rightMesh?: member<any>;
_cursorMesh?: member<any>;
_trackMaterial?: member<any>;
_leftMaterial?: member<any>;
_rightMaterial?: member<any>;
_cursorMaterial?: member<any>;
_leftPosition?: member<any>;
_rightPosition?: member<any>;
_cursorPosition?: member<any>;
_leftColliderSize?: member<any>;
_rightColliderSize?: member<any>;
_trackColliderSize?: member<any>;
_cursorColliderSize?: member<any>;
    }
    
    export function NeosSlider(props: NeosSliderInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
IsEnabledField,
IncrementPressed,
DecrementPressed,
DriveField,
AllowWriteBack,
CreateUndoStep,
Value,
Min,
Max,
Increment,
IntegerOnly,
ColorField,
SymmetricalField,
WidthField,
HeightField,
CursorRatioField,
ThicknessField,
SlantField,
SpacingRatioField,
TrackRatioField,
ButtonRatioField,
_trackMesh,
_leftMesh,
_rightMesh,
_cursorMesh,
_trackMaterial,
_leftMaterial,
_rightMaterial,
_cursorMaterial,
_leftPosition,
_rightPosition,
_cursorPosition,
_leftColliderSize,
_rightColliderSize,
_trackColliderSize,
_cursorColliderSize, } = props;
    
      return (
        <Component type="FrooxEngine.NeosSlider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabledField" id={typeof IsEnabledField === "object" && "id" in IsEnabledField ? IsEnabledField?.id : undefined} value={typeof IsEnabledField === "object" && "value" in IsEnabledField ? IsEnabledField?.value : IsEnabledField} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.NeosSlider]]`} name="IncrementPressed" id={typeof IncrementPressed === "object" && "id" in IncrementPressed ? IncrementPressed?.id : undefined} value={typeof IncrementPressed === "object" && "value" in IncrementPressed ? IncrementPressed?.value : IncrementPressed} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.NeosSlider]]`} name="DecrementPressed" id={typeof DecrementPressed === "object" && "id" in DecrementPressed ? DecrementPressed?.id : undefined} value={typeof DecrementPressed === "object" && "value" in DecrementPressed ? DecrementPressed?.value : DecrementPressed} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="DriveField" id={typeof DriveField === "object" && "id" in DriveField ? DriveField?.id : undefined} value={typeof DriveField === "object" && "value" in DriveField ? DriveField?.value : DriveField} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowWriteBack" id={typeof AllowWriteBack === "object" && "id" in AllowWriteBack ? AllowWriteBack?.id : undefined} value={typeof AllowWriteBack === "object" && "value" in AllowWriteBack ? AllowWriteBack?.value : AllowWriteBack} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CreateUndoStep" id={typeof CreateUndoStep === "object" && "id" in CreateUndoStep ? CreateUndoStep?.id : undefined} value={typeof CreateUndoStep === "object" && "value" in CreateUndoStep ? CreateUndoStep?.value : CreateUndoStep} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Min" id={typeof Min === "object" && "id" in Min ? Min?.id : undefined} value={typeof Min === "object" && "value" in Min ? Min?.value : Min} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Max" id={typeof Max === "object" && "id" in Max ? Max?.id : undefined} value={typeof Max === "object" && "value" in Max ? Max?.value : Max} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Increment" id={typeof Increment === "object" && "id" in Increment ? Increment?.id : undefined} value={typeof Increment === "object" && "value" in Increment ? Increment?.value : Increment} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IntegerOnly" id={typeof IntegerOnly === "object" && "id" in IntegerOnly ? IntegerOnly?.id : undefined} value={typeof IntegerOnly === "object" && "value" in IntegerOnly ? IntegerOnly?.value : IntegerOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ColorField" id={typeof ColorField === "object" && "id" in ColorField ? ColorField?.id : undefined} value={typeof ColorField === "object" && "value" in ColorField ? ColorField?.value : ColorField} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SymmetricalField" id={typeof SymmetricalField === "object" && "id" in SymmetricalField ? SymmetricalField?.id : undefined} value={typeof SymmetricalField === "object" && "value" in SymmetricalField ? SymmetricalField?.value : SymmetricalField} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="WidthField" id={typeof WidthField === "object" && "id" in WidthField ? WidthField?.id : undefined} value={typeof WidthField === "object" && "value" in WidthField ? WidthField?.value : WidthField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightField" id={typeof HeightField === "object" && "id" in HeightField ? HeightField?.id : undefined} value={typeof HeightField === "object" && "value" in HeightField ? HeightField?.value : HeightField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CursorRatioField" id={typeof CursorRatioField === "object" && "id" in CursorRatioField ? CursorRatioField?.id : undefined} value={typeof CursorRatioField === "object" && "value" in CursorRatioField ? CursorRatioField?.value : CursorRatioField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ThicknessField" id={typeof ThicknessField === "object" && "id" in ThicknessField ? ThicknessField?.id : undefined} value={typeof ThicknessField === "object" && "value" in ThicknessField ? ThicknessField?.value : ThicknessField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SlantField" id={typeof SlantField === "object" && "id" in SlantField ? SlantField?.id : undefined} value={typeof SlantField === "object" && "value" in SlantField ? SlantField?.value : SlantField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpacingRatioField" id={typeof SpacingRatioField === "object" && "id" in SpacingRatioField ? SpacingRatioField?.id : undefined} value={typeof SpacingRatioField === "object" && "value" in SpacingRatioField ? SpacingRatioField?.value : SpacingRatioField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TrackRatioField" id={typeof TrackRatioField === "object" && "id" in TrackRatioField ? TrackRatioField?.id : undefined} value={typeof TrackRatioField === "object" && "value" in TrackRatioField ? TrackRatioField?.value : TrackRatioField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ButtonRatioField" id={typeof ButtonRatioField === "object" && "id" in ButtonRatioField ? ButtonRatioField?.id : undefined} value={typeof ButtonRatioField === "object" && "value" in ButtonRatioField ? ButtonRatioField?.value : ButtonRatioField} /* default: 0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.MultiBevelSoliStripeMesh]`} name="_trackMesh" id={typeof _trackMesh === "object" && "id" in _trackMesh ? _trackMesh?.id : undefined} value={typeof _trackMesh === "object" && "value" in _trackMesh ? _trackMesh?.value : _trackMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_leftMesh" id={typeof _leftMesh === "object" && "id" in _leftMesh ? _leftMesh?.id : undefined} value={typeof _leftMesh === "object" && "value" in _leftMesh ? _leftMesh?.value : _leftMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_rightMesh" id={typeof _rightMesh === "object" && "id" in _rightMesh ? _rightMesh?.id : undefined} value={typeof _rightMesh === "object" && "value" in _rightMesh ? _rightMesh?.value : _rightMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_cursorMesh" id={typeof _cursorMesh === "object" && "id" in _cursorMesh ? _cursorMesh?.id : undefined} value={typeof _cursorMesh === "object" && "value" in _cursorMesh ? _cursorMesh?.value : _cursorMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_trackMaterial" id={typeof _trackMaterial === "object" && "id" in _trackMaterial ? _trackMaterial?.id : undefined} value={typeof _trackMaterial === "object" && "value" in _trackMaterial ? _trackMaterial?.value : _trackMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_leftMaterial" id={typeof _leftMaterial === "object" && "id" in _leftMaterial ? _leftMaterial?.id : undefined} value={typeof _leftMaterial === "object" && "value" in _leftMaterial ? _leftMaterial?.value : _leftMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_rightMaterial" id={typeof _rightMaterial === "object" && "id" in _rightMaterial ? _rightMaterial?.id : undefined} value={typeof _rightMaterial === "object" && "value" in _rightMaterial ? _rightMaterial?.value : _rightMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_cursorMaterial" id={typeof _cursorMaterial === "object" && "id" in _cursorMaterial ? _cursorMaterial?.id : undefined} value={typeof _cursorMaterial === "object" && "value" in _cursorMaterial ? _cursorMaterial?.value : _cursorMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftPosition" id={typeof _leftPosition === "object" && "id" in _leftPosition ? _leftPosition?.id : undefined} value={typeof _leftPosition === "object" && "value" in _leftPosition ? _leftPosition?.value : _leftPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightPosition" id={typeof _rightPosition === "object" && "id" in _rightPosition ? _rightPosition?.id : undefined} value={typeof _rightPosition === "object" && "value" in _rightPosition ? _rightPosition?.value : _rightPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_cursorPosition" id={typeof _cursorPosition === "object" && "id" in _cursorPosition ? _cursorPosition?.id : undefined} value={typeof _cursorPosition === "object" && "value" in _cursorPosition ? _cursorPosition?.value : _cursorPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftColliderSize" id={typeof _leftColliderSize === "object" && "id" in _leftColliderSize ? _leftColliderSize?.id : undefined} value={typeof _leftColliderSize === "object" && "value" in _leftColliderSize ? _leftColliderSize?.value : _leftColliderSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightColliderSize" id={typeof _rightColliderSize === "object" && "id" in _rightColliderSize ? _rightColliderSize?.id : undefined} value={typeof _rightColliderSize === "object" && "value" in _rightColliderSize ? _rightColliderSize?.value : _rightColliderSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_trackColliderSize" id={typeof _trackColliderSize === "object" && "id" in _trackColliderSize ? _trackColliderSize?.id : undefined} value={typeof _trackColliderSize === "object" && "value" in _trackColliderSize ? _trackColliderSize?.value : _trackColliderSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_cursorColliderSize" id={typeof _cursorColliderSize === "object" && "id" in _cursorColliderSize ? _cursorColliderSize?.id : undefined} value={typeof _cursorColliderSize === "object" && "value" in _cursorColliderSize ? _cursorColliderSize?.value : _cursorColliderSize} /* default: ID0 */  />
        </Component>
      );
    };
    