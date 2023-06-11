import { member, Member, Component } from "../../core";
    
    export interface TestFakeViveTrackerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Id?: member<any>;
IsTracking?: member<boolean>;
User?: member<any>;
    }
    
    export function TestFakeViveTracker(props: TestFakeViveTrackerInput){
      const { id, persistentId, updateOrder, Enabled,
Id,
IsTracking,
User, } = props;
    
      return (
        <Component type="FrooxEngine.TestFakeViveTracker" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Id" id={typeof Id === "object" && "id" in Id ? Id?.id : undefined} value={typeof Id === "object" && "value" in Id ? Id?.value : Id} /* default: <i>null</i> */  isRaw={typeof Id === "object" && "isRaw" in Id && Id.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsTracking" id={typeof IsTracking === "object" && "id" in IsTracking ? IsTracking?.id : undefined} value={typeof IsTracking === "object" && "value" in IsTracking ? IsTracking?.value : IsTracking} /* default: false */  isRaw={typeof IsTracking === "object" && "isRaw" in IsTracking && IsTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
        </Component>
      );
    };
    