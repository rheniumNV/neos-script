import { member, Member, Component } from "../../core";
    
    export interface RandomEventGeneratorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MinInterval?: member<number>;
MaxInterval?: member<number>;
RandomPointGenerator?: member<any>;
Events?: member<any>;
PointEvents?: member<any>;
    }
    
    export function RandomEventGenerator(props: RandomEventGeneratorInput){
      const { id, persistentId, updateOrder, Enabled,
MinInterval,
MaxInterval,
RandomPointGenerator,
Events,
PointEvents, } = props;
    
      return (
        <Component type="FrooxEngine.RandomEventGenerator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinInterval" id={typeof MinInterval === "object" && "id" in MinInterval ? MinInterval?.id : undefined} value={typeof MinInterval === "object" && "value" in MinInterval ? MinInterval?.value : MinInterval} /* default: 0 */  isRaw={typeof MinInterval === "object" && "isRaw" in MinInterval && MinInterval.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxInterval" id={typeof MaxInterval === "object" && "id" in MaxInterval ? MaxInterval?.id : undefined} value={typeof MaxInterval === "object" && "value" in MaxInterval ? MaxInterval?.value : MaxInterval} /* default: 0 */  isRaw={typeof MaxInterval === "object" && "isRaw" in MaxInterval && MaxInterval.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPointGenerator]`} name="RandomPointGenerator" id={typeof RandomPointGenerator === "object" && "id" in RandomPointGenerator ? RandomPointGenerator?.id : undefined} value={typeof RandomPointGenerator === "object" && "value" in RandomPointGenerator ? RandomPointGenerator?.value : RandomPointGenerator} /* default: ID0 */  isRaw={typeof RandomPointGenerator === "object" && "isRaw" in RandomPointGenerator && RandomPointGenerator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.SyncDelegate\`1[System.Action]]`} name="Events" id={typeof Events === "object" && "id" in Events ? Events?.id : undefined} value={typeof Events === "object" && "value" in Events ? Events?.value : Events} /* default: FrooxEngine.SyncList`1[FrooxEngine.SyncDelegate`1[System.Action]] */  isRaw={typeof Events === "object" && "isRaw" in Events && Events.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.SyncDelegate\`1[System.Action\`1[BaseX.float3]]]`} name="PointEvents" id={typeof PointEvents === "object" && "id" in PointEvents ? PointEvents?.id : undefined} value={typeof PointEvents === "object" && "value" in PointEvents ? PointEvents?.value : PointEvents} /* default: FrooxEngine.SyncList`1[FrooxEngine.SyncDelegate`1[System.Action`1[BaseX.float3]]] */  isRaw={typeof PointEvents === "object" && "isRaw" in PointEvents && PointEvents.isRaw ? true : undefined} />
        </Component>
      );
    };
    