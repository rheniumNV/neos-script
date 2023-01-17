import { member, Member, Component } from "../../core";
    
    export interface DevCreateNewFormInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OnCreated?: member<any>;
CategoryRoot?: member<any>;
_swapPanel?: member<any>;
    }
    
    export function DevCreateNewForm(props: DevCreateNewFormInput){
      const { id, persistentId, updateOrder, Enabled,
OnCreated,
CategoryRoot,
_swapPanel, } = props;
    
      return (
        <Component type="FrooxEngine.DevCreateNewForm" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ItemCreated]`} name="OnCreated" id={typeof OnCreated === "object" && "id" in OnCreated ? OnCreated?.id : undefined} value={typeof OnCreated === "object" && "value" in OnCreated ? OnCreated?.value : OnCreated} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CategoryRoot" id={typeof CategoryRoot === "object" && "id" in CategoryRoot ? CategoryRoot?.id : undefined} value={typeof CategoryRoot === "object" && "value" in CategoryRoot ? CategoryRoot?.value : CategoryRoot} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSwapCanvasPanel]`} name="_swapPanel" id={typeof _swapPanel === "object" && "id" in _swapPanel ? _swapPanel?.id : undefined} value={typeof _swapPanel === "object" && "value" in _swapPanel ? _swapPanel?.value : _swapPanel} /* default: ID0 */  />
        </Component>
      );
    };
    