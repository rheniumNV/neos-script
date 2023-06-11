import { member, Member, Component } from "../../../core";
    
    export interface PhysicalButtonInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PressAxis?: member<[number, number, number]>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
AcceptOutOfSightTouch?: member<boolean>;
EditModeOnly?: member<boolean>;
ActiveUserFilter?: member<any>;
__legacyActiveUserRootOnly?: member<boolean>;
Pressed?: member<any>;
Pressing?: member<any>;
Released?: member<any>;
PressDepth?: member<number>;
PressThreshold?: member<number>;
ReleaseThreshold?: member<number>;
IsPressed?: member<boolean>;
IsHovering?: member<boolean>;
IsHolding?: member<boolean>;
IsPressedOrHolding?: member<any>;
Hold?: member<boolean>;
HoldDepthRatio?: member<number>;
BeginPressVibration?: member<any>;
PressVibration?: member<any>;
HoverVibration?: member<any>;
Label?: member<any>;
_currentPressingDepth?: member<number>;
_buttonOffset?: member<[number, number, number]>;
_buttonPosition?: member<any>;
    }
    
    export function PhysicalButton(props: PhysicalButtonInput){
      const { id, persistentId, updateOrder, Enabled,
PressAxis,
AcceptPhysicalTouch,
AcceptRemoteTouch,
AcceptOutOfSightTouch,
EditModeOnly,
ActiveUserFilter,
__legacyActiveUserRootOnly,
Pressed,
Pressing,
Released,
PressDepth,
PressThreshold,
ReleaseThreshold,
IsPressed,
IsHovering,
IsHolding,
IsPressedOrHolding,
Hold,
HoldDepthRatio,
BeginPressVibration,
PressVibration,
HoverVibration,
Label,
_currentPressingDepth,
_buttonOffset,
_buttonPosition, } = props;
    
      return (
        <Component type="FrooxEngine.PhysicalButton" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="PressAxis" id={typeof PressAxis === "object" && "id" in PressAxis ? PressAxis?.id : undefined} value={typeof PressAxis === "object" && "value" in PressAxis ? PressAxis?.value : PressAxis} /* default: [0; 0; 0] */  isRaw={typeof PressAxis === "object" && "isRaw" in PressAxis && PressAxis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  isRaw={typeof AcceptOutOfSightTouch === "object" && "isRaw" in AcceptOutOfSightTouch && AcceptOutOfSightTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  isRaw={typeof EditModeOnly === "object" && "isRaw" in EditModeOnly && EditModeOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`} name="ActiveUserFilter" id={typeof ActiveUserFilter === "object" && "id" in ActiveUserFilter ? ActiveUserFilter?.id : undefined} value={typeof ActiveUserFilter === "object" && "value" in ActiveUserFilter ? ActiveUserFilter?.value : ActiveUserFilter} /* default: Disabled */  isRaw={typeof ActiveUserFilter === "object" && "isRaw" in ActiveUserFilter && ActiveUserFilter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__legacyActiveUserRootOnly-ID" id={typeof __legacyActiveUserRootOnly === "object" && "id" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.id : undefined} value={typeof __legacyActiveUserRootOnly === "object" && "value" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.value : __legacyActiveUserRootOnly} /* default: false */ readOnly isRaw={typeof __legacyActiveUserRootOnly === "object" && "isRaw" in __legacyActiveUserRootOnly && __legacyActiveUserRootOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressed" id={typeof Pressed === "object" && "id" in Pressed ? Pressed?.id : undefined} value={typeof Pressed === "object" && "value" in Pressed ? Pressed?.value : Pressed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pressed === "object" && "isRaw" in Pressed && Pressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressing" id={typeof Pressing === "object" && "id" in Pressing ? Pressing?.id : undefined} value={typeof Pressing === "object" && "value" in Pressing ? Pressing?.value : Pressing} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pressing === "object" && "isRaw" in Pressing && Pressing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Released" id={typeof Released === "object" && "id" in Released ? Released?.id : undefined} value={typeof Released === "object" && "value" in Released ? Released?.value : Released} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Released === "object" && "isRaw" in Released && Released.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PressDepth" id={typeof PressDepth === "object" && "id" in PressDepth ? PressDepth?.id : undefined} value={typeof PressDepth === "object" && "value" in PressDepth ? PressDepth?.value : PressDepth} /* default: 0 */  isRaw={typeof PressDepth === "object" && "isRaw" in PressDepth && PressDepth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PressThreshold" id={typeof PressThreshold === "object" && "id" in PressThreshold ? PressThreshold?.id : undefined} value={typeof PressThreshold === "object" && "value" in PressThreshold ? PressThreshold?.value : PressThreshold} /* default: 0 */  isRaw={typeof PressThreshold === "object" && "isRaw" in PressThreshold && PressThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ReleaseThreshold" id={typeof ReleaseThreshold === "object" && "id" in ReleaseThreshold ? ReleaseThreshold?.id : undefined} value={typeof ReleaseThreshold === "object" && "value" in ReleaseThreshold ? ReleaseThreshold?.value : ReleaseThreshold} /* default: 0 */  isRaw={typeof ReleaseThreshold === "object" && "isRaw" in ReleaseThreshold && ReleaseThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsPressed" id={typeof IsPressed === "object" && "id" in IsPressed ? IsPressed?.id : undefined} value={typeof IsPressed === "object" && "value" in IsPressed ? IsPressed?.value : IsPressed} /* default: false */  isRaw={typeof IsPressed === "object" && "isRaw" in IsPressed && IsPressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsHovering" id={typeof IsHovering === "object" && "id" in IsHovering ? IsHovering?.id : undefined} value={typeof IsHovering === "object" && "value" in IsHovering ? IsHovering?.value : IsHovering} /* default: false */  isRaw={typeof IsHovering === "object" && "isRaw" in IsHovering && IsHovering.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsHolding" id={typeof IsHolding === "object" && "id" in IsHolding ? IsHolding?.id : undefined} value={typeof IsHolding === "object" && "value" in IsHolding ? IsHolding?.value : IsHolding} /* default: false */  isRaw={typeof IsHolding === "object" && "isRaw" in IsHolding && IsHolding.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsPressedOrHolding" id={typeof IsPressedOrHolding === "object" && "id" in IsPressedOrHolding ? IsPressedOrHolding?.id : undefined} value={typeof IsPressedOrHolding === "object" && "value" in IsPressedOrHolding ? IsPressedOrHolding?.value : IsPressedOrHolding} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof IsPressedOrHolding === "object" && "isRaw" in IsPressedOrHolding && IsPressedOrHolding.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Hold" id={typeof Hold === "object" && "id" in Hold ? Hold?.id : undefined} value={typeof Hold === "object" && "value" in Hold ? Hold?.value : Hold} /* default: false */  isRaw={typeof Hold === "object" && "isRaw" in Hold && Hold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HoldDepthRatio" id={typeof HoldDepthRatio === "object" && "id" in HoldDepthRatio ? HoldDepthRatio?.id : undefined} value={typeof HoldDepthRatio === "object" && "value" in HoldDepthRatio ? HoldDepthRatio?.value : HoldDepthRatio} /* default: 0 */  isRaw={typeof HoldDepthRatio === "object" && "isRaw" in HoldDepthRatio && HoldDepthRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="BeginPressVibration" id={typeof BeginPressVibration === "object" && "id" in BeginPressVibration ? BeginPressVibration?.id : undefined} value={typeof BeginPressVibration === "object" && "value" in BeginPressVibration ? BeginPressVibration?.value : BeginPressVibration} /* default: None */  isRaw={typeof BeginPressVibration === "object" && "isRaw" in BeginPressVibration && BeginPressVibration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="PressVibration" id={typeof PressVibration === "object" && "id" in PressVibration ? PressVibration?.id : undefined} value={typeof PressVibration === "object" && "value" in PressVibration ? PressVibration?.value : PressVibration} /* default: None */  isRaw={typeof PressVibration === "object" && "isRaw" in PressVibration && PressVibration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="HoverVibration" id={typeof HoverVibration === "object" && "id" in HoverVibration ? HoverVibration?.id : undefined} value={typeof HoverVibration === "object" && "value" in HoverVibration ? HoverVibration?.value : HoverVibration} /* default: None */  isRaw={typeof HoverVibration === "object" && "isRaw" in HoverVibration && HoverVibration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: ID0 */  isRaw={typeof Label === "object" && "isRaw" in Label && Label.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_currentPressingDepth" id={typeof _currentPressingDepth === "object" && "id" in _currentPressingDepth ? _currentPressingDepth?.id : undefined} value={typeof _currentPressingDepth === "object" && "value" in _currentPressingDepth ? _currentPressingDepth?.value : _currentPressingDepth} /* default: 0 */  isRaw={typeof _currentPressingDepth === "object" && "isRaw" in _currentPressingDepth && _currentPressingDepth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_buttonOffset" id={typeof _buttonOffset === "object" && "id" in _buttonOffset ? _buttonOffset?.id : undefined} value={typeof _buttonOffset === "object" && "value" in _buttonOffset ? _buttonOffset?.value : _buttonOffset} /* default: [0; 0; 0] */  isRaw={typeof _buttonOffset === "object" && "isRaw" in _buttonOffset && _buttonOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_buttonPosition" id={typeof _buttonPosition === "object" && "id" in _buttonPosition ? _buttonPosition?.id : undefined} value={typeof _buttonPosition === "object" && "value" in _buttonPosition ? _buttonPosition?.value : _buttonPosition} /* default: ID0 */  isRaw={typeof _buttonPosition === "object" && "isRaw" in _buttonPosition && _buttonPosition.isRaw ? true : undefined} />
        </Component>
      );
    };
    