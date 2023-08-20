import { member, Member, Component } from "../../core";
    
    export interface ModelExportableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Root?: member<any>;
OnlyComponents?: member<any>;
    }
    
    export function ModelExportable(props: ModelExportableInput){
      const { id, persistentId, updateOrder, Enabled,
Root,
OnlyComponents, } = props;
    
      return (
        <Component type="FrooxEngine.ModelExportable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  isRaw={typeof Root === "object" && "isRaw" in Root && Root.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Component]`} name="OnlyComponents" id={typeof OnlyComponents === "object" && "id" in OnlyComponents ? OnlyComponents?.id : undefined} value={typeof OnlyComponents === "object" && "value" in OnlyComponents ? OnlyComponents?.value : OnlyComponents} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Component] */  isRaw={typeof OnlyComponents === "object" && "isRaw" in OnlyComponents && OnlyComponents.isRaw ? true : undefined} />
        </Component>
      );
    };
    