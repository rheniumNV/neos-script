import { member, Member, Component } from "../../../../core";
    
    export interface BevelSoliPlaneMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Width?: member<number>;
Height?: member<number>;
Thickness?: member<number>;
TopLeftCut?: member<number>;
BottomRightCut?: member<number>;
Relief?: member<boolean>;
    }
    
    export function BevelSoliPlaneMesh(props: BevelSoliPlaneMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Width,
Height,
Thickness,
TopLeftCut,
BottomRightCut,
Relief, } = props;
    
      return (
        <Component type="FrooxEngine.BevelSoliPlaneMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TopLeftCut" id={typeof TopLeftCut === "object" && "id" in TopLeftCut ? TopLeftCut?.id : undefined} value={typeof TopLeftCut === "object" && "value" in TopLeftCut ? TopLeftCut?.value : TopLeftCut} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BottomRightCut" id={typeof BottomRightCut === "object" && "id" in BottomRightCut ? BottomRightCut?.id : undefined} value={typeof BottomRightCut === "object" && "value" in BottomRightCut ? BottomRightCut?.value : BottomRightCut} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Relief" id={typeof Relief === "object" && "id" in Relief ? Relief?.id : undefined} value={typeof Relief === "object" && "value" in Relief ? Relief?.value : Relief} /* default: false */  />
        </Component>
      );
    };
    