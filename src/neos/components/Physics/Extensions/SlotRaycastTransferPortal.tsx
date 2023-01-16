import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SlotRaycastTransferPortalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Exit?: member<any>;
OverrideHitTriggers?: member<any>;
Filter?: member<any>;
FilterMode?: member<any>;
    }
    
    export function SlotRaycastTransferPortal(props: SlotRaycastTransferPortalInput){
      const { id, persistentId, updateOrder, Enabled,
Exit,
OverrideHitTriggers,
Filter,
FilterMode, } = props;
    
      return (
        <Component type="FrooxEngine.SlotRaycastTransferPortal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Exit" id={typeof Exit === "object" && "id" in Exit ? Exit?.id : undefined} value={typeof Exit === "object" && "value" in Exit ? Exit?.value : Exit} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`} name="OverrideHitTriggers" id={typeof OverrideHitTriggers === "object" && "id" in OverrideHitTriggers ? OverrideHitTriggers?.id : undefined} value={typeof OverrideHitTriggers === "object" && "value" in OverrideHitTriggers ? OverrideHitTriggers?.value : OverrideHitTriggers} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`3[FrooxEngine.ICollider,System.Int32,System.Boolean]]`} name="Filter" id={typeof Filter === "object" && "id" in Filter ? Filter?.id : undefined} value={typeof Filter === "object" && "value" in Filter ? Filter?.value : Filter} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.FilterCombineMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: CombineAND */  />
        </Component>
      );
    };
    