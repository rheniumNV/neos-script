import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UriInputInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
_value?: member<any>;
    }
    
    export function UriInput(props: UriInputInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
_value, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.UriInput" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="_value" id={typeof _value === "object" && "id" in _value ? _value?.id : undefined} value={typeof _value === "object" && "value" in _value ? _value?.value : _value} /* default: <i>null</i> */  />
        </Component>
      );
    };
    