import { member, Member, Component } from "../../../core";
    
    export interface CreateTypeFieldUndoStepInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
ForceNew?: member<any>;
OnCreated?: member<any>;
    }
    
    export function CreateTypeFieldUndoStep(props: CreateTypeFieldUndoStepInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
ForceNew,
OnCreated, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Undo.CreateTypeFieldUndoStep" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.SyncType]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ForceNew" id={typeof ForceNew === "object" && "id" in ForceNew ? ForceNew?.id : undefined} value={typeof ForceNew === "object" && "value" in ForceNew ? ForceNew?.value : ForceNew} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnCreated" id={typeof OnCreated === "object" && "id" in OnCreated ? OnCreated?.id : undefined} value={typeof OnCreated === "object" && "value" in OnCreated ? OnCreated?.value : OnCreated} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    