import { member, Member, Component } from "../../../../core";
    
    export interface PBS_VoronoiCrystalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
NoiseScale?: member<[number, number]>;
NoiseAnimationOffset?: member<number>;
CellColorTint?: member<[number, number, number, number]>;
ColorGradient?: member<any>;
EmissionColor?: member<[number, number, number, number]>;
EmissionGradient?: member<any>;
SmoothnessGradient?: member<any>;
CellSmoothness?: member<number>;
CellMetallic?: member<number>;
NormalMap?: member<any>;
NormalStrength?: member<number>;
NormalTextureScale?: member<[number, number]>;
NormalTextureOffset?: member<[number, number]>;
EdgeThickness?: member<number>;
EdgeColor?: member<[number, number, number, number]>;
EdgeEmission?: member<[number, number, number, number]>;
EdgeSmoothness?: member<number>;
EdgeMetallic?: member<number>;
EdgeNormalStrength?: member<number>;
    }
    
    export function PBS_VoronoiCrystal(props: PBS_VoronoiCrystalInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
NoiseScale,
NoiseAnimationOffset,
CellColorTint,
ColorGradient,
EmissionColor,
EmissionGradient,
SmoothnessGradient,
CellSmoothness,
CellMetallic,
NormalMap,
NormalStrength,
NormalTextureScale,
NormalTextureOffset,
EdgeThickness,
EdgeColor,
EdgeEmission,
EdgeSmoothness,
EdgeMetallic,
EdgeNormalStrength, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_VoronoiCrystal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NoiseScale" id={typeof NoiseScale === "object" && "id" in NoiseScale ? NoiseScale?.id : undefined} value={typeof NoiseScale === "object" && "value" in NoiseScale ? NoiseScale?.value : NoiseScale} /* default: [0; 0] */  isRaw={typeof NoiseScale === "object" && "isRaw" in NoiseScale && NoiseScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NoiseAnimationOffset" id={typeof NoiseAnimationOffset === "object" && "id" in NoiseAnimationOffset ? NoiseAnimationOffset?.id : undefined} value={typeof NoiseAnimationOffset === "object" && "value" in NoiseAnimationOffset ? NoiseAnimationOffset?.value : NoiseAnimationOffset} /* default: 0 */  isRaw={typeof NoiseAnimationOffset === "object" && "isRaw" in NoiseAnimationOffset && NoiseAnimationOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="CellColorTint" id={typeof CellColorTint === "object" && "id" in CellColorTint ? CellColorTint?.id : undefined} value={typeof CellColorTint === "object" && "value" in CellColorTint ? CellColorTint?.value : CellColorTint} /* default: [0; 0; 0; 0] */  isRaw={typeof CellColorTint === "object" && "isRaw" in CellColorTint && CellColorTint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ColorGradient" id={typeof ColorGradient === "object" && "id" in ColorGradient ? ColorGradient?.id : undefined} value={typeof ColorGradient === "object" && "value" in ColorGradient ? ColorGradient?.value : ColorGradient} /* default: ID0 */  isRaw={typeof ColorGradient === "object" && "isRaw" in ColorGradient && ColorGradient.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissionColor" id={typeof EmissionColor === "object" && "id" in EmissionColor ? EmissionColor?.id : undefined} value={typeof EmissionColor === "object" && "value" in EmissionColor ? EmissionColor?.value : EmissionColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissionColor === "object" && "isRaw" in EmissionColor && EmissionColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissionGradient" id={typeof EmissionGradient === "object" && "id" in EmissionGradient ? EmissionGradient?.id : undefined} value={typeof EmissionGradient === "object" && "value" in EmissionGradient ? EmissionGradient?.value : EmissionGradient} /* default: ID0 */  isRaw={typeof EmissionGradient === "object" && "isRaw" in EmissionGradient && EmissionGradient.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SmoothnessGradient" id={typeof SmoothnessGradient === "object" && "id" in SmoothnessGradient ? SmoothnessGradient?.id : undefined} value={typeof SmoothnessGradient === "object" && "value" in SmoothnessGradient ? SmoothnessGradient?.value : SmoothnessGradient} /* default: ID0 */  isRaw={typeof SmoothnessGradient === "object" && "isRaw" in SmoothnessGradient && SmoothnessGradient.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CellSmoothness" id={typeof CellSmoothness === "object" && "id" in CellSmoothness ? CellSmoothness?.id : undefined} value={typeof CellSmoothness === "object" && "value" in CellSmoothness ? CellSmoothness?.value : CellSmoothness} /* default: 0 */  isRaw={typeof CellSmoothness === "object" && "isRaw" in CellSmoothness && CellSmoothness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CellMetallic" id={typeof CellMetallic === "object" && "id" in CellMetallic ? CellMetallic?.id : undefined} value={typeof CellMetallic === "object" && "value" in CellMetallic ? CellMetallic?.value : CellMetallic} /* default: 0 */  isRaw={typeof CellMetallic === "object" && "isRaw" in CellMetallic && CellMetallic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  isRaw={typeof NormalMap === "object" && "isRaw" in NormalMap && NormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalStrength" id={typeof NormalStrength === "object" && "id" in NormalStrength ? NormalStrength?.id : undefined} value={typeof NormalStrength === "object" && "value" in NormalStrength ? NormalStrength?.value : NormalStrength} /* default: 0 */  isRaw={typeof NormalStrength === "object" && "isRaw" in NormalStrength && NormalStrength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalTextureScale" id={typeof NormalTextureScale === "object" && "id" in NormalTextureScale ? NormalTextureScale?.id : undefined} value={typeof NormalTextureScale === "object" && "value" in NormalTextureScale ? NormalTextureScale?.value : NormalTextureScale} /* default: [0; 0] */  isRaw={typeof NormalTextureScale === "object" && "isRaw" in NormalTextureScale && NormalTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalTextureOffset" id={typeof NormalTextureOffset === "object" && "id" in NormalTextureOffset ? NormalTextureOffset?.id : undefined} value={typeof NormalTextureOffset === "object" && "value" in NormalTextureOffset ? NormalTextureOffset?.value : NormalTextureOffset} /* default: [0; 0] */  isRaw={typeof NormalTextureOffset === "object" && "isRaw" in NormalTextureOffset && NormalTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeThickness" id={typeof EdgeThickness === "object" && "id" in EdgeThickness ? EdgeThickness?.id : undefined} value={typeof EdgeThickness === "object" && "value" in EdgeThickness ? EdgeThickness?.value : EdgeThickness} /* default: 0 */  isRaw={typeof EdgeThickness === "object" && "isRaw" in EdgeThickness && EdgeThickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EdgeColor" id={typeof EdgeColor === "object" && "id" in EdgeColor ? EdgeColor?.id : undefined} value={typeof EdgeColor === "object" && "value" in EdgeColor ? EdgeColor?.value : EdgeColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EdgeColor === "object" && "isRaw" in EdgeColor && EdgeColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EdgeEmission" id={typeof EdgeEmission === "object" && "id" in EdgeEmission ? EdgeEmission?.id : undefined} value={typeof EdgeEmission === "object" && "value" in EdgeEmission ? EdgeEmission?.value : EdgeEmission} /* default: [0; 0; 0; 0] */  isRaw={typeof EdgeEmission === "object" && "isRaw" in EdgeEmission && EdgeEmission.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeSmoothness" id={typeof EdgeSmoothness === "object" && "id" in EdgeSmoothness ? EdgeSmoothness?.id : undefined} value={typeof EdgeSmoothness === "object" && "value" in EdgeSmoothness ? EdgeSmoothness?.value : EdgeSmoothness} /* default: 0 */  isRaw={typeof EdgeSmoothness === "object" && "isRaw" in EdgeSmoothness && EdgeSmoothness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeMetallic" id={typeof EdgeMetallic === "object" && "id" in EdgeMetallic ? EdgeMetallic?.id : undefined} value={typeof EdgeMetallic === "object" && "value" in EdgeMetallic ? EdgeMetallic?.value : EdgeMetallic} /* default: 0 */  isRaw={typeof EdgeMetallic === "object" && "isRaw" in EdgeMetallic && EdgeMetallic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeNormalStrength" id={typeof EdgeNormalStrength === "object" && "id" in EdgeNormalStrength ? EdgeNormalStrength?.id : undefined} value={typeof EdgeNormalStrength === "object" && "value" in EdgeNormalStrength ? EdgeNormalStrength?.value : EdgeNormalStrength} /* default: 0 */  isRaw={typeof EdgeNormalStrength === "object" && "isRaw" in EdgeNormalStrength && EdgeNormalStrength.isRaw ? true : undefined} />
        </Component>
      );
    };
    