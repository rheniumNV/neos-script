import { member, Member, Component } from "../../../core";
    
    export interface DesktopDisplayLayoutInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
DisplayTemplate?: member<any>;
ItemGenerated?: member<any>;
    }
    
    export function DesktopDisplayLayout(props: DesktopDisplayLayoutInput){
      const { id, persistentId, updateOrder, Enabled,
User,
DisplayTemplate,
ItemGenerated, } = props;
    
      return (
        <Component type="FrooxEngine.DesktopDisplayLayout" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="DisplayTemplate" id={typeof DisplayTemplate === "object" && "id" in DisplayTemplate ? DisplayTemplate?.id : undefined} value={typeof DisplayTemplate === "object" && "value" in DisplayTemplate ? DisplayTemplate?.value : DisplayTemplate} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.DesktopDisplayLayout+DisplayItemHandler]`} name="ItemGenerated" id={typeof ItemGenerated === "object" && "id" in ItemGenerated ? ItemGenerated?.id : undefined} value={typeof ItemGenerated === "object" && "value" in ItemGenerated ? ItemGenerated?.value : ItemGenerated} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    