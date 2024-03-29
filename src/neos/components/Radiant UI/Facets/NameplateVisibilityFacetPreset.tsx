import { member, Member, Component } from "../../../core";
    
    export interface NameplateVisibilityFacetPresetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
    }
    
    export function NameplateVisibilityFacetPreset(props: NameplateVisibilityFacetPresetInput){
      const { id, persistentId, updateOrder, Enabled, } = props;
    
      return (
        <Component type="FrooxEngine.NameplateVisibilityFacetPreset" id={id} persistentId={persistentId} updateOrder={updateOrder} version={2}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
        </Component>
      );
    };
    