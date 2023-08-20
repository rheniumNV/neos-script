import { member, Member, Component } from "../../../core";
    
    export interface PointClusterMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Distribution?: member<any>;
Colors?: member<any>;
TextureColorSource?: member<any>;
HeightScaleSource?: member<any>;
TextureIntensityClip?: member<number>;
TextureAlphaClip?: member<number>;
MaxClipAttempts?: member<number>;
HeightmapExp?: member<number>;
Seed?: member<number>;
Points?: member<number>;
Atlas?: member<any>;
Scale?: member<[number, number, number]>;
RangeExp?: member<number>;
JitterRange?: member<[number, number, number]>;
Color0?: member<[number, number, number, number]>;
Color1?: member<[number, number, number, number]>;
ColorLerpScale?: member<number>;
ColorGap?: member<number>;
SimplexNoiseScale?: member<[number, number, number]>;
SimplexNoiseOffset?: member<[number, number, number]>;
UniformSize?: member<boolean>;
MinSize?: member<[number, number]>;
MaxSize?: member<[number, number]>;
MinRotation?: member<number>;
MaxRotation?: member<number>;
    }
    
    export function PointClusterMesh(props: PointClusterMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Distribution,
Colors,
TextureColorSource,
HeightScaleSource,
TextureIntensityClip,
TextureAlphaClip,
MaxClipAttempts,
HeightmapExp,
Seed,
Points,
Atlas,
Scale,
RangeExp,
JitterRange,
Color0,
Color1,
ColorLerpScale,
ColorGap,
SimplexNoiseScale,
SimplexNoiseOffset,
UniformSize,
MinSize,
MaxSize,
MinRotation,
MaxRotation, } = props;
    
      return (
        <Component type="FrooxEngine.PointClusterMesh" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PointClusterMesh+DistributionType]`} name="Distribution" id={typeof Distribution === "object" && "id" in Distribution ? Distribution?.id : undefined} value={typeof Distribution === "object" && "value" in Distribution ? Distribution?.value : Distribution} /* default: Cube */  isRaw={typeof Distribution === "object" && "isRaw" in Distribution && Distribution.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PointClusterMesh+ColorMode]`} name="Colors" id={typeof Colors === "object" && "id" in Colors ? Colors?.id : undefined} value={typeof Colors === "object" && "value" in Colors ? Colors?.value : Colors} /* default: SolidColor */  isRaw={typeof Colors === "object" && "isRaw" in Colors && Colors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture]`} name="TextureColorSource" id={typeof TextureColorSource === "object" && "id" in TextureColorSource ? TextureColorSource?.id : undefined} value={typeof TextureColorSource === "object" && "value" in TextureColorSource ? TextureColorSource?.value : TextureColorSource} /* default: ID0 */  isRaw={typeof TextureColorSource === "object" && "isRaw" in TextureColorSource && TextureColorSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="HeightScaleSource" id={typeof HeightScaleSource === "object" && "id" in HeightScaleSource ? HeightScaleSource?.id : undefined} value={typeof HeightScaleSource === "object" && "value" in HeightScaleSource ? HeightScaleSource?.value : HeightScaleSource} /* default: ID0 */  isRaw={typeof HeightScaleSource === "object" && "isRaw" in HeightScaleSource && HeightScaleSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TextureIntensityClip" id={typeof TextureIntensityClip === "object" && "id" in TextureIntensityClip ? TextureIntensityClip?.id : undefined} value={typeof TextureIntensityClip === "object" && "value" in TextureIntensityClip ? TextureIntensityClip?.value : TextureIntensityClip} /* default: 0 */  isRaw={typeof TextureIntensityClip === "object" && "isRaw" in TextureIntensityClip && TextureIntensityClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TextureAlphaClip" id={typeof TextureAlphaClip === "object" && "id" in TextureAlphaClip ? TextureAlphaClip?.id : undefined} value={typeof TextureAlphaClip === "object" && "value" in TextureAlphaClip ? TextureAlphaClip?.value : TextureAlphaClip} /* default: 0 */  isRaw={typeof TextureAlphaClip === "object" && "isRaw" in TextureAlphaClip && TextureAlphaClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxClipAttempts" id={typeof MaxClipAttempts === "object" && "id" in MaxClipAttempts ? MaxClipAttempts?.id : undefined} value={typeof MaxClipAttempts === "object" && "value" in MaxClipAttempts ? MaxClipAttempts?.value : MaxClipAttempts} /* default: 0 */  isRaw={typeof MaxClipAttempts === "object" && "isRaw" in MaxClipAttempts && MaxClipAttempts.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightmapExp" id={typeof HeightmapExp === "object" && "id" in HeightmapExp ? HeightmapExp?.id : undefined} value={typeof HeightmapExp === "object" && "value" in HeightmapExp ? HeightmapExp?.value : HeightmapExp} /* default: 0 */  isRaw={typeof HeightmapExp === "object" && "isRaw" in HeightmapExp && HeightmapExp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Seed" id={typeof Seed === "object" && "id" in Seed ? Seed?.id : undefined} value={typeof Seed === "object" && "value" in Seed ? Seed?.value : Seed} /* default: 0 */  isRaw={typeof Seed === "object" && "isRaw" in Seed && Seed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: 0 */  isRaw={typeof Points === "object" && "isRaw" in Points && Points.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.AtlasInfo]`} name="Atlas" id={typeof Atlas === "object" && "id" in Atlas ? Atlas?.id : undefined} value={typeof Atlas === "object" && "value" in Atlas ? Atlas?.value : Atlas} /* default: ID0 */  isRaw={typeof Atlas === "object" && "isRaw" in Atlas && Atlas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: [0; 0; 0] */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RangeExp" id={typeof RangeExp === "object" && "id" in RangeExp ? RangeExp?.id : undefined} value={typeof RangeExp === "object" && "value" in RangeExp ? RangeExp?.value : RangeExp} /* default: 0 */  isRaw={typeof RangeExp === "object" && "isRaw" in RangeExp && RangeExp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="JitterRange" id={typeof JitterRange === "object" && "id" in JitterRange ? JitterRange?.id : undefined} value={typeof JitterRange === "object" && "value" in JitterRange ? JitterRange?.value : JitterRange} /* default: [0; 0; 0] */  isRaw={typeof JitterRange === "object" && "isRaw" in JitterRange && JitterRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color0" id={typeof Color0 === "object" && "id" in Color0 ? Color0?.id : undefined} value={typeof Color0 === "object" && "value" in Color0 ? Color0?.value : Color0} /* default: [0; 0; 0; 0] */  isRaw={typeof Color0 === "object" && "isRaw" in Color0 && Color0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color1" id={typeof Color1 === "object" && "id" in Color1 ? Color1?.id : undefined} value={typeof Color1 === "object" && "value" in Color1 ? Color1?.value : Color1} /* default: [0; 0; 0; 0] */  isRaw={typeof Color1 === "object" && "isRaw" in Color1 && Color1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ColorLerpScale" id={typeof ColorLerpScale === "object" && "id" in ColorLerpScale ? ColorLerpScale?.id : undefined} value={typeof ColorLerpScale === "object" && "value" in ColorLerpScale ? ColorLerpScale?.value : ColorLerpScale} /* default: 0 */  isRaw={typeof ColorLerpScale === "object" && "isRaw" in ColorLerpScale && ColorLerpScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ColorGap" id={typeof ColorGap === "object" && "id" in ColorGap ? ColorGap?.id : undefined} value={typeof ColorGap === "object" && "value" in ColorGap ? ColorGap?.value : ColorGap} /* default: 0 */  isRaw={typeof ColorGap === "object" && "isRaw" in ColorGap && ColorGap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SimplexNoiseScale" id={typeof SimplexNoiseScale === "object" && "id" in SimplexNoiseScale ? SimplexNoiseScale?.id : undefined} value={typeof SimplexNoiseScale === "object" && "value" in SimplexNoiseScale ? SimplexNoiseScale?.value : SimplexNoiseScale} /* default: [0; 0; 0] */  isRaw={typeof SimplexNoiseScale === "object" && "isRaw" in SimplexNoiseScale && SimplexNoiseScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SimplexNoiseOffset" id={typeof SimplexNoiseOffset === "object" && "id" in SimplexNoiseOffset ? SimplexNoiseOffset?.id : undefined} value={typeof SimplexNoiseOffset === "object" && "value" in SimplexNoiseOffset ? SimplexNoiseOffset?.value : SimplexNoiseOffset} /* default: [0; 0; 0] */  isRaw={typeof SimplexNoiseOffset === "object" && "isRaw" in SimplexNoiseOffset && SimplexNoiseOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UniformSize" id={typeof UniformSize === "object" && "id" in UniformSize ? UniformSize?.id : undefined} value={typeof UniformSize === "object" && "value" in UniformSize ? UniformSize?.value : UniformSize} /* default: false */  isRaw={typeof UniformSize === "object" && "isRaw" in UniformSize && UniformSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MinSize" id={typeof MinSize === "object" && "id" in MinSize ? MinSize?.id : undefined} value={typeof MinSize === "object" && "value" in MinSize ? MinSize?.value : MinSize} /* default: [0; 0] */  isRaw={typeof MinSize === "object" && "isRaw" in MinSize && MinSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MaxSize" id={typeof MaxSize === "object" && "id" in MaxSize ? MaxSize?.id : undefined} value={typeof MaxSize === "object" && "value" in MaxSize ? MaxSize?.value : MaxSize} /* default: [0; 0] */  isRaw={typeof MaxSize === "object" && "isRaw" in MaxSize && MaxSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinRotation" id={typeof MinRotation === "object" && "id" in MinRotation ? MinRotation?.id : undefined} value={typeof MinRotation === "object" && "value" in MinRotation ? MinRotation?.value : MinRotation} /* default: 0 */  isRaw={typeof MinRotation === "object" && "isRaw" in MinRotation && MinRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxRotation" id={typeof MaxRotation === "object" && "id" in MaxRotation ? MaxRotation?.id : undefined} value={typeof MaxRotation === "object" && "value" in MaxRotation ? MaxRotation?.value : MaxRotation} /* default: 0 */  isRaw={typeof MaxRotation === "object" && "isRaw" in MaxRotation && MaxRotation.isRaw ? true : undefined} />
        </Component>
      );
    };
    