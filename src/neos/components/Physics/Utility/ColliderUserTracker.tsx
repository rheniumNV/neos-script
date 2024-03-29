import { member, Member, Component } from "../../../core";
    
    export interface ColliderUserTrackerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TriggersOnly?: member<boolean>;
IsLocalUserInside?: member<any>;
IsAnyUserInside?: member<any>;
NumberOfUsersInside?: member<any>;
    }
    
    export function ColliderUserTracker(props: ColliderUserTrackerInput){
      const { id, persistentId, updateOrder, Enabled,
TriggersOnly,
IsLocalUserInside,
IsAnyUserInside,
NumberOfUsersInside, } = props;
    
      return (
        <Component type="FrooxEngine.ColliderUserTracker" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TriggersOnly" id={typeof TriggersOnly === "object" && "id" in TriggersOnly ? TriggersOnly?.id : undefined} value={typeof TriggersOnly === "object" && "value" in TriggersOnly ? TriggersOnly?.value : TriggersOnly} /* default: false */  isRaw={typeof TriggersOnly === "object" && "isRaw" in TriggersOnly && TriggersOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsLocalUserInside" id={typeof IsLocalUserInside === "object" && "id" in IsLocalUserInside ? IsLocalUserInside?.id : undefined} value={typeof IsLocalUserInside === "object" && "value" in IsLocalUserInside ? IsLocalUserInside?.value : IsLocalUserInside} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof IsLocalUserInside === "object" && "isRaw" in IsLocalUserInside && IsLocalUserInside.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsAnyUserInside" id={typeof IsAnyUserInside === "object" && "id" in IsAnyUserInside ? IsAnyUserInside?.id : undefined} value={typeof IsAnyUserInside === "object" && "value" in IsAnyUserInside ? IsAnyUserInside?.value : IsAnyUserInside} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof IsAnyUserInside === "object" && "isRaw" in IsAnyUserInside && IsAnyUserInside.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="NumberOfUsersInside" id={typeof NumberOfUsersInside === "object" && "id" in NumberOfUsersInside ? NumberOfUsersInside?.id : undefined} value={typeof NumberOfUsersInside === "object" && "value" in NumberOfUsersInside ? NumberOfUsersInside?.value : NumberOfUsersInside} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof NumberOfUsersInside === "object" && "isRaw" in NumberOfUsersInside && NumberOfUsersInside.isRaw ? true : undefined} />
        </Component>
      );
    };
    