import { member, Member, Component } from "../../../core";
    
    export interface ParticleStyleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MotionVectorMode?: member<any>;
MinStartLifetime?: member<number>;
MaxStartLifetime?: member<number>;
MinStartSize?: member<number>;
MaxStartSize?: member<number>;
MinStartSpeed?: member<number>;
MaxStartSpeed?: member<number>;
MinStartRotation?: member<number>;
MaxStartRotation?: member<number>;
MinStartAngularVelocity?: member<number>;
MaxStartAngularVelocity?: member<number>;
Use3DRotation?: member<boolean>;
MinStartRotation3D?: member<[number, number, number]>;
MaxStartRotation3D?: member<[number, number, number]>;
MinStartAngularVelocity3D?: member<[number, number, number]>;
MaxStartAngularVelocity3D?: member<[number, number, number]>;
GravityStrength?: member<number>;
MinStartColor?: member<[number, number, number, number]>;
MaxStartColor?: member<[number, number, number, number]>;
UseColorOverLifetime?: member<boolean>;
AlphaOverLifetime?: member<any>;
ColorOverLifetime?: member<any>;
Collisions?: member<boolean>;
Bounce?: member<number>;
LifetimeLoss?: member<number>;
Material?: member<any>;
TrailMaterial?: member<any>;
Mesh?: member<any>;
Alignment?: member<any>;
LengthScale?: member<number>;
VelocityScale?: member<number>;
MinParticleSize?: member<number>;
MaxParticleSize?: member<number>;
ParticleTrails?: member<any>;
TrailRatio?: member<number>;
RibbonCount?: member<number>;
TrailMinimumVertexDistance?: member<number>;
TrailWorldSpace?: member<boolean>;
TrailDiesWithParticle?: member<boolean>;
ParticleSizeAffectsTrailWidth?: member<boolean>;
ParticleSizeAffectsTrailLifetime?: member<boolean>;
InheritTrailColorFromParticle?: member<boolean>;
TrailTextureMode?: member<any>;
MinTrailLifetime?: member<number>;
MaxTrailLifetime?: member<number>;
MinTrailColor?: member<[number, number, number, number]>;
MaxTrailColor?: member<[number, number, number, number]>;
MinTrailWidth?: member<number>;
MaxTrailWidth?: member<number>;
GenerateLightingDataForTrails?: member<boolean>;
Light?: member<any>;
LightsRatio?: member<number>;
LightRandomDistribution?: member<boolean>;
LightsUseParticleColor?: member<boolean>;
SizeAffectsLightRange?: member<boolean>;
AlphaAffectsLightIntensity?: member<boolean>;
LightRangeMultiplier?: member<number>;
LightIntensityMultiplier?: member<number>;
MaximumLights?: member<number>;
AnimationTiles?: member<[number, number]>;
AnimationCycles?: member<number>;
AnimationType?: member<any>;
UseRowIndex?: member<number>;
UseRandomRow?: member<boolean>;
    }
    
    export function ParticleStyle(props: ParticleStyleInput){
      const { id, persistentId, updateOrder, Enabled,
MotionVectorMode,
MinStartLifetime,
MaxStartLifetime,
MinStartSize,
MaxStartSize,
MinStartSpeed,
MaxStartSpeed,
MinStartRotation,
MaxStartRotation,
MinStartAngularVelocity,
MaxStartAngularVelocity,
Use3DRotation,
MinStartRotation3D,
MaxStartRotation3D,
MinStartAngularVelocity3D,
MaxStartAngularVelocity3D,
GravityStrength,
MinStartColor,
MaxStartColor,
UseColorOverLifetime,
AlphaOverLifetime,
ColorOverLifetime,
Collisions,
Bounce,
LifetimeLoss,
Material,
TrailMaterial,
Mesh,
Alignment,
LengthScale,
VelocityScale,
MinParticleSize,
MaxParticleSize,
ParticleTrails,
TrailRatio,
RibbonCount,
TrailMinimumVertexDistance,
TrailWorldSpace,
TrailDiesWithParticle,
ParticleSizeAffectsTrailWidth,
ParticleSizeAffectsTrailLifetime,
InheritTrailColorFromParticle,
TrailTextureMode,
MinTrailLifetime,
MaxTrailLifetime,
MinTrailColor,
MaxTrailColor,
MinTrailWidth,
MaxTrailWidth,
GenerateLightingDataForTrails,
Light,
LightsRatio,
LightRandomDistribution,
LightsUseParticleColor,
SizeAffectsLightRange,
AlphaAffectsLightIntensity,
LightRangeMultiplier,
LightIntensityMultiplier,
MaximumLights,
AnimationTiles,
AnimationCycles,
AnimationType,
UseRowIndex,
UseRandomRow, } = props;
    
      return (
        <Component type="FrooxEngine.ParticleStyle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MotionVectorMode]`} name="MotionVectorMode" id={typeof MotionVectorMode === "object" && "id" in MotionVectorMode ? MotionVectorMode?.id : undefined} value={typeof MotionVectorMode === "object" && "value" in MotionVectorMode ? MotionVectorMode?.value : MotionVectorMode} /* default: Camera */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinStartLifetime" id={typeof MinStartLifetime === "object" && "id" in MinStartLifetime ? MinStartLifetime?.id : undefined} value={typeof MinStartLifetime === "object" && "value" in MinStartLifetime ? MinStartLifetime?.value : MinStartLifetime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxStartLifetime" id={typeof MaxStartLifetime === "object" && "id" in MaxStartLifetime ? MaxStartLifetime?.id : undefined} value={typeof MaxStartLifetime === "object" && "value" in MaxStartLifetime ? MaxStartLifetime?.value : MaxStartLifetime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinStartSize" id={typeof MinStartSize === "object" && "id" in MinStartSize ? MinStartSize?.id : undefined} value={typeof MinStartSize === "object" && "value" in MinStartSize ? MinStartSize?.value : MinStartSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxStartSize" id={typeof MaxStartSize === "object" && "id" in MaxStartSize ? MaxStartSize?.id : undefined} value={typeof MaxStartSize === "object" && "value" in MaxStartSize ? MaxStartSize?.value : MaxStartSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinStartSpeed" id={typeof MinStartSpeed === "object" && "id" in MinStartSpeed ? MinStartSpeed?.id : undefined} value={typeof MinStartSpeed === "object" && "value" in MinStartSpeed ? MinStartSpeed?.value : MinStartSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxStartSpeed" id={typeof MaxStartSpeed === "object" && "id" in MaxStartSpeed ? MaxStartSpeed?.id : undefined} value={typeof MaxStartSpeed === "object" && "value" in MaxStartSpeed ? MaxStartSpeed?.value : MaxStartSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinStartRotation" id={typeof MinStartRotation === "object" && "id" in MinStartRotation ? MinStartRotation?.id : undefined} value={typeof MinStartRotation === "object" && "value" in MinStartRotation ? MinStartRotation?.value : MinStartRotation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxStartRotation" id={typeof MaxStartRotation === "object" && "id" in MaxStartRotation ? MaxStartRotation?.id : undefined} value={typeof MaxStartRotation === "object" && "value" in MaxStartRotation ? MaxStartRotation?.value : MaxStartRotation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinStartAngularVelocity" id={typeof MinStartAngularVelocity === "object" && "id" in MinStartAngularVelocity ? MinStartAngularVelocity?.id : undefined} value={typeof MinStartAngularVelocity === "object" && "value" in MinStartAngularVelocity ? MinStartAngularVelocity?.value : MinStartAngularVelocity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxStartAngularVelocity" id={typeof MaxStartAngularVelocity === "object" && "id" in MaxStartAngularVelocity ? MaxStartAngularVelocity?.id : undefined} value={typeof MaxStartAngularVelocity === "object" && "value" in MaxStartAngularVelocity ? MaxStartAngularVelocity?.value : MaxStartAngularVelocity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Use3DRotation" id={typeof Use3DRotation === "object" && "id" in Use3DRotation ? Use3DRotation?.id : undefined} value={typeof Use3DRotation === "object" && "value" in Use3DRotation ? Use3DRotation?.value : Use3DRotation} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MinStartRotation3D" id={typeof MinStartRotation3D === "object" && "id" in MinStartRotation3D ? MinStartRotation3D?.id : undefined} value={typeof MinStartRotation3D === "object" && "value" in MinStartRotation3D ? MinStartRotation3D?.value : MinStartRotation3D} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MaxStartRotation3D" id={typeof MaxStartRotation3D === "object" && "id" in MaxStartRotation3D ? MaxStartRotation3D?.id : undefined} value={typeof MaxStartRotation3D === "object" && "value" in MaxStartRotation3D ? MaxStartRotation3D?.value : MaxStartRotation3D} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MinStartAngularVelocity3D" id={typeof MinStartAngularVelocity3D === "object" && "id" in MinStartAngularVelocity3D ? MinStartAngularVelocity3D?.id : undefined} value={typeof MinStartAngularVelocity3D === "object" && "value" in MinStartAngularVelocity3D ? MinStartAngularVelocity3D?.value : MinStartAngularVelocity3D} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MaxStartAngularVelocity3D" id={typeof MaxStartAngularVelocity3D === "object" && "id" in MaxStartAngularVelocity3D ? MaxStartAngularVelocity3D?.id : undefined} value={typeof MaxStartAngularVelocity3D === "object" && "value" in MaxStartAngularVelocity3D ? MaxStartAngularVelocity3D?.value : MaxStartAngularVelocity3D} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GravityStrength" id={typeof GravityStrength === "object" && "id" in GravityStrength ? GravityStrength?.id : undefined} value={typeof GravityStrength === "object" && "value" in GravityStrength ? GravityStrength?.value : GravityStrength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MinStartColor" id={typeof MinStartColor === "object" && "id" in MinStartColor ? MinStartColor?.id : undefined} value={typeof MinStartColor === "object" && "value" in MinStartColor ? MinStartColor?.value : MinStartColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MaxStartColor" id={typeof MaxStartColor === "object" && "id" in MaxStartColor ? MaxStartColor?.id : undefined} value={typeof MaxStartColor === "object" && "value" in MaxStartColor ? MaxStartColor?.value : MaxStartColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseColorOverLifetime" id={typeof UseColorOverLifetime === "object" && "id" in UseColorOverLifetime ? UseColorOverLifetime?.id : undefined} value={typeof UseColorOverLifetime === "object" && "value" in UseColorOverLifetime ? UseColorOverLifetime?.value : UseColorOverLifetime} /* default: false */  />
<Member type={`FrooxEngine.SyncLinear\`1[System.Single]`} name="AlphaOverLifetime" id={typeof AlphaOverLifetime === "object" && "id" in AlphaOverLifetime ? AlphaOverLifetime?.id : undefined} value={typeof AlphaOverLifetime === "object" && "value" in AlphaOverLifetime ? AlphaOverLifetime?.value : AlphaOverLifetime} /* default: FrooxEngine.SyncLinear`1[System.Single] */  />
<Member type={`FrooxEngine.SyncLinear\`1[BaseX.color]`} name="ColorOverLifetime" id={typeof ColorOverLifetime === "object" && "id" in ColorOverLifetime ? ColorOverLifetime?.id : undefined} value={typeof ColorOverLifetime === "object" && "value" in ColorOverLifetime ? ColorOverLifetime?.value : ColorOverLifetime} /* default: FrooxEngine.SyncLinear`1[BaseX.color] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Collisions" id={typeof Collisions === "object" && "id" in Collisions ? Collisions?.id : undefined} value={typeof Collisions === "object" && "value" in Collisions ? Collisions?.value : Collisions} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Bounce" id={typeof Bounce === "object" && "id" in Bounce ? Bounce?.id : undefined} value={typeof Bounce === "object" && "value" in Bounce ? Bounce?.value : Bounce} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LifetimeLoss" id={typeof LifetimeLoss === "object" && "id" in LifetimeLoss ? LifetimeLoss?.id : undefined} value={typeof LifetimeLoss === "object" && "value" in LifetimeLoss ? LifetimeLoss?.value : LifetimeLoss} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="TrailMaterial" id={typeof TrailMaterial === "object" && "id" in TrailMaterial ? TrailMaterial?.id : undefined} value={typeof TrailMaterial === "object" && "value" in TrailMaterial ? TrailMaterial?.value : TrailMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`} name="Mesh" id={typeof Mesh === "object" && "id" in Mesh ? Mesh?.id : undefined} value={typeof Mesh === "object" && "value" in Mesh ? Mesh?.value : Mesh} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ParticleAlignment]`} name="Alignment" id={typeof Alignment === "object" && "id" in Alignment ? Alignment?.id : undefined} value={typeof Alignment === "object" && "value" in Alignment ? Alignment?.value : Alignment} /* default: View */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LengthScale" id={typeof LengthScale === "object" && "id" in LengthScale ? LengthScale?.id : undefined} value={typeof LengthScale === "object" && "value" in LengthScale ? LengthScale?.value : LengthScale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VelocityScale" id={typeof VelocityScale === "object" && "id" in VelocityScale ? VelocityScale?.id : undefined} value={typeof VelocityScale === "object" && "value" in VelocityScale ? VelocityScale?.value : VelocityScale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinParticleSize" id={typeof MinParticleSize === "object" && "id" in MinParticleSize ? MinParticleSize?.id : undefined} value={typeof MinParticleSize === "object" && "value" in MinParticleSize ? MinParticleSize?.value : MinParticleSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxParticleSize" id={typeof MaxParticleSize === "object" && "id" in MaxParticleSize ? MaxParticleSize?.id : undefined} value={typeof MaxParticleSize === "object" && "value" in MaxParticleSize ? MaxParticleSize?.value : MaxParticleSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ParticleTrailMode]`} name="ParticleTrails" id={typeof ParticleTrails === "object" && "id" in ParticleTrails ? ParticleTrails?.id : undefined} value={typeof ParticleTrails === "object" && "value" in ParticleTrails ? ParticleTrails?.value : ParticleTrails} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TrailRatio" id={typeof TrailRatio === "object" && "id" in TrailRatio ? TrailRatio?.id : undefined} value={typeof TrailRatio === "object" && "value" in TrailRatio ? TrailRatio?.value : TrailRatio} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RibbonCount" id={typeof RibbonCount === "object" && "id" in RibbonCount ? RibbonCount?.id : undefined} value={typeof RibbonCount === "object" && "value" in RibbonCount ? RibbonCount?.value : RibbonCount} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TrailMinimumVertexDistance" id={typeof TrailMinimumVertexDistance === "object" && "id" in TrailMinimumVertexDistance ? TrailMinimumVertexDistance?.id : undefined} value={typeof TrailMinimumVertexDistance === "object" && "value" in TrailMinimumVertexDistance ? TrailMinimumVertexDistance?.value : TrailMinimumVertexDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TrailWorldSpace" id={typeof TrailWorldSpace === "object" && "id" in TrailWorldSpace ? TrailWorldSpace?.id : undefined} value={typeof TrailWorldSpace === "object" && "value" in TrailWorldSpace ? TrailWorldSpace?.value : TrailWorldSpace} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TrailDiesWithParticle" id={typeof TrailDiesWithParticle === "object" && "id" in TrailDiesWithParticle ? TrailDiesWithParticle?.id : undefined} value={typeof TrailDiesWithParticle === "object" && "value" in TrailDiesWithParticle ? TrailDiesWithParticle?.value : TrailDiesWithParticle} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParticleSizeAffectsTrailWidth" id={typeof ParticleSizeAffectsTrailWidth === "object" && "id" in ParticleSizeAffectsTrailWidth ? ParticleSizeAffectsTrailWidth?.id : undefined} value={typeof ParticleSizeAffectsTrailWidth === "object" && "value" in ParticleSizeAffectsTrailWidth ? ParticleSizeAffectsTrailWidth?.value : ParticleSizeAffectsTrailWidth} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParticleSizeAffectsTrailLifetime" id={typeof ParticleSizeAffectsTrailLifetime === "object" && "id" in ParticleSizeAffectsTrailLifetime ? ParticleSizeAffectsTrailLifetime?.id : undefined} value={typeof ParticleSizeAffectsTrailLifetime === "object" && "value" in ParticleSizeAffectsTrailLifetime ? ParticleSizeAffectsTrailLifetime?.value : ParticleSizeAffectsTrailLifetime} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="InheritTrailColorFromParticle" id={typeof InheritTrailColorFromParticle === "object" && "id" in InheritTrailColorFromParticle ? InheritTrailColorFromParticle?.id : undefined} value={typeof InheritTrailColorFromParticle === "object" && "value" in InheritTrailColorFromParticle ? InheritTrailColorFromParticle?.value : InheritTrailColorFromParticle} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ParticleTrailTextureMode]`} name="TrailTextureMode" id={typeof TrailTextureMode === "object" && "id" in TrailTextureMode ? TrailTextureMode?.id : undefined} value={typeof TrailTextureMode === "object" && "value" in TrailTextureMode ? TrailTextureMode?.value : TrailTextureMode} /* default: Stretch */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinTrailLifetime" id={typeof MinTrailLifetime === "object" && "id" in MinTrailLifetime ? MinTrailLifetime?.id : undefined} value={typeof MinTrailLifetime === "object" && "value" in MinTrailLifetime ? MinTrailLifetime?.value : MinTrailLifetime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTrailLifetime" id={typeof MaxTrailLifetime === "object" && "id" in MaxTrailLifetime ? MaxTrailLifetime?.id : undefined} value={typeof MaxTrailLifetime === "object" && "value" in MaxTrailLifetime ? MaxTrailLifetime?.value : MaxTrailLifetime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MinTrailColor" id={typeof MinTrailColor === "object" && "id" in MinTrailColor ? MinTrailColor?.id : undefined} value={typeof MinTrailColor === "object" && "value" in MinTrailColor ? MinTrailColor?.value : MinTrailColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MaxTrailColor" id={typeof MaxTrailColor === "object" && "id" in MaxTrailColor ? MaxTrailColor?.id : undefined} value={typeof MaxTrailColor === "object" && "value" in MaxTrailColor ? MaxTrailColor?.value : MaxTrailColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinTrailWidth" id={typeof MinTrailWidth === "object" && "id" in MinTrailWidth ? MinTrailWidth?.id : undefined} value={typeof MinTrailWidth === "object" && "value" in MinTrailWidth ? MinTrailWidth?.value : MinTrailWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTrailWidth" id={typeof MaxTrailWidth === "object" && "id" in MaxTrailWidth ? MaxTrailWidth?.id : undefined} value={typeof MaxTrailWidth === "object" && "value" in MaxTrailWidth ? MaxTrailWidth?.value : MaxTrailWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="GenerateLightingDataForTrails" id={typeof GenerateLightingDataForTrails === "object" && "id" in GenerateLightingDataForTrails ? GenerateLightingDataForTrails?.id : undefined} value={typeof GenerateLightingDataForTrails === "object" && "value" in GenerateLightingDataForTrails ? GenerateLightingDataForTrails?.value : GenerateLightingDataForTrails} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Light]`} name="Light" id={typeof Light === "object" && "id" in Light ? Light?.id : undefined} value={typeof Light === "object" && "value" in Light ? Light?.value : Light} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LightsRatio" id={typeof LightsRatio === "object" && "id" in LightsRatio ? LightsRatio?.id : undefined} value={typeof LightsRatio === "object" && "value" in LightsRatio ? LightsRatio?.value : LightsRatio} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LightRandomDistribution" id={typeof LightRandomDistribution === "object" && "id" in LightRandomDistribution ? LightRandomDistribution?.id : undefined} value={typeof LightRandomDistribution === "object" && "value" in LightRandomDistribution ? LightRandomDistribution?.value : LightRandomDistribution} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LightsUseParticleColor" id={typeof LightsUseParticleColor === "object" && "id" in LightsUseParticleColor ? LightsUseParticleColor?.id : undefined} value={typeof LightsUseParticleColor === "object" && "value" in LightsUseParticleColor ? LightsUseParticleColor?.value : LightsUseParticleColor} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SizeAffectsLightRange" id={typeof SizeAffectsLightRange === "object" && "id" in SizeAffectsLightRange ? SizeAffectsLightRange?.id : undefined} value={typeof SizeAffectsLightRange === "object" && "value" in SizeAffectsLightRange ? SizeAffectsLightRange?.value : SizeAffectsLightRange} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlphaAffectsLightIntensity" id={typeof AlphaAffectsLightIntensity === "object" && "id" in AlphaAffectsLightIntensity ? AlphaAffectsLightIntensity?.id : undefined} value={typeof AlphaAffectsLightIntensity === "object" && "value" in AlphaAffectsLightIntensity ? AlphaAffectsLightIntensity?.value : AlphaAffectsLightIntensity} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LightRangeMultiplier" id={typeof LightRangeMultiplier === "object" && "id" in LightRangeMultiplier ? LightRangeMultiplier?.id : undefined} value={typeof LightRangeMultiplier === "object" && "value" in LightRangeMultiplier ? LightRangeMultiplier?.value : LightRangeMultiplier} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LightIntensityMultiplier" id={typeof LightIntensityMultiplier === "object" && "id" in LightIntensityMultiplier ? LightIntensityMultiplier?.id : undefined} value={typeof LightIntensityMultiplier === "object" && "value" in LightIntensityMultiplier ? LightIntensityMultiplier?.value : LightIntensityMultiplier} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaximumLights" id={typeof MaximumLights === "object" && "id" in MaximumLights ? MaximumLights?.id : undefined} value={typeof MaximumLights === "object" && "value" in MaximumLights ? MaximumLights?.value : MaximumLights} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="AnimationTiles" id={typeof AnimationTiles === "object" && "id" in AnimationTiles ? AnimationTiles?.id : undefined} value={typeof AnimationTiles === "object" && "value" in AnimationTiles ? AnimationTiles?.value : AnimationTiles} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AnimationCycles" id={typeof AnimationCycles === "object" && "id" in AnimationCycles ? AnimationCycles?.id : undefined} value={typeof AnimationCycles === "object" && "value" in AnimationCycles ? AnimationCycles?.value : AnimationCycles} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ParticleAnimationType]`} name="AnimationType" id={typeof AnimationType === "object" && "id" in AnimationType ? AnimationType?.id : undefined} value={typeof AnimationType === "object" && "value" in AnimationType ? AnimationType?.value : AnimationType} /* default: WholeSheet */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="UseRowIndex" id={typeof UseRowIndex === "object" && "id" in UseRowIndex ? UseRowIndex?.id : undefined} value={typeof UseRowIndex === "object" && "value" in UseRowIndex ? UseRowIndex?.value : UseRowIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseRandomRow" id={typeof UseRandomRow === "object" && "id" in UseRandomRow ? UseRandomRow?.id : undefined} value={typeof UseRandomRow === "object" && "value" in UseRandomRow ? UseRandomRow?.value : UseRandomRow} /* default: false */  />
        </Component>
      );
    };
    