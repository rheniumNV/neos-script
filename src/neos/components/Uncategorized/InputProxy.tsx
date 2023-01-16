import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface InputProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
InputField?: member<any>;
    }
    
    export function InputProxy(props: InputProxyInput){
      const { id, persistentId, updateOrder, Enabled,
InputField, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.InputProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LogiX.IInputElement]`} name="InputField" id={typeof InputField === "object" && "id" in InputField ? InputField?.id : undefined} value={typeof InputField === "object" && "value" in InputField ? InputField?.value : InputField} /* default: ID0 */  />
        </Component>
      );
    };
    