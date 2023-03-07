import { member, Member, Component } from "../../../../core";
    
    export interface OnLoadedNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Loaded?: member<any>;
    }
    
    export function OnLoadedNode(props: OnLoadedNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Loaded, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnLoadedNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Loaded" id={typeof Loaded === "object" && "id" in Loaded ? Loaded?.id : undefined} value={typeof Loaded === "object" && "value" in Loaded ? Loaded?.value : Loaded} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    