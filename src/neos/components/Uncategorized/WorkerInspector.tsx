import { member, Member, Component } from "../../core";
    
    export interface WorkerInspectorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetContainer?: member<any>;
_workerFilter?: member<any>;
_targetWorker?: member<any>;
    }
    
    export function WorkerInspector(props: WorkerInspectorInput){
      const { id, persistentId, updateOrder, Enabled,
_targetContainer,
_workerFilter,
_targetWorker, } = props;
    
      return (
        <Component type="FrooxEngine.WorkerInspector" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="_targetContainer" id={typeof _targetContainer === "object" && "id" in _targetContainer ? _targetContainer?.id : undefined} value={typeof _targetContainer === "object" && "value" in _targetContainer ? _targetContainer?.value : _targetContainer} /* default: ID0 */  isRaw={typeof _targetContainer === "object" && "isRaw" in _targetContainer && _targetContainer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Predicate\`1[FrooxEngine.Worker]]`} name="_workerFilter" id={typeof _workerFilter === "object" && "id" in _workerFilter ? _workerFilter?.id : undefined} value={typeof _workerFilter === "object" && "value" in _workerFilter ? _workerFilter?.value : _workerFilter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof _workerFilter === "object" && "isRaw" in _workerFilter && _workerFilter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="_targetWorker" id={typeof _targetWorker === "object" && "id" in _targetWorker ? _targetWorker?.id : undefined} value={typeof _targetWorker === "object" && "value" in _targetWorker ? _targetWorker?.value : _targetWorker} /* default: ID0 */  isRaw={typeof _targetWorker === "object" && "isRaw" in _targetWorker && _targetWorker.isRaw ? true : undefined} />
        </Component>
      );
    };
    