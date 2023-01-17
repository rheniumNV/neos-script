import { member, Member, Component } from "../../core";
    
    export interface ColorWheelTriangleMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Hue?: member<number>;
OuterRadius?: member<number>;
InnerRadius?: member<number>;
RingSegments?: member<number>;
CursorPosition?: member<[number, number, number]>;
CursorSegments?: member<number>;
CursorColor?: member<[number, number, number, number]>;
CursorOuterRadius?: member<number>;
CursorInnerRadius?: member<number>;
CursorZOffset?: member<number>;
    }
    
    export function ColorWheelTriangleMesh(props: ColorWheelTriangleMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Hue,
OuterRadius,
InnerRadius,
RingSegments,
CursorPosition,
CursorSegments,
CursorColor,
CursorOuterRadius,
CursorInnerRadius,
CursorZOffset, } = props;
    
      return (
        <Component type="FrooxEngine.ColorWheelTriangleMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Hue" id={typeof Hue === "object" && "id" in Hue ? Hue?.id : undefined} value={typeof Hue === "object" && "value" in Hue ? Hue?.value : Hue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OuterRadius" id={typeof OuterRadius === "object" && "id" in OuterRadius ? OuterRadius?.id : undefined} value={typeof OuterRadius === "object" && "value" in OuterRadius ? OuterRadius?.value : OuterRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InnerRadius" id={typeof InnerRadius === "object" && "id" in InnerRadius ? InnerRadius?.id : undefined} value={typeof InnerRadius === "object" && "value" in InnerRadius ? InnerRadius?.value : InnerRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RingSegments" id={typeof RingSegments === "object" && "id" in RingSegments ? RingSegments?.id : undefined} value={typeof RingSegments === "object" && "value" in RingSegments ? RingSegments?.value : RingSegments} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="CursorPosition" id={typeof CursorPosition === "object" && "id" in CursorPosition ? CursorPosition?.id : undefined} value={typeof CursorPosition === "object" && "value" in CursorPosition ? CursorPosition?.value : CursorPosition} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="CursorSegments" id={typeof CursorSegments === "object" && "id" in CursorSegments ? CursorSegments?.id : undefined} value={typeof CursorSegments === "object" && "value" in CursorSegments ? CursorSegments?.value : CursorSegments} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="CursorColor" id={typeof CursorColor === "object" && "id" in CursorColor ? CursorColor?.id : undefined} value={typeof CursorColor === "object" && "value" in CursorColor ? CursorColor?.value : CursorColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CursorOuterRadius" id={typeof CursorOuterRadius === "object" && "id" in CursorOuterRadius ? CursorOuterRadius?.id : undefined} value={typeof CursorOuterRadius === "object" && "value" in CursorOuterRadius ? CursorOuterRadius?.value : CursorOuterRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CursorInnerRadius" id={typeof CursorInnerRadius === "object" && "id" in CursorInnerRadius ? CursorInnerRadius?.id : undefined} value={typeof CursorInnerRadius === "object" && "value" in CursorInnerRadius ? CursorInnerRadius?.value : CursorInnerRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CursorZOffset" id={typeof CursorZOffset === "object" && "id" in CursorZOffset ? CursorZOffset?.id : undefined} value={typeof CursorZOffset === "object" && "value" in CursorZOffset ? CursorZOffset?.value : CursorZOffset} /* default: 0 */  />
        </Component>
      );
    };
    