import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CapsuleMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Radius?: member<number>;
Height?: member<number>;
Segments?: member<number>;
Rings?: member<number>;
Shading?: member<any>;
UVScale?: member<[number, number]>;
DualSided?: member<boolean>;
    }
    
    export function CapsuleMesh(props: CapsuleMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Radius,
Height,
Segments,
Rings,
Shading,
UVScale,
DualSided, } = props;
    
      return (
        <Component type="FrooxEngine.CapsuleMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Segments" id={typeof Segments === "object" && "id" in Segments ? Segments?.id : undefined} value={typeof Segments === "object" && "value" in Segments ? Segments?.value : Segments} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Rings" id={typeof Rings === "object" && "id" in Rings ? Rings?.id : undefined} value={typeof Rings === "object" && "value" in Rings ? Rings?.value : Rings} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.UVSphereCapsule+Shading]`} name="Shading" id={typeof Shading === "object" && "id" in Shading ? Shading?.id : undefined} value={typeof Shading === "object" && "value" in Shading ? Shading?.value : Shading} /* default: Smooth */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVScale" id={typeof UVScale === "object" && "id" in UVScale ? UVScale?.id : undefined} value={typeof UVScale === "object" && "value" in UVScale ? UVScale?.value : UVScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DualSided" id={typeof DualSided === "object" && "id" in DualSided ? DualSided?.id : undefined} value={typeof DualSided === "object" && "value" in DualSided ? DualSided?.value : DualSided} /* default: false */  />
        </Component>
      );
    };
    