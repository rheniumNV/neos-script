import { member, Member, Component } from "../../../core";
    
    export interface DesktopInteractionRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DisplayIndex?: member<number>;
UseLegacyTextInput?: member<boolean>;
    }
    
    export function DesktopInteractionRelay(props: DesktopInteractionRelayInput){
      const { id, persistentId, updateOrder, Enabled,
DisplayIndex,
UseLegacyTextInput, } = props;
    
      return (
        <Component type="FrooxEngine.DesktopInteractionRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DisplayIndex" id={typeof DisplayIndex === "object" && "id" in DisplayIndex ? DisplayIndex?.id : undefined} value={typeof DisplayIndex === "object" && "value" in DisplayIndex ? DisplayIndex?.value : DisplayIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseLegacyTextInput" id={typeof UseLegacyTextInput === "object" && "id" in UseLegacyTextInput ? UseLegacyTextInput?.id : undefined} value={typeof UseLegacyTextInput === "object" && "value" in UseLegacyTextInput ? UseLegacyTextInput?.value : UseLegacyTextInput} /* default: false */  />
        </Component>
      );
    };
    