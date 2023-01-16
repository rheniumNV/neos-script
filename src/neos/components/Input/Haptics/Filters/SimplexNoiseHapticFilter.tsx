import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SimplexNoiseHapticFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
NoiseScale?: member<[number, number, number]>;
NoiseOffset?: member<[number, number, number]>;
MinValue?: member<number>;
MaxValue?: member<number>;
    }
    
    export function SimplexNoiseHapticFilter(props: SimplexNoiseHapticFilterInput){
      const { id, persistentId, updateOrder, Enabled,
NoiseScale,
NoiseOffset,
MinValue,
MaxValue, } = props;
    
      return (
        <Component type="FrooxEngine.SimplexNoiseHapticFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="NoiseScale" id={typeof NoiseScale === "object" && "id" in NoiseScale ? NoiseScale?.id : undefined} value={typeof NoiseScale === "object" && "value" in NoiseScale ? NoiseScale?.value : NoiseScale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="NoiseOffset" id={typeof NoiseOffset === "object" && "id" in NoiseOffset ? NoiseOffset?.id : undefined} value={typeof NoiseOffset === "object" && "value" in NoiseOffset ? NoiseOffset?.value : NoiseOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinValue" id={typeof MinValue === "object" && "id" in MinValue ? MinValue?.id : undefined} value={typeof MinValue === "object" && "value" in MinValue ? MinValue?.value : MinValue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxValue" id={typeof MaxValue === "object" && "id" in MaxValue ? MaxValue?.id : undefined} value={typeof MaxValue === "object" && "value" in MaxValue ? MaxValue?.value : MaxValue} /* default: 0 */  />
        </Component>
      );
    };
    