import { member, Member, Component } from "../../../core";
    
    export interface OnlineStatusFacetPresetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
    }
    
    export function OnlineStatusFacetPreset(props: OnlineStatusFacetPresetInput){
      const { id, persistentId, updateOrder, Enabled, } = props;
    
      return (
        <Component type="FrooxEngine.OnlineStatusFacetPreset" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
        </Component>
      );
    };
    