import { member, Member, Component } from "../../../core";
    
    export interface PhysicalLocomotionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Icon?: member<any>;
Color?: member<[number, number, number, number]>;
_currentController?: member<any>;
_lastDefaultIcon?: member<any>;
_lastDefaultColor?: member<any>;
Turn?: member<any>;
MinInitializationDelay?: member<number>;
MaxInitializationDelay?: member<number>;
InitializationColliderRoot?: member<any>;
UseSpeedFromUserSettings?: member<boolean>;
Description?: member<any>;
Mode?: member<any>;
Gripping?: member<any>;
GripOnHold?: member<boolean>;
GripRadius?: member<number>;
GripVelocityMultiplier?: member<number>;
GripHandRotationMode?: member<any>;
GripObjectRotationMode?: member<any>;
HandGripRotationSmoothSpeed?: member<any>;
FallRespawnPosition?: member<number>;
MakeGravityCharacterLocal?: member<boolean>;
AutoAlignVerticalWithGravitySpeed?: member<number>;
ManualAlignVerticalWithGravitySpeed?: member<number>;
AirDecelerationSpeed?: member<number>;
GripScaleDelay?: member<number>;
AllowCrouch?: member<boolean>;
MaximumNormalizedSpeed?: member<number>;
_defaultIcon?: member<any>;
_defaultColor?: member<[number, number, number, number]>;
_characterController?: member<any>;
__legacyName?: member<any>;
    }
    
    export function PhysicalLocomotion(props: PhysicalLocomotionInput){
      const { id, persistentId, updateOrder, Enabled,
Icon,
Color,
_currentController,
_lastDefaultIcon,
_lastDefaultColor,
Turn,
MinInitializationDelay,
MaxInitializationDelay,
InitializationColliderRoot,
UseSpeedFromUserSettings,
Description,
Mode,
Gripping,
GripOnHold,
GripRadius,
GripVelocityMultiplier,
GripHandRotationMode,
GripObjectRotationMode,
HandGripRotationSmoothSpeed,
FallRespawnPosition,
MakeGravityCharacterLocal,
AutoAlignVerticalWithGravitySpeed,
ManualAlignVerticalWithGravitySpeed,
AirDecelerationSpeed,
GripScaleDelay,
AllowCrouch,
MaximumNormalizedSpeed,
_defaultIcon,
_defaultColor,
_characterController,
__legacyName, } = props;
    
      return (
        <Component type="FrooxEngine.PhysicalLocomotion" id={id} persistentId={persistentId} updateOrder={updateOrder} version={8}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.ITexture2D]]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LocomotionController]`} name="_currentController" id={typeof _currentController === "object" && "id" in _currentController ? _currentController?.id : undefined} value={typeof _currentController === "object" && "value" in _currentController ? _currentController?.value : _currentController} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="_lastDefaultIcon" id={typeof _lastDefaultIcon === "object" && "id" in _lastDefaultIcon ? _lastDefaultIcon?.id : undefined} value={typeof _lastDefaultIcon === "object" && "value" in _lastDefaultIcon ? _lastDefaultIcon?.value : _lastDefaultIcon} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.color]]`} name="_lastDefaultColor" id={typeof _lastDefaultColor === "object" && "id" in _lastDefaultColor ? _lastDefaultColor?.id : undefined} value={typeof _lastDefaultColor === "object" && "value" in _lastDefaultColor ? _lastDefaultColor?.value : _lastDefaultColor} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.TurnSubmodule`} name="Turn" id={typeof Turn === "object" && "id" in Turn ? Turn?.id : undefined} value={typeof Turn === "object" && "value" in Turn ? Turn?.value : Turn} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TurnSubmodule,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinInitializationDelay" id={typeof MinInitializationDelay === "object" && "id" in MinInitializationDelay ? MinInitializationDelay?.id : undefined} value={typeof MinInitializationDelay === "object" && "value" in MinInitializationDelay ? MinInitializationDelay?.value : MinInitializationDelay} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxInitializationDelay" id={typeof MaxInitializationDelay === "object" && "id" in MaxInitializationDelay ? MaxInitializationDelay?.id : undefined} value={typeof MaxInitializationDelay === "object" && "value" in MaxInitializationDelay ? MaxInitializationDelay?.value : MaxInitializationDelay} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="InitializationColliderRoot" id={typeof InitializationColliderRoot === "object" && "id" in InitializationColliderRoot ? InitializationColliderRoot?.id : undefined} value={typeof InitializationColliderRoot === "object" && "value" in InitializationColliderRoot ? InitializationColliderRoot?.value : InitializationColliderRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseSpeedFromUserSettings" id={typeof UseSpeedFromUserSettings === "object" && "id" in UseSpeedFromUserSettings ? UseSpeedFromUserSettings?.id : undefined} value={typeof UseSpeedFromUserSettings === "object" && "value" in UseSpeedFromUserSettings ? UseSpeedFromUserSettings?.value : UseSpeedFromUserSettings} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Description" id={typeof Description === "object" && "id" in Description ? Description?.id : undefined} value={typeof Description === "object" && "value" in Description ? Description?.value : Description} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicalLocomotion+MovementMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: GroundTraction */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicalLocomotion+EnvironmentGripping]`} name="Gripping" id={typeof Gripping === "object" && "id" in Gripping ? Gripping?.id : undefined} value={typeof Gripping === "object" && "value" in Gripping ? Gripping?.value : Gripping} /* default: Disabled */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="GripOnHold" id={typeof GripOnHold === "object" && "id" in GripOnHold ? GripOnHold?.id : undefined} value={typeof GripOnHold === "object" && "value" in GripOnHold ? GripOnHold?.value : GripOnHold} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GripRadius" id={typeof GripRadius === "object" && "id" in GripRadius ? GripRadius?.id : undefined} value={typeof GripRadius === "object" && "value" in GripRadius ? GripRadius?.value : GripRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GripVelocityMultiplier" id={typeof GripVelocityMultiplier === "object" && "id" in GripVelocityMultiplier ? GripVelocityMultiplier?.id : undefined} value={typeof GripVelocityMultiplier === "object" && "value" in GripVelocityMultiplier ? GripVelocityMultiplier?.value : GripVelocityMultiplier} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicalLocomotion+GripRotation]`} name="GripHandRotationMode" id={typeof GripHandRotationMode === "object" && "id" in GripHandRotationMode ? GripHandRotationMode?.id : undefined} value={typeof GripHandRotationMode === "object" && "value" in GripHandRotationMode ? GripHandRotationMode?.value : GripHandRotationMode} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicalLocomotion+GripRotation]`} name="GripObjectRotationMode" id={typeof GripObjectRotationMode === "object" && "id" in GripObjectRotationMode ? GripObjectRotationMode?.id : undefined} value={typeof GripObjectRotationMode === "object" && "value" in GripObjectRotationMode ? GripObjectRotationMode?.value : GripObjectRotationMode} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="HandGripRotationSmoothSpeed" id={typeof HandGripRotationSmoothSpeed === "object" && "id" in HandGripRotationSmoothSpeed ? HandGripRotationSmoothSpeed?.id : undefined} value={typeof HandGripRotationSmoothSpeed === "object" && "value" in HandGripRotationSmoothSpeed ? HandGripRotationSmoothSpeed?.value : HandGripRotationSmoothSpeed} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FallRespawnPosition" id={typeof FallRespawnPosition === "object" && "id" in FallRespawnPosition ? FallRespawnPosition?.id : undefined} value={typeof FallRespawnPosition === "object" && "value" in FallRespawnPosition ? FallRespawnPosition?.value : FallRespawnPosition} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MakeGravityCharacterLocal" id={typeof MakeGravityCharacterLocal === "object" && "id" in MakeGravityCharacterLocal ? MakeGravityCharacterLocal?.id : undefined} value={typeof MakeGravityCharacterLocal === "object" && "value" in MakeGravityCharacterLocal ? MakeGravityCharacterLocal?.value : MakeGravityCharacterLocal} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AutoAlignVerticalWithGravitySpeed" id={typeof AutoAlignVerticalWithGravitySpeed === "object" && "id" in AutoAlignVerticalWithGravitySpeed ? AutoAlignVerticalWithGravitySpeed?.id : undefined} value={typeof AutoAlignVerticalWithGravitySpeed === "object" && "value" in AutoAlignVerticalWithGravitySpeed ? AutoAlignVerticalWithGravitySpeed?.value : AutoAlignVerticalWithGravitySpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ManualAlignVerticalWithGravitySpeed" id={typeof ManualAlignVerticalWithGravitySpeed === "object" && "id" in ManualAlignVerticalWithGravitySpeed ? ManualAlignVerticalWithGravitySpeed?.id : undefined} value={typeof ManualAlignVerticalWithGravitySpeed === "object" && "value" in ManualAlignVerticalWithGravitySpeed ? ManualAlignVerticalWithGravitySpeed?.value : ManualAlignVerticalWithGravitySpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AirDecelerationSpeed" id={typeof AirDecelerationSpeed === "object" && "id" in AirDecelerationSpeed ? AirDecelerationSpeed?.id : undefined} value={typeof AirDecelerationSpeed === "object" && "value" in AirDecelerationSpeed ? AirDecelerationSpeed?.value : AirDecelerationSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GripScaleDelay" id={typeof GripScaleDelay === "object" && "id" in GripScaleDelay ? GripScaleDelay?.id : undefined} value={typeof GripScaleDelay === "object" && "value" in GripScaleDelay ? GripScaleDelay?.value : GripScaleDelay} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowCrouch" id={typeof AllowCrouch === "object" && "id" in AllowCrouch ? AllowCrouch?.id : undefined} value={typeof AllowCrouch === "object" && "value" in AllowCrouch ? AllowCrouch?.value : AllowCrouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaximumNormalizedSpeed" id={typeof MaximumNormalizedSpeed === "object" && "id" in MaximumNormalizedSpeed ? MaximumNormalizedSpeed?.id : undefined} value={typeof MaximumNormalizedSpeed === "object" && "value" in MaximumNormalizedSpeed ? MaximumNormalizedSpeed?.value : MaximumNormalizedSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="_defaultIcon" id={typeof _defaultIcon === "object" && "id" in _defaultIcon ? _defaultIcon?.id : undefined} value={typeof _defaultIcon === "object" && "value" in _defaultIcon ? _defaultIcon?.value : _defaultIcon} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="_defaultColor" id={typeof _defaultColor === "object" && "id" in _defaultColor ? _defaultColor?.id : undefined} value={typeof _defaultColor === "object" && "value" in _defaultColor ? _defaultColor?.value : _defaultColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CharacterController]`} name="_characterController" id={typeof _characterController === "object" && "id" in _characterController ? _characterController?.id : undefined} value={typeof _characterController === "object" && "value" in _characterController ? _characterController?.value : _characterController} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="__legacyName-ID" id={typeof __legacyName === "object" && "id" in __legacyName ? __legacyName?.id : undefined} value={typeof __legacyName === "object" && "value" in __legacyName ? __legacyName?.value : __legacyName} /* default: <i>null</i> */ idOnly />
        </Component>
      );
    };
    