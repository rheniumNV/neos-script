import { member, Member, Component } from "../../../core";
    
    export interface BoxArrayMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Points?: member<any>;
Sizes?: member<any>;
Rotations?: member<any>;
Colors?: member<any>;
UV_Scales?: member<any>;
    }
    
    export function BoxArrayMesh(props: BoxArrayMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Points,
Sizes,
Rotations,
Colors,
UV_Scales, } = props;
    
      return (
        <Component type="FrooxEngine.BoxArrayMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float3]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: FrooxEngine.SyncArray`1[BaseX.float3] */  isRaw={typeof Points === "object" && "isRaw" in Points && Points.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float3]`} name="Sizes" id={typeof Sizes === "object" && "id" in Sizes ? Sizes?.id : undefined} value={typeof Sizes === "object" && "value" in Sizes ? Sizes?.value : Sizes} /* default: FrooxEngine.SyncArray`1[BaseX.float3] */  isRaw={typeof Sizes === "object" && "isRaw" in Sizes && Sizes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.floatQ]`} name="Rotations" id={typeof Rotations === "object" && "id" in Rotations ? Rotations?.id : undefined} value={typeof Rotations === "object" && "value" in Rotations ? Rotations?.value : Rotations} /* default: FrooxEngine.SyncArray`1[BaseX.floatQ] */  isRaw={typeof Rotations === "object" && "isRaw" in Rotations && Rotations.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.color]`} name="Colors" id={typeof Colors === "object" && "id" in Colors ? Colors?.id : undefined} value={typeof Colors === "object" && "value" in Colors ? Colors?.value : Colors} /* default: FrooxEngine.SyncArray`1[BaseX.color] */  isRaw={typeof Colors === "object" && "isRaw" in Colors && Colors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float3]`} name="UV_Scales" id={typeof UV_Scales === "object" && "id" in UV_Scales ? UV_Scales?.id : undefined} value={typeof UV_Scales === "object" && "value" in UV_Scales ? UV_Scales?.value : UV_Scales} /* default: FrooxEngine.SyncArray`1[BaseX.float3] */  isRaw={typeof UV_Scales === "object" && "isRaw" in UV_Scales && UV_Scales.isRaw ? true : undefined} />
        </Component>
      );
    };
    