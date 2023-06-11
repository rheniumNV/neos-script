import { member, Member, Component } from "../../../core";
    
    export interface TorusMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
MinorSegments?: member<number>;
MajorSegments?: member<number>;
MajorRadius?: member<number>;
MinorRadius?: member<number>;
UVScale?: member<[number, number]>;
    }
    
    export function TorusMesh(props: TorusMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
MinorSegments,
MajorSegments,
MajorRadius,
MinorRadius,
UVScale, } = props;
    
      return (
        <Component type="FrooxEngine.TorusMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MinorSegments" id={typeof MinorSegments === "object" && "id" in MinorSegments ? MinorSegments?.id : undefined} value={typeof MinorSegments === "object" && "value" in MinorSegments ? MinorSegments?.value : MinorSegments} /* default: 0 */  isRaw={typeof MinorSegments === "object" && "isRaw" in MinorSegments && MinorSegments.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MajorSegments" id={typeof MajorSegments === "object" && "id" in MajorSegments ? MajorSegments?.id : undefined} value={typeof MajorSegments === "object" && "value" in MajorSegments ? MajorSegments?.value : MajorSegments} /* default: 0 */  isRaw={typeof MajorSegments === "object" && "isRaw" in MajorSegments && MajorSegments.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MajorRadius" id={typeof MajorRadius === "object" && "id" in MajorRadius ? MajorRadius?.id : undefined} value={typeof MajorRadius === "object" && "value" in MajorRadius ? MajorRadius?.value : MajorRadius} /* default: 0 */  isRaw={typeof MajorRadius === "object" && "isRaw" in MajorRadius && MajorRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinorRadius" id={typeof MinorRadius === "object" && "id" in MinorRadius ? MinorRadius?.id : undefined} value={typeof MinorRadius === "object" && "value" in MinorRadius ? MinorRadius?.value : MinorRadius} /* default: 0 */  isRaw={typeof MinorRadius === "object" && "isRaw" in MinorRadius && MinorRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVScale" id={typeof UVScale === "object" && "id" in UVScale ? UVScale?.id : undefined} value={typeof UVScale === "object" && "value" in UVScale ? UVScale?.value : UVScale} /* default: [0; 0] */  isRaw={typeof UVScale === "object" && "isRaw" in UVScale && UVScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    