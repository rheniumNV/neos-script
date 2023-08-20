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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ItemCreated]`} name="OnCreated" id={typeof OnCreated === "object" && "id" in OnCreated ? OnCreated?.id : undefined} value={typeof OnCreated === "object" && "value" in OnCreated ? OnCreated?.value : OnCreated} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnCreated === "object" && "isRaw" in OnCreated && OnCreated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CategoryRoot" id={typeof CategoryRoot === "object" && "id" in CategoryRoot ? CategoryRoot?.id : undefined} value={typeof CategoryRoot === "object" && "value" in CategoryRoot ? CategoryRoot?.value : CategoryRoot} /* default: <i>null</i> */  isRaw={typeof CategoryRoot === "object" && "isRaw" in CategoryRoot && CategoryRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSwapCanvasPanel]`} name="_swapPanel" id={typeof _swapPanel === "object" && "id" in _swapPanel ? _swapPanel?.id : undefined} value={typeof _swapPanel === "object" && "value" in _swapPanel ? _swapPanel?.value : _swapPanel} /* default: ID0 */  isRaw={typeof _swapPanel === "object" && "isRaw" in _swapPanel && _swapPanel.isRaw ? true : undefined} />
        </Component>
      );
    };
    