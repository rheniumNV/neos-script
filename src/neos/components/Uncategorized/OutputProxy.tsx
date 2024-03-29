import { member, Member, Component } from "../../core";
    
    export interface OutputProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OutputField?: member<any>;
    }
    
    export function OutputProxy(props: OutputProxyInput){
      const { id, persistentId, updateOrder, Enabled,
OutputField, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.OutputProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LogiX.IOutputElement]`} name="OutputField" id={typeof OutputField === "object" && "id" in OutputField ? OutputField?.id : undefined} value={typeof OutputField === "object" && "value" in OutputField ? OutputField?.value : OutputField} /* default: ID0 */  isRaw={typeof OutputField === "object" && "isRaw" in OutputField && OutputField.isRaw ? true : undefined} />
        </Component>
      );
    };
    