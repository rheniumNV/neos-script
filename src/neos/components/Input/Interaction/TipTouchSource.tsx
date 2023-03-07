import { member, Member, Component } from "../../../core";
    
    export interface TipTouchSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoUpdateUser?: member<any>;
OutOfSightAngle?: member<number>;
MaxTouchPenetrationDistance?: member<number>;
CustomFilter?: member<any>;
UseUserSpaceForDistance?: member<boolean>;
TouchDistance?: member<number>;
MaxDistance?: member<number>;
Offset?: member<[number, number, number]>;
Direction?: member<[number, number, number]>;
    }
    
    export function TipTouchSource(props: TipTouchSourceInput){
      const { id, persistentId, updateOrder, Enabled,
AutoUpdateUser,
OutOfSightAngle,
MaxTouchPenetrationDistance,
CustomFilter,
UseUserSpaceForDistance,
TouchDistance,
MaxDistance,
Offset,
Direction, } = props;
    
      return (
        <Component type="FrooxEngine.TipTouchSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="AutoUpdateUser" id={typeof AutoUpdateUser === "object" && "id" in AutoUpdateUser ? AutoUpdateUser?.id : undefined} value={typeof AutoUpdateUser === "object" && "value" in AutoUpdateUser ? AutoUpdateUser?.value : AutoUpdateUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutOfSightAngle" id={typeof OutOfSightAngle === "object" && "id" in OutOfSightAngle ? OutOfSightAngle?.id : undefined} value={typeof OutOfSightAngle === "object" && "value" in OutOfSightAngle ? OutOfSightAngle?.value : OutOfSightAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTouchPenetrationDistance" id={typeof MaxTouchPenetrationDistance === "object" && "id" in MaxTouchPenetrationDistance ? MaxTouchPenetrationDistance?.id : undefined} value={typeof MaxTouchPenetrationDistance === "object" && "value" in MaxTouchPenetrationDistance ? MaxTouchPenetrationDistance?.value : MaxTouchPenetrationDistance} /* default: 0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`3[FrooxEngine.ICollider,System.Int32,System.Boolean]]`} name="CustomFilter" id={typeof CustomFilter === "object" && "id" in CustomFilter ? CustomFilter?.id : undefined} value={typeof CustomFilter === "object" && "value" in CustomFilter ? CustomFilter?.value : CustomFilter} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseUserSpaceForDistance" id={typeof UseUserSpaceForDistance === "object" && "id" in UseUserSpaceForDistance ? UseUserSpaceForDistance?.id : undefined} value={typeof UseUserSpaceForDistance === "object" && "value" in UseUserSpaceForDistance ? UseUserSpaceForDistance?.value : UseUserSpaceForDistance} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TouchDistance" id={typeof TouchDistance === "object" && "id" in TouchDistance ? TouchDistance?.id : undefined} value={typeof TouchDistance === "object" && "value" in TouchDistance ? TouchDistance?.value : TouchDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: [0; 0; 0] */  />
        </Component>
      );
    };
    