import { member, Member, Component } from "../../../core";
    
    export interface ContextMenuSubmenuInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ItemsRoot?: member<any>;
SearchWholeHierarchy?: member<boolean>;
DisableFlick?: member<boolean>;
SpeedOverride?: member<any>;
CounterClockwise?: member<boolean>;
KeepPosition?: member<boolean>;
Hidden?: member<boolean>;
    }
    
    export function ContextMenuSubmenu(props: ContextMenuSubmenuInput){
      const { id, persistentId, updateOrder, Enabled,
ItemsRoot,
SearchWholeHierarchy,
DisableFlick,
SpeedOverride,
CounterClockwise,
KeepPosition,
Hidden, } = props;
    
      return (
        <Component type="FrooxEngine.ContextMenuSubmenu" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ItemsRoot" id={typeof ItemsRoot === "object" && "id" in ItemsRoot ? ItemsRoot?.id : undefined} value={typeof ItemsRoot === "object" && "value" in ItemsRoot ? ItemsRoot?.value : ItemsRoot} /* default: ID0 */  isRaw={typeof ItemsRoot === "object" && "isRaw" in ItemsRoot && ItemsRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SearchWholeHierarchy" id={typeof SearchWholeHierarchy === "object" && "id" in SearchWholeHierarchy ? SearchWholeHierarchy?.id : undefined} value={typeof SearchWholeHierarchy === "object" && "value" in SearchWholeHierarchy ? SearchWholeHierarchy?.value : SearchWholeHierarchy} /* default: false */  isRaw={typeof SearchWholeHierarchy === "object" && "isRaw" in SearchWholeHierarchy && SearchWholeHierarchy.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableFlick" id={typeof DisableFlick === "object" && "id" in DisableFlick ? DisableFlick?.id : undefined} value={typeof DisableFlick === "object" && "value" in DisableFlick ? DisableFlick?.value : DisableFlick} /* default: false */  isRaw={typeof DisableFlick === "object" && "isRaw" in DisableFlick && DisableFlick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="SpeedOverride" id={typeof SpeedOverride === "object" && "id" in SpeedOverride ? SpeedOverride?.id : undefined} value={typeof SpeedOverride === "object" && "value" in SpeedOverride ? SpeedOverride?.value : SpeedOverride} /* default: <i>null</i> */  isRaw={typeof SpeedOverride === "object" && "isRaw" in SpeedOverride && SpeedOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CounterClockwise" id={typeof CounterClockwise === "object" && "id" in CounterClockwise ? CounterClockwise?.id : undefined} value={typeof CounterClockwise === "object" && "value" in CounterClockwise ? CounterClockwise?.value : CounterClockwise} /* default: false */  isRaw={typeof CounterClockwise === "object" && "isRaw" in CounterClockwise && CounterClockwise.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="KeepPosition" id={typeof KeepPosition === "object" && "id" in KeepPosition ? KeepPosition?.id : undefined} value={typeof KeepPosition === "object" && "value" in KeepPosition ? KeepPosition?.value : KeepPosition} /* default: false */  isRaw={typeof KeepPosition === "object" && "isRaw" in KeepPosition && KeepPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Hidden" id={typeof Hidden === "object" && "id" in Hidden ? Hidden?.id : undefined} value={typeof Hidden === "object" && "value" in Hidden ? Hidden?.value : Hidden} /* default: false */  isRaw={typeof Hidden === "object" && "isRaw" in Hidden && Hidden.isRaw ? true : undefined} />
        </Component>
      );
    };
    