import { member, Member, Component } from "../../../core";
    
    export interface AlwaysOnFacetModuleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targets?: member<any>;
    }
    
    export function AlwaysOnFacetModule(props: AlwaysOnFacetModuleInput){
      const { id, persistentId, updateOrder, Enabled,
_targets, } = props;
    
      return (
        <Component type="FrooxEngine.AlwaysOnFacetModule" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="_targets" id={typeof _targets === "object" && "id" in _targets ? _targets?.id : undefined} value={typeof _targets === "object" && "value" in _targets ? _targets?.value : _targets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  />
        </Component>
      );
    };
    