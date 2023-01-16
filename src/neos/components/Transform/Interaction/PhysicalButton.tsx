import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="PressAxis" id={typeof PressAxis === "object" && "id" in PressAxis ? PressAxis?.id : undefined} value={typeof PressAxis === "object" && "value" in PressAxis ? PressAxis?.value : PressAxis} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`} name="ActiveUserFilter" id={typeof ActiveUserFilter === "object" && "id" in ActiveUserFilter ? ActiveUserFilter?.id : undefined} value={typeof ActiveUserFilter === "object" && "value" in ActiveUserFilter ? ActiveUserFilter?.value : ActiveUserFilter} /* default: Disabled */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__legacyActiveUserRootOnly-ID" id={typeof __legacyActiveUserRootOnly === "object" && "id" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.id : undefined} value={typeof __legacyActiveUserRootOnly === "object" && "value" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.value : __legacyActiveUserRootOnly} /* default: false */ idOnly />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressed" id={typeof Pressed === "object" && "id" in Pressed ? Pressed?.id : undefined} value={typeof Pressed === "object" && "value" in Pressed ? Pressed?.value : Pressed} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressing" id={typeof Pressing === "object" && "id" in Pressing ? Pressing?.id : undefined} value={typeof Pressing === "object" && "value" in Pressing ? Pressing?.value : Pressing} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Released" id={typeof Released === "object" && "id" in Released ? Released?.id : undefined} value={typeof Released === "object" && "value" in Released ? Released?.value : Released} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PressDepth" id={typeof PressDepth === "object" && "id" in PressDepth ? PressDepth?.id : undefined} value={typeof PressDepth === "object" && "value" in PressDepth ? PressDepth?.value : PressDepth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PressThreshold" id={typeof PressThreshold === "object" && "id" in PressThreshold ? PressThreshold?.id : undefined} value={typeof PressThreshold === "object" && "value" in PressThreshold ? PressThreshold?.value : PressThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ReleaseThreshold" id={typeof ReleaseThreshold === "object" && "id" in ReleaseThreshold ? ReleaseThreshold?.id : undefined} value={typeof ReleaseThreshold === "object" && "value" in ReleaseThreshold ? ReleaseThreshold?.value : ReleaseThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsPressed" id={typeof IsPressed === "object" && "id" in IsPressed ? IsPressed?.id : undefined} value={typeof IsPressed === "object" && "value" in IsPressed ? IsPressed?.value : IsPressed} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsHovering" id={typeof IsHovering === "object" && "id" in IsHovering ? IsHovering?.id : undefined} value={typeof IsHovering === "object" && "value" in IsHovering ? IsHovering?.value : IsHovering} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsHolding" id={typeof IsHolding === "object" && "id" in IsHolding ? IsHolding?.id : undefined} value={typeof IsHolding === "object" && "value" in IsHolding ? IsHolding?.value : IsHolding} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsPressedOrHolding" id={typeof IsPressedOrHolding === "object" && "id" in IsPressedOrHolding ? IsPressedOrHolding?.id : undefined} value={typeof IsPressedOrHolding === "object" && "value" in IsPressedOrHolding ? IsPressedOrHolding?.value : IsPressedOrHolding} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Hold" id={typeof Hold === "object" && "id" in Hold ? Hold?.id : undefined} value={typeof Hold === "object" && "value" in Hold ? Hold?.value : Hold} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HoldDepthRatio" id={typeof HoldDepthRatio === "object" && "id" in HoldDepthRatio ? HoldDepthRatio?.id : undefined} value={typeof HoldDepthRatio === "object" && "value" in HoldDepthRatio ? HoldDepthRatio?.value : HoldDepthRatio} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="BeginPressVibration" id={typeof BeginPressVibration === "object" && "id" in BeginPressVibration ? BeginPressVibration?.id : undefined} value={typeof BeginPressVibration === "object" && "value" in BeginPressVibration ? BeginPressVibration?.value : BeginPressVibration} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="PressVibration" id={typeof PressVibration === "object" && "id" in PressVibration ? PressVibration?.id : undefined} value={typeof PressVibration === "object" && "value" in PressVibration ? PressVibration?.value : PressVibration} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="HoverVibration" id={typeof HoverVibration === "object" && "id" in HoverVibration ? HoverVibration?.id : undefined} value={typeof HoverVibration === "object" && "value" in HoverVibration ? HoverVibration?.value : HoverVibration} /* default: None */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_currentPressingDepth" id={typeof _currentPressingDepth === "object" && "id" in _currentPressingDepth ? _currentPressingDepth?.id : undefined} value={typeof _currentPressingDepth === "object" && "value" in _currentPressingDepth ? _currentPressingDepth?.value : _currentPressingDepth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_buttonOffset" id={typeof _buttonOffset === "object" && "id" in _buttonOffset ? _buttonOffset?.id : undefined} value={typeof _buttonOffset === "object" && "value" in _buttonOffset ? _buttonOffset?.value : _buttonOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_buttonPosition" id={typeof _buttonPosition === "object" && "id" in _buttonPosition ? _buttonPosition?.id : undefined} value={typeof _buttonPosition === "object" && "value" in _buttonPosition ? _buttonPosition?.value : _buttonPosition} /* default: ID0 */  />
        </Component>
      );
    };
    