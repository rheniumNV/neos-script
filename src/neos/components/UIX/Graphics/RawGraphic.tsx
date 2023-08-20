import { member, Member, Component } from "../../../core";
    
    export interface RawGraphicInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Material?: member<any>;
PropertyBlock?: member<any>;
FillRect?: member<any>;
Color?: member<[number, number, number, number]>;
UVRect?: member<any>;
Orientation?: member<any>;
Normal?: member<any>;
Tangent?: member<any>;
HideWithNoMaterial?: member<boolean>;
PreserveUVAspectRatio?: member<boolean>;
InteractionTarget?: member<boolean>;
    }
    
    export function RawGraphic(props: RawGraphicInput){
      const { id, persistentId, updateOrder, Enabled,
Material,
PropertyBlock,
FillRect,
Color,
UVRect,
Orientation,
Normal,
Tangent,
HideWithNoMaterial,
PreserveUVAspectRatio,
InteractionTarget, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.RawGraphic" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.MaterialPropertyBlock]`} name="PropertyBlock" id={typeof PropertyBlock === "object" && "id" in PropertyBlock ? PropertyBlock?.id : undefined} value={typeof PropertyBlock === "object" && "value" in PropertyBlock ? PropertyBlock?.value : PropertyBlock} /* default: ID0 */  isRaw={typeof PropertyBlock === "object" && "isRaw" in PropertyBlock && PropertyBlock.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.Rect]`} name="FillRect" id={typeof FillRect === "object" && "id" in FillRect ? FillRect?.id : undefined} value={typeof FillRect === "object" && "value" in FillRect ? FillRect?.value : FillRect} /* default: [X=0; Y=0; W=0; H=0] */  isRaw={typeof FillRect === "object" && "isRaw" in FillRect && FillRect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.Rect]`} name="UVRect" id={typeof UVRect === "object" && "id" in UVRect ? UVRect?.id : undefined} value={typeof UVRect === "object" && "value" in UVRect ? UVRect?.value : UVRect} /* default: [X=0; Y=0; W=0; H=0] */  isRaw={typeof UVRect === "object" && "isRaw" in UVRect && UVRect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.RectOrientation]`} name="Orientation" id={typeof Orientation === "object" && "id" in Orientation ? Orientation?.id : undefined} value={typeof Orientation === "object" && "value" in Orientation ? Orientation?.value : Orientation} /* default: Default */  isRaw={typeof Orientation === "object" && "isRaw" in Orientation && Orientation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="Normal" id={typeof Normal === "object" && "id" in Normal ? Normal?.id : undefined} value={typeof Normal === "object" && "value" in Normal ? Normal?.value : Normal} /* default: <i>null</i> */  isRaw={typeof Normal === "object" && "isRaw" in Normal && Normal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float4]]`} name="Tangent" id={typeof Tangent === "object" && "id" in Tangent ? Tangent?.id : undefined} value={typeof Tangent === "object" && "value" in Tangent ? Tangent?.value : Tangent} /* default: <i>null</i> */  isRaw={typeof Tangent === "object" && "isRaw" in Tangent && Tangent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HideWithNoMaterial" id={typeof HideWithNoMaterial === "object" && "id" in HideWithNoMaterial ? HideWithNoMaterial?.id : undefined} value={typeof HideWithNoMaterial === "object" && "value" in HideWithNoMaterial ? HideWithNoMaterial?.value : HideWithNoMaterial} /* default: false */  isRaw={typeof HideWithNoMaterial === "object" && "isRaw" in HideWithNoMaterial && HideWithNoMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveUVAspectRatio" id={typeof PreserveUVAspectRatio === "object" && "id" in PreserveUVAspectRatio ? PreserveUVAspectRatio?.id : undefined} value={typeof PreserveUVAspectRatio === "object" && "value" in PreserveUVAspectRatio ? PreserveUVAspectRatio?.value : PreserveUVAspectRatio} /* default: false */  isRaw={typeof PreserveUVAspectRatio === "object" && "isRaw" in PreserveUVAspectRatio && PreserveUVAspectRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="InteractionTarget" id={typeof InteractionTarget === "object" && "id" in InteractionTarget ? InteractionTarget?.id : undefined} value={typeof InteractionTarget === "object" && "value" in InteractionTarget ? InteractionTarget?.value : InteractionTarget} /* default: false */  isRaw={typeof InteractionTarget === "object" && "isRaw" in InteractionTarget && InteractionTarget.isRaw ? true : undefined} />
        </Component>
      );
    };
    