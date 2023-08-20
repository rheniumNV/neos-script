import { member, Member, Component } from "../../core";
    
    export interface ReflectionProbeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ProbeType?: member<any>;
Importance?: member<number>;
Intensity?: member<number>;
BlendDistance?: member<number>;
BoxSize?: member<[number, number, number]>;
BoxProjection?: member<boolean>;
BakedCubemap?: member<any>;
TimeSlicing?: member<any>;
Resolution?: member<number>;
HDR?: member<boolean>;
ShadowDistance?: member<number>;
ClearFlags?: member<any>;
BackgroundColor?: member<[number, number, number, number]>;
NearClip?: member<number>;
FarClip?: member<number>;
ShowDebugVisuals?: member<boolean>;
_debugVisual?: member<any>;
    }
    
    export function ReflectionProbe(props: ReflectionProbeInput){
      const { id, persistentId, updateOrder, Enabled,
ProbeType,
Importance,
Intensity,
BlendDistance,
BoxSize,
BoxProjection,
BakedCubemap,
TimeSlicing,
Resolution,
HDR,
ShadowDistance,
ClearFlags,
BackgroundColor,
NearClip,
FarClip,
ShowDebugVisuals,
_debugVisual, } = props;
    
      return (
        <Component type="FrooxEngine.ReflectionProbe" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ReflectionProbe+Type]`} name="ProbeType" id={typeof ProbeType === "object" && "id" in ProbeType ? ProbeType?.id : undefined} value={typeof ProbeType === "object" && "value" in ProbeType ? ProbeType?.value : ProbeType} /* default: Baked */  isRaw={typeof ProbeType === "object" && "isRaw" in ProbeType && ProbeType.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Importance" id={typeof Importance === "object" && "id" in Importance ? Importance?.id : undefined} value={typeof Importance === "object" && "value" in Importance ? Importance?.value : Importance} /* default: 0 */  isRaw={typeof Importance === "object" && "isRaw" in Importance && Importance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Intensity" id={typeof Intensity === "object" && "id" in Intensity ? Intensity?.id : undefined} value={typeof Intensity === "object" && "value" in Intensity ? Intensity?.value : Intensity} /* default: 0 */  isRaw={typeof Intensity === "object" && "isRaw" in Intensity && Intensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlendDistance" id={typeof BlendDistance === "object" && "id" in BlendDistance ? BlendDistance?.id : undefined} value={typeof BlendDistance === "object" && "value" in BlendDistance ? BlendDistance?.value : BlendDistance} /* default: 0 */  isRaw={typeof BlendDistance === "object" && "isRaw" in BlendDistance && BlendDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="BoxSize" id={typeof BoxSize === "object" && "id" in BoxSize ? BoxSize?.id : undefined} value={typeof BoxSize === "object" && "value" in BoxSize ? BoxSize?.value : BoxSize} /* default: [0; 0; 0] */  isRaw={typeof BoxSize === "object" && "isRaw" in BoxSize && BoxSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BoxProjection" id={typeof BoxProjection === "object" && "id" in BoxProjection ? BoxProjection?.id : undefined} value={typeof BoxProjection === "object" && "value" in BoxProjection ? BoxProjection?.value : BoxProjection} /* default: false */  isRaw={typeof BoxProjection === "object" && "isRaw" in BoxProjection && BoxProjection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Cubemap]`} name="BakedCubemap" id={typeof BakedCubemap === "object" && "id" in BakedCubemap ? BakedCubemap?.id : undefined} value={typeof BakedCubemap === "object" && "value" in BakedCubemap ? BakedCubemap?.value : BakedCubemap} /* default: ID0 */  isRaw={typeof BakedCubemap === "object" && "isRaw" in BakedCubemap && BakedCubemap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ReflectionProbe+TimeSlicingMode]`} name="TimeSlicing" id={typeof TimeSlicing === "object" && "id" in TimeSlicing ? TimeSlicing?.id : undefined} value={typeof TimeSlicing === "object" && "value" in TimeSlicing ? TimeSlicing?.value : TimeSlicing} /* default: AllFacesAtOnce */  isRaw={typeof TimeSlicing === "object" && "isRaw" in TimeSlicing && TimeSlicing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Resolution" id={typeof Resolution === "object" && "id" in Resolution ? Resolution?.id : undefined} value={typeof Resolution === "object" && "value" in Resolution ? Resolution?.value : Resolution} /* default: 0 */  isRaw={typeof Resolution === "object" && "isRaw" in Resolution && Resolution.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HDR" id={typeof HDR === "object" && "id" in HDR ? HDR?.id : undefined} value={typeof HDR === "object" && "value" in HDR ? HDR?.value : HDR} /* default: false */  isRaw={typeof HDR === "object" && "isRaw" in HDR && HDR.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowDistance" id={typeof ShadowDistance === "object" && "id" in ShadowDistance ? ShadowDistance?.id : undefined} value={typeof ShadowDistance === "object" && "value" in ShadowDistance ? ShadowDistance?.value : ShadowDistance} /* default: 0 */  isRaw={typeof ShadowDistance === "object" && "isRaw" in ShadowDistance && ShadowDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ReflectionProbe+Clear]`} name="ClearFlags" id={typeof ClearFlags === "object" && "id" in ClearFlags ? ClearFlags?.id : undefined} value={typeof ClearFlags === "object" && "value" in ClearFlags ? ClearFlags?.value : ClearFlags} /* default: Skybox */  isRaw={typeof ClearFlags === "object" && "isRaw" in ClearFlags && ClearFlags.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BackgroundColor" id={typeof BackgroundColor === "object" && "id" in BackgroundColor ? BackgroundColor?.id : undefined} value={typeof BackgroundColor === "object" && "value" in BackgroundColor ? BackgroundColor?.value : BackgroundColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BackgroundColor === "object" && "isRaw" in BackgroundColor && BackgroundColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NearClip" id={typeof NearClip === "object" && "id" in NearClip ? NearClip?.id : undefined} value={typeof NearClip === "object" && "value" in NearClip ? NearClip?.value : NearClip} /* default: 0 */  isRaw={typeof NearClip === "object" && "isRaw" in NearClip && NearClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FarClip" id={typeof FarClip === "object" && "id" in FarClip ? FarClip?.id : undefined} value={typeof FarClip === "object" && "value" in FarClip ? FarClip?.value : FarClip} /* default: 0 */  isRaw={typeof FarClip === "object" && "isRaw" in FarClip && FarClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowDebugVisuals-ID" id={typeof ShowDebugVisuals === "object" && "id" in ShowDebugVisuals ? ShowDebugVisuals?.id : undefined} value={typeof ShowDebugVisuals === "object" && "value" in ShowDebugVisuals ? ShowDebugVisuals?.value : ShowDebugVisuals} /* default: false */ readOnly isRaw={typeof ShowDebugVisuals === "object" && "isRaw" in ShowDebugVisuals && ShowDebugVisuals.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.Slot]`} name="_debugVisual-ID" id={typeof _debugVisual === "object" && "id" in _debugVisual ? _debugVisual?.id : undefined} value={typeof _debugVisual === "object" && "value" in _debugVisual ? _debugVisual?.value : _debugVisual} /* default: ID0 */ readOnly isRaw={typeof _debugVisual === "object" && "isRaw" in _debugVisual && _debugVisual.isRaw ? true : undefined} />
        </Component>
      );
    };
    