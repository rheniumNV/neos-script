import { member, Member, Component } from "../../../core";
    
    export interface NeosNumericUpDownInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Style?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
Color?: member<[number, number, number, number]>;
Width?: member<number>;
Height?: member<number>;
Thickness?: member<number>;
Slant?: member<number>;
_textSlot?: member<any>;
_textRenderer?: member<any>;
_textEditor?: member<any>;
_material?: member<any>;
_mesh?: member<any>;
_textBounds?: member<any>;
_colliderSize?: member<any>;
_meshLeft?: member<any>;
_meshRight?: member<any>;
_textLeftBounds?: member<any>;
_textRightBounds?: member<any>;
_leftTextRenderer?: member<any>;
_rightTextRenderer?: member<any>;
_colliderLeftSize?: member<any>;
_colliderRightSize?: member<any>;
_leftOffset?: member<any>;
_rightOffset?: member<any>;
_leftTextPosition?: member<any>;
_rightTextPosition?: member<any>;
DriveField?: member<any>;
AllowWriteBack?: member<boolean>;
Value?: member<number>;
DecimalPoints?: member<number>;
MinValue?: member<number>;
MaxValue?: member<number>;
IncrementValue?: member<number>;
IsEnabled?: member<boolean>;
_textDrive?: member<string>;
    }
    
    export function NeosNumericUpDown(props: NeosNumericUpDownInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
Color,
Width,
Height,
Thickness,
Slant,
_textSlot,
_textRenderer,
_textEditor,
_material,
_mesh,
_textBounds,
_colliderSize,
_meshLeft,
_meshRight,
_textLeftBounds,
_textRightBounds,
_leftTextRenderer,
_rightTextRenderer,
_colliderLeftSize,
_colliderRightSize,
_leftOffset,
_rightOffset,
_leftTextPosition,
_rightTextPosition,
DriveField,
AllowWriteBack,
Value,
DecimalPoints,
MinValue,
MaxValue,
IncrementValue,
IsEnabled,
_textDrive, } = props;
    
      return (
        <Component type="FrooxEngine.NeosNumericUpDown" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Slant" id={typeof Slant === "object" && "id" in Slant ? Slant?.id : undefined} value={typeof Slant === "object" && "value" in Slant ? Slant?.value : Slant} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_textSlot" id={typeof _textSlot === "object" && "id" in _textSlot ? _textSlot?.id : undefined} value={typeof _textSlot === "object" && "value" in _textSlot ? _textSlot?.value : _textSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_textRenderer" id={typeof _textRenderer === "object" && "id" in _textRenderer ? _textRenderer?.id : undefined} value={typeof _textRenderer === "object" && "value" in _textRenderer ? _textRenderer?.value : _textRenderer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextEditor]`} name="_textEditor" id={typeof _textEditor === "object" && "id" in _textEditor ? _textEditor?.id : undefined} value={typeof _textEditor === "object" && "value" in _textEditor ? _textEditor?.value : _textEditor} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_mesh" id={typeof _mesh === "object" && "id" in _mesh ? _mesh?.id : undefined} value={typeof _mesh === "object" && "value" in _mesh ? _mesh?.value : _mesh} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_textBounds" id={typeof _textBounds === "object" && "id" in _textBounds ? _textBounds?.id : undefined} value={typeof _textBounds === "object" && "value" in _textBounds ? _textBounds?.value : _textBounds} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_meshLeft" id={typeof _meshLeft === "object" && "id" in _meshLeft ? _meshLeft?.id : undefined} value={typeof _meshLeft === "object" && "value" in _meshLeft ? _meshLeft?.value : _meshLeft} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_meshRight" id={typeof _meshRight === "object" && "id" in _meshRight ? _meshRight?.id : undefined} value={typeof _meshRight === "object" && "value" in _meshRight ? _meshRight?.value : _meshRight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_textLeftBounds" id={typeof _textLeftBounds === "object" && "id" in _textLeftBounds ? _textLeftBounds?.id : undefined} value={typeof _textLeftBounds === "object" && "value" in _textLeftBounds ? _textLeftBounds?.value : _textLeftBounds} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_textRightBounds" id={typeof _textRightBounds === "object" && "id" in _textRightBounds ? _textRightBounds?.id : undefined} value={typeof _textRightBounds === "object" && "value" in _textRightBounds ? _textRightBounds?.value : _textRightBounds} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_leftTextRenderer" id={typeof _leftTextRenderer === "object" && "id" in _leftTextRenderer ? _leftTextRenderer?.id : undefined} value={typeof _leftTextRenderer === "object" && "value" in _leftTextRenderer ? _leftTextRenderer?.value : _leftTextRenderer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_rightTextRenderer" id={typeof _rightTextRenderer === "object" && "id" in _rightTextRenderer ? _rightTextRenderer?.id : undefined} value={typeof _rightTextRenderer === "object" && "value" in _rightTextRenderer ? _rightTextRenderer?.value : _rightTextRenderer} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderLeftSize" id={typeof _colliderLeftSize === "object" && "id" in _colliderLeftSize ? _colliderLeftSize?.id : undefined} value={typeof _colliderLeftSize === "object" && "value" in _colliderLeftSize ? _colliderLeftSize?.value : _colliderLeftSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderRightSize" id={typeof _colliderRightSize === "object" && "id" in _colliderRightSize ? _colliderRightSize?.id : undefined} value={typeof _colliderRightSize === "object" && "value" in _colliderRightSize ? _colliderRightSize?.value : _colliderRightSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftOffset" id={typeof _leftOffset === "object" && "id" in _leftOffset ? _leftOffset?.id : undefined} value={typeof _leftOffset === "object" && "value" in _leftOffset ? _leftOffset?.value : _leftOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightOffset" id={typeof _rightOffset === "object" && "id" in _rightOffset ? _rightOffset?.id : undefined} value={typeof _rightOffset === "object" && "value" in _rightOffset ? _rightOffset?.value : _rightOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftTextPosition" id={typeof _leftTextPosition === "object" && "id" in _leftTextPosition ? _leftTextPosition?.id : undefined} value={typeof _leftTextPosition === "object" && "value" in _leftTextPosition ? _leftTextPosition?.value : _leftTextPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightTextPosition" id={typeof _rightTextPosition === "object" && "id" in _rightTextPosition ? _rightTextPosition?.id : undefined} value={typeof _rightTextPosition === "object" && "value" in _rightTextPosition ? _rightTextPosition?.value : _rightTextPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="DriveField" id={typeof DriveField === "object" && "id" in DriveField ? DriveField?.id : undefined} value={typeof DriveField === "object" && "value" in DriveField ? DriveField?.value : DriveField} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowWriteBack" id={typeof AllowWriteBack === "object" && "id" in AllowWriteBack ? AllowWriteBack?.id : undefined} value={typeof AllowWriteBack === "object" && "value" in AllowWriteBack ? AllowWriteBack?.value : AllowWriteBack} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DecimalPoints" id={typeof DecimalPoints === "object" && "id" in DecimalPoints ? DecimalPoints?.id : undefined} value={typeof DecimalPoints === "object" && "value" in DecimalPoints ? DecimalPoints?.value : DecimalPoints} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinValue" id={typeof MinValue === "object" && "id" in MinValue ? MinValue?.id : undefined} value={typeof MinValue === "object" && "value" in MinValue ? MinValue?.value : MinValue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxValue" id={typeof MaxValue === "object" && "id" in MaxValue ? MaxValue?.id : undefined} value={typeof MaxValue === "object" && "value" in MaxValue ? MaxValue?.value : MaxValue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="IncrementValue" id={typeof IncrementValue === "object" && "id" in IncrementValue ? IncrementValue?.id : undefined} value={typeof IncrementValue === "object" && "value" in IncrementValue ? IncrementValue?.value : IncrementValue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabled" id={typeof IsEnabled === "object" && "id" in IsEnabled ? IsEnabled?.id : undefined} value={typeof IsEnabled === "object" && "value" in IsEnabled ? IsEnabled?.value : IsEnabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_textDrive" id={typeof _textDrive === "object" && "id" in _textDrive ? _textDrive?.id : undefined} value={typeof _textDrive === "object" && "value" in _textDrive ? _textDrive?.value : _textDrive} /* default: ID0 */  />
        </Component>
      );
    };
    