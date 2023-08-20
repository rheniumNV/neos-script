import { member, Member, Component } from "../../core";
    
    export interface BagEditorItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Item?: member<any>;
    }
    
    export function BagEditorItem(props: BagEditorItemInput){
      const { id, persistentId, updateOrder, Enabled,
Item, } = props;
    
      return (
        <Component type="FrooxEngine.BagEditorItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef`} name="Item" id={typeof Item === "object" && "id" in Item ? Item?.id : undefined} value={typeof Item === "object" && "value" in Item ? Item?.value : Item} /* default: ID0 */  isRaw={typeof Item === "object" && "isRaw" in Item && Item.isRaw ? true : undefined} />
        </Component>
      );
    };
    