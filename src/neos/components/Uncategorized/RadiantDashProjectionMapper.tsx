import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RadiantDashProjectionMapperInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Dash?: member<any>;
Root?: member<any>;
Mesh?: member<any>;
Camera?: member<any>;
UVScale?: member<any>;
UVOffset?: member<any>;
    }
    
    export function RadiantDashProjectionMapper(props: RadiantDashProjectionMapperInput){
      const { id, persistentId, updateOrder, Enabled,
Dash,
Root,
Mesh,
Camera,
UVScale,
UVOffset, } = props;
    
      return (
        <Component type="FrooxEngine.RadiantDashProjectionMapper" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RadiantDash]`} name="Dash" id={typeof Dash === "object" && "id" in Dash ? Dash?.id : undefined} value={typeof Dash === "object" && "value" in Dash ? Dash?.value : Dash} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CurvedPlaneMesh]`} name="Mesh" id={typeof Mesh === "object" && "id" in Mesh ? Mesh?.id : undefined} value={typeof Mesh === "object" && "value" in Mesh ? Mesh?.value : Mesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Camera]`} name="Camera" id={typeof Camera === "object" && "id" in Camera ? Camera?.id : undefined} value={typeof Camera === "object" && "value" in Camera ? Camera?.value : Camera} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[BaseX.float2]]`} name="UVScale" id={typeof UVScale === "object" && "id" in UVScale ? UVScale?.id : undefined} value={typeof UVScale === "object" && "value" in UVScale ? UVScale?.value : UVScale} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[BaseX.float2]]`} name="UVOffset" id={typeof UVOffset === "object" && "id" in UVOffset ? UVOffset?.id : undefined} value={typeof UVOffset === "object" && "value" in UVOffset ? UVOffset?.value : UVOffset} /* default: ID0 */  />
        </Component>
      );
    };
    