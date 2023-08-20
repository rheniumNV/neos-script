import { member, Member, Component } from "../../../core";
    
    export interface TouchButtonInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
IsPressed?: member<boolean>;
IsHovering?: member<boolean>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
AcceptOutOfSightTouch?: member<boolean>;
EditModeOnly?: member<boolean>;
ActiveUserFilter?: member<any>;
Pressed?: member<any>;
Pressing?: member<any>;
Released?: member<any>;
BeginPressVibration?: member<any>;
PressVibration?: member<any>;
HoverVibration?: member<any>;
Label?: member<any>;
    }
    
    export function TouchButton(props: TouchButtonInput){
      const { id, persistentId, updateOrder, Enabled,
IsPressed,
IsHovering,
AcceptPhysicalTouch,
AcceptRemoteTouch,
AcceptOutOfSightTouch,
EditModeOnly,
ActiveUserFilter,
Pressed,
Pressing,
Released,
BeginPressVibration,
PressVibration,
HoverVibration,
Label, } = props;
    
      return (
        <Component type="FrooxEngine.TouchButton" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsPressed" id={typeof IsPressed === "object" && "id" in IsPressed ? IsPressed?.id : undefined} value={typeof IsPressed === "object" && "value" in IsPressed ? IsPressed?.value : IsPressed} /* default: false */  isRaw={typeof IsPressed === "object" && "isRaw" in IsPressed && IsPressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsHovering" id={typeof IsHovering === "object" && "id" in IsHovering ? IsHovering?.id : undefined} value={typeof IsHovering === "object" && "value" in IsHovering ? IsHovering?.value : IsHovering} /* default: false */  isRaw={typeof IsHovering === "object" && "isRaw" in IsHovering && IsHovering.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  isRaw={typeof AcceptOutOfSightTouch === "object" && "isRaw" in AcceptOutOfSightTouch && AcceptOutOfSightTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  isRaw={typeof EditModeOnly === "object" && "isRaw" in EditModeOnly && EditModeOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`} name="ActiveUserFilter" id={typeof ActiveUserFilter === "object" && "id" in ActiveUserFilter ? ActiveUserFilter?.id : undefined} value={typeof ActiveUserFilter === "object" && "value" in ActiveUserFilter ? ActiveUserFilter?.value : ActiveUserFilter} /* default: Disabled */  isRaw={typeof ActiveUserFilter === "object" && "isRaw" in ActiveUserFilter && ActiveUserFilter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressed" id={typeof Pressed === "object" && "id" in Pressed ? Pressed?.id : undefined} value={typeof Pressed === "object" && "value" in Pressed ? Pressed?.value : Pressed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pressed === "object" && "isRaw" in Pressed && Pressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressing" id={typeof Pressing === "object" && "id" in Pressing ? Pressing?.id : undefined} value={typeof Pressing === "object" && "value" in Pressing ? Pressing?.value : Pressing} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pressing === "object" && "isRaw" in Pressing && Pressing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Released" id={typeof Released === "object" && "id" in Released ? Released?.id : undefined} value={typeof Released === "object" && "value" in Released ? Released?.value : Released} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Released === "object" && "isRaw" in Released && Released.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="BeginPressVibration" id={typeof BeginPressVibration === "object" && "id" in BeginPressVibration ? BeginPressVibration?.id : undefined} value={typeof BeginPressVibration === "object" && "value" in BeginPressVibration ? BeginPressVibration?.value : BeginPressVibration} /* default: None */  isRaw={typeof BeginPressVibration === "object" && "isRaw" in BeginPressVibration && BeginPressVibration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="PressVibration" id={typeof PressVibration === "object" && "id" in PressVibration ? PressVibration?.id : undefined} value={typeof PressVibration === "object" && "value" in PressVibration ? PressVibration?.value : PressVibration} /* default: None */  isRaw={typeof PressVibration === "object" && "isRaw" in PressVibration && PressVibration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="HoverVibration" id={typeof HoverVibration === "object" && "id" in HoverVibration ? HoverVibration?.id : undefined} value={typeof HoverVibration === "object" && "value" in HoverVibration ? HoverVibration?.value : HoverVibration} /* default: None */  isRaw={typeof HoverVibration === "object" && "isRaw" in HoverVibration && HoverVibration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: ID0 */  isRaw={typeof Label === "object" && "isRaw" in Label && Label.isRaw ? true : undefined} />
        </Component>
      );
    };
    