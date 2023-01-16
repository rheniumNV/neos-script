import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TubeWireMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Point0?: member<[number, number, number]>;
Point1?: member<[number, number, number]>;
Tangent0?: member<[number, number, number]>;
Tangent1?: member<[number, number, number]>;
Orientation0?: member<any>;
Orientation1?: member<any>;
Steps?: member<number>;
Exp?: member<number>;
Radius0?: member<number>;
Radius1?: member<number>;
Ends?: member<any>;
Shading?: member<any>;
Points?: member<number>;
    }
    
    export function TubeWireMesh(props: TubeWireMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Point0,
Point1,
Tangent0,
Tangent1,
Orientation0,
Orientation1,
Steps,
Exp,
Radius0,
Radius1,
Ends,
Shading,
Points, } = props;
    
      return (
        <Component type="FrooxEngine.TubeWireMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point0" id={typeof Point0 === "object" && "id" in Point0 ? Point0?.id : undefined} value={typeof Point0 === "object" && "value" in Point0 ? Point0?.value : Point0} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point1" id={typeof Point1 === "object" && "id" in Point1 ? Point1?.id : undefined} value={typeof Point1 === "object" && "value" in Point1 ? Point1?.value : Point1} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Tangent0" id={typeof Tangent0 === "object" && "id" in Tangent0 ? Tangent0?.id : undefined} value={typeof Tangent0 === "object" && "value" in Tangent0 ? Tangent0?.value : Tangent0} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Tangent1" id={typeof Tangent1 === "object" && "id" in Tangent1 ? Tangent1?.id : undefined} value={typeof Tangent1 === "object" && "value" in Tangent1 ? Tangent1?.value : Tangent1} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="Orientation0" id={typeof Orientation0 === "object" && "id" in Orientation0 ? Orientation0?.id : undefined} value={typeof Orientation0 === "object" && "value" in Orientation0 ? Orientation0?.value : Orientation0} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="Orientation1" id={typeof Orientation1 === "object" && "id" in Orientation1 ? Orientation1?.id : undefined} value={typeof Orientation1 === "object" && "value" in Orientation1 ? Orientation1?.value : Orientation1} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Steps" id={typeof Steps === "object" && "id" in Steps ? Steps?.id : undefined} value={typeof Steps === "object" && "value" in Steps ? Steps?.value : Steps} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exp" id={typeof Exp === "object" && "id" in Exp ? Exp?.id : undefined} value={typeof Exp === "object" && "value" in Exp ? Exp?.value : Exp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius0" id={typeof Radius0 === "object" && "id" in Radius0 ? Radius0?.id : undefined} value={typeof Radius0 === "object" && "value" in Radius0 ? Radius0?.value : Radius0} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius1" id={typeof Radius1 === "object" && "id" in Radius1 ? Radius1?.id : undefined} value={typeof Radius1 === "object" && "value" in Radius1 ? Radius1?.value : Radius1} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Ends]`} name="Ends" id={typeof Ends === "object" && "id" in Ends ? Ends?.id : undefined} value={typeof Ends === "object" && "value" in Ends ? Ends?.value : Ends} /* default: Open */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`} name="Shading" id={typeof Shading === "object" && "id" in Shading ? Shading?.id : undefined} value={typeof Shading === "object" && "value" in Shading ? Shading?.value : Shading} /* default: Smooth */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: 0 */  />
        </Component>
      );
    };
    