import { member, Member, Component } from "../../../core";
    
    export interface GrabWorldLocomotionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Icon?: member<any>;
Color?: member<[number, number, number, number]>;
_currentController?: member<any>;
_lastDefaultIcon?: member<any>;
_lastDefaultColor?: member<any>;
Turn?: member<any>;
ActivationThreshold?: member<number>;
DeactivationThreshold?: member<number>;
_visual?: member<any>;
_crossMesh?: member<any>;
_material?: member<any>;
    }
    
    export function GrabWorldLocomotion(props: GrabWorldLocomotionInput){
      const { id, persistentId, updateOrder, Enabled,
Icon,
Color,
_currentController,
_lastDefaultIcon,
_lastDefaultColor,
Turn,
ActivationThreshold,
DeactivationThreshold,
_visual,
_crossMesh,
_material, } = props;
    
      return (
        <Component type="FrooxEngine.GrabWorldLocomotion" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.ITexture2D]]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: ID0 */  isRaw={typeof Icon === "object" && "isRaw" in Icon && Icon.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LocomotionController]`} name="_currentController" id={typeof _currentController === "object" && "id" in _currentController ? _currentController?.id : undefined} value={typeof _currentController === "object" && "value" in _currentController ? _currentController?.value : _currentController} /* default: ID0 */  isRaw={typeof _currentController === "object" && "isRaw" in _currentController && _currentController.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="_lastDefaultIcon" id={typeof _lastDefaultIcon === "object" && "id" in _lastDefaultIcon ? _lastDefaultIcon?.id : undefined} value={typeof _lastDefaultIcon === "object" && "value" in _lastDefaultIcon ? _lastDefaultIcon?.value : _lastDefaultIcon} /* default: <i>null</i> */  isRaw={typeof _lastDefaultIcon === "object" && "isRaw" in _lastDefaultIcon && _lastDefaultIcon.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.color]]`} name="_lastDefaultColor" id={typeof _lastDefaultColor === "object" && "id" in _lastDefaultColor ? _lastDefaultColor?.id : undefined} value={typeof _lastDefaultColor === "object" && "value" in _lastDefaultColor ? _lastDefaultColor?.value : _lastDefaultColor} /* default: <i>null</i> */  isRaw={typeof _lastDefaultColor === "object" && "isRaw" in _lastDefaultColor && _lastDefaultColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TurnSubmodule`} name="Turn" id={typeof Turn === "object" && "id" in Turn ? Turn?.id : undefined} value={typeof Turn === "object" && "value" in Turn ? Turn?.value : Turn} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TurnSubmodule,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Turn === "object" && "isRaw" in Turn && Turn.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ActivationThreshold" id={typeof ActivationThreshold === "object" && "id" in ActivationThreshold ? ActivationThreshold?.id : undefined} value={typeof ActivationThreshold === "object" && "value" in ActivationThreshold ? ActivationThreshold?.value : ActivationThreshold} /* default: 0 */  isRaw={typeof ActivationThreshold === "object" && "isRaw" in ActivationThreshold && ActivationThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DeactivationThreshold" id={typeof DeactivationThreshold === "object" && "id" in DeactivationThreshold ? DeactivationThreshold?.id : undefined} value={typeof DeactivationThreshold === "object" && "value" in DeactivationThreshold ? DeactivationThreshold?.value : DeactivationThreshold} /* default: 0 */  isRaw={typeof DeactivationThreshold === "object" && "isRaw" in DeactivationThreshold && DeactivationThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visual" id={typeof _visual === "object" && "id" in _visual ? _visual?.id : undefined} value={typeof _visual === "object" && "value" in _visual ? _visual?.value : _visual} /* default: ID0 */  isRaw={typeof _visual === "object" && "isRaw" in _visual && _visual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CrossMesh]`} name="_crossMesh" id={typeof _crossMesh === "object" && "id" in _crossMesh ? _crossMesh?.id : undefined} value={typeof _crossMesh === "object" && "value" in _crossMesh ? _crossMesh?.value : _crossMesh} /* default: ID0 */  isRaw={typeof _crossMesh === "object" && "isRaw" in _crossMesh && _crossMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
        </Component>
      );
    };
    