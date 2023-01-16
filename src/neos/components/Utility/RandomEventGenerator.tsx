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
    }
    
    export function RandomEventGenerator(props: RandomEventGeneratorInput){
      const { id, persistentId, updateOrder, Enabled,
MinInterval,
MaxInterval,
RandomPointGenerator, } = props;
    
      return (
        <Component type="FrooxEngine.RandomEventGenerator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinInterval" id={typeof MinInterval === "object" && "id" in MinInterval ? MinInterval?.id : undefined} value={typeof MinInterval === "object" && "value" in MinInterval ? MinInterval?.value : MinInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxInterval" id={typeof MaxInterval === "object" && "id" in MaxInterval ? MaxInterval?.id : undefined} value={typeof MaxInterval === "object" && "value" in MaxInterval ? MaxInterval?.value : MaxInterval} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPointGenerator]`} name="RandomPointGenerator" id={typeof RandomPointGenerator === "object" && "id" in RandomPointGenerator ? RandomPointGenerator?.id : undefined} value={typeof RandomPointGenerator === "object" && "value" in RandomPointGenerator ? RandomPointGenerator?.value : RandomPointGenerator} /* default: ID0 */  />
        </Component>
      );
    };
    