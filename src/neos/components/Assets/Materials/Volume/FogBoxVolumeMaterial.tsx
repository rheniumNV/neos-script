import { member, Member, Component } from "../../../../core";
    
    export interface FogBoxVolumeMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
BaseColor?: member<[number, number, number, number]>;
AccumulationColor?: member<[number, number, number, number]>;
AccumulationColorBottom?: member<[number, number, number, number]>;
AccumulationColorTop?: member<[number, number, number, number]>;
FogStart?: member<number>;
FogEnd?: member<number>;
FogDensity?: member<number>;
WorldSpace?: member<boolean>;
ColorMode?: member<any>;
SaturationMode?: member<any>;
AccumulationMode?: member<any>;
AccumulationRate?: member<number>;
BlendMode?: member<any>;
RenderQueue?: member<number>;
    }
    
    export function FogBoxVolumeMaterial(props: FogBoxVolumeMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
BaseColor,
AccumulationColor,
AccumulationColorBottom,
AccumulationColorTop,
FogStart,
FogEnd,
FogDensity,
WorldSpace,
ColorMode,
SaturationMode,
AccumulationMode,
AccumulationRate,
BlendMode,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.FogBoxVolumeMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BaseColor" id={typeof BaseColor === "object" && "id" in BaseColor ? BaseColor?.id : undefined} value={typeof BaseColor === "object" && "value" in BaseColor ? BaseColor?.value : BaseColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BaseColor === "object" && "isRaw" in BaseColor && BaseColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AccumulationColor" id={typeof AccumulationColor === "object" && "id" in AccumulationColor ? AccumulationColor?.id : undefined} value={typeof AccumulationColor === "object" && "value" in AccumulationColor ? AccumulationColor?.value : AccumulationColor} /* default: [0; 0; 0; 0] */  isRaw={typeof AccumulationColor === "object" && "isRaw" in AccumulationColor && AccumulationColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AccumulationColorBottom" id={typeof AccumulationColorBottom === "object" && "id" in AccumulationColorBottom ? AccumulationColorBottom?.id : undefined} value={typeof AccumulationColorBottom === "object" && "value" in AccumulationColorBottom ? AccumulationColorBottom?.value : AccumulationColorBottom} /* default: [0; 0; 0; 0] */  isRaw={typeof AccumulationColorBottom === "object" && "isRaw" in AccumulationColorBottom && AccumulationColorBottom.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AccumulationColorTop" id={typeof AccumulationColorTop === "object" && "id" in AccumulationColorTop ? AccumulationColorTop?.id : undefined} value={typeof AccumulationColorTop === "object" && "value" in AccumulationColorTop ? AccumulationColorTop?.value : AccumulationColorTop} /* default: [0; 0; 0; 0] */  isRaw={typeof AccumulationColorTop === "object" && "isRaw" in AccumulationColorTop && AccumulationColorTop.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FogStart" id={typeof FogStart === "object" && "id" in FogStart ? FogStart?.id : undefined} value={typeof FogStart === "object" && "value" in FogStart ? FogStart?.value : FogStart} /* default: 0 */  isRaw={typeof FogStart === "object" && "isRaw" in FogStart && FogStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FogEnd" id={typeof FogEnd === "object" && "id" in FogEnd ? FogEnd?.id : undefined} value={typeof FogEnd === "object" && "value" in FogEnd ? FogEnd?.value : FogEnd} /* default: 0 */  isRaw={typeof FogEnd === "object" && "isRaw" in FogEnd && FogEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FogDensity" id={typeof FogDensity === "object" && "id" in FogDensity ? FogDensity?.id : undefined} value={typeof FogDensity === "object" && "value" in FogDensity ? FogDensity?.value : FogDensity} /* default: 0 */  isRaw={typeof FogDensity === "object" && "isRaw" in FogDensity && FogDensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WorldSpace" id={typeof WorldSpace === "object" && "id" in WorldSpace ? WorldSpace?.id : undefined} value={typeof WorldSpace === "object" && "value" in WorldSpace ? WorldSpace?.value : WorldSpace} /* default: false */  isRaw={typeof WorldSpace === "object" && "isRaw" in WorldSpace && WorldSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.FogBoxVolumeMaterial+Color]`} name="ColorMode" id={typeof ColorMode === "object" && "id" in ColorMode ? ColorMode?.id : undefined} value={typeof ColorMode === "object" && "value" in ColorMode ? ColorMode?.value : ColorMode} /* default: Constant */  isRaw={typeof ColorMode === "object" && "isRaw" in ColorMode && ColorMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.FogBoxVolumeMaterial+Saturation]`} name="SaturationMode" id={typeof SaturationMode === "object" && "id" in SaturationMode ? SaturationMode?.id : undefined} value={typeof SaturationMode === "object" && "value" in SaturationMode ? SaturationMode?.value : SaturationMode} /* default: Unrestricted */  isRaw={typeof SaturationMode === "object" && "isRaw" in SaturationMode && SaturationMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.FogBoxVolumeMaterial+Accumulation]`} name="AccumulationMode" id={typeof AccumulationMode === "object" && "id" in AccumulationMode ? AccumulationMode?.id : undefined} value={typeof AccumulationMode === "object" && "value" in AccumulationMode ? AccumulationMode?.value : AccumulationMode} /* default: Linear */  isRaw={typeof AccumulationMode === "object" && "isRaw" in AccumulationMode && AccumulationMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AccumulationRate" id={typeof AccumulationRate === "object" && "id" in AccumulationRate ? AccumulationRate?.id : undefined} value={typeof AccumulationRate === "object" && "value" in AccumulationRate ? AccumulationRate?.value : AccumulationRate} /* default: 0 */  isRaw={typeof AccumulationRate === "object" && "isRaw" in AccumulationRate && AccumulationRate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
        </Component>
      );
    };
    