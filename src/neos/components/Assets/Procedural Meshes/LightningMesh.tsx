import { member, Member, Component } from "../../../core";
    
    export interface LightningMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Seed?: member<number>;
Points?: member<number>;
Topology?: member<any>;
Shading?: member<any>;
Ends?: member<any>;
DualSided?: member<boolean>;
Point0?: member<[number, number, number]>;
Point1?: member<[number, number, number]>;
StrikeLevels?: member<any>;
    }
    
    export function LightningMesh(props: LightningMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Seed,
Points,
Topology,
Shading,
Ends,
DualSided,
Point0,
Point1,
StrikeLevels, } = props;
    
      return (
        <Component type="FrooxEngine.LightningMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Seed" id={typeof Seed === "object" && "id" in Seed ? Seed?.id : undefined} value={typeof Seed === "object" && "value" in Seed ? Seed?.value : Seed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Topology]`} name="Topology" id={typeof Topology === "object" && "id" in Topology ? Topology?.id : undefined} value={typeof Topology === "object" && "value" in Topology ? Topology?.value : Topology} /* default: Circle */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`} name="Shading" id={typeof Shading === "object" && "id" in Shading ? Shading?.id : undefined} value={typeof Shading === "object" && "value" in Shading ? Shading?.value : Shading} /* default: Smooth */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Ends]`} name="Ends" id={typeof Ends === "object" && "id" in Ends ? Ends?.id : undefined} value={typeof Ends === "object" && "value" in Ends ? Ends?.value : Ends} /* default: Open */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DualSided" id={typeof DualSided === "object" && "id" in DualSided ? DualSided?.id : undefined} value={typeof DualSided === "object" && "value" in DualSided ? DualSided?.value : DualSided} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point0" id={typeof Point0 === "object" && "id" in Point0 ? Point0?.id : undefined} value={typeof Point0 === "object" && "value" in Point0 ? Point0?.value : Point0} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point1" id={typeof Point1 === "object" && "id" in Point1 ? Point1?.id : undefined} value={typeof Point1 === "object" && "value" in Point1 ? Point1?.value : Point1} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LightningMesh+StrikeProperties]`} name="StrikeLevels" id={typeof StrikeLevels === "object" && "id" in StrikeLevels ? StrikeLevels?.id : undefined} value={typeof StrikeLevels === "object" && "value" in StrikeLevels ? StrikeLevels?.value : StrikeLevels} /* default: FrooxEngine.SyncList`1[FrooxEngine.LightningMesh+StrikeProperties] */  />
        </Component>
      );
    };
    