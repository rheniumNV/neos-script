import { member, Member, Component } from "../../core";
    
    export interface CircleSegmentShaderMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
RadiusStart?: member<number>;
Thickness?: member<number>;
AngleStart?: member<number>;
ArcLength?: member<number>;
FillColor?: member<[number, number, number, number]>;
BorderColor?: member<[number, number, number, number]>;
BorderSize?: member<number>;
    }
    
    export function CircleSegmentShaderMesh(props: CircleSegmentShaderMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
RadiusStart,
Thickness,
AngleStart,
ArcLength,
FillColor,
BorderColor,
BorderSize, } = props;
    
      return (
        <Component type="FrooxEngine.CircleSegmentShaderMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RadiusStart" id={typeof RadiusStart === "object" && "id" in RadiusStart ? RadiusStart?.id : undefined} value={typeof RadiusStart === "object" && "value" in RadiusStart ? RadiusStart?.value : RadiusStart} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AngleStart" id={typeof AngleStart === "object" && "id" in AngleStart ? AngleStart?.id : undefined} value={typeof AngleStart === "object" && "value" in AngleStart ? AngleStart?.value : AngleStart} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ArcLength" id={typeof ArcLength === "object" && "id" in ArcLength ? ArcLength?.id : undefined} value={typeof ArcLength === "object" && "value" in ArcLength ? ArcLength?.value : ArcLength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FillColor" id={typeof FillColor === "object" && "id" in FillColor ? FillColor?.id : undefined} value={typeof FillColor === "object" && "value" in FillColor ? FillColor?.value : FillColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BorderColor" id={typeof BorderColor === "object" && "id" in BorderColor ? BorderColor?.id : undefined} value={typeof BorderColor === "object" && "value" in BorderColor ? BorderColor?.value : BorderColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BorderSize" id={typeof BorderSize === "object" && "id" in BorderSize ? BorderSize?.id : undefined} value={typeof BorderSize === "object" && "value" in BorderSize ? BorderSize?.value : BorderSize} /* default: 0 */  />
        </Component>
      );
    };
    