import { member, Member, Component } from "../../core";
    
    export interface WorldCloseActionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Action?: member<any>;
WaitingConfirm?: member<boolean>;
OnClosed?: member<any>;
    }
    
    export function WorldCloseAction(props: WorldCloseActionInput){
      const { id, persistentId, updateOrder, Enabled,
Action,
WaitingConfirm,
OnClosed, } = props;
    
      return (
        <Component type="FrooxEngine.WorldCloseAction" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.WorldCloseAction+CloseAction]`} name="Action" id={typeof Action === "object" && "id" in Action ? Action?.id : undefined} value={typeof Action === "object" && "value" in Action ? Action?.value : Action} /* default: LeaveOrOpenCloseScreen */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WaitingConfirm" id={typeof WaitingConfirm === "object" && "id" in WaitingConfirm ? WaitingConfirm?.id : undefined} value={typeof WaitingConfirm === "object" && "value" in WaitingConfirm ? WaitingConfirm?.value : WaitingConfirm} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action]`} name="OnClosed" id={typeof OnClosed === "object" && "id" in OnClosed ? OnClosed?.id : undefined} value={typeof OnClosed === "object" && "value" in OnClosed ? OnClosed?.value : OnClosed} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    