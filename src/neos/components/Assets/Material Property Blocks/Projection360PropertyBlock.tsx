import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface Projection360PropertyBlockInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
Texture?: member<any>;
PerspectiveFieldOfView?: member<[number, number]>;
PerspectiveAngleOffset?: member<[number, number]>;
    }
    
    export function Projection360PropertyBlock(props: Projection360PropertyBlockInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
Texture,
PerspectiveFieldOfView,
PerspectiveAngleOffset, } = props;
    
      return (
        <Component type="FrooxEngine.Projection360PropertyBlock" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PerspectiveFieldOfView" id={typeof PerspectiveFieldOfView === "object" && "id" in PerspectiveFieldOfView ? PerspectiveFieldOfView?.id : undefined} value={typeof PerspectiveFieldOfView === "object" && "value" in PerspectiveFieldOfView ? PerspectiveFieldOfView?.value : PerspectiveFieldOfView} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PerspectiveAngleOffset" id={typeof PerspectiveAngleOffset === "object" && "id" in PerspectiveAngleOffset ? PerspectiveAngleOffset?.id : undefined} value={typeof PerspectiveAngleOffset === "object" && "value" in PerspectiveAngleOffset ? PerspectiveAngleOffset?.value : PerspectiveAngleOffset} /* default: [0; 0] */  />
        </Component>
      );
    };
    