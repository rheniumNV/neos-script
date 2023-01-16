import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VideoExportableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Video?: member<any>;
    }
    
    export function VideoExportable(props: VideoExportableInput){
      const { id, persistentId, updateOrder, Enabled,
Video, } = props;
    
      return (
        <Component type="FrooxEngine.VideoExportable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.VideoTexture]`} name="Video" id={typeof Video === "object" && "id" in Video ? Video?.id : undefined} value={typeof Video === "object" && "value" in Video ? Video?.value : Video} /* default: ID0 */  />
        </Component>
      );
    };
    