import { member, Member, Component } from "../../core";
    
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LogiX.IInputElement]`} name="InputField" id={typeof InputField === "object" && "id" in InputField ? InputField?.id : undefined} value={typeof InputField === "object" && "value" in InputField ? InputField?.value : InputField} /* default: ID0 */  isRaw={typeof InputField === "object" && "isRaw" in InputField && InputField.isRaw ? true : undefined} />
        </Component>
      );
    };
    