import { member, Member, Component } from "../../core";
    
    export interface LogixInterfaceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_proxy?: member<any>;
    }
    
    export function LogixInterface(props: LogixInterfaceInput){
      const { id, persistentId, updateOrder, Enabled,
_proxy, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.LogixInterface" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.LogiX.LogixInterfaceProxy]`} name="_proxy" id={typeof _proxy === "object" && "id" in _proxy ? _proxy?.id : undefined} value={typeof _proxy === "object" && "value" in _proxy ? _proxy?.value : _proxy} /* default: ID0 */  isRaw={typeof _proxy === "object" && "isRaw" in _proxy && _proxy.isRaw ? true : undefined} />
        </Component>
      );
    };
    