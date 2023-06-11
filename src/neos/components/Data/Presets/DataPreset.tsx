import { member, Member, Component } from "../../../core";
    
    export interface DataPresetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
IsActive?: member<any>;
Entries?: member<any>;
    }
    
    export function DataPreset(props: DataPresetInput){
      const { id, persistentId, updateOrder, Enabled,
IsActive,
Entries, } = props;
    
      return (
        <Component type="FrooxEngine.DataPreset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsActive" id={typeof IsActive === "object" && "id" in IsActive ? IsActive?.id : undefined} value={typeof IsActive === "object" && "value" in IsActive ? IsActive?.value : IsActive} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof IsActive === "object" && "isRaw" in IsActive && IsActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRelayList\`1[FrooxEngine.IDataPresetEntry]`} name="Entries" id={typeof Entries === "object" && "id" in Entries ? Entries?.id : undefined} value={typeof Entries === "object" && "value" in Entries ? Entries?.value : Entries} /* default: FrooxEngine.SyncRelayList`1[FrooxEngine.IDataPresetEntry] */  isRaw={typeof Entries === "object" && "isRaw" in Entries && Entries.isRaw ? true : undefined} />
        </Component>
      );
    };
    