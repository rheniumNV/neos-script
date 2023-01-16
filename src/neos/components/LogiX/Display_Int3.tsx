import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface Display_Int3Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<any>;
_text0?: member<string>;
_text1?: member<string>;
_text2?: member<string>;
    }
    
    export function Display_Int3(props: Display_Int3Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
_text0,
_text1,
_text2, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Display.Display_Int3" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.int3]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text0" id={typeof _text0 === "object" && "id" in _text0 ? _text0?.id : undefined} value={typeof _text0 === "object" && "value" in _text0 ? _text0?.value : _text0} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text1" id={typeof _text1 === "object" && "id" in _text1 ? _text1?.id : undefined} value={typeof _text1 === "object" && "value" in _text1 ? _text1?.value : _text1} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text2" id={typeof _text2 === "object" && "id" in _text2 ? _text2?.id : undefined} value={typeof _text2 === "object" && "value" in _text2 ? _text2?.value : _text2} /* default: ID0 */  />
        </Component>
      );
    };
    