import { member, Member, Component } from "../../core";
    
    export interface RelayTouchSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoUpdateUser?: member<any>;
OutOfSightAngle?: member<number>;
MaxTouchPenetrationDistance?: member<number>;
TipPositionGetter?: member<any>;
TipDirectionGetter?: member<any>;
TouchTypeGetter?: member<any>;
TouchableGetter?: member<any>;
    }
    
    export function RelayTouchSource(props: RelayTouchSourceInput){
      const { id, persistentId, updateOrder, Enabled,
AutoUpdateUser,
OutOfSightAngle,
MaxTouchPenetrationDistance,
TipPositionGetter,
TipDirectionGetter,
TouchTypeGetter,
TouchableGetter, } = props;
    
      return (
        <Component type="FrooxEngine.RelayTouchSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="AutoUpdateUser" id={typeof AutoUpdateUser === "object" && "id" in AutoUpdateUser ? AutoUpdateUser?.id : undefined} value={typeof AutoUpdateUser === "object" && "value" in AutoUpdateUser ? AutoUpdateUser?.value : AutoUpdateUser} /* default: ID0 */  isRaw={typeof AutoUpdateUser === "object" && "isRaw" in AutoUpdateUser && AutoUpdateUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutOfSightAngle" id={typeof OutOfSightAngle === "object" && "id" in OutOfSightAngle ? OutOfSightAngle?.id : undefined} value={typeof OutOfSightAngle === "object" && "value" in OutOfSightAngle ? OutOfSightAngle?.value : OutOfSightAngle} /* default: 0 */  isRaw={typeof OutOfSightAngle === "object" && "isRaw" in OutOfSightAngle && OutOfSightAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTouchPenetrationDistance" id={typeof MaxTouchPenetrationDistance === "object" && "id" in MaxTouchPenetrationDistance ? MaxTouchPenetrationDistance?.id : undefined} value={typeof MaxTouchPenetrationDistance === "object" && "value" in MaxTouchPenetrationDistance ? MaxTouchPenetrationDistance?.value : MaxTouchPenetrationDistance} /* default: 0 */  isRaw={typeof MaxTouchPenetrationDistance === "object" && "isRaw" in MaxTouchPenetrationDistance && MaxTouchPenetrationDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`2[FrooxEngine.RelayTouchSource,BaseX.float3]]`} name="TipPositionGetter" id={typeof TipPositionGetter === "object" && "id" in TipPositionGetter ? TipPositionGetter?.id : undefined} value={typeof TipPositionGetter === "object" && "value" in TipPositionGetter ? TipPositionGetter?.value : TipPositionGetter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof TipPositionGetter === "object" && "isRaw" in TipPositionGetter && TipPositionGetter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`2[FrooxEngine.RelayTouchSource,BaseX.float3]]`} name="TipDirectionGetter" id={typeof TipDirectionGetter === "object" && "id" in TipDirectionGetter ? TipDirectionGetter?.id : undefined} value={typeof TipDirectionGetter === "object" && "value" in TipDirectionGetter ? TipDirectionGetter?.value : TipDirectionGetter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof TipDirectionGetter === "object" && "isRaw" in TipDirectionGetter && TipDirectionGetter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`2[FrooxEngine.RelayTouchSource,FrooxEngine.TouchType]]`} name="TouchTypeGetter" id={typeof TouchTypeGetter === "object" && "id" in TouchTypeGetter ? TouchTypeGetter?.id : undefined} value={typeof TouchTypeGetter === "object" && "value" in TouchTypeGetter ? TouchTypeGetter?.value : TouchTypeGetter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof TouchTypeGetter === "object" && "isRaw" in TouchTypeGetter && TouchTypeGetter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.TouchableGetter]`} name="TouchableGetter" id={typeof TouchableGetter === "object" && "id" in TouchableGetter ? TouchableGetter?.id : undefined} value={typeof TouchableGetter === "object" && "value" in TouchableGetter ? TouchableGetter?.value : TouchableGetter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof TouchableGetter === "object" && "isRaw" in TouchableGetter && TouchableGetter.isRaw ? true : undefined} />
        </Component>
      );
    };
    