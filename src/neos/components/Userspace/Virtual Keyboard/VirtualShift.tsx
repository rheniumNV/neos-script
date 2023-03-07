import { member, Member, Component } from "../../../core";
    
    export interface VirtualShiftInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Keyboard?: member<any>;
HoldPressInterval?: member<number>;
AlwaysHold?: member<boolean>;
_lastPress?: member<number>;
    }
    
    export function VirtualShift(props: VirtualShiftInput){
      const { id, persistentId, updateOrder, Enabled,
Keyboard,
HoldPressInterval,
AlwaysHold,
_lastPress, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualShift" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.VirtualKeyboard]`} name="Keyboard" id={typeof Keyboard === "object" && "id" in Keyboard ? Keyboard?.id : undefined} value={typeof Keyboard === "object" && "value" in Keyboard ? Keyboard?.value : Keyboard} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HoldPressInterval" id={typeof HoldPressInterval === "object" && "id" in HoldPressInterval ? HoldPressInterval?.id : undefined} value={typeof HoldPressInterval === "object" && "value" in HoldPressInterval ? HoldPressInterval?.value : HoldPressInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlwaysHold" id={typeof AlwaysHold === "object" && "id" in AlwaysHold ? AlwaysHold?.id : undefined} value={typeof AlwaysHold === "object" && "value" in AlwaysHold ? AlwaysHold?.value : AlwaysHold} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="_lastPress" id={typeof _lastPress === "object" && "id" in _lastPress ? _lastPress?.id : undefined} value={typeof _lastPress === "object" && "value" in _lastPress ? _lastPress?.value : _lastPress} /* default: 0 */  />
        </Component>
      );
    };
    