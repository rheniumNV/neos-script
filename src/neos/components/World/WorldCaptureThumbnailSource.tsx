import { member, Member, Component } from "../../core";
    
    export interface WorldCaptureThumbnailSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Overlay?: member<any>;
ExcludeUsersInCapture?: member<boolean>;
    }
    
    export function WorldCaptureThumbnailSource(props: WorldCaptureThumbnailSourceInput){
      const { id, persistentId, updateOrder, Enabled,
Overlay,
ExcludeUsersInCapture, } = props;
    
      return (
        <Component type="FrooxEngine.WorldCaptureThumbnailSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="Overlay" id={typeof Overlay === "object" && "id" in Overlay ? Overlay?.id : undefined} value={typeof Overlay === "object" && "value" in Overlay ? Overlay?.value : Overlay} /* default: ID0 */  isRaw={typeof Overlay === "object" && "isRaw" in Overlay && Overlay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ExcludeUsersInCapture" id={typeof ExcludeUsersInCapture === "object" && "id" in ExcludeUsersInCapture ? ExcludeUsersInCapture?.id : undefined} value={typeof ExcludeUsersInCapture === "object" && "value" in ExcludeUsersInCapture ? ExcludeUsersInCapture?.value : ExcludeUsersInCapture} /* default: false */  isRaw={typeof ExcludeUsersInCapture === "object" && "isRaw" in ExcludeUsersInCapture && ExcludeUsersInCapture.isRaw ? true : undefined} />
        </Component>
      );
    };
    