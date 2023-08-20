import { member, Member, Component } from "../../core";
    
    export interface CameraPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CameraModeFilterMode?: member<any>;
CameraModes?: member<any>;
AllowFramingOtherUsers?: member<boolean>;
    }
    
    export function CameraPermissions(props: CameraPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
CameraModeFilterMode,
CameraModes,
AllowFramingOtherUsers, } = props;
    
      return (
        <Component type="FrooxEngine.CameraPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ListFilterMode]`} name="CameraModeFilterMode" id={typeof CameraModeFilterMode === "object" && "id" in CameraModeFilterMode ? CameraModeFilterMode?.id : undefined} value={typeof CameraModeFilterMode === "object" && "value" in CameraModeFilterMode ? CameraModeFilterMode?.value : CameraModeFilterMode} /* default: Whitelist */  isRaw={typeof CameraModeFilterMode === "object" && "isRaw" in CameraModeFilterMode && CameraModeFilterMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[FrooxEngine.CameraPositioningMode]`} name="CameraModes" id={typeof CameraModes === "object" && "id" in CameraModes ? CameraModes?.id : undefined} value={typeof CameraModes === "object" && "value" in CameraModes ? CameraModes?.value : CameraModes} /* default: FrooxEngine.SyncFieldList`1[FrooxEngine.CameraPositioningMode] */  isRaw={typeof CameraModes === "object" && "isRaw" in CameraModes && CameraModes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowFramingOtherUsers" id={typeof AllowFramingOtherUsers === "object" && "id" in AllowFramingOtherUsers ? AllowFramingOtherUsers?.id : undefined} value={typeof AllowFramingOtherUsers === "object" && "value" in AllowFramingOtherUsers ? AllowFramingOtherUsers?.value : AllowFramingOtherUsers} /* default: false */  isRaw={typeof AllowFramingOtherUsers === "object" && "isRaw" in AllowFramingOtherUsers && AllowFramingOtherUsers.isRaw ? true : undefined} />
        </Component>
      );
    };
    