import { member, Member, Component } from "../../../core";
    
    export interface FontCollectionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
FontSets?: member<any>;
    }
    
    export function FontCollection(props: FontCollectionInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
FontSets, } = props;
    
      return (
        <Component type="FrooxEngine.FontCollection" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.FontSet]`} name="FontSets" id={typeof FontSets === "object" && "id" in FontSets ? FontSets?.id : undefined} value={typeof FontSets === "object" && "value" in FontSets ? FontSets?.value : FontSets} /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.FontSet] */  isRaw={typeof FontSets === "object" && "isRaw" in FontSets && FontSets.isRaw ? true : undefined} />
        </Component>
      );
    };
    