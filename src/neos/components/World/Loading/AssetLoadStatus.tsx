import { member, Member, Component } from "../../../core";
    
    export interface AssetLoadStatusInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Assets?: member<any>;
IsLoaded?: member<any>;
LoadProgress?: member<any>;
ProgressWeight?: member<any>;
    }
    
    export function AssetLoadStatus(props: AssetLoadStatusInput){
      const { id, persistentId, updateOrder, Enabled,
Assets,
IsLoaded,
LoadProgress,
ProgressWeight, } = props;
    
      return (
        <Component type="FrooxEngine.AssetLoadStatus" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.IAsset]`} name="Assets" id={typeof Assets === "object" && "id" in Assets ? Assets?.id : undefined} value={typeof Assets === "object" && "value" in Assets ? Assets?.value : Assets} /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.IAsset] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsLoaded" id={typeof IsLoaded === "object" && "id" in IsLoaded ? IsLoaded?.id : undefined} value={typeof IsLoaded === "object" && "value" in IsLoaded ? IsLoaded?.value : IsLoaded} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LoadProgress" id={typeof LoadProgress === "object" && "id" in LoadProgress ? LoadProgress?.id : undefined} value={typeof LoadProgress === "object" && "value" in LoadProgress ? LoadProgress?.value : LoadProgress} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="ProgressWeight" id={typeof ProgressWeight === "object" && "id" in ProgressWeight ? ProgressWeight?.id : undefined} value={typeof ProgressWeight === "object" && "value" in ProgressWeight ? ProgressWeight?.value : ProgressWeight} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
        </Component>
      );
    };
    