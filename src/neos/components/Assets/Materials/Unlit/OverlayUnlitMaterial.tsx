import { member, Member, Component } from "../../../../core";
    
    export interface OverlayUnlitMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
BehindTintColor?: member<[number, number, number, number]>;
FrontTintColor?: member<[number, number, number, number]>;
BehindTexture?: member<any>;
BehindTextureScale?: member<[number, number]>;
BehindTextureOffset?: member<[number, number]>;
FrontTexture?: member<any>;
FrontTextureScale?: member<[number, number]>;
FrontTextureOffset?: member<[number, number]>;
BlendMode?: member<any>;
AlphaCutoff?: member<number>;
UseVertexColors?: member<boolean>;
Sidedness?: member<any>;
ZWrite?: member<any>;
PolarUVmapping?: member<boolean>;
PolarPower?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
    }
    
    export function OverlayUnlitMaterial(props: OverlayUnlitMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
BehindTintColor,
FrontTintColor,
BehindTexture,
BehindTextureScale,
BehindTextureOffset,
FrontTexture,
FrontTextureScale,
FrontTextureOffset,
BlendMode,
AlphaCutoff,
UseVertexColors,
Sidedness,
ZWrite,
PolarUVmapping,
PolarPower,
OffsetFactor,
OffsetUnits,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.OverlayUnlitMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BehindTintColor" id={typeof BehindTintColor === "object" && "id" in BehindTintColor ? BehindTintColor?.id : undefined} value={typeof BehindTintColor === "object" && "value" in BehindTintColor ? BehindTintColor?.value : BehindTintColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BehindTintColor === "object" && "isRaw" in BehindTintColor && BehindTintColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FrontTintColor" id={typeof FrontTintColor === "object" && "id" in FrontTintColor ? FrontTintColor?.id : undefined} value={typeof FrontTintColor === "object" && "value" in FrontTintColor ? FrontTintColor?.value : FrontTintColor} /* default: [0; 0; 0; 0] */  isRaw={typeof FrontTintColor === "object" && "isRaw" in FrontTintColor && FrontTintColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="BehindTexture" id={typeof BehindTexture === "object" && "id" in BehindTexture ? BehindTexture?.id : undefined} value={typeof BehindTexture === "object" && "value" in BehindTexture ? BehindTexture?.value : BehindTexture} /* default: ID0 */  isRaw={typeof BehindTexture === "object" && "isRaw" in BehindTexture && BehindTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="BehindTextureScale" id={typeof BehindTextureScale === "object" && "id" in BehindTextureScale ? BehindTextureScale?.id : undefined} value={typeof BehindTextureScale === "object" && "value" in BehindTextureScale ? BehindTextureScale?.value : BehindTextureScale} /* default: [0; 0] */  isRaw={typeof BehindTextureScale === "object" && "isRaw" in BehindTextureScale && BehindTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="BehindTextureOffset" id={typeof BehindTextureOffset === "object" && "id" in BehindTextureOffset ? BehindTextureOffset?.id : undefined} value={typeof BehindTextureOffset === "object" && "value" in BehindTextureOffset ? BehindTextureOffset?.value : BehindTextureOffset} /* default: [0; 0] */  isRaw={typeof BehindTextureOffset === "object" && "isRaw" in BehindTextureOffset && BehindTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="FrontTexture" id={typeof FrontTexture === "object" && "id" in FrontTexture ? FrontTexture?.id : undefined} value={typeof FrontTexture === "object" && "value" in FrontTexture ? FrontTexture?.value : FrontTexture} /* default: ID0 */  isRaw={typeof FrontTexture === "object" && "isRaw" in FrontTexture && FrontTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FrontTextureScale" id={typeof FrontTextureScale === "object" && "id" in FrontTextureScale ? FrontTextureScale?.id : undefined} value={typeof FrontTextureScale === "object" && "value" in FrontTextureScale ? FrontTextureScale?.value : FrontTextureScale} /* default: [0; 0] */  isRaw={typeof FrontTextureScale === "object" && "isRaw" in FrontTextureScale && FrontTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FrontTextureOffset" id={typeof FrontTextureOffset === "object" && "id" in FrontTextureOffset ? FrontTextureOffset?.id : undefined} value={typeof FrontTextureOffset === "object" && "value" in FrontTextureOffset ? FrontTextureOffset?.value : FrontTextureOffset} /* default: [0; 0] */  isRaw={typeof FrontTextureOffset === "object" && "isRaw" in FrontTextureOffset && FrontTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaCutoff" id={typeof AlphaCutoff === "object" && "id" in AlphaCutoff ? AlphaCutoff?.id : undefined} value={typeof AlphaCutoff === "object" && "value" in AlphaCutoff ? AlphaCutoff?.value : AlphaCutoff} /* default: 0 */  isRaw={typeof AlphaCutoff === "object" && "isRaw" in AlphaCutoff && AlphaCutoff.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseVertexColors" id={typeof UseVertexColors === "object" && "id" in UseVertexColors ? UseVertexColors?.id : undefined} value={typeof UseVertexColors === "object" && "value" in UseVertexColors ? UseVertexColors?.value : UseVertexColors} /* default: false */  isRaw={typeof UseVertexColors === "object" && "isRaw" in UseVertexColors && UseVertexColors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  isRaw={typeof Sidedness === "object" && "isRaw" in Sidedness && Sidedness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PolarUVmapping" id={typeof PolarUVmapping === "object" && "id" in PolarUVmapping ? PolarUVmapping?.id : undefined} value={typeof PolarUVmapping === "object" && "value" in PolarUVmapping ? PolarUVmapping?.value : PolarUVmapping} /* default: false */  isRaw={typeof PolarUVmapping === "object" && "isRaw" in PolarUVmapping && PolarUVmapping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PolarPower" id={typeof PolarPower === "object" && "id" in PolarPower ? PolarPower?.id : undefined} value={typeof PolarPower === "object" && "value" in PolarPower ? PolarPower?.value : PolarPower} /* default: 0 */  isRaw={typeof PolarPower === "object" && "isRaw" in PolarPower && PolarPower.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
        </Component>
      );
    };
    