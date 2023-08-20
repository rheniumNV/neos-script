import { member, Member, Component } from "../../../core";
    
    export interface TeleportLocomotionInput {
        
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
BackstepDistance?: member<number>;
ActivationTime?: member<number>;
HeightInputMax?: member<number>;
HeightInputMin?: member<number>;
InitialForceMin?: member<number>;
InitialForceMax?: member<number>;
RangeExp?: member<number>;
StepUnit?: member<number>;
Drag?: member<number>;
MaxSmallObjectSize?: member<number>;
WallDistance?: member<number>;
_pathMesh?: member<any>;
_pathMaterial?: member<any>;
_pathRenderer?: member<any>;
_pathVisual?: member<any>;
_targetPointVisual?: member<any>;
_characterController?: member<any>;
_teleporter?: member<any>;
    }
    
    export function TeleportLocomotion(props: TeleportLocomotionInput){
      const { id, persistentId, updateOrder, Enabled,
Icon,
Color,
_currentController,
_lastDefaultIcon,
_lastDefaultColor,
Turn,
BackstepDistance,
ActivationTime,
HeightInputMax,
HeightInputMin,
InitialForceMin,
InitialForceMax,
RangeExp,
StepUnit,
Drag,
MaxSmallObjectSize,
WallDistance,
_pathMesh,
_pathMaterial,
_pathRenderer,
_pathVisual,
_targetPointVisual,
_characterController,
_teleporter, } = props;
    
      return (
        <Component type="FrooxEngine.TeleportLocomotion" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.ITexture2D]]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: ID0 */  isRaw={typeof Icon === "object" && "isRaw" in Icon && Icon.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LocomotionController]`} name="_currentController" id={typeof _currentController === "object" && "id" in _currentController ? _currentController?.id : undefined} value={typeof _currentController === "object" && "value" in _currentController ? _currentController?.value : _currentController} /* default: ID0 */  isRaw={typeof _currentController === "object" && "isRaw" in _currentController && _currentController.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="_lastDefaultIcon" id={typeof _lastDefaultIcon === "object" && "id" in _lastDefaultIcon ? _lastDefaultIcon?.id : undefined} value={typeof _lastDefaultIcon === "object" && "value" in _lastDefaultIcon ? _lastDefaultIcon?.value : _lastDefaultIcon} /* default: <i>null</i> */  isRaw={typeof _lastDefaultIcon === "object" && "isRaw" in _lastDefaultIcon && _lastDefaultIcon.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.color]]`} name="_lastDefaultColor" id={typeof _lastDefaultColor === "object" && "id" in _lastDefaultColor ? _lastDefaultColor?.id : undefined} value={typeof _lastDefaultColor === "object" && "value" in _lastDefaultColor ? _lastDefaultColor?.value : _lastDefaultColor} /* default: <i>null</i> */  isRaw={typeof _lastDefaultColor === "object" && "isRaw" in _lastDefaultColor && _lastDefaultColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TurnSubmodule`} name="Turn" id={typeof Turn === "object" && "id" in Turn ? Turn?.id : undefined} value={typeof Turn === "object" && "value" in Turn ? Turn?.value : Turn} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TurnSubmodule,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Turn === "object" && "isRaw" in Turn && Turn.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BackstepDistance" id={typeof BackstepDistance === "object" && "id" in BackstepDistance ? BackstepDistance?.id : undefined} value={typeof BackstepDistance === "object" && "value" in BackstepDistance ? BackstepDistance?.value : BackstepDistance} /* default: 0 */  isRaw={typeof BackstepDistance === "object" && "isRaw" in BackstepDistance && BackstepDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ActivationTime" id={typeof ActivationTime === "object" && "id" in ActivationTime ? ActivationTime?.id : undefined} value={typeof ActivationTime === "object" && "value" in ActivationTime ? ActivationTime?.value : ActivationTime} /* default: 0 */  isRaw={typeof ActivationTime === "object" && "isRaw" in ActivationTime && ActivationTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightInputMax" id={typeof HeightInputMax === "object" && "id" in HeightInputMax ? HeightInputMax?.id : undefined} value={typeof HeightInputMax === "object" && "value" in HeightInputMax ? HeightInputMax?.value : HeightInputMax} /* default: 0 */  isRaw={typeof HeightInputMax === "object" && "isRaw" in HeightInputMax && HeightInputMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightInputMin" id={typeof HeightInputMin === "object" && "id" in HeightInputMin ? HeightInputMin?.id : undefined} value={typeof HeightInputMin === "object" && "value" in HeightInputMin ? HeightInputMin?.value : HeightInputMin} /* default: 0 */  isRaw={typeof HeightInputMin === "object" && "isRaw" in HeightInputMin && HeightInputMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InitialForceMin" id={typeof InitialForceMin === "object" && "id" in InitialForceMin ? InitialForceMin?.id : undefined} value={typeof InitialForceMin === "object" && "value" in InitialForceMin ? InitialForceMin?.value : InitialForceMin} /* default: 0 */  isRaw={typeof InitialForceMin === "object" && "isRaw" in InitialForceMin && InitialForceMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InitialForceMax" id={typeof InitialForceMax === "object" && "id" in InitialForceMax ? InitialForceMax?.id : undefined} value={typeof InitialForceMax === "object" && "value" in InitialForceMax ? InitialForceMax?.value : InitialForceMax} /* default: 0 */  isRaw={typeof InitialForceMax === "object" && "isRaw" in InitialForceMax && InitialForceMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RangeExp" id={typeof RangeExp === "object" && "id" in RangeExp ? RangeExp?.id : undefined} value={typeof RangeExp === "object" && "value" in RangeExp ? RangeExp?.value : RangeExp} /* default: 0 */  isRaw={typeof RangeExp === "object" && "isRaw" in RangeExp && RangeExp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StepUnit" id={typeof StepUnit === "object" && "id" in StepUnit ? StepUnit?.id : undefined} value={typeof StepUnit === "object" && "value" in StepUnit ? StepUnit?.value : StepUnit} /* default: 0 */  isRaw={typeof StepUnit === "object" && "isRaw" in StepUnit && StepUnit.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Drag" id={typeof Drag === "object" && "id" in Drag ? Drag?.id : undefined} value={typeof Drag === "object" && "value" in Drag ? Drag?.value : Drag} /* default: 0 */  isRaw={typeof Drag === "object" && "isRaw" in Drag && Drag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSmallObjectSize" id={typeof MaxSmallObjectSize === "object" && "id" in MaxSmallObjectSize ? MaxSmallObjectSize?.id : undefined} value={typeof MaxSmallObjectSize === "object" && "value" in MaxSmallObjectSize ? MaxSmallObjectSize?.value : MaxSmallObjectSize} /* default: 0 */  isRaw={typeof MaxSmallObjectSize === "object" && "isRaw" in MaxSmallObjectSize && MaxSmallObjectSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="WallDistance" id={typeof WallDistance === "object" && "id" in WallDistance ? WallDistance?.id : undefined} value={typeof WallDistance === "object" && "value" in WallDistance ? WallDistance?.value : WallDistance} /* default: 0 */  isRaw={typeof WallDistance === "object" && "isRaw" in WallDistance && WallDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BallisticPathMesh]`} name="_pathMesh" id={typeof _pathMesh === "object" && "id" in _pathMesh ? _pathMesh?.id : undefined} value={typeof _pathMesh === "object" && "value" in _pathMesh ? _pathMesh?.value : _pathMesh} /* default: ID0 */  isRaw={typeof _pathMesh === "object" && "isRaw" in _pathMesh && _pathMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_pathMaterial" id={typeof _pathMaterial === "object" && "id" in _pathMaterial ? _pathMaterial?.id : undefined} value={typeof _pathMaterial === "object" && "value" in _pathMaterial ? _pathMaterial?.value : _pathMaterial} /* default: ID0 */  isRaw={typeof _pathMaterial === "object" && "isRaw" in _pathMaterial && _pathMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="_pathRenderer" id={typeof _pathRenderer === "object" && "id" in _pathRenderer ? _pathRenderer?.id : undefined} value={typeof _pathRenderer === "object" && "value" in _pathRenderer ? _pathRenderer?.value : _pathRenderer} /* default: ID0 */  isRaw={typeof _pathRenderer === "object" && "isRaw" in _pathRenderer && _pathRenderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_pathVisual" id={typeof _pathVisual === "object" && "id" in _pathVisual ? _pathVisual?.id : undefined} value={typeof _pathVisual === "object" && "value" in _pathVisual ? _pathVisual?.value : _pathVisual} /* default: ID0 */  isRaw={typeof _pathVisual === "object" && "isRaw" in _pathVisual && _pathVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_targetPointVisual" id={typeof _targetPointVisual === "object" && "id" in _targetPointVisual ? _targetPointVisual?.id : undefined} value={typeof _targetPointVisual === "object" && "value" in _targetPointVisual ? _targetPointVisual?.value : _targetPointVisual} /* default: ID0 */  isRaw={typeof _targetPointVisual === "object" && "isRaw" in _targetPointVisual && _targetPointVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CharacterController]`} name="_characterController" id={typeof _characterController === "object" && "id" in _characterController ? _characterController?.id : undefined} value={typeof _characterController === "object" && "value" in _characterController ? _characterController?.value : _characterController} /* default: ID0 */  isRaw={typeof _characterController === "object" && "isRaw" in _characterController && _characterController.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Teleporter]`} name="_teleporter" id={typeof _teleporter === "object" && "id" in _teleporter ? _teleporter?.id : undefined} value={typeof _teleporter === "object" && "value" in _teleporter ? _teleporter?.value : _teleporter} /* default: ID0 */  isRaw={typeof _teleporter === "object" && "isRaw" in _teleporter && _teleporter.isRaw ? true : undefined} />
        </Component>
      );
    };
    