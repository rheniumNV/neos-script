import { member, Member, Component } from "../../../core";
    
    export interface VirtualModifierKeyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Keyboard?: member<any>;
State?: member<boolean>;
    }
    
    export function VirtualModifierKey(props: VirtualModifierKeyInput){
      const { id, persistentId, updateOrder, Enabled,
Keyboard,
State, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualModifierKey" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.VirtualKeyboard]`} name="Keyboard" id={typeof Keyboard === "object" && "id" in Keyboard ? Keyboard?.id : undefined} value={typeof Keyboard === "object" && "value" in Keyboard ? Keyboard?.value : Keyboard} /* default: ID0 */  isRaw={typeof Keyboard === "object" && "isRaw" in Keyboard && Keyboard.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="State" id={typeof State === "object" && "id" in State ? State?.id : undefined} value={typeof State === "object" && "value" in State ? State?.value : State} /* default: false */  isRaw={typeof State === "object" && "isRaw" in State && State.isRaw ? true : undefined} />
        </Component>
      );
    };
    