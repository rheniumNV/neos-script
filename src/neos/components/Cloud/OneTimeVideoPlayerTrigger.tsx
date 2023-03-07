import { member, Member, Component } from "../../core";
    
    export interface OneTimeVideoPlayerTriggerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AssignURL?: member<any>;
VideoTexture?: member<any>;
CloudVariablePath?: member<any>;
VersionString?: member<any>;
WaitForAllAssetsToLoad?: member<boolean>;
DelaySeconds?: member<number>;
    }
    
    export function OneTimeVideoPlayerTrigger(props: OneTimeVideoPlayerTriggerInput){
      const { id, persistentId, updateOrder, Enabled,
AssignURL,
VideoTexture,
CloudVariablePath,
VersionString,
WaitForAllAssetsToLoad,
DelaySeconds, } = props;
    
      return (
        <Component type="FrooxEngine.OneTimeVideoPlayerTrigger" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="AssignURL" id={typeof AssignURL === "object" && "id" in AssignURL ? AssignURL?.id : undefined} value={typeof AssignURL === "object" && "value" in AssignURL ? AssignURL?.value : AssignURL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VideoTextureProvider]`} name="VideoTexture" id={typeof VideoTexture === "object" && "id" in VideoTexture ? VideoTexture?.id : undefined} value={typeof VideoTexture === "object" && "value" in VideoTexture ? VideoTexture?.value : VideoTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CloudVariablePath" id={typeof CloudVariablePath === "object" && "id" in CloudVariablePath ? CloudVariablePath?.id : undefined} value={typeof CloudVariablePath === "object" && "value" in CloudVariablePath ? CloudVariablePath?.value : CloudVariablePath} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VersionString" id={typeof VersionString === "object" && "id" in VersionString ? VersionString?.id : undefined} value={typeof VersionString === "object" && "value" in VersionString ? VersionString?.value : VersionString} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WaitForAllAssetsToLoad" id={typeof WaitForAllAssetsToLoad === "object" && "id" in WaitForAllAssetsToLoad ? WaitForAllAssetsToLoad?.id : undefined} value={typeof WaitForAllAssetsToLoad === "object" && "value" in WaitForAllAssetsToLoad ? WaitForAllAssetsToLoad?.value : WaitForAllAssetsToLoad} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DelaySeconds" id={typeof DelaySeconds === "object" && "id" in DelaySeconds ? DelaySeconds?.id : undefined} value={typeof DelaySeconds === "object" && "value" in DelaySeconds ? DelaySeconds?.value : DelaySeconds} /* default: 0 */  />
        </Component>
      );
    };
    