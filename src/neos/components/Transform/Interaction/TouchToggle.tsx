import { member, Member, Component } from "../../../core";
    
    export interface TouchToggleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
State?: member<boolean>;
EventType?: member<any>;
ToggleEvent?: member<any>;
OnEvent?: member<any>;
OffEvent?: member<any>;
AcceptOutOfSightTouch?: member<boolean>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
Vibrate?: member<any>;
EditModeOnly?: member<boolean>;
ActiveUserFilter?: member<any>;
__legacyActiveUserRootOnly?: member<boolean>;
    }
    
    export function TouchToggle(props: TouchToggleInput){
      const { id, persistentId, updateOrder, Enabled,
State,
EventType,
ToggleEvent,
OnEvent,
OffEvent,
AcceptOutOfSightTouch,
AcceptPhysicalTouch,
AcceptRemoteTouch,
Vibrate,
EditModeOnly,
ActiveUserFilter,
__legacyActiveUserRootOnly, } = props;
    
      return (
        <Component type="FrooxEngine.TouchToggle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="State" id={typeof State === "object" && "id" in State ? State?.id : undefined} value={typeof State === "object" && "value" in State ? State?.value : State} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TouchEventType]`} name="EventType" id={typeof EventType === "object" && "id" in EventType ? EventType?.id : undefined} value={typeof EventType === "object" && "value" in EventType ? EventType?.value : EventType} /* default: Hover */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.EventState]`} name="ToggleEvent" id={typeof ToggleEvent === "object" && "id" in ToggleEvent ? ToggleEvent?.id : undefined} value={typeof ToggleEvent === "object" && "value" in ToggleEvent ? ToggleEvent?.value : ToggleEvent} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.EventState]`} name="OnEvent" id={typeof OnEvent === "object" && "id" in OnEvent ? OnEvent?.id : undefined} value={typeof OnEvent === "object" && "value" in OnEvent ? OnEvent?.value : OnEvent} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.EventState]`} name="OffEvent" id={typeof OffEvent === "object" && "id" in OffEvent ? OffEvent?.id : undefined} value={typeof OffEvent === "object" && "value" in OffEvent ? OffEvent?.value : OffEvent} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="Vibrate" id={typeof Vibrate === "object" && "id" in Vibrate ? Vibrate?.id : undefined} value={typeof Vibrate === "object" && "value" in Vibrate ? Vibrate?.value : Vibrate} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`} name="ActiveUserFilter" id={typeof ActiveUserFilter === "object" && "id" in ActiveUserFilter ? ActiveUserFilter?.id : undefined} value={typeof ActiveUserFilter === "object" && "value" in ActiveUserFilter ? ActiveUserFilter?.value : ActiveUserFilter} /* default: Disabled */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__legacyActiveUserRootOnly-ID" id={typeof __legacyActiveUserRootOnly === "object" && "id" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.id : undefined} value={typeof __legacyActiveUserRootOnly === "object" && "value" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.value : __legacyActiveUserRootOnly} /* default: false */ idOnly />
        </Component>
      );
    };
    