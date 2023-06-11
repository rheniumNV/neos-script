import { member, Member, Component } from "../../../core";
    
    export interface TouchEventRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Touched?: member<any>;
AcceptOutOfSightTouch?: member<boolean>;
TouchableTargets?: member<any>;
    }
    
    export function TouchEventRelay(props: TouchEventRelayInput){
      const { id, persistentId, updateOrder, Enabled,
Touched,
AcceptOutOfSightTouch,
TouchableTargets, } = props;
    
      return (
        <Component type="FrooxEngine.TouchEventRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.TouchEvent]`} name="Touched" id={typeof Touched === "object" && "id" in Touched ? Touched?.id : undefined} value={typeof Touched === "object" && "value" in Touched ? Touched?.value : Touched} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Touched === "object" && "isRaw" in Touched && Touched.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  isRaw={typeof AcceptOutOfSightTouch === "object" && "isRaw" in AcceptOutOfSightTouch && AcceptOutOfSightTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.ITouchable]`} name="TouchableTargets" id={typeof TouchableTargets === "object" && "id" in TouchableTargets ? TouchableTargets?.id : undefined} value={typeof TouchableTargets === "object" && "value" in TouchableTargets ? TouchableTargets?.value : TouchableTargets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.ITouchable] */  isRaw={typeof TouchableTargets === "object" && "isRaw" in TouchableTargets && TouchableTargets.isRaw ? true : undefined} />
        </Component>
      );
    };
    