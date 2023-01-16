import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="_targetContainer" id={typeof _targetContainer === "object" && "id" in _targetContainer ? _targetContainer?.id : undefined} value={typeof _targetContainer === "object" && "value" in _targetContainer ? _targetContainer?.value : _targetContainer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Predicate\`1[FrooxEngine.Worker]]`} name="_workerFilter" id={typeof _workerFilter === "object" && "id" in _workerFilter ? _workerFilter?.id : undefined} value={typeof _workerFilter === "object" && "value" in _workerFilter ? _workerFilter?.value : _workerFilter} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="_targetWorker" id={typeof _targetWorker === "object" && "id" in _targetWorker ? _targetWorker?.id : undefined} value={typeof _targetWorker === "object" && "value" in _targetWorker ? _targetWorker?.value : _targetWorker} /* default: ID0 */  />
        </Component>
      );
    };
    