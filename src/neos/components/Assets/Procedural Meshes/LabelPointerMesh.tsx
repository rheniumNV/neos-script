import { member, Member, Component } from "../../../core";
    
    export interface LabelPointerMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
LabelPoint?: member<[number, number, number]>;
TargetPoint?: member<[number, number, number]>;
LabelRotation?: member<any>;
LabelWidth?: member<number>;
Width?: member<number>;
ExpandLerp?: member<number>;
DualSided?: member<boolean>;
    }
    
    export function LabelPointerMesh(props: LabelPointerMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
LabelPoint,
TargetPoint,
LabelRotation,
LabelWidth,
Width,
ExpandLerp,
DualSided, } = props;
    
      return (
        <Component type="FrooxEngine.LabelPointerMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LabelPoint" id={typeof LabelPoint === "object" && "id" in LabelPoint ? LabelPoint?.id : undefined} value={typeof LabelPoint === "object" && "value" in LabelPoint ? LabelPoint?.value : LabelPoint} /* default: [0; 0; 0] */  isRaw={typeof LabelPoint === "object" && "isRaw" in LabelPoint && LabelPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetPoint" id={typeof TargetPoint === "object" && "id" in TargetPoint ? TargetPoint?.id : undefined} value={typeof TargetPoint === "object" && "value" in TargetPoint ? TargetPoint?.value : TargetPoint} /* default: [0; 0; 0] */  isRaw={typeof TargetPoint === "object" && "isRaw" in TargetPoint && TargetPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="LabelRotation" id={typeof LabelRotation === "object" && "id" in LabelRotation ? LabelRotation?.id : undefined} value={typeof LabelRotation === "object" && "value" in LabelRotation ? LabelRotation?.value : LabelRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof LabelRotation === "object" && "isRaw" in LabelRotation && LabelRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LabelWidth" id={typeof LabelWidth === "object" && "id" in LabelWidth ? LabelWidth?.id : undefined} value={typeof LabelWidth === "object" && "value" in LabelWidth ? LabelWidth?.value : LabelWidth} /* default: 0 */  isRaw={typeof LabelWidth === "object" && "isRaw" in LabelWidth && LabelWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  isRaw={typeof Width === "object" && "isRaw" in Width && Width.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ExpandLerp" id={typeof ExpandLerp === "object" && "id" in ExpandLerp ? ExpandLerp?.id : undefined} value={typeof ExpandLerp === "object" && "value" in ExpandLerp ? ExpandLerp?.value : ExpandLerp} /* default: 0 */  isRaw={typeof ExpandLerp === "object" && "isRaw" in ExpandLerp && ExpandLerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DualSided" id={typeof DualSided === "object" && "id" in DualSided ? DualSided?.id : undefined} value={typeof DualSided === "object" && "value" in DualSided ? DualSided?.value : DualSided} /* default: false */  isRaw={typeof DualSided === "object" && "isRaw" in DualSided && DualSided.isRaw ? true : undefined} />
        </Component>
      );
    };
    