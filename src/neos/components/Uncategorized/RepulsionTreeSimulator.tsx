import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RepulsionTreeSimulatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FalloffPower?: member<number>;
Radius?: member<number>;
Force?: member<number>;
    }
    
    export function RepulsionTreeSimulator(props: RepulsionTreeSimulatorInput){
      const { id, persistentId, updateOrder, Enabled,
FalloffPower,
Radius,
Force, } = props;
    
      return (
        <Component type="FrooxEngine.RepulsionTreeSimulator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FalloffPower" id={typeof FalloffPower === "object" && "id" in FalloffPower ? FalloffPower?.id : undefined} value={typeof FalloffPower === "object" && "value" in FalloffPower ? FalloffPower?.value : FalloffPower} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Force" id={typeof Force === "object" && "id" in Force ? Force?.id : undefined} value={typeof Force === "object" && "value" in Force ? Force?.value : Force} /* default: 0 */  />
        </Component>
      );
    };
    