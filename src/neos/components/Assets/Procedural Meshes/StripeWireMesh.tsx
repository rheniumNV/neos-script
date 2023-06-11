import { member, Member, Component } from "../../../core";
    
    export interface StripeWireMeshInput {
        
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
Width0?: member<number>;
Width1?: member<number>;
    }
    
    export function StripeWireMesh(props: StripeWireMeshInput){
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
Width0,
Width1, } = props;
    
      return (
        <Component type="FrooxEngine.StripeWireMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point0" id={typeof Point0 === "object" && "id" in Point0 ? Point0?.id : undefined} value={typeof Point0 === "object" && "value" in Point0 ? Point0?.value : Point0} /* default: [0; 0; 0] */  isRaw={typeof Point0 === "object" && "isRaw" in Point0 && Point0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point1" id={typeof Point1 === "object" && "id" in Point1 ? Point1?.id : undefined} value={typeof Point1 === "object" && "value" in Point1 ? Point1?.value : Point1} /* default: [0; 0; 0] */  isRaw={typeof Point1 === "object" && "isRaw" in Point1 && Point1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Tangent0" id={typeof Tangent0 === "object" && "id" in Tangent0 ? Tangent0?.id : undefined} value={typeof Tangent0 === "object" && "value" in Tangent0 ? Tangent0?.value : Tangent0} /* default: [0; 0; 0] */  isRaw={typeof Tangent0 === "object" && "isRaw" in Tangent0 && Tangent0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Tangent1" id={typeof Tangent1 === "object" && "id" in Tangent1 ? Tangent1?.id : undefined} value={typeof Tangent1 === "object" && "value" in Tangent1 ? Tangent1?.value : Tangent1} /* default: [0; 0; 0] */  isRaw={typeof Tangent1 === "object" && "isRaw" in Tangent1 && Tangent1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="Orientation0" id={typeof Orientation0 === "object" && "id" in Orientation0 ? Orientation0?.id : undefined} value={typeof Orientation0 === "object" && "value" in Orientation0 ? Orientation0?.value : Orientation0} /* default: [0; 0; 0; 1] */  isRaw={typeof Orientation0 === "object" && "isRaw" in Orientation0 && Orientation0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="Orientation1" id={typeof Orientation1 === "object" && "id" in Orientation1 ? Orientation1?.id : undefined} value={typeof Orientation1 === "object" && "value" in Orientation1 ? Orientation1?.value : Orientation1} /* default: [0; 0; 0; 1] */  isRaw={typeof Orientation1 === "object" && "isRaw" in Orientation1 && Orientation1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Steps" id={typeof Steps === "object" && "id" in Steps ? Steps?.id : undefined} value={typeof Steps === "object" && "value" in Steps ? Steps?.value : Steps} /* default: 0 */  isRaw={typeof Steps === "object" && "isRaw" in Steps && Steps.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exp" id={typeof Exp === "object" && "id" in Exp ? Exp?.id : undefined} value={typeof Exp === "object" && "value" in Exp ? Exp?.value : Exp} /* default: 0 */  isRaw={typeof Exp === "object" && "isRaw" in Exp && Exp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width0" id={typeof Width0 === "object" && "id" in Width0 ? Width0?.id : undefined} value={typeof Width0 === "object" && "value" in Width0 ? Width0?.value : Width0} /* default: 0 */  isRaw={typeof Width0 === "object" && "isRaw" in Width0 && Width0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width1" id={typeof Width1 === "object" && "id" in Width1 ? Width1?.id : undefined} value={typeof Width1 === "object" && "value" in Width1 ? Width1?.value : Width1} /* default: 0 */  isRaw={typeof Width1 === "object" && "isRaw" in Width1 && Width1.isRaw ? true : undefined} />
        </Component>
      );
    };
    