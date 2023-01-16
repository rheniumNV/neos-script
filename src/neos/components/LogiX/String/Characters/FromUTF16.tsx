import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FromUTF16Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
UTF16?: member<any>;
    }
    
    export function FromUTF16(props: FromUTF16Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
UTF16, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.Characters.FromUTF16" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="UTF16" id={typeof UTF16 === "object" && "id" in UTF16 ? UTF16?.id : undefined} value={typeof UTF16 === "object" && "value" in UTF16 ? UTF16?.value : UTF16} /* default: ID0 */  />
        </Component>
      );
    };
    