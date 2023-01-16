import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface OverlayFresnelMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
Exponent?: member<number>;
BehindFarColor?: member<[number, number, number, number]>;
BehindNearColor?: member<[number, number, number, number]>;
FrontFarColor?: member<[number, number, number, number]>;
FrontNearColor?: member<[number, number, number, number]>;
BehindFarTexture?: member<any>;
BehindNearTexture?: member<any>;
FrontFarTexture?: member<any>;
FrontNearTexture?: member<any>;
BehindFarTextureScale?: member<[number, number]>;
BehindFarTextureOffset?: member<[number, number]>;
BehindNearTextureScale?: member<[number, number]>;
BehindNearTextureOffset?: member<[number, number]>;
FrontFarTextureScale?: member<[number, number]>;
FrontFarTextureOffset?: member<[number, number]>;
FrontNearTextureScale?: member<[number, number]>;
FrontNearTextureOffset?: member<[number, number]>;
NormalMap?: member<any>;
BlendMode?: member<any>;
Sidedness?: member<any>;
ZWrite?: member<any>;
RenderQueue?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
PolarUVmapping?: member<boolean>;
PolarPower?: member<number>;
    }
    
    export function OverlayFresnelMaterial(props: OverlayFresnelMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
Exponent,
BehindFarColor,
BehindNearColor,
FrontFarColor,
FrontNearColor,
BehindFarTexture,
BehindNearTexture,
FrontFarTexture,
FrontNearTexture,
BehindFarTextureScale,
BehindFarTextureOffset,
BehindNearTextureScale,
BehindNearTextureOffset,
FrontFarTextureScale,
FrontFarTextureOffset,
FrontNearTextureScale,
FrontNearTextureOffset,
NormalMap,
BlendMode,
Sidedness,
ZWrite,
RenderQueue,
OffsetFactor,
OffsetUnits,
PolarUVmapping,
PolarPower, } = props;
    
      return (
        <Component type="FrooxEngine.OverlayFresnelMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exponent" id={typeof Exponent === "object" && "id" in Exponent ? Exponent?.id : undefined} value={typeof Exponent === "object" && "value" in Exponent ? Exponent?.value : Exponent} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BehindFarColor" id={typeof BehindFarColor === "object" && "id" in BehindFarColor ? BehindFarColor?.id : undefined} value={typeof BehindFarColor === "object" && "value" in BehindFarColor ? BehindFarColor?.value : BehindFarColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BehindNearColor" id={typeof BehindNearColor === "object" && "id" in BehindNearColor ? BehindNearColor?.id : undefined} value={typeof BehindNearColor === "object" && "value" in BehindNearColor ? BehindNearColor?.value : BehindNearColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FrontFarColor" id={typeof FrontFarColor === "object" && "id" in FrontFarColor ? FrontFarColor?.id : undefined} value={typeof FrontFarColor === "object" && "value" in FrontFarColor ? FrontFarColor?.value : FrontFarColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FrontNearColor" id={typeof FrontNearColor === "object" && "id" in FrontNearColor ? FrontNearColor?.id : undefined} value={typeof FrontNearColor === "object" && "value" in FrontNearColor ? FrontNearColor?.value : FrontNearColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="BehindFarTexture" id={typeof BehindFarTexture === "object" && "id" in BehindFarTexture ? BehindFarTexture?.id : undefined} value={typeof BehindFarTexture === "object" && "value" in BehindFarTexture ? BehindFarTexture?.value : BehindFarTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="BehindNearTexture" id={typeof BehindNearTexture === "object" && "id" in BehindNearTexture ? BehindNearTexture?.id : undefined} value={typeof BehindNearTexture === "object" && "value" in BehindNearTexture ? BehindNearTexture?.value : BehindNearTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="FrontFarTexture" id={typeof FrontFarTexture === "object" && "id" in FrontFarTexture ? FrontFarTexture?.id : undefined} value={typeof FrontFarTexture === "object" && "value" in FrontFarTexture ? FrontFarTexture?.value : FrontFarTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="FrontNearTexture" id={typeof FrontNearTexture === "object" && "id" in FrontNearTexture ? FrontNearTexture?.id : undefined} value={typeof FrontNearTexture === "object" && "value" in FrontNearTexture ? FrontNearTexture?.value : FrontNearTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="BehindFarTextureScale" id={typeof BehindFarTextureScale === "object" && "id" in BehindFarTextureScale ? BehindFarTextureScale?.id : undefined} value={typeof BehindFarTextureScale === "object" && "value" in BehindFarTextureScale ? BehindFarTextureScale?.value : BehindFarTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="BehindFarTextureOffset" id={typeof BehindFarTextureOffset === "object" && "id" in BehindFarTextureOffset ? BehindFarTextureOffset?.id : undefined} value={typeof BehindFarTextureOffset === "object" && "value" in BehindFarTextureOffset ? BehindFarTextureOffset?.value : BehindFarTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="BehindNearTextureScale" id={typeof BehindNearTextureScale === "object" && "id" in BehindNearTextureScale ? BehindNearTextureScale?.id : undefined} value={typeof BehindNearTextureScale === "object" && "value" in BehindNearTextureScale ? BehindNearTextureScale?.value : BehindNearTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="BehindNearTextureOffset" id={typeof BehindNearTextureOffset === "object" && "id" in BehindNearTextureOffset ? BehindNearTextureOffset?.id : undefined} value={typeof BehindNearTextureOffset === "object" && "value" in BehindNearTextureOffset ? BehindNearTextureOffset?.value : BehindNearTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FrontFarTextureScale" id={typeof FrontFarTextureScale === "object" && "id" in FrontFarTextureScale ? FrontFarTextureScale?.id : undefined} value={typeof FrontFarTextureScale === "object" && "value" in FrontFarTextureScale ? FrontFarTextureScale?.value : FrontFarTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FrontFarTextureOffset" id={typeof FrontFarTextureOffset === "object" && "id" in FrontFarTextureOffset ? FrontFarTextureOffset?.id : undefined} value={typeof FrontFarTextureOffset === "object" && "value" in FrontFarTextureOffset ? FrontFarTextureOffset?.value : FrontFarTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FrontNearTextureScale" id={typeof FrontNearTextureScale === "object" && "id" in FrontNearTextureScale ? FrontNearTextureScale?.id : undefined} value={typeof FrontNearTextureScale === "object" && "value" in FrontNearTextureScale ? FrontNearTextureScale?.value : FrontNearTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FrontNearTextureOffset" id={typeof FrontNearTextureOffset === "object" && "id" in FrontNearTextureOffset ? FrontNearTextureOffset?.id : undefined} value={typeof FrontNearTextureOffset === "object" && "value" in FrontNearTextureOffset ? FrontNearTextureOffset?.value : FrontNearTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PolarUVmapping" id={typeof PolarUVmapping === "object" && "id" in PolarUVmapping ? PolarUVmapping?.id : undefined} value={typeof PolarUVmapping === "object" && "value" in PolarUVmapping ? PolarUVmapping?.value : PolarUVmapping} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PolarPower" id={typeof PolarPower === "object" && "id" in PolarPower ? PolarPower?.id : undefined} value={typeof PolarPower === "object" && "value" in PolarPower ? PolarPower?.value : PolarPower} /* default: 0 */  />
        </Component>
      );
    };
    