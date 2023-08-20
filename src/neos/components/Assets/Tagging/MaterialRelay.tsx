import { member, Member, Component } from "../../../core";
    
    export interface MaterialRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MaterialRefs?: member<any>;
    }
    
    export function MaterialRelay(props: MaterialRelayInput){
      const { id, persistentId, updateOrder, Enabled,
MaterialRefs, } = props;
    
      return (
        <Component type="FrooxEngine.MaterialRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.AssetRef\`1[FrooxEngine.Material]]`} name="MaterialRefs" id={typeof MaterialRefs === "object" && "id" in MaterialRefs ? MaterialRefs?.id : undefined} value={typeof MaterialRefs === "object" && "value" in MaterialRefs ? MaterialRefs?.value : MaterialRefs} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.AssetRef`1[FrooxEngine.Material]] */  isRaw={typeof MaterialRefs === "object" && "isRaw" in MaterialRefs && MaterialRefs.isRaw ? true : undefined} />
        </Component>
      );
    };
    