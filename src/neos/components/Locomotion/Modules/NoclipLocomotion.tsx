import { member, Member, Component } from "../../../core";
    
    export interface NoclipLocomotionInput {
        
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
MaxSpeed?: member<number>;
MinimumFlySpeedRatio?: member<number>;
    }
    
    export function NoclipLocomotion(props: NoclipLocomotionInput){
      const { id, persistentId, updateOrder, Enabled,
Icon,
Color,
_currentController,
_lastDefaultIcon,
_lastDefaultColor,
Turn,
MaxSpeed,
MinimumFlySpeedRatio, } = props;
    
      return (
        <Component type="FrooxEngine.NoclipLocomotion" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.ITexture2D]]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LocomotionController]`} name="_currentController" id={typeof _currentController === "object" && "id" in _currentController ? _currentController?.id : undefined} value={typeof _currentController === "object" && "value" in _currentController ? _currentController?.value : _currentController} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="_lastDefaultIcon" id={typeof _lastDefaultIcon === "object" && "id" in _lastDefaultIcon ? _lastDefaultIcon?.id : undefined} value={typeof _lastDefaultIcon === "object" && "value" in _lastDefaultIcon ? _lastDefaultIcon?.value : _lastDefaultIcon} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.color]]`} name="_lastDefaultColor" id={typeof _lastDefaultColor === "object" && "id" in _lastDefaultColor ? _lastDefaultColor?.id : undefined} value={typeof _lastDefaultColor === "object" && "value" in _lastDefaultColor ? _lastDefaultColor?.value : _lastDefaultColor} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.TurnSubmodule`} name="Turn" id={typeof Turn === "object" && "id" in Turn ? Turn?.id : undefined} value={typeof Turn === "object" && "value" in Turn ? Turn?.value : Turn} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TurnSubmodule,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSpeed" id={typeof MaxSpeed === "object" && "id" in MaxSpeed ? MaxSpeed?.id : undefined} value={typeof MaxSpeed === "object" && "value" in MaxSpeed ? MaxSpeed?.value : MaxSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinimumFlySpeedRatio" id={typeof MinimumFlySpeedRatio === "object" && "id" in MinimumFlySpeedRatio ? MinimumFlySpeedRatio?.id : undefined} value={typeof MinimumFlySpeedRatio === "object" && "value" in MinimumFlySpeedRatio ? MinimumFlySpeedRatio?.value : MinimumFlySpeedRatio} /* default: 0 */  />
        </Component>
      );
    };
    