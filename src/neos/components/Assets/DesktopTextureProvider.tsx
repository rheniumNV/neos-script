import { member, Member, Component } from "../../core";
    
    export interface DesktopTextureProviderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DisplayIndex?: member<number>;
    }
    
    export function DesktopTextureProvider(props: DesktopTextureProviderInput){
      const { id, persistentId, updateOrder, Enabled,
DisplayIndex, } = props;
    
      return (
        <Component type="FrooxEngine.DesktopTextureProvider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DisplayIndex" id={typeof DisplayIndex === "object" && "id" in DisplayIndex ? DisplayIndex?.id : undefined} value={typeof DisplayIndex === "object" && "value" in DisplayIndex ? DisplayIndex?.value : DisplayIndex} /* default: 0 */  isRaw={typeof DisplayIndex === "object" && "isRaw" in DisplayIndex && DisplayIndex.isRaw ? true : undefined} />
        </Component>
      );
    };
    