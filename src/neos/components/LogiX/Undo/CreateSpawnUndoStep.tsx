import { member, Member, Component } from "../../../core";
    
    export interface CreateSpawnUndoStepInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
Description?: member<any>;
OnCreated?: member<any>;
    }
    
    export function CreateSpawnUndoStep(props: CreateSpawnUndoStepInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
Description,
OnCreated, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Undo.CreateSpawnUndoStep" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Description" id={typeof Description === "object" && "id" in Description ? Description?.id : undefined} value={typeof Description === "object" && "value" in Description ? Description?.value : Description} /* default: ID0 */  isRaw={typeof Description === "object" && "isRaw" in Description && Description.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnCreated" id={typeof OnCreated === "object" && "id" in OnCreated ? OnCreated?.id : undefined} value={typeof OnCreated === "object" && "value" in OnCreated ? OnCreated?.value : OnCreated} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnCreated === "object" && "isRaw" in OnCreated && OnCreated.isRaw ? true : undefined} />
        </Component>
      );
    };
    