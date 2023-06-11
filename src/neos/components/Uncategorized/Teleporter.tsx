import { member, Member, Component } from "../../core";
    
    export interface TeleporterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UserRoot?: member<any>;
ShowLerp?: member<number>;
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
_targetPoint?: member<any>;
_active?: member<boolean>;
    }
    
    export function Teleporter(props: TeleporterInput){
      const { id, persistentId, updateOrder, Enabled,
UserRoot,
ShowLerp,
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
_targetPoint,
_active, } = props;
    
      return (
        <Component type="FrooxEngine.Teleporter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UserRoot]`} name="UserRoot" id={typeof UserRoot === "object" && "id" in UserRoot ? UserRoot?.id : undefined} value={typeof UserRoot === "object" && "value" in UserRoot ? UserRoot?.value : UserRoot} /* default: ID0 */  isRaw={typeof UserRoot === "object" && "isRaw" in UserRoot && UserRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShowLerp" id={typeof ShowLerp === "object" && "id" in ShowLerp ? ShowLerp?.id : undefined} value={typeof ShowLerp === "object" && "value" in ShowLerp ? ShowLerp?.value : ShowLerp} /* default: 0 */  isRaw={typeof ShowLerp === "object" && "isRaw" in ShowLerp && ShowLerp.isRaw ? true : undefined} />
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
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_targetPoint" id={typeof _targetPoint === "object" && "id" in _targetPoint ? _targetPoint?.id : undefined} value={typeof _targetPoint === "object" && "value" in _targetPoint ? _targetPoint?.value : _targetPoint} /* default: ID0 */  isRaw={typeof _targetPoint === "object" && "isRaw" in _targetPoint && _targetPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_active" id={typeof _active === "object" && "id" in _active ? _active?.id : undefined} value={typeof _active === "object" && "value" in _active ? _active?.value : _active} /* default: false */  isRaw={typeof _active === "object" && "isRaw" in _active && _active.isRaw ? true : undefined} />
        </Component>
      );
    };
    