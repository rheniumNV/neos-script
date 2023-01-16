import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinInterval" id={typeof MinInterval === "object" && "id" in MinInterval ? MinInterval?.id : undefined} value={typeof MinInterval === "object" && "value" in MinInterval ? MinInterval?.value : MinInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxInterval" id={typeof MaxInterval === "object" && "id" in MaxInterval ? MaxInterval?.id : undefined} value={typeof MaxInterval === "object" && "value" in MaxInterval ? MaxInterval?.value : MaxInterval} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPointGenerator]`} name="RandomPointGenerator" id={typeof RandomPointGenerator === "object" && "id" in RandomPointGenerator ? RandomPointGenerator?.id : undefined} value={typeof RandomPointGenerator === "object" && "value" in RandomPointGenerator ? RandomPointGenerator?.value : RandomPointGenerator} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.SyncDelegate\`1[System.Action]]`} name="Events" id={typeof Events === "object" && "id" in Events ? Events?.id : undefined} value={typeof Events === "object" && "value" in Events ? Events?.value : Events} /* default: FrooxEngine.SyncList`1[FrooxEngine.SyncDelegate`1[System.Action]] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.SyncDelegate\`1[System.Action\`1[BaseX.float3]]]`} name="PointEvents" id={typeof PointEvents === "object" && "id" in PointEvents ? PointEvents?.id : undefined} value={typeof PointEvents === "object" && "value" in PointEvents ? PointEvents?.value : PointEvents} /* default: FrooxEngine.SyncList`1[FrooxEngine.SyncDelegate`1[System.Action`1[BaseX.float3]]] */  />
        </Component>
      );
    };
    