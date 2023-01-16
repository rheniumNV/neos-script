import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface BevelSoliRingMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Arc?: member<number>;
ArcOffset?: member<number>;
Radius?: member<number>;
Width?: member<number>;
Thickness?: member<number>;
Tilt?: member<number>;
Segments?: member<number>;
    }
    
    export function BevelSoliRingMesh(props: BevelSoliRingMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Arc,
ArcOffset,
Radius,
Width,
Thickness,
Tilt,
Segments, } = props;
    
      return (
        <Component type="FrooxEngine.BevelSoliRingMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Arc" id={typeof Arc === "object" && "id" in Arc ? Arc?.id : undefined} value={typeof Arc === "object" && "value" in Arc ? Arc?.value : Arc} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ArcOffset" id={typeof ArcOffset === "object" && "id" in ArcOffset ? ArcOffset?.id : undefined} value={typeof ArcOffset === "object" && "value" in ArcOffset ? ArcOffset?.value : ArcOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Tilt" id={typeof Tilt === "object" && "id" in Tilt ? Tilt?.id : undefined} value={typeof Tilt === "object" && "value" in Tilt ? Tilt?.value : Tilt} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Segments" id={typeof Segments === "object" && "id" in Segments ? Segments?.id : undefined} value={typeof Segments === "object" && "value" in Segments ? Segments?.value : Segments} /* default: 0 */  />
        </Component>
      );
    };
    