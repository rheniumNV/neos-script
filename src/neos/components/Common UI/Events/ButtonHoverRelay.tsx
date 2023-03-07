import { member, Member, Component } from "../../../core";
    
    export interface ButtonHoverRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OnHoverEnter?: member<any>;
OnHoverStay?: member<any>;
OnHoverLeave?: member<any>;
    }
    
    export function ButtonHoverRelay(props: ButtonHoverRelayInput){
      const { id, persistentId, updateOrder, Enabled,
OnHoverEnter,
OnHoverStay,
OnHoverLeave, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonHoverRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="OnHoverEnter" id={typeof OnHoverEnter === "object" && "id" in OnHoverEnter ? OnHoverEnter?.id : undefined} value={typeof OnHoverEnter === "object" && "value" in OnHoverEnter ? OnHoverEnter?.value : OnHoverEnter} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="OnHoverStay" id={typeof OnHoverStay === "object" && "id" in OnHoverStay ? OnHoverStay?.id : undefined} value={typeof OnHoverStay === "object" && "value" in OnHoverStay ? OnHoverStay?.value : OnHoverStay} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="OnHoverLeave" id={typeof OnHoverLeave === "object" && "id" in OnHoverLeave ? OnHoverLeave?.id : undefined} value={typeof OnHoverLeave === "object" && "value" in OnHoverLeave ? OnHoverLeave?.value : OnHoverLeave} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    