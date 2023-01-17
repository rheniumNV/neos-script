import { member, Member, Component } from "../../core";
    
    export interface WorldOrbSaverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Orb?: member<any>;
saveHereItem?: member<any>;
saveToInventoryItem?: member<any>;
cancelItem?: member<any>;
menu?: member<any>;
interactive?: member<boolean>;
saving?: member<boolean>;
    }
    
    export function WorldOrbSaver(props: WorldOrbSaverInput){
      const { id, persistentId, updateOrder, Enabled,
Orb,
saveHereItem,
saveToInventoryItem,
cancelItem,
menu,
interactive,
saving, } = props;
    
      return (
        <Component type="FrooxEngine.WorldOrbSaver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldOrb]`} name="Orb" id={typeof Orb === "object" && "id" in Orb ? Orb?.id : undefined} value={typeof Orb === "object" && "value" in Orb ? Orb?.value : Orb} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenuItem]`} name="saveHereItem" id={typeof saveHereItem === "object" && "id" in saveHereItem ? saveHereItem?.id : undefined} value={typeof saveHereItem === "object" && "value" in saveHereItem ? saveHereItem?.value : saveHereItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenuItem]`} name="saveToInventoryItem" id={typeof saveToInventoryItem === "object" && "id" in saveToInventoryItem ? saveToInventoryItem?.id : undefined} value={typeof saveToInventoryItem === "object" && "value" in saveToInventoryItem ? saveToInventoryItem?.value : saveToInventoryItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenuItem]`} name="cancelItem" id={typeof cancelItem === "object" && "id" in cancelItem ? cancelItem?.id : undefined} value={typeof cancelItem === "object" && "value" in cancelItem ? cancelItem?.value : cancelItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenu]`} name="menu" id={typeof menu === "object" && "id" in menu ? menu?.id : undefined} value={typeof menu === "object" && "value" in menu ? menu?.value : menu} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="interactive" id={typeof interactive === "object" && "id" in interactive ? interactive?.id : undefined} value={typeof interactive === "object" && "value" in interactive ? interactive?.value : interactive} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="saving" id={typeof saving === "object" && "id" in saving ? saving?.id : undefined} value={typeof saving === "object" && "value" in saving ? saving?.value : saving} /* default: false */  />
        </Component>
      );
    };
    