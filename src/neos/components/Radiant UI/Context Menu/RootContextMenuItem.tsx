import { member, Member, Component } from "../../../core";
    
    export interface RootContextMenuItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OnlyForSide?: member<any>;
ExcludeOnTools?: member<boolean>;
ExcludePrimaryHand?: member<boolean>;
ExcludeSecondaryHand?: member<boolean>;
Item?: member<any>;
    }
    
    export function RootContextMenuItem(props: RootContextMenuItemInput){
      const { id, persistentId, updateOrder, Enabled,
OnlyForSide,
ExcludeOnTools,
ExcludePrimaryHand,
ExcludeSecondaryHand,
Item, } = props;
    
      return (
        <Component type="FrooxEngine.RootContextMenuItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[FrooxEngine.Chirality]]`} name="OnlyForSide" id={typeof OnlyForSide === "object" && "id" in OnlyForSide ? OnlyForSide?.id : undefined} value={typeof OnlyForSide === "object" && "value" in OnlyForSide ? OnlyForSide?.value : OnlyForSide} /* default: <i>null</i> */  isRaw={typeof OnlyForSide === "object" && "isRaw" in OnlyForSide && OnlyForSide.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ExcludeOnTools" id={typeof ExcludeOnTools === "object" && "id" in ExcludeOnTools ? ExcludeOnTools?.id : undefined} value={typeof ExcludeOnTools === "object" && "value" in ExcludeOnTools ? ExcludeOnTools?.value : ExcludeOnTools} /* default: false */  isRaw={typeof ExcludeOnTools === "object" && "isRaw" in ExcludeOnTools && ExcludeOnTools.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ExcludePrimaryHand" id={typeof ExcludePrimaryHand === "object" && "id" in ExcludePrimaryHand ? ExcludePrimaryHand?.id : undefined} value={typeof ExcludePrimaryHand === "object" && "value" in ExcludePrimaryHand ? ExcludePrimaryHand?.value : ExcludePrimaryHand} /* default: false */  isRaw={typeof ExcludePrimaryHand === "object" && "isRaw" in ExcludePrimaryHand && ExcludePrimaryHand.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ExcludeSecondaryHand" id={typeof ExcludeSecondaryHand === "object" && "id" in ExcludeSecondaryHand ? ExcludeSecondaryHand?.id : undefined} value={typeof ExcludeSecondaryHand === "object" && "value" in ExcludeSecondaryHand ? ExcludeSecondaryHand?.value : ExcludeSecondaryHand} /* default: false */  isRaw={typeof ExcludeSecondaryHand === "object" && "isRaw" in ExcludeSecondaryHand && ExcludeSecondaryHand.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenuItemSource]`} name="Item" id={typeof Item === "object" && "id" in Item ? Item?.id : undefined} value={typeof Item === "object" && "value" in Item ? Item?.value : Item} /* default: ID0 */  isRaw={typeof Item === "object" && "isRaw" in Item && Item.isRaw ? true : undefined} />
        </Component>
      );
    };
    