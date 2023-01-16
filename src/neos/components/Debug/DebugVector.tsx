import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DebugVectorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PositionOffset?: member<[number, number, number]>;
RotationOffset?: member<any>;
Vector?: member<[number, number, number]>;
Color?: member<[number, number, number, number]>;
UseGlobalSpace?: member<boolean>;
    }
    
    export function DebugVector(props: DebugVectorInput){
      const { id, persistentId, updateOrder, Enabled,
PositionOffset,
RotationOffset,
Vector,
Color,
UseGlobalSpace, } = props;
    
      return (
        <Component type="FrooxEngine.DebugVector" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="PositionOffset" id={typeof PositionOffset === "object" && "id" in PositionOffset ? PositionOffset?.id : undefined} value={typeof PositionOffset === "object" && "value" in PositionOffset ? PositionOffset?.value : PositionOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Vector" id={typeof Vector === "object" && "id" in Vector ? Vector?.id : undefined} value={typeof Vector === "object" && "value" in Vector ? Vector?.value : Vector} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseGlobalSpace" id={typeof UseGlobalSpace === "object" && "id" in UseGlobalSpace ? UseGlobalSpace?.id : undefined} value={typeof UseGlobalSpace === "object" && "value" in UseGlobalSpace ? UseGlobalSpace?.value : UseGlobalSpace} /* default: false */  />
        </Component>
      );
    };
    