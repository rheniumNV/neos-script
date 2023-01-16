import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FromUTF32Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
UTF32?: member<any>;
    }
    
    export function FromUTF32(props: FromUTF32Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
UTF32, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.Characters.FromUTF32" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="UTF32" id={typeof UTF32 === "object" && "id" in UTF32 ? UTF32?.id : undefined} value={typeof UTF32 === "object" && "value" in UTF32 ? UTF32?.value : UTF32} /* default: ID0 */  />
        </Component>
      );
    };
    