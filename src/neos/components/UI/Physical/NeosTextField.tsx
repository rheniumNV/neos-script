import { member, Member, Component } from "../../../core";
    
    export interface NeosTextFieldInput {
        
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
IsEnabled?: member<boolean>;
_hintTextRenderer?: member<any>;
_hintTextBounds?: member<any>;
_hintTextEnabled?: member<any>;
    }
    
    export function NeosTextField(props: NeosTextFieldInput){
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
IsEnabled,
_hintTextRenderer,
_hintTextBounds,
_hintTextEnabled, } = props;
    
      return (
        <Component type="FrooxEngine.NeosTextField" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  isRaw={typeof Style === "object" && "isRaw" in Style && Style.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  isRaw={typeof Width === "object" && "isRaw" in Width && Width.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  isRaw={typeof Height === "object" && "isRaw" in Height && Height.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  isRaw={typeof Thickness === "object" && "isRaw" in Thickness && Thickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Slant" id={typeof Slant === "object" && "id" in Slant ? Slant?.id : undefined} value={typeof Slant === "object" && "value" in Slant ? Slant?.value : Slant} /* default: 0 */  isRaw={typeof Slant === "object" && "isRaw" in Slant && Slant.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_textSlot" id={typeof _textSlot === "object" && "id" in _textSlot ? _textSlot?.id : undefined} value={typeof _textSlot === "object" && "value" in _textSlot ? _textSlot?.value : _textSlot} /* default: ID0 */  isRaw={typeof _textSlot === "object" && "isRaw" in _textSlot && _textSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_textRenderer" id={typeof _textRenderer === "object" && "id" in _textRenderer ? _textRenderer?.id : undefined} value={typeof _textRenderer === "object" && "value" in _textRenderer ? _textRenderer?.value : _textRenderer} /* default: ID0 */  isRaw={typeof _textRenderer === "object" && "isRaw" in _textRenderer && _textRenderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextEditor]`} name="_textEditor" id={typeof _textEditor === "object" && "id" in _textEditor ? _textEditor?.id : undefined} value={typeof _textEditor === "object" && "value" in _textEditor ? _textEditor?.value : _textEditor} /* default: ID0 */  isRaw={typeof _textEditor === "object" && "isRaw" in _textEditor && _textEditor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_mesh" id={typeof _mesh === "object" && "id" in _mesh ? _mesh?.id : undefined} value={typeof _mesh === "object" && "value" in _mesh ? _mesh?.value : _mesh} /* default: ID0 */  isRaw={typeof _mesh === "object" && "isRaw" in _mesh && _mesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_textBounds" id={typeof _textBounds === "object" && "id" in _textBounds ? _textBounds?.id : undefined} value={typeof _textBounds === "object" && "value" in _textBounds ? _textBounds?.value : _textBounds} /* default: ID0 */  isRaw={typeof _textBounds === "object" && "isRaw" in _textBounds && _textBounds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  isRaw={typeof _colliderSize === "object" && "isRaw" in _colliderSize && _colliderSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_meshLeft" id={typeof _meshLeft === "object" && "id" in _meshLeft ? _meshLeft?.id : undefined} value={typeof _meshLeft === "object" && "value" in _meshLeft ? _meshLeft?.value : _meshLeft} /* default: ID0 */  isRaw={typeof _meshLeft === "object" && "isRaw" in _meshLeft && _meshLeft.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_meshRight" id={typeof _meshRight === "object" && "id" in _meshRight ? _meshRight?.id : undefined} value={typeof _meshRight === "object" && "value" in _meshRight ? _meshRight?.value : _meshRight} /* default: ID0 */  isRaw={typeof _meshRight === "object" && "isRaw" in _meshRight && _meshRight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_textLeftBounds" id={typeof _textLeftBounds === "object" && "id" in _textLeftBounds ? _textLeftBounds?.id : undefined} value={typeof _textLeftBounds === "object" && "value" in _textLeftBounds ? _textLeftBounds?.value : _textLeftBounds} /* default: ID0 */  isRaw={typeof _textLeftBounds === "object" && "isRaw" in _textLeftBounds && _textLeftBounds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_textRightBounds" id={typeof _textRightBounds === "object" && "id" in _textRightBounds ? _textRightBounds?.id : undefined} value={typeof _textRightBounds === "object" && "value" in _textRightBounds ? _textRightBounds?.value : _textRightBounds} /* default: ID0 */  isRaw={typeof _textRightBounds === "object" && "isRaw" in _textRightBounds && _textRightBounds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_leftTextRenderer" id={typeof _leftTextRenderer === "object" && "id" in _leftTextRenderer ? _leftTextRenderer?.id : undefined} value={typeof _leftTextRenderer === "object" && "value" in _leftTextRenderer ? _leftTextRenderer?.value : _leftTextRenderer} /* default: ID0 */  isRaw={typeof _leftTextRenderer === "object" && "isRaw" in _leftTextRenderer && _leftTextRenderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_rightTextRenderer" id={typeof _rightTextRenderer === "object" && "id" in _rightTextRenderer ? _rightTextRenderer?.id : undefined} value={typeof _rightTextRenderer === "object" && "value" in _rightTextRenderer ? _rightTextRenderer?.value : _rightTextRenderer} /* default: ID0 */  isRaw={typeof _rightTextRenderer === "object" && "isRaw" in _rightTextRenderer && _rightTextRenderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderLeftSize" id={typeof _colliderLeftSize === "object" && "id" in _colliderLeftSize ? _colliderLeftSize?.id : undefined} value={typeof _colliderLeftSize === "object" && "value" in _colliderLeftSize ? _colliderLeftSize?.value : _colliderLeftSize} /* default: ID0 */  isRaw={typeof _colliderLeftSize === "object" && "isRaw" in _colliderLeftSize && _colliderLeftSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderRightSize" id={typeof _colliderRightSize === "object" && "id" in _colliderRightSize ? _colliderRightSize?.id : undefined} value={typeof _colliderRightSize === "object" && "value" in _colliderRightSize ? _colliderRightSize?.value : _colliderRightSize} /* default: ID0 */  isRaw={typeof _colliderRightSize === "object" && "isRaw" in _colliderRightSize && _colliderRightSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftOffset" id={typeof _leftOffset === "object" && "id" in _leftOffset ? _leftOffset?.id : undefined} value={typeof _leftOffset === "object" && "value" in _leftOffset ? _leftOffset?.value : _leftOffset} /* default: ID0 */  isRaw={typeof _leftOffset === "object" && "isRaw" in _leftOffset && _leftOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightOffset" id={typeof _rightOffset === "object" && "id" in _rightOffset ? _rightOffset?.id : undefined} value={typeof _rightOffset === "object" && "value" in _rightOffset ? _rightOffset?.value : _rightOffset} /* default: ID0 */  isRaw={typeof _rightOffset === "object" && "isRaw" in _rightOffset && _rightOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftTextPosition" id={typeof _leftTextPosition === "object" && "id" in _leftTextPosition ? _leftTextPosition?.id : undefined} value={typeof _leftTextPosition === "object" && "value" in _leftTextPosition ? _leftTextPosition?.value : _leftTextPosition} /* default: ID0 */  isRaw={typeof _leftTextPosition === "object" && "isRaw" in _leftTextPosition && _leftTextPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightTextPosition" id={typeof _rightTextPosition === "object" && "id" in _rightTextPosition ? _rightTextPosition?.id : undefined} value={typeof _rightTextPosition === "object" && "value" in _rightTextPosition ? _rightTextPosition?.value : _rightTextPosition} /* default: ID0 */  isRaw={typeof _rightTextPosition === "object" && "isRaw" in _rightTextPosition && _rightTextPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabled" id={typeof IsEnabled === "object" && "id" in IsEnabled ? IsEnabled?.id : undefined} value={typeof IsEnabled === "object" && "value" in IsEnabled ? IsEnabled?.value : IsEnabled} /* default: false */  isRaw={typeof IsEnabled === "object" && "isRaw" in IsEnabled && IsEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_hintTextRenderer" id={typeof _hintTextRenderer === "object" && "id" in _hintTextRenderer ? _hintTextRenderer?.id : undefined} value={typeof _hintTextRenderer === "object" && "value" in _hintTextRenderer ? _hintTextRenderer?.value : _hintTextRenderer} /* default: ID0 */  isRaw={typeof _hintTextRenderer === "object" && "isRaw" in _hintTextRenderer && _hintTextRenderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_hintTextBounds" id={typeof _hintTextBounds === "object" && "id" in _hintTextBounds ? _hintTextBounds?.id : undefined} value={typeof _hintTextBounds === "object" && "value" in _hintTextBounds ? _hintTextBounds?.value : _hintTextBounds} /* default: ID0 */  isRaw={typeof _hintTextBounds === "object" && "isRaw" in _hintTextBounds && _hintTextBounds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_hintTextEnabled" id={typeof _hintTextEnabled === "object" && "id" in _hintTextEnabled ? _hintTextEnabled?.id : undefined} value={typeof _hintTextEnabled === "object" && "value" in _hintTextEnabled ? _hintTextEnabled?.value : _hintTextEnabled} /* default: ID0 */  isRaw={typeof _hintTextEnabled === "object" && "isRaw" in _hintTextEnabled && _hintTextEnabled.isRaw ? true : undefined} />
        </Component>
      );
    };
    