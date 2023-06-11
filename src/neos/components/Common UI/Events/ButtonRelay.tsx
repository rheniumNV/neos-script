import { member, Member, Component } from "../../../core";
    
    export interface ButtonRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DoublePressDelay?: member<number>;
ReleasePressInterval?: member<number>;
ButtonPressed?: member<any>;
    }
    
    export function ButtonRelay(props: ButtonRelayInput){
      const { id, persistentId, updateOrder, Enabled,
DoublePressDelay,
ReleasePressInterval,
ButtonPressed, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ButtonRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DoublePressDelay" id={typeof DoublePressDelay === "object" && "id" in DoublePressDelay ? DoublePressDelay?.id : undefined} value={typeof DoublePressDelay === "object" && "value" in DoublePressDelay ? DoublePressDelay?.value : DoublePressDelay} /* default: 0 */  isRaw={typeof DoublePressDelay === "object" && "isRaw" in DoublePressDelay && DoublePressDelay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ReleasePressInterval" id={typeof ReleasePressInterval === "object" && "id" in ReleasePressInterval ? ReleasePressInterval?.id : undefined} value={typeof ReleasePressInterval === "object" && "value" in ReleasePressInterval ? ReleasePressInterval?.value : ReleasePressInterval} /* default: 0 */  isRaw={typeof ReleasePressInterval === "object" && "isRaw" in ReleasePressInterval && ReleasePressInterval.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="ButtonPressed" id={typeof ButtonPressed === "object" && "id" in ButtonPressed ? ButtonPressed?.id : undefined} value={typeof ButtonPressed === "object" && "value" in ButtonPressed ? ButtonPressed?.value : ButtonPressed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof ButtonPressed === "object" && "isRaw" in ButtonPressed && ButtonPressed.isRaw ? true : undefined} />
        </Component>
      );
    };
    