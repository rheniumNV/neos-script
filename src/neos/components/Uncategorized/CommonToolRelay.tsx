import { member, Member, Component } from "../../core";
    
    export interface CommonToolRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CommonTool?: member<any>;
    }
    
    export function CommonToolRelay(props: CommonToolRelayInput){
      const { id, persistentId, updateOrder, Enabled,
CommonTool, } = props;
    
      return (
        <Component type="FrooxEngine.CommonToolRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="CommonTool" id={typeof CommonTool === "object" && "id" in CommonTool ? CommonTool?.id : undefined} value={typeof CommonTool === "object" && "value" in CommonTool ? CommonTool?.value : CommonTool} /* default: ID0 */  isRaw={typeof CommonTool === "object" && "isRaw" in CommonTool && CommonTool.isRaw ? true : undefined} />
        </Component>
      );
    };
    