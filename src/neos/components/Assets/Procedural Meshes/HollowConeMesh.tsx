import { member, Member, Component } from "../../../core";
    
    export interface HollowConeMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Height?: member<number>;
OuterRadiusBase?: member<number>;
InnerRadiusBase?: member<number>;
OuterRadiusTop?: member<number>;
InnerRadiusTop?: member<number>;
Segments?: member<number>;
UVScale?: member<[number, number]>;
    }
    
    export function HollowConeMesh(props: HollowConeMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Height,
OuterRadiusBase,
InnerRadiusBase,
OuterRadiusTop,
InnerRadiusTop,
Segments,
UVScale, } = props;
    
      return (
        <Component type="FrooxEngine.HollowConeMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  isRaw={typeof Height === "object" && "isRaw" in Height && Height.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OuterRadiusBase" id={typeof OuterRadiusBase === "object" && "id" in OuterRadiusBase ? OuterRadiusBase?.id : undefined} value={typeof OuterRadiusBase === "object" && "value" in OuterRadiusBase ? OuterRadiusBase?.value : OuterRadiusBase} /* default: 0 */  isRaw={typeof OuterRadiusBase === "object" && "isRaw" in OuterRadiusBase && OuterRadiusBase.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InnerRadiusBase" id={typeof InnerRadiusBase === "object" && "id" in InnerRadiusBase ? InnerRadiusBase?.id : undefined} value={typeof InnerRadiusBase === "object" && "value" in InnerRadiusBase ? InnerRadiusBase?.value : InnerRadiusBase} /* default: 0 */  isRaw={typeof InnerRadiusBase === "object" && "isRaw" in InnerRadiusBase && InnerRadiusBase.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OuterRadiusTop" id={typeof OuterRadiusTop === "object" && "id" in OuterRadiusTop ? OuterRadiusTop?.id : undefined} value={typeof OuterRadiusTop === "object" && "value" in OuterRadiusTop ? OuterRadiusTop?.value : OuterRadiusTop} /* default: 0 */  isRaw={typeof OuterRadiusTop === "object" && "isRaw" in OuterRadiusTop && OuterRadiusTop.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InnerRadiusTop" id={typeof InnerRadiusTop === "object" && "id" in InnerRadiusTop ? InnerRadiusTop?.id : undefined} value={typeof InnerRadiusTop === "object" && "value" in InnerRadiusTop ? InnerRadiusTop?.value : InnerRadiusTop} /* default: 0 */  isRaw={typeof InnerRadiusTop === "object" && "isRaw" in InnerRadiusTop && InnerRadiusTop.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Segments" id={typeof Segments === "object" && "id" in Segments ? Segments?.id : undefined} value={typeof Segments === "object" && "value" in Segments ? Segments?.value : Segments} /* default: 0 */  isRaw={typeof Segments === "object" && "isRaw" in Segments && Segments.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVScale" id={typeof UVScale === "object" && "id" in UVScale ? UVScale?.id : undefined} value={typeof UVScale === "object" && "value" in UVScale ? UVScale?.value : UVScale} /* default: [0; 0] */  isRaw={typeof UVScale === "object" && "isRaw" in UVScale && UVScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    