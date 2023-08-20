import { member, Member, Component } from "../../../core";
    
    export interface CameraFrustumMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Orientation?: member<any>;
Near?: member<number>;
Far?: member<number>;
HorizontalAngle?: member<number>;
VerticalAngle?: member<number>;
DualSided?: member<boolean>;
NearCap?: member<boolean>;
FarCap?: member<boolean>;
    }
    
    export function CameraFrustumMesh(props: CameraFrustumMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Orientation,
Near,
Far,
HorizontalAngle,
VerticalAngle,
DualSided,
NearCap,
FarCap, } = props;
    
      return (
        <Component type="FrooxEngine.CameraFrustumMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="Orientation" id={typeof Orientation === "object" && "id" in Orientation ? Orientation?.id : undefined} value={typeof Orientation === "object" && "value" in Orientation ? Orientation?.value : Orientation} /* default: [0; 0; 0; 1] */  isRaw={typeof Orientation === "object" && "isRaw" in Orientation && Orientation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Near" id={typeof Near === "object" && "id" in Near ? Near?.id : undefined} value={typeof Near === "object" && "value" in Near ? Near?.value : Near} /* default: 0 */  isRaw={typeof Near === "object" && "isRaw" in Near && Near.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Far" id={typeof Far === "object" && "id" in Far ? Far?.id : undefined} value={typeof Far === "object" && "value" in Far ? Far?.value : Far} /* default: 0 */  isRaw={typeof Far === "object" && "isRaw" in Far && Far.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HorizontalAngle" id={typeof HorizontalAngle === "object" && "id" in HorizontalAngle ? HorizontalAngle?.id : undefined} value={typeof HorizontalAngle === "object" && "value" in HorizontalAngle ? HorizontalAngle?.value : HorizontalAngle} /* default: 0 */  isRaw={typeof HorizontalAngle === "object" && "isRaw" in HorizontalAngle && HorizontalAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VerticalAngle" id={typeof VerticalAngle === "object" && "id" in VerticalAngle ? VerticalAngle?.id : undefined} value={typeof VerticalAngle === "object" && "value" in VerticalAngle ? VerticalAngle?.value : VerticalAngle} /* default: 0 */  isRaw={typeof VerticalAngle === "object" && "isRaw" in VerticalAngle && VerticalAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DualSided" id={typeof DualSided === "object" && "id" in DualSided ? DualSided?.id : undefined} value={typeof DualSided === "object" && "value" in DualSided ? DualSided?.value : DualSided} /* default: false */  isRaw={typeof DualSided === "object" && "isRaw" in DualSided && DualSided.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="NearCap" id={typeof NearCap === "object" && "id" in NearCap ? NearCap?.id : undefined} value={typeof NearCap === "object" && "value" in NearCap ? NearCap?.value : NearCap} /* default: false */  isRaw={typeof NearCap === "object" && "isRaw" in NearCap && NearCap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FarCap" id={typeof FarCap === "object" && "id" in FarCap ? FarCap?.id : undefined} value={typeof FarCap === "object" && "value" in FarCap ? FarCap?.value : FarCap} /* default: false */  isRaw={typeof FarCap === "object" && "isRaw" in FarCap && FarCap.isRaw ? true : undefined} />
        </Component>
      );
    };
    