import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ScaleAlignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoAddChildren?: member<boolean>;
BaseSize?: member<[number, number, number]>;
Increment?: member<[number, number, number]>;
Multiplier?: member<[number, number, number]>;
NonUniform?: member<boolean>;
    }
    
    export function ScaleAligner(props: ScaleAlignerInput){
      const { id, persistentId, updateOrder, Enabled,
AutoAddChildren,
BaseSize,
Increment,
Multiplier,
NonUniform, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleAligner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddChildren" id={typeof AutoAddChildren === "object" && "id" in AutoAddChildren ? AutoAddChildren?.id : undefined} value={typeof AutoAddChildren === "object" && "value" in AutoAddChildren ? AutoAddChildren?.value : AutoAddChildren} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="BaseSize" id={typeof BaseSize === "object" && "id" in BaseSize ? BaseSize?.id : undefined} value={typeof BaseSize === "object" && "value" in BaseSize ? BaseSize?.value : BaseSize} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Increment" id={typeof Increment === "object" && "id" in Increment ? Increment?.id : undefined} value={typeof Increment === "object" && "value" in Increment ? Increment?.value : Increment} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Multiplier" id={typeof Multiplier === "object" && "id" in Multiplier ? Multiplier?.id : undefined} value={typeof Multiplier === "object" && "value" in Multiplier ? Multiplier?.value : Multiplier} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="NonUniform" id={typeof NonUniform === "object" && "id" in NonUniform ? NonUniform?.id : undefined} value={typeof NonUniform === "object" && "value" in NonUniform ? NonUniform?.value : NonUniform} /* default: false */  />
        </Component>
      );
    };
    