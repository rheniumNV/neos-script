import { member, Member, Component } from "../../../core";
    
    export interface GrabbableParenterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ParentUnder?: member<any>;
Filter?: member<any>;
    }
    
    export function GrabbableParenter(props: GrabbableParenterInput){
      const { id, persistentId, updateOrder, Enabled,
ParentUnder,
Filter, } = props;
    
      return (
        <Component type="FrooxEngine.GrabbableParenter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ParentUnder" id={typeof ParentUnder === "object" && "id" in ParentUnder ? ParentUnder?.id : undefined} value={typeof ParentUnder === "object" && "value" in ParentUnder ? ParentUnder?.value : ParentUnder} /* default: ID0 */  isRaw={typeof ParentUnder === "object" && "isRaw" in ParentUnder && ParentUnder.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`2[FrooxEngine.IGrabbable,System.Boolean]]`} name="Filter" id={typeof Filter === "object" && "id" in Filter ? Filter?.id : undefined} value={typeof Filter === "object" && "value" in Filter ? Filter?.value : Filter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Filter === "object" && "isRaw" in Filter && Filter.isRaw ? true : undefined} />
        </Component>
      );
    };
    