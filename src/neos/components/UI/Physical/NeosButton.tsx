import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NeosButtonInput {
        
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
IsEnabled?: member<boolean>;
Pressed?: member<any>;
Pressing?: member<any>;
Released?: member<any>;
IsPressed?: member<boolean>;
AcceptOutOfSightTouch?: member<boolean>;
_textSlot?: member<any>;
_textRenderer?: member<any>;
_buttonPosition?: member<any>;
_colliderSize?: member<any>;
_colliderOffset?: member<any>;
_textPosition?: member<any>;
_textBounds?: member<any>;
_holderMesh?: member<any>;
_buttonMesh?: member<any>;
_holderMaterial?: member<any>;
_buttonMaterial?: member<any>;
_pressDepth?: member<number>;
_flashIndex?: member<number>;
    }
    
    export function NeosButton(props: NeosButtonInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
Color,
Width,
Height,
Thickness,
Slant,
IsEnabled,
Pressed,
Pressing,
Released,
IsPressed,
AcceptOutOfSightTouch,
_textSlot,
_textRenderer,
_buttonPosition,
_colliderSize,
_colliderOffset,
_textPosition,
_textBounds,
_holderMesh,
_buttonMesh,
_holderMaterial,
_buttonMaterial,
_pressDepth,
_flashIndex, } = props;
    
      return (
        <Component type="FrooxEngine.NeosButton" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Slant" id={typeof Slant === "object" && "id" in Slant ? Slant?.id : undefined} value={typeof Slant === "object" && "value" in Slant ? Slant?.value : Slant} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabled" id={typeof IsEnabled === "object" && "id" in IsEnabled ? IsEnabled?.id : undefined} value={typeof IsEnabled === "object" && "value" in IsEnabled ? IsEnabled?.value : IsEnabled} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressed" id={typeof Pressed === "object" && "id" in Pressed ? Pressed?.id : undefined} value={typeof Pressed === "object" && "value" in Pressed ? Pressed?.value : Pressed} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressing" id={typeof Pressing === "object" && "id" in Pressing ? Pressing?.id : undefined} value={typeof Pressing === "object" && "value" in Pressing ? Pressing?.value : Pressing} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Released" id={typeof Released === "object" && "id" in Released ? Released?.id : undefined} value={typeof Released === "object" && "value" in Released ? Released?.value : Released} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsPressed" id={typeof IsPressed === "object" && "id" in IsPressed ? IsPressed?.id : undefined} value={typeof IsPressed === "object" && "value" in IsPressed ? IsPressed?.value : IsPressed} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_textSlot" id={typeof _textSlot === "object" && "id" in _textSlot ? _textSlot?.id : undefined} value={typeof _textSlot === "object" && "value" in _textSlot ? _textSlot?.value : _textSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_textRenderer" id={typeof _textRenderer === "object" && "id" in _textRenderer ? _textRenderer?.id : undefined} value={typeof _textRenderer === "object" && "value" in _textRenderer ? _textRenderer?.value : _textRenderer} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_buttonPosition" id={typeof _buttonPosition === "object" && "id" in _buttonPosition ? _buttonPosition?.id : undefined} value={typeof _buttonPosition === "object" && "value" in _buttonPosition ? _buttonPosition?.value : _buttonPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderOffset" id={typeof _colliderOffset === "object" && "id" in _colliderOffset ? _colliderOffset?.id : undefined} value={typeof _colliderOffset === "object" && "value" in _colliderOffset ? _colliderOffset?.value : _colliderOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_textPosition" id={typeof _textPosition === "object" && "id" in _textPosition ? _textPosition?.id : undefined} value={typeof _textPosition === "object" && "value" in _textPosition ? _textPosition?.value : _textPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_textBounds" id={typeof _textBounds === "object" && "id" in _textBounds ? _textBounds?.id : undefined} value={typeof _textBounds === "object" && "value" in _textBounds ? _textBounds?.value : _textBounds} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_holderMesh" id={typeof _holderMesh === "object" && "id" in _holderMesh ? _holderMesh?.id : undefined} value={typeof _holderMesh === "object" && "value" in _holderMesh ? _holderMesh?.value : _holderMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_buttonMesh" id={typeof _buttonMesh === "object" && "id" in _buttonMesh ? _buttonMesh?.id : undefined} value={typeof _buttonMesh === "object" && "value" in _buttonMesh ? _buttonMesh?.value : _buttonMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_holderMaterial" id={typeof _holderMaterial === "object" && "id" in _holderMaterial ? _holderMaterial?.id : undefined} value={typeof _holderMaterial === "object" && "value" in _holderMaterial ? _holderMaterial?.value : _holderMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_buttonMaterial" id={typeof _buttonMaterial === "object" && "id" in _buttonMaterial ? _buttonMaterial?.id : undefined} value={typeof _buttonMaterial === "object" && "value" in _buttonMaterial ? _buttonMaterial?.value : _buttonMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_pressDepth" id={typeof _pressDepth === "object" && "id" in _pressDepth ? _pressDepth?.id : undefined} value={typeof _pressDepth === "object" && "value" in _pressDepth ? _pressDepth?.value : _pressDepth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_flashIndex" id={typeof _flashIndex === "object" && "id" in _flashIndex ? _flashIndex?.id : undefined} value={typeof _flashIndex === "object" && "value" in _flashIndex ? _flashIndex?.value : _flashIndex} /* default: 0 */  />
        </Component>
      );
    };
    