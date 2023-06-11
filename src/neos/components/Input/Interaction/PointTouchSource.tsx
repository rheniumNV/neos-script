import { member, Member, Component } from "../../../core";
    
    export interface PointTouchSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoUpdateUser?: member<any>;
OutOfSightAngle?: member<number>;
MaxTouchPenetrationDistance?: member<number>;
CustomFilter?: member<any>;
Offset?: member<[number, number, number]>;
Direction?: member<[number, number, number]>;
MaxDistance?: member<number>;
    }
    
    export function PointTouchSource(props: PointTouchSourceInput){
      const { id, persistentId, updateOrder, Enabled,
AutoUpdateUser,
OutOfSightAngle,
MaxTouchPenetrationDistance,
CustomFilter,
Offset,
Direction,
MaxDistance, } = props;
    
      return (
        <Component type="FrooxEngine.PointTouchSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="AutoUpdateUser" id={typeof AutoUpdateUser === "object" && "id" in AutoUpdateUser ? AutoUpdateUser?.id : undefined} value={typeof AutoUpdateUser === "object" && "value" in AutoUpdateUser ? AutoUpdateUser?.value : AutoUpdateUser} /* default: ID0 */  isRaw={typeof AutoUpdateUser === "object" && "isRaw" in AutoUpdateUser && AutoUpdateUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutOfSightAngle" id={typeof OutOfSightAngle === "object" && "id" in OutOfSightAngle ? OutOfSightAngle?.id : undefined} value={typeof OutOfSightAngle === "object" && "value" in OutOfSightAngle ? OutOfSightAngle?.value : OutOfSightAngle} /* default: 0 */  isRaw={typeof OutOfSightAngle === "object" && "isRaw" in OutOfSightAngle && OutOfSightAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTouchPenetrationDistance" id={typeof MaxTouchPenetrationDistance === "object" && "id" in MaxTouchPenetrationDistance ? MaxTouchPenetrationDistance?.id : undefined} value={typeof MaxTouchPenetrationDistance === "object" && "value" in MaxTouchPenetrationDistance ? MaxTouchPenetrationDistance?.value : MaxTouchPenetrationDistance} /* default: 0 */  isRaw={typeof MaxTouchPenetrationDistance === "object" && "isRaw" in MaxTouchPenetrationDistance && MaxTouchPenetrationDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`3[FrooxEngine.ICollider,System.Int32,System.Boolean]]`} name="CustomFilter" id={typeof CustomFilter === "object" && "id" in CustomFilter ? CustomFilter?.id : undefined} value={typeof CustomFilter === "object" && "value" in CustomFilter ? CustomFilter?.value : CustomFilter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof CustomFilter === "object" && "isRaw" in CustomFilter && CustomFilter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: [0; 0; 0] */  isRaw={typeof Direction === "object" && "isRaw" in Direction && Direction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  isRaw={typeof MaxDistance === "object" && "isRaw" in MaxDistance && MaxDistance.isRaw ? true : undefined} />
        </Component>
      );
    };
    