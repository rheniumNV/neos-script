import { member, Member, Component } from "../../../core";
    
    export interface ArrowMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Vector?: member<[number, number, number]>;
Sides?: member<number>;
BodyRadius?: member<number>;
HeadRadius?: member<number>;
HeadLength?: member<number>;
MinimalBodyLength?: member<number>;
SphereOnZero?: member<boolean>;
    }
    
    export function ArrowMesh(props: ArrowMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Vector,
Sides,
BodyRadius,
HeadRadius,
HeadLength,
MinimalBodyLength,
SphereOnZero, } = props;
    
      return (
        <Component type="FrooxEngine.ArrowMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Vector" id={typeof Vector === "object" && "id" in Vector ? Vector?.id : undefined} value={typeof Vector === "object" && "value" in Vector ? Vector?.value : Vector} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Sides" id={typeof Sides === "object" && "id" in Sides ? Sides?.id : undefined} value={typeof Sides === "object" && "value" in Sides ? Sides?.value : Sides} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BodyRadius" id={typeof BodyRadius === "object" && "id" in BodyRadius ? BodyRadius?.id : undefined} value={typeof BodyRadius === "object" && "value" in BodyRadius ? BodyRadius?.value : BodyRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadRadius" id={typeof HeadRadius === "object" && "id" in HeadRadius ? HeadRadius?.id : undefined} value={typeof HeadRadius === "object" && "value" in HeadRadius ? HeadRadius?.value : HeadRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadLength" id={typeof HeadLength === "object" && "id" in HeadLength ? HeadLength?.id : undefined} value={typeof HeadLength === "object" && "value" in HeadLength ? HeadLength?.value : HeadLength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinimalBodyLength" id={typeof MinimalBodyLength === "object" && "id" in MinimalBodyLength ? MinimalBodyLength?.id : undefined} value={typeof MinimalBodyLength === "object" && "value" in MinimalBodyLength ? MinimalBodyLength?.value : MinimalBodyLength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SphereOnZero" id={typeof SphereOnZero === "object" && "id" in SphereOnZero ? SphereOnZero?.id : undefined} value={typeof SphereOnZero === "object" && "value" in SphereOnZero ? SphereOnZero?.value : SphereOnZero} /* default: false */  />
        </Component>
      );
    };
    