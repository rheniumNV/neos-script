import { member, Member, Component } from "../../../core";
    
    export interface ButtonActionTriggerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OnPressed?: member<any>;
OnPressing?: member<any>;
OnReleased?: member<any>;
    }
    
    export function ButtonActionTrigger(props: ButtonActionTriggerInput){
      const { id, persistentId, updateOrder, Enabled,
OnPressed,
OnPressing,
OnReleased, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonActionTrigger" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action]`} name="OnPressed" id={typeof OnPressed === "object" && "id" in OnPressed ? OnPressed?.id : undefined} value={typeof OnPressed === "object" && "value" in OnPressed ? OnPressed?.value : OnPressed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnPressed === "object" && "isRaw" in OnPressed && OnPressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action]`} name="OnPressing" id={typeof OnPressing === "object" && "id" in OnPressing ? OnPressing?.id : undefined} value={typeof OnPressing === "object" && "value" in OnPressing ? OnPressing?.value : OnPressing} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnPressing === "object" && "isRaw" in OnPressing && OnPressing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action]`} name="OnReleased" id={typeof OnReleased === "object" && "id" in OnReleased ? OnReleased?.id : undefined} value={typeof OnReleased === "object" && "value" in OnReleased ? OnReleased?.value : OnReleased} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnReleased === "object" && "isRaw" in OnReleased && OnReleased.isRaw ? true : undefined} />
        </Component>
      );
    };
    