import { member, Member, Component } from "../../../../core";
    
    export interface DepthProjectionMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
Color?: member<any>;
Depth?: member<any>;
DepthEncoding?: member<any>;
ColorTextureOffset?: member<[number, number]>;
ColorTextureScale?: member<[number, number]>;
DepthTextureOffset?: member<[number, number]>;
DepthTextureScale?: member<[number, number]>;
DepthFrom?: member<number>;
DepthTo?: member<number>;
FieldOfView?: member<[number, number]>;
NearClip?: member<number>;
FarClip?: member<number>;
DiscardThreshold?: member<number>;
DiscardOffset?: member<number>;
BlendMode?: member<any>;
ZWrite?: member<any>;
    }
    
    export function DepthProjectionMaterial(props: DepthProjectionMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
Color,
Depth,
DepthEncoding,
ColorTextureOffset,
ColorTextureScale,
DepthTextureOffset,
DepthTextureScale,
DepthFrom,
DepthTo,
FieldOfView,
NearClip,
FarClip,
DiscardThreshold,
DiscardOffset,
BlendMode,
ZWrite, } = props;
    
      return (
        <Component type="FrooxEngine.DepthProjectionMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: ID0 */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Depth" id={typeof Depth === "object" && "id" in Depth ? Depth?.id : undefined} value={typeof Depth === "object" && "value" in Depth ? Depth?.value : Depth} /* default: ID0 */  isRaw={typeof Depth === "object" && "isRaw" in Depth && Depth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.DepthEncoding]`} name="DepthEncoding" id={typeof DepthEncoding === "object" && "id" in DepthEncoding ? DepthEncoding?.id : undefined} value={typeof DepthEncoding === "object" && "value" in DepthEncoding ? DepthEncoding?.value : DepthEncoding} /* default: Grayscale */  isRaw={typeof DepthEncoding === "object" && "isRaw" in DepthEncoding && DepthEncoding.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ColorTextureOffset" id={typeof ColorTextureOffset === "object" && "id" in ColorTextureOffset ? ColorTextureOffset?.id : undefined} value={typeof ColorTextureOffset === "object" && "value" in ColorTextureOffset ? ColorTextureOffset?.value : ColorTextureOffset} /* default: [0; 0] */  isRaw={typeof ColorTextureOffset === "object" && "isRaw" in ColorTextureOffset && ColorTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ColorTextureScale" id={typeof ColorTextureScale === "object" && "id" in ColorTextureScale ? ColorTextureScale?.id : undefined} value={typeof ColorTextureScale === "object" && "value" in ColorTextureScale ? ColorTextureScale?.value : ColorTextureScale} /* default: [0; 0] */  isRaw={typeof ColorTextureScale === "object" && "isRaw" in ColorTextureScale && ColorTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="DepthTextureOffset" id={typeof DepthTextureOffset === "object" && "id" in DepthTextureOffset ? DepthTextureOffset?.id : undefined} value={typeof DepthTextureOffset === "object" && "value" in DepthTextureOffset ? DepthTextureOffset?.value : DepthTextureOffset} /* default: [0; 0] */  isRaw={typeof DepthTextureOffset === "object" && "isRaw" in DepthTextureOffset && DepthTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="DepthTextureScale" id={typeof DepthTextureScale === "object" && "id" in DepthTextureScale ? DepthTextureScale?.id : undefined} value={typeof DepthTextureScale === "object" && "value" in DepthTextureScale ? DepthTextureScale?.value : DepthTextureScale} /* default: [0; 0] */  isRaw={typeof DepthTextureScale === "object" && "isRaw" in DepthTextureScale && DepthTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DepthFrom" id={typeof DepthFrom === "object" && "id" in DepthFrom ? DepthFrom?.id : undefined} value={typeof DepthFrom === "object" && "value" in DepthFrom ? DepthFrom?.value : DepthFrom} /* default: 0 */  isRaw={typeof DepthFrom === "object" && "isRaw" in DepthFrom && DepthFrom.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DepthTo" id={typeof DepthTo === "object" && "id" in DepthTo ? DepthTo?.id : undefined} value={typeof DepthTo === "object" && "value" in DepthTo ? DepthTo?.value : DepthTo} /* default: 0 */  isRaw={typeof DepthTo === "object" && "isRaw" in DepthTo && DepthTo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FieldOfView" id={typeof FieldOfView === "object" && "id" in FieldOfView ? FieldOfView?.id : undefined} value={typeof FieldOfView === "object" && "value" in FieldOfView ? FieldOfView?.value : FieldOfView} /* default: [0; 0] */  isRaw={typeof FieldOfView === "object" && "isRaw" in FieldOfView && FieldOfView.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NearClip" id={typeof NearClip === "object" && "id" in NearClip ? NearClip?.id : undefined} value={typeof NearClip === "object" && "value" in NearClip ? NearClip?.value : NearClip} /* default: 0 */  isRaw={typeof NearClip === "object" && "isRaw" in NearClip && NearClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FarClip" id={typeof FarClip === "object" && "id" in FarClip ? FarClip?.id : undefined} value={typeof FarClip === "object" && "value" in FarClip ? FarClip?.value : FarClip} /* default: 0 */  isRaw={typeof FarClip === "object" && "isRaw" in FarClip && FarClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DiscardThreshold" id={typeof DiscardThreshold === "object" && "id" in DiscardThreshold ? DiscardThreshold?.id : undefined} value={typeof DiscardThreshold === "object" && "value" in DiscardThreshold ? DiscardThreshold?.value : DiscardThreshold} /* default: 0 */  isRaw={typeof DiscardThreshold === "object" && "isRaw" in DiscardThreshold && DiscardThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DiscardOffset" id={typeof DiscardOffset === "object" && "id" in DiscardOffset ? DiscardOffset?.id : undefined} value={typeof DiscardOffset === "object" && "value" in DiscardOffset ? DiscardOffset?.value : DiscardOffset} /* default: 0 */  isRaw={typeof DiscardOffset === "object" && "isRaw" in DiscardOffset && DiscardOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
        </Component>
      );
    };
    