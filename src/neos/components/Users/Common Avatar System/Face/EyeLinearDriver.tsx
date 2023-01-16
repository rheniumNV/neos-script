import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface EyeLinearDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
EyeManager?: member<any>;
ProjectionPlaneSize?: member<[number, number]>;
ProjectionPointDistance?: member<number>;
PositionOffsetCenter?: member<[number, number]>;
PositionOffsetRange?: member<[number, number]>;
MinimumTargetPointDistance?: member<number>;
PositionClampMode?: member<any>;
    }
    
    export function EyeLinearDriver(props: EyeLinearDriverInput){
      const { id, persistentId, updateOrder, Enabled,
EyeManager,
ProjectionPlaneSize,
ProjectionPointDistance,
PositionOffsetCenter,
PositionOffsetRange,
MinimumTargetPointDistance,
PositionClampMode, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.EyeLinearDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.EyeManager]`} name="EyeManager" id={typeof EyeManager === "object" && "id" in EyeManager ? EyeManager?.id : undefined} value={typeof EyeManager === "object" && "value" in EyeManager ? EyeManager?.value : EyeManager} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ProjectionPlaneSize" id={typeof ProjectionPlaneSize === "object" && "id" in ProjectionPlaneSize ? ProjectionPlaneSize?.id : undefined} value={typeof ProjectionPlaneSize === "object" && "value" in ProjectionPlaneSize ? ProjectionPlaneSize?.value : ProjectionPlaneSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ProjectionPointDistance" id={typeof ProjectionPointDistance === "object" && "id" in ProjectionPointDistance ? ProjectionPointDistance?.id : undefined} value={typeof ProjectionPointDistance === "object" && "value" in ProjectionPointDistance ? ProjectionPointDistance?.value : ProjectionPointDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PositionOffsetCenter" id={typeof PositionOffsetCenter === "object" && "id" in PositionOffsetCenter ? PositionOffsetCenter?.id : undefined} value={typeof PositionOffsetCenter === "object" && "value" in PositionOffsetCenter ? PositionOffsetCenter?.value : PositionOffsetCenter} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PositionOffsetRange" id={typeof PositionOffsetRange === "object" && "id" in PositionOffsetRange ? PositionOffsetRange?.id : undefined} value={typeof PositionOffsetRange === "object" && "value" in PositionOffsetRange ? PositionOffsetRange?.value : PositionOffsetRange} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinimumTargetPointDistance" id={typeof MinimumTargetPointDistance === "object" && "id" in MinimumTargetPointDistance ? MinimumTargetPointDistance?.id : undefined} value={typeof MinimumTargetPointDistance === "object" && "value" in MinimumTargetPointDistance ? MinimumTargetPointDistance?.value : MinimumTargetPointDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.EyeLinearDriver+ClampMode]`} name="PositionClampMode" id={typeof PositionClampMode === "object" && "id" in PositionClampMode ? PositionClampMode?.id : undefined} value={typeof PositionClampMode === "object" && "value" in PositionClampMode ? PositionClampMode?.value : PositionClampMode} /* default: Circle */  />
        </Component>
      );
    };
    