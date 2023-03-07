import { member, Member, Component } from "../../../core";
    
    export interface RecordSyncStatusInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RecordQueueCount?: member<any>;
AssetVariantQueueCount?: member<any>;
CurrentTaskProgress?: member<any>;
LastError?: member<any>;
StatusMessage?: member<any>;
FullySyncedColor?: member<[number, number, number, number]>;
ErrorColor?: member<[number, number, number, number]>;
SyncingRecordsColor?: member<[number, number, number, number]>;
UploadingAssetVariantsColor?: member<[number, number, number, number]>;
    }
    
    export function RecordSyncStatus(props: RecordSyncStatusInput){
      const { id, persistentId, updateOrder, Enabled,
RecordQueueCount,
AssetVariantQueueCount,
CurrentTaskProgress,
LastError,
StatusMessage,
FullySyncedColor,
ErrorColor,
SyncingRecordsColor,
UploadingAssetVariantsColor, } = props;
    
      return (
        <Component type="FrooxEngine.RecordSyncStatus" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="RecordQueueCount" id={typeof RecordQueueCount === "object" && "id" in RecordQueueCount ? RecordQueueCount?.id : undefined} value={typeof RecordQueueCount === "object" && "value" in RecordQueueCount ? RecordQueueCount?.value : RecordQueueCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="AssetVariantQueueCount" id={typeof AssetVariantQueueCount === "object" && "id" in AssetVariantQueueCount ? AssetVariantQueueCount?.id : undefined} value={typeof AssetVariantQueueCount === "object" && "value" in AssetVariantQueueCount ? AssetVariantQueueCount?.value : AssetVariantQueueCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CurrentTaskProgress" id={typeof CurrentTaskProgress === "object" && "id" in CurrentTaskProgress ? CurrentTaskProgress?.id : undefined} value={typeof CurrentTaskProgress === "object" && "value" in CurrentTaskProgress ? CurrentTaskProgress?.value : CurrentTaskProgress} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="LastError" id={typeof LastError === "object" && "id" in LastError ? LastError?.id : undefined} value={typeof LastError === "object" && "value" in LastError ? LastError?.value : LastError} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="StatusMessage" id={typeof StatusMessage === "object" && "id" in StatusMessage ? StatusMessage?.id : undefined} value={typeof StatusMessage === "object" && "value" in StatusMessage ? StatusMessage?.value : StatusMessage} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FullySyncedColor" id={typeof FullySyncedColor === "object" && "id" in FullySyncedColor ? FullySyncedColor?.id : undefined} value={typeof FullySyncedColor === "object" && "value" in FullySyncedColor ? FullySyncedColor?.value : FullySyncedColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ErrorColor" id={typeof ErrorColor === "object" && "id" in ErrorColor ? ErrorColor?.id : undefined} value={typeof ErrorColor === "object" && "value" in ErrorColor ? ErrorColor?.value : ErrorColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SyncingRecordsColor" id={typeof SyncingRecordsColor === "object" && "id" in SyncingRecordsColor ? SyncingRecordsColor?.id : undefined} value={typeof SyncingRecordsColor === "object" && "value" in SyncingRecordsColor ? SyncingRecordsColor?.value : SyncingRecordsColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="UploadingAssetVariantsColor" id={typeof UploadingAssetVariantsColor === "object" && "id" in UploadingAssetVariantsColor ? UploadingAssetVariantsColor?.id : undefined} value={typeof UploadingAssetVariantsColor === "object" && "value" in UploadingAssetVariantsColor ? UploadingAssetVariantsColor?.value : UploadingAssetVariantsColor} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    