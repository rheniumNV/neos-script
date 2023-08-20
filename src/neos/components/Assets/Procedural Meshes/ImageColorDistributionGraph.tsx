import { member, Member, Component } from "../../../core";
    
    export interface ImageColorDistributionGraphInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Texture?: member<any>;
ColorSpace?: member<any>;
MaxTextureSize?: member<number>;
BaseSize?: member<number>;
AccumulateSize?: member<number>;
MaxSize?: member<number>;
Scale?: member<[number, number, number]>;
AlphaThreshold?: member<number>;
    }
    
    export function ImageColorDistributionGraph(props: ImageColorDistributionGraphInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Texture,
ColorSpace,
MaxTextureSize,
BaseSize,
AccumulateSize,
MaxSize,
Scale,
AlphaThreshold, } = props;
    
      return (
        <Component type="FrooxEngine.ImageColorDistributionGraph" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ImageColorDistributionGraph+Space]`} name="ColorSpace" id={typeof ColorSpace === "object" && "id" in ColorSpace ? ColorSpace?.id : undefined} value={typeof ColorSpace === "object" && "value" in ColorSpace ? ColorSpace?.value : ColorSpace} /* default: RGB */  isRaw={typeof ColorSpace === "object" && "isRaw" in ColorSpace && ColorSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxTextureSize" id={typeof MaxTextureSize === "object" && "id" in MaxTextureSize ? MaxTextureSize?.id : undefined} value={typeof MaxTextureSize === "object" && "value" in MaxTextureSize ? MaxTextureSize?.value : MaxTextureSize} /* default: 0 */  isRaw={typeof MaxTextureSize === "object" && "isRaw" in MaxTextureSize && MaxTextureSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BaseSize" id={typeof BaseSize === "object" && "id" in BaseSize ? BaseSize?.id : undefined} value={typeof BaseSize === "object" && "value" in BaseSize ? BaseSize?.value : BaseSize} /* default: 0 */  isRaw={typeof BaseSize === "object" && "isRaw" in BaseSize && BaseSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AccumulateSize" id={typeof AccumulateSize === "object" && "id" in AccumulateSize ? AccumulateSize?.id : undefined} value={typeof AccumulateSize === "object" && "value" in AccumulateSize ? AccumulateSize?.value : AccumulateSize} /* default: 0 */  isRaw={typeof AccumulateSize === "object" && "isRaw" in AccumulateSize && AccumulateSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSize" id={typeof MaxSize === "object" && "id" in MaxSize ? MaxSize?.id : undefined} value={typeof MaxSize === "object" && "value" in MaxSize ? MaxSize?.value : MaxSize} /* default: 0 */  isRaw={typeof MaxSize === "object" && "isRaw" in MaxSize && MaxSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: [0; 0; 0] */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaThreshold" id={typeof AlphaThreshold === "object" && "id" in AlphaThreshold ? AlphaThreshold?.id : undefined} value={typeof AlphaThreshold === "object" && "value" in AlphaThreshold ? AlphaThreshold?.value : AlphaThreshold} /* default: 0 */  isRaw={typeof AlphaThreshold === "object" && "isRaw" in AlphaThreshold && AlphaThreshold.isRaw ? true : undefined} />
        </Component>
      );
    };
    