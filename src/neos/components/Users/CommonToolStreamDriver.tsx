import { member, Member, Component } from "../../core";
    
    export interface CommonToolStreamDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Side?: member<any>;
PrimaryBlockedStream?: member<any>;
SecondaryBlockedStream?: member<any>;
LaserActiveStream?: member<any>;
ShowLaserToOthersStream?: member<any>;
LaserTargetStream?: member<any>;
GrabDistanceStream?: member<any>;
    }
    
    export function CommonToolStreamDriver(props: CommonToolStreamDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Side,
PrimaryBlockedStream,
SecondaryBlockedStream,
LaserActiveStream,
ShowLaserToOthersStream,
LaserTargetStream,
GrabDistanceStream, } = props;
    
      return (
        <Component type="FrooxEngine.CommonToolStreamDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: Left */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="PrimaryBlockedStream" id={typeof PrimaryBlockedStream === "object" && "id" in PrimaryBlockedStream ? PrimaryBlockedStream?.id : undefined} value={typeof PrimaryBlockedStream === "object" && "value" in PrimaryBlockedStream ? PrimaryBlockedStream?.value : PrimaryBlockedStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="SecondaryBlockedStream" id={typeof SecondaryBlockedStream === "object" && "id" in SecondaryBlockedStream ? SecondaryBlockedStream?.id : undefined} value={typeof SecondaryBlockedStream === "object" && "value" in SecondaryBlockedStream ? SecondaryBlockedStream?.value : SecondaryBlockedStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="LaserActiveStream" id={typeof LaserActiveStream === "object" && "id" in LaserActiveStream ? LaserActiveStream?.id : undefined} value={typeof LaserActiveStream === "object" && "value" in LaserActiveStream ? LaserActiveStream?.value : LaserActiveStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="ShowLaserToOthersStream" id={typeof ShowLaserToOthersStream === "object" && "id" in ShowLaserToOthersStream ? ShowLaserToOthersStream?.id : undefined} value={typeof ShowLaserToOthersStream === "object" && "value" in ShowLaserToOthersStream ? ShowLaserToOthersStream?.value : ShowLaserToOthersStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float3]]`} name="LaserTargetStream" id={typeof LaserTargetStream === "object" && "id" in LaserTargetStream ? LaserTargetStream?.id : undefined} value={typeof LaserTargetStream === "object" && "value" in LaserTargetStream ? LaserTargetStream?.value : LaserTargetStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="GrabDistanceStream" id={typeof GrabDistanceStream === "object" && "id" in GrabDistanceStream ? GrabDistanceStream?.id : undefined} value={typeof GrabDistanceStream === "object" && "value" in GrabDistanceStream ? GrabDistanceStream?.value : GrabDistanceStream} /* default: ID0 */  />
        </Component>
      );
    };
    