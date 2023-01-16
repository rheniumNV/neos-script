import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface QuadMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Rotation?: member<any>;
Size?: member<[number, number]>;
UVScale?: member<[number, number]>;
ScaleUVWithSize?: member<boolean>;
UVOffset?: member<[number, number]>;
DualSided?: member<boolean>;
UseVertexColors?: member<boolean>;
UpperLeftColor?: member<[number, number, number, number]>;
LowerLeftColor?: member<[number, number, number, number]>;
LowerRightColor?: member<[number, number, number, number]>;
UpperRightColor?: member<[number, number, number, number]>;
    }
    
    export function QuadMesh(props: QuadMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Rotation,
Size,
UVScale,
ScaleUVWithSize,
UVOffset,
DualSided,
UseVertexColors,
UpperLeftColor,
LowerLeftColor,
LowerRightColor,
UpperRightColor, } = props;
    
      return (
        <Component type="FrooxEngine.QuadMesh" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="Rotation" id={typeof Rotation === "object" && "id" in Rotation ? Rotation?.id : undefined} value={typeof Rotation === "object" && "value" in Rotation ? Rotation?.value : Rotation} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVScale" id={typeof UVScale === "object" && "id" in UVScale ? UVScale?.id : undefined} value={typeof UVScale === "object" && "value" in UVScale ? UVScale?.value : UVScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScaleUVWithSize" id={typeof ScaleUVWithSize === "object" && "id" in ScaleUVWithSize ? ScaleUVWithSize?.id : undefined} value={typeof ScaleUVWithSize === "object" && "value" in ScaleUVWithSize ? ScaleUVWithSize?.value : ScaleUVWithSize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVOffset" id={typeof UVOffset === "object" && "id" in UVOffset ? UVOffset?.id : undefined} value={typeof UVOffset === "object" && "value" in UVOffset ? UVOffset?.value : UVOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DualSided" id={typeof DualSided === "object" && "id" in DualSided ? DualSided?.id : undefined} value={typeof DualSided === "object" && "value" in DualSided ? DualSided?.value : DualSided} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseVertexColors" id={typeof UseVertexColors === "object" && "id" in UseVertexColors ? UseVertexColors?.id : undefined} value={typeof UseVertexColors === "object" && "value" in UseVertexColors ? UseVertexColors?.value : UseVertexColors} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="UpperLeftColor" id={typeof UpperLeftColor === "object" && "id" in UpperLeftColor ? UpperLeftColor?.id : undefined} value={typeof UpperLeftColor === "object" && "value" in UpperLeftColor ? UpperLeftColor?.value : UpperLeftColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="LowerLeftColor" id={typeof LowerLeftColor === "object" && "id" in LowerLeftColor ? LowerLeftColor?.id : undefined} value={typeof LowerLeftColor === "object" && "value" in LowerLeftColor ? LowerLeftColor?.value : LowerLeftColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="LowerRightColor" id={typeof LowerRightColor === "object" && "id" in LowerRightColor ? LowerRightColor?.id : undefined} value={typeof LowerRightColor === "object" && "value" in LowerRightColor ? LowerRightColor?.value : LowerRightColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="UpperRightColor" id={typeof UpperRightColor === "object" && "id" in UpperRightColor ? UpperRightColor?.id : undefined} value={typeof UpperRightColor === "object" && "value" in UpperRightColor ? UpperRightColor?.value : UpperRightColor} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    