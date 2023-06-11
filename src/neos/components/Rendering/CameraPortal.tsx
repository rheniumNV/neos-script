import { member, Member, Component } from "../../core";
    
    export interface CameraPortalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Renderer?: member<any>;
ReflectionTexture?: member<any>;
PlaneOffset?: member<number>;
PlaneNormal?: member<[number, number, number]>;
RenderMode?: member<any>;
PortalTarget?: member<any>;
OverrideClear?: member<any>;
ClearColor?: member<[number, number, number, number]>;
DisablePerPixelLights?: member<boolean>;
DisableShadows?: member<boolean>;
OverrideFarClip?: member<any>;
OverrideNearClip?: member<any>;
    }
    
    export function CameraPortal(props: CameraPortalInput){
      const { id, persistentId, updateOrder, Enabled,
Renderer,
ReflectionTexture,
PlaneOffset,
PlaneNormal,
RenderMode,
PortalTarget,
OverrideClear,
ClearColor,
DisablePerPixelLights,
DisableShadows,
OverrideFarClip,
OverrideNearClip, } = props;
    
      return (
        <Component type="FrooxEngine.CameraPortal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.MeshRenderer]`} name="Renderer" id={typeof Renderer === "object" && "id" in Renderer ? Renderer?.id : undefined} value={typeof Renderer === "object" && "value" in Renderer ? Renderer?.value : Renderer} /* default: ID0 */  isRaw={typeof Renderer === "object" && "isRaw" in Renderer && Renderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.RenderTexture]`} name="ReflectionTexture" id={typeof ReflectionTexture === "object" && "id" in ReflectionTexture ? ReflectionTexture?.id : undefined} value={typeof ReflectionTexture === "object" && "value" in ReflectionTexture ? ReflectionTexture?.value : ReflectionTexture} /* default: ID0 */  isRaw={typeof ReflectionTexture === "object" && "isRaw" in ReflectionTexture && ReflectionTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PlaneOffset" id={typeof PlaneOffset === "object" && "id" in PlaneOffset ? PlaneOffset?.id : undefined} value={typeof PlaneOffset === "object" && "value" in PlaneOffset ? PlaneOffset?.value : PlaneOffset} /* default: 0 */  isRaw={typeof PlaneOffset === "object" && "isRaw" in PlaneOffset && PlaneOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="PlaneNormal" id={typeof PlaneNormal === "object" && "id" in PlaneNormal ? PlaneNormal?.id : undefined} value={typeof PlaneNormal === "object" && "value" in PlaneNormal ? PlaneNormal?.value : PlaneNormal} /* default: [0; 0; 0] */  isRaw={typeof PlaneNormal === "object" && "isRaw" in PlaneNormal && PlaneNormal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CameraPortal+Mode]`} name="RenderMode" id={typeof RenderMode === "object" && "id" in RenderMode ? RenderMode?.id : undefined} value={typeof RenderMode === "object" && "value" in RenderMode ? RenderMode?.value : RenderMode} /* default: Mirror */  isRaw={typeof RenderMode === "object" && "isRaw" in RenderMode && RenderMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PortalTarget" id={typeof PortalTarget === "object" && "id" in PortalTarget ? PortalTarget?.id : undefined} value={typeof PortalTarget === "object" && "value" in PortalTarget ? PortalTarget?.value : PortalTarget} /* default: ID0 */  isRaw={typeof PortalTarget === "object" && "isRaw" in PortalTarget && PortalTarget.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[FrooxEngine.CameraClearMode]]`} name="OverrideClear" id={typeof OverrideClear === "object" && "id" in OverrideClear ? OverrideClear?.id : undefined} value={typeof OverrideClear === "object" && "value" in OverrideClear ? OverrideClear?.value : OverrideClear} /* default: <i>null</i> */  isRaw={typeof OverrideClear === "object" && "isRaw" in OverrideClear && OverrideClear.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ClearColor" id={typeof ClearColor === "object" && "id" in ClearColor ? ClearColor?.id : undefined} value={typeof ClearColor === "object" && "value" in ClearColor ? ClearColor?.value : ClearColor} /* default: [0; 0; 0; 0] */  isRaw={typeof ClearColor === "object" && "isRaw" in ClearColor && ClearColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisablePerPixelLights" id={typeof DisablePerPixelLights === "object" && "id" in DisablePerPixelLights ? DisablePerPixelLights?.id : undefined} value={typeof DisablePerPixelLights === "object" && "value" in DisablePerPixelLights ? DisablePerPixelLights?.value : DisablePerPixelLights} /* default: false */  isRaw={typeof DisablePerPixelLights === "object" && "isRaw" in DisablePerPixelLights && DisablePerPixelLights.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableShadows" id={typeof DisableShadows === "object" && "id" in DisableShadows ? DisableShadows?.id : undefined} value={typeof DisableShadows === "object" && "value" in DisableShadows ? DisableShadows?.value : DisableShadows} /* default: false */  isRaw={typeof DisableShadows === "object" && "isRaw" in DisableShadows && DisableShadows.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="OverrideFarClip" id={typeof OverrideFarClip === "object" && "id" in OverrideFarClip ? OverrideFarClip?.id : undefined} value={typeof OverrideFarClip === "object" && "value" in OverrideFarClip ? OverrideFarClip?.value : OverrideFarClip} /* default: <i>null</i> */  isRaw={typeof OverrideFarClip === "object" && "isRaw" in OverrideFarClip && OverrideFarClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="OverrideNearClip" id={typeof OverrideNearClip === "object" && "id" in OverrideNearClip ? OverrideNearClip?.id : undefined} value={typeof OverrideNearClip === "object" && "value" in OverrideNearClip ? OverrideNearClip?.value : OverrideNearClip} /* default: <i>null</i> */  isRaw={typeof OverrideNearClip === "object" && "isRaw" in OverrideNearClip && OverrideNearClip.isRaw ? true : undefined} />
        </Component>
      );
    };
    