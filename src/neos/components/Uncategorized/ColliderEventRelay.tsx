import { member, Member, Component } from "../../core";
    
    export interface ColliderEventRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Collider?: member<any>;
ContactStart?: member<any>;
ContactStay?: member<any>;
ContactEnd?: member<any>;
    }
    
    export function ColliderEventRelay(props: ColliderEventRelayInput){
      const { id, persistentId, updateOrder, Enabled,
Collider,
ContactStart,
ContactStay,
ContactEnd, } = props;
    
      return (
        <Component type="FrooxEngine.ColliderEventRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ICollider]`} name="Collider" id={typeof Collider === "object" && "id" in Collider ? Collider?.id : undefined} value={typeof Collider === "object" && "value" in Collider ? Collider?.value : Collider} /* default: ID0 */  isRaw={typeof Collider === "object" && "isRaw" in Collider && Collider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ContactEvent]`} name="ContactStart" id={typeof ContactStart === "object" && "id" in ContactStart ? ContactStart?.id : undefined} value={typeof ContactStart === "object" && "value" in ContactStart ? ContactStart?.value : ContactStart} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof ContactStart === "object" && "isRaw" in ContactStart && ContactStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ContactEvent]`} name="ContactStay" id={typeof ContactStay === "object" && "id" in ContactStay ? ContactStay?.id : undefined} value={typeof ContactStay === "object" && "value" in ContactStay ? ContactStay?.value : ContactStay} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof ContactStay === "object" && "isRaw" in ContactStay && ContactStay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ContactEvent]`} name="ContactEnd" id={typeof ContactEnd === "object" && "id" in ContactEnd ? ContactEnd?.id : undefined} value={typeof ContactEnd === "object" && "value" in ContactEnd ? ContactEnd?.value : ContactEnd} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof ContactEnd === "object" && "isRaw" in ContactEnd && ContactEnd.isRaw ? true : undefined} />
        </Component>
      );
    };
    