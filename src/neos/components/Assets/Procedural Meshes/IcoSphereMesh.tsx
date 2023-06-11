import { member, Member, Component } from "../../../core";
    
    export interface IcoSphereMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Radius?: member<number>;
Subdivisions?: member<number>;
FlatShading?: member<boolean>;
FlatFaceExtrude?: member<number>;
FlatFaceScale?: member<number>;
    }
    
    export function IcoSphereMesh(props: IcoSphereMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Radius,
Subdivisions,
FlatShading,
FlatFaceExtrude,
FlatFaceScale, } = props;
    
      return (
        <Component type="FrooxEngine.IcoSphereMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Subdivisions" id={typeof Subdivisions === "object" && "id" in Subdivisions ? Subdivisions?.id : undefined} value={typeof Subdivisions === "object" && "value" in Subdivisions ? Subdivisions?.value : Subdivisions} /* default: 0 */  isRaw={typeof Subdivisions === "object" && "isRaw" in Subdivisions && Subdivisions.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FlatShading" id={typeof FlatShading === "object" && "id" in FlatShading ? FlatShading?.id : undefined} value={typeof FlatShading === "object" && "value" in FlatShading ? FlatShading?.value : FlatShading} /* default: false */  isRaw={typeof FlatShading === "object" && "isRaw" in FlatShading && FlatShading.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FlatFaceExtrude" id={typeof FlatFaceExtrude === "object" && "id" in FlatFaceExtrude ? FlatFaceExtrude?.id : undefined} value={typeof FlatFaceExtrude === "object" && "value" in FlatFaceExtrude ? FlatFaceExtrude?.value : FlatFaceExtrude} /* default: 0 */  isRaw={typeof FlatFaceExtrude === "object" && "isRaw" in FlatFaceExtrude && FlatFaceExtrude.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FlatFaceScale" id={typeof FlatFaceScale === "object" && "id" in FlatFaceScale ? FlatFaceScale?.id : undefined} value={typeof FlatFaceScale === "object" && "value" in FlatFaceScale ? FlatFaceScale?.value : FlatFaceScale} /* default: 0 */  isRaw={typeof FlatFaceScale === "object" && "isRaw" in FlatFaceScale && FlatFaceScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    