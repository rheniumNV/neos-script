import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CameraPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CameraModeFilterMode?: member<any>;
AllowFramingOtherUsers?: member<boolean>;
    }
    
    export function CameraPermissions(props: CameraPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
CameraModeFilterMode,
AllowFramingOtherUsers, } = props;
    
      return (
        <Component type="FrooxEngine.CameraPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ListFilterMode]`} name="CameraModeFilterMode" id={typeof CameraModeFilterMode === "object" && "id" in CameraModeFilterMode ? CameraModeFilterMode?.id : undefined} value={typeof CameraModeFilterMode === "object" && "value" in CameraModeFilterMode ? CameraModeFilterMode?.value : CameraModeFilterMode} /* default: Whitelist */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowFramingOtherUsers" id={typeof AllowFramingOtherUsers === "object" && "id" in AllowFramingOtherUsers ? AllowFramingOtherUsers?.id : undefined} value={typeof AllowFramingOtherUsers === "object" && "value" in AllowFramingOtherUsers ? AllowFramingOtherUsers?.value : AllowFramingOtherUsers} /* default: false */  />
        </Component>
      );
    };
    