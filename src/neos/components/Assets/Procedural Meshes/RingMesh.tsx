import { member, Member, Component } from "../../../core";
    
    export interface RingMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Rotation?: member<any>;
Segments?: member<number>;
Arc?: member<number>;
InnerRadius?: member<number>;
OuterRadius?: member<number>;
UVScale?: member<[number, number]>;
    }
    
    export function RingMesh(props: RingMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Rotation,
Segments,
Arc,
InnerRadius,
OuterRadius,
UVScale, } = props;
    
      return (
        <Component type="FrooxEngine.RingMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="Rotation" id={typeof Rotation === "object" && "id" in Rotation ? Rotation?.id : undefined} value={typeof Rotation === "object" && "value" in Rotation ? Rotation?.value : Rotation} /* default: [0; 0; 0; 1] */  isRaw={typeof Rotation === "object" && "isRaw" in Rotation && Rotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Segments" id={typeof Segments === "object" && "id" in Segments ? Segments?.id : undefined} value={typeof Segments === "object" && "value" in Segments ? Segments?.value : Segments} /* default: 0 */  isRaw={typeof Segments === "object" && "isRaw" in Segments && Segments.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Arc" id={typeof Arc === "object" && "id" in Arc ? Arc?.id : undefined} value={typeof Arc === "object" && "value" in Arc ? Arc?.value : Arc} /* default: 0 */  isRaw={typeof Arc === "object" && "isRaw" in Arc && Arc.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InnerRadius" id={typeof InnerRadius === "object" && "id" in InnerRadius ? InnerRadius?.id : undefined} value={typeof InnerRadius === "object" && "value" in InnerRadius ? InnerRadius?.value : InnerRadius} /* default: 0 */  isRaw={typeof InnerRadius === "object" && "isRaw" in InnerRadius && InnerRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OuterRadius" id={typeof OuterRadius === "object" && "id" in OuterRadius ? OuterRadius?.id : undefined} value={typeof OuterRadius === "object" && "value" in OuterRadius ? OuterRadius?.value : OuterRadius} /* default: 0 */  isRaw={typeof OuterRadius === "object" && "isRaw" in OuterRadius && OuterRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVScale" id={typeof UVScale === "object" && "id" in UVScale ? UVScale?.id : undefined} value={typeof UVScale === "object" && "value" in UVScale ? UVScale?.value : UVScale} /* default: [0; 0] */  isRaw={typeof UVScale === "object" && "isRaw" in UVScale && UVScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    