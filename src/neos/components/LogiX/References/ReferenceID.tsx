import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ReferenceIDInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Element?: member<any>;
    }
    
    export function ReferenceID(props: ReferenceIDInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Element, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.References.ReferenceID" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IWorldElement]`} name="Element" id={typeof Element === "object" && "id" in Element ? Element?.id : undefined} value={typeof Element === "object" && "value" in Element ? Element?.value : Element} /* default: ID0 */  />
        </Component>
      );
    };
    