import { member, Member, Component } from "../../../core";
    
    export interface MeshUVRaycastPortalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Offset?: member<number>;
RayExit?: member<any>;
UVOffset?: member<[number, number]>;
UVScale?: member<[number, number]>;
RepeatUV?: member<boolean>;
OverrideHitTriggers?: member<any>;
Filter?: member<any>;
FilterMode?: member<any>;
    }
    
    export function MeshUVRaycastPortal(props: MeshUVRaycastPortalInput){
      const { id, persistentId, updateOrder, Enabled,
Offset,
RayExit,
UVOffset,
UVScale,
RepeatUV,
OverrideHitTriggers,
Filter,
FilterMode, } = props;
    
      return (
        <Component type="FrooxEngine.MeshUVRaycastPortal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IUVToRayConverter]`} name="RayExit" id={typeof RayExit === "object" && "id" in RayExit ? RayExit?.id : undefined} value={typeof RayExit === "object" && "value" in RayExit ? RayExit?.value : RayExit} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVOffset" id={typeof UVOffset === "object" && "id" in UVOffset ? UVOffset?.id : undefined} value={typeof UVOffset === "object" && "value" in UVOffset ? UVOffset?.value : UVOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVScale" id={typeof UVScale === "object" && "id" in UVScale ? UVScale?.id : undefined} value={typeof UVScale === "object" && "value" in UVScale ? UVScale?.value : UVScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RepeatUV" id={typeof RepeatUV === "object" && "id" in RepeatUV ? RepeatUV?.id : undefined} value={typeof RepeatUV === "object" && "value" in RepeatUV ? RepeatUV?.value : RepeatUV} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`} name="OverrideHitTriggers" id={typeof OverrideHitTriggers === "object" && "id" in OverrideHitTriggers ? OverrideHitTriggers?.id : undefined} value={typeof OverrideHitTriggers === "object" && "value" in OverrideHitTriggers ? OverrideHitTriggers?.value : OverrideHitTriggers} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`3[FrooxEngine.ICollider,System.Int32,System.Boolean]]`} name="Filter" id={typeof Filter === "object" && "id" in Filter ? Filter?.id : undefined} value={typeof Filter === "object" && "value" in Filter ? Filter?.value : Filter} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.FilterCombineMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: CombineAND */  />
        </Component>
      );
    };
    