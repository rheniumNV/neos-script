import { member, Member, Component } from "../../core";
    
    export interface SessionCaptureThumbnailSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Overlay?: member<any>;
    }
    
    export function SessionCaptureThumbnailSource(props: SessionCaptureThumbnailSourceInput){
      const { id, persistentId, updateOrder, Enabled,
Overlay, } = props;
    
      return (
        <Component type="FrooxEngine.SessionCaptureThumbnailSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="Overlay" id={typeof Overlay === "object" && "id" in Overlay ? Overlay?.id : undefined} value={typeof Overlay === "object" && "value" in Overlay ? Overlay?.value : Overlay} /* default: ID0 */  />
        </Component>
      );
    };
    