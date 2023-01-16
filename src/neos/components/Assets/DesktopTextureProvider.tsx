import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DisplayIndex" id={typeof DisplayIndex === "object" && "id" in DisplayIndex ? DisplayIndex?.id : undefined} value={typeof DisplayIndex === "object" && "value" in DisplayIndex ? DisplayIndex?.value : DisplayIndex} /* default: 0 */  />
        </Component>
      );
    };
    