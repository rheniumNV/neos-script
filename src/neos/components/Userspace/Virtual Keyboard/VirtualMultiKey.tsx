import { member, Member, Component } from "../../../core";
    
    export interface VirtualMultiKeyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Keys?: member<any>;
    }
    
    export function VirtualMultiKey(props: VirtualMultiKeyInput){
      const { id, persistentId, updateOrder, Enabled,
Keys, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualMultiKey" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[FrooxEngine.Key]`} name="Keys" id={typeof Keys === "object" && "id" in Keys ? Keys?.id : undefined} value={typeof Keys === "object" && "value" in Keys ? Keys?.value : Keys} /* default: FrooxEngine.SyncFieldList`1[FrooxEngine.Key] */  isRaw={typeof Keys === "object" && "isRaw" in Keys && Keys.isRaw ? true : undefined} />
        </Component>
      );
    };
    