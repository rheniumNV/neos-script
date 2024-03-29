import { member, Member, Component } from "../../../core";
    
    export interface TouchableDataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Hovering?: member<boolean>;
Touching?: member<boolean>;
AcceptOutOfSightTouch?: member<boolean>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
OnHoverStartVibrate?: member<any>;
OnHoverStayVibrate?: member<any>;
OnHoverEndVibrate?: member<any>;
OnTouchStartVibrate?: member<any>;
OnTouchStayVibrate?: member<any>;
OnTouchEndVibrate?: member<any>;
EditModeOnly?: member<boolean>;
ActiveUserFilter?: member<any>;
    }
    
    export function TouchableData(props: TouchableDataInput){
      const { id, persistentId, updateOrder, Enabled,
Hovering,
Touching,
AcceptOutOfSightTouch,
AcceptPhysicalTouch,
AcceptRemoteTouch,
OnHoverStartVibrate,
OnHoverStayVibrate,
OnHoverEndVibrate,
OnTouchStartVibrate,
OnTouchStayVibrate,
OnTouchEndVibrate,
EditModeOnly,
ActiveUserFilter, } = props;
    
      return (
        <Component type="FrooxEngine.TouchableData" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Hovering" id={typeof Hovering === "object" && "id" in Hovering ? Hovering?.id : undefined} value={typeof Hovering === "object" && "value" in Hovering ? Hovering?.value : Hovering} /* default: false */  isRaw={typeof Hovering === "object" && "isRaw" in Hovering && Hovering.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Touching" id={typeof Touching === "object" && "id" in Touching ? Touching?.id : undefined} value={typeof Touching === "object" && "value" in Touching ? Touching?.value : Touching} /* default: false */  isRaw={typeof Touching === "object" && "isRaw" in Touching && Touching.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  isRaw={typeof AcceptOutOfSightTouch === "object" && "isRaw" in AcceptOutOfSightTouch && AcceptOutOfSightTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="OnHoverStartVibrate" id={typeof OnHoverStartVibrate === "object" && "id" in OnHoverStartVibrate ? OnHoverStartVibrate?.id : undefined} value={typeof OnHoverStartVibrate === "object" && "value" in OnHoverStartVibrate ? OnHoverStartVibrate?.value : OnHoverStartVibrate} /* default: None */  isRaw={typeof OnHoverStartVibrate === "object" && "isRaw" in OnHoverStartVibrate && OnHoverStartVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="OnHoverStayVibrate" id={typeof OnHoverStayVibrate === "object" && "id" in OnHoverStayVibrate ? OnHoverStayVibrate?.id : undefined} value={typeof OnHoverStayVibrate === "object" && "value" in OnHoverStayVibrate ? OnHoverStayVibrate?.value : OnHoverStayVibrate} /* default: None */  isRaw={typeof OnHoverStayVibrate === "object" && "isRaw" in OnHoverStayVibrate && OnHoverStayVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="OnHoverEndVibrate" id={typeof OnHoverEndVibrate === "object" && "id" in OnHoverEndVibrate ? OnHoverEndVibrate?.id : undefined} value={typeof OnHoverEndVibrate === "object" && "value" in OnHoverEndVibrate ? OnHoverEndVibrate?.value : OnHoverEndVibrate} /* default: None */  isRaw={typeof OnHoverEndVibrate === "object" && "isRaw" in OnHoverEndVibrate && OnHoverEndVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="OnTouchStartVibrate" id={typeof OnTouchStartVibrate === "object" && "id" in OnTouchStartVibrate ? OnTouchStartVibrate?.id : undefined} value={typeof OnTouchStartVibrate === "object" && "value" in OnTouchStartVibrate ? OnTouchStartVibrate?.value : OnTouchStartVibrate} /* default: None */  isRaw={typeof OnTouchStartVibrate === "object" && "isRaw" in OnTouchStartVibrate && OnTouchStartVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="OnTouchStayVibrate" id={typeof OnTouchStayVibrate === "object" && "id" in OnTouchStayVibrate ? OnTouchStayVibrate?.id : undefined} value={typeof OnTouchStayVibrate === "object" && "value" in OnTouchStayVibrate ? OnTouchStayVibrate?.value : OnTouchStayVibrate} /* default: None */  isRaw={typeof OnTouchStayVibrate === "object" && "isRaw" in OnTouchStayVibrate && OnTouchStayVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="OnTouchEndVibrate" id={typeof OnTouchEndVibrate === "object" && "id" in OnTouchEndVibrate ? OnTouchEndVibrate?.id : undefined} value={typeof OnTouchEndVibrate === "object" && "value" in OnTouchEndVibrate ? OnTouchEndVibrate?.value : OnTouchEndVibrate} /* default: None */  isRaw={typeof OnTouchEndVibrate === "object" && "isRaw" in OnTouchEndVibrate && OnTouchEndVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  isRaw={typeof EditModeOnly === "object" && "isRaw" in EditModeOnly && EditModeOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`} name="ActiveUserFilter" id={typeof ActiveUserFilter === "object" && "id" in ActiveUserFilter ? ActiveUserFilter?.id : undefined} value={typeof ActiveUserFilter === "object" && "value" in ActiveUserFilter ? ActiveUserFilter?.value : ActiveUserFilter} /* default: Disabled */  isRaw={typeof ActiveUserFilter === "object" && "isRaw" in ActiveUserFilter && ActiveUserFilter.isRaw ? true : undefined} />
        </Component>
      );
    };
    