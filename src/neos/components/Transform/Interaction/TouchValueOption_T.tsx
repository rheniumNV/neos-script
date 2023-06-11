import { member, Member, Component } from "../../../core";
    
    export interface TouchValueOption_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Value?: member<any>;
ActiveIndicator?: member<any>;
HoverIndicator?: member<any>;
HoverVibrate?: member<any>;
Vibrate?: member<any>;
SetOnTouchBegin?: member<boolean>;
SetOnTouchStay?: member<boolean>;
SetOnTouchEnd?: member<boolean>;
AcceptOutOfSightTouch?: member<boolean>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
EditModeOnly?: member<boolean>;
ActiveUserRootOnly?: member<boolean>;
    }
    
    export function TouchValueOption_T(props: TouchValueOption_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Target,
Value,
ActiveIndicator,
HoverIndicator,
HoverVibrate,
Vibrate,
SetOnTouchBegin,
SetOnTouchStay,
SetOnTouchEnd,
AcceptOutOfSightTouch,
AcceptPhysicalTouch,
AcceptRemoteTouch,
EditModeOnly,
ActiveUserRootOnly, } = props;
    
      return (
        <Component type={`FrooxEngine.TouchValueOption\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="ActiveIndicator" id={typeof ActiveIndicator === "object" && "id" in ActiveIndicator ? ActiveIndicator?.id : undefined} value={typeof ActiveIndicator === "object" && "value" in ActiveIndicator ? ActiveIndicator?.value : ActiveIndicator} /* default: null */  isRaw={typeof ActiveIndicator === "object" && "isRaw" in ActiveIndicator && ActiveIndicator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="HoverIndicator" id={typeof HoverIndicator === "object" && "id" in HoverIndicator ? HoverIndicator?.id : undefined} value={typeof HoverIndicator === "object" && "value" in HoverIndicator ? HoverIndicator?.value : HoverIndicator} /* default: null */  isRaw={typeof HoverIndicator === "object" && "isRaw" in HoverIndicator && HoverIndicator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="HoverVibrate" id={typeof HoverVibrate === "object" && "id" in HoverVibrate ? HoverVibrate?.id : undefined} value={typeof HoverVibrate === "object" && "value" in HoverVibrate ? HoverVibrate?.value : HoverVibrate} /* default: null */  isRaw={typeof HoverVibrate === "object" && "isRaw" in HoverVibrate && HoverVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="Vibrate" id={typeof Vibrate === "object" && "id" in Vibrate ? Vibrate?.id : undefined} value={typeof Vibrate === "object" && "value" in Vibrate ? Vibrate?.value : Vibrate} /* default: null */  isRaw={typeof Vibrate === "object" && "isRaw" in Vibrate && Vibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetOnTouchBegin" id={typeof SetOnTouchBegin === "object" && "id" in SetOnTouchBegin ? SetOnTouchBegin?.id : undefined} value={typeof SetOnTouchBegin === "object" && "value" in SetOnTouchBegin ? SetOnTouchBegin?.value : SetOnTouchBegin} /* default: null */  isRaw={typeof SetOnTouchBegin === "object" && "isRaw" in SetOnTouchBegin && SetOnTouchBegin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetOnTouchStay" id={typeof SetOnTouchStay === "object" && "id" in SetOnTouchStay ? SetOnTouchStay?.id : undefined} value={typeof SetOnTouchStay === "object" && "value" in SetOnTouchStay ? SetOnTouchStay?.value : SetOnTouchStay} /* default: null */  isRaw={typeof SetOnTouchStay === "object" && "isRaw" in SetOnTouchStay && SetOnTouchStay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetOnTouchEnd" id={typeof SetOnTouchEnd === "object" && "id" in SetOnTouchEnd ? SetOnTouchEnd?.id : undefined} value={typeof SetOnTouchEnd === "object" && "value" in SetOnTouchEnd ? SetOnTouchEnd?.value : SetOnTouchEnd} /* default: null */  isRaw={typeof SetOnTouchEnd === "object" && "isRaw" in SetOnTouchEnd && SetOnTouchEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: null */  isRaw={typeof AcceptOutOfSightTouch === "object" && "isRaw" in AcceptOutOfSightTouch && AcceptOutOfSightTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: null */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: null */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: null */  isRaw={typeof EditModeOnly === "object" && "isRaw" in EditModeOnly && EditModeOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ActiveUserRootOnly" id={typeof ActiveUserRootOnly === "object" && "id" in ActiveUserRootOnly ? ActiveUserRootOnly?.id : undefined} value={typeof ActiveUserRootOnly === "object" && "value" in ActiveUserRootOnly ? ActiveUserRootOnly?.value : ActiveUserRootOnly} /* default: null */  isRaw={typeof ActiveUserRootOnly === "object" && "isRaw" in ActiveUserRootOnly && ActiveUserRootOnly.isRaw ? true : undefined} />
        </Component>
      );
    };
    