import { member, Member, Component } from "../../../core";
    
    export interface CirclePointGeneratorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
Shell?: member<boolean>;
    }
    
    export function CirclePointGenerator(props: CirclePointGeneratorInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
Shell, } = props;
    
      return (
        <Component type="FrooxEngine.CirclePointGenerator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Shell" id={typeof Shell === "object" && "id" in Shell ? Shell?.id : undefined} value={typeof Shell === "object" && "value" in Shell ? Shell?.value : Shell} /* default: false */  />
        </Component>
      );
    };
    