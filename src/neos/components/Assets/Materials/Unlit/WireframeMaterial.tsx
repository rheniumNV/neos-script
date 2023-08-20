import { member, Member, Component } from "../../../../core";
    
    export interface WireframeMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
Thickness?: member<number>;
ScreenSpace?: member<boolean>;
LineColor?: member<[number, number, number, number]>;
FillColor?: member<[number, number, number, number]>;
InnerLineColor?: member<[number, number, number, number]>;
InnerFillColor?: member<[number, number, number, number]>;
UseFresnel?: member<boolean>;
LineFarColor?: member<[number, number, number, number]>;
FillFarColor?: member<[number, number, number, number]>;
InnerLineFarColor?: member<[number, number, number, number]>;
InnerFillFarColor?: member<[number, number, number, number]>;
Exp?: member<number>;
Texture?: member<any>;
ZWrite?: member<any>;
DoubleSided?: member<boolean>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
_regular?: member<any>;
_regularDoubleSided?: member<any>;
    }
    
    export function WireframeMaterial(props: WireframeMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
Thickness,
ScreenSpace,
LineColor,
FillColor,
InnerLineColor,
InnerFillColor,
UseFresnel,
LineFarColor,
FillFarColor,
InnerLineFarColor,
InnerFillFarColor,
Exp,
Texture,
ZWrite,
DoubleSided,
OffsetFactor,
OffsetUnits,
RenderQueue,
_regular,
_regularDoubleSided, } = props;
    
      return (
        <Component type="FrooxEngine.WireframeMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  isRaw={typeof Thickness === "object" && "isRaw" in Thickness && Thickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScreenSpace" id={typeof ScreenSpace === "object" && "id" in ScreenSpace ? ScreenSpace?.id : undefined} value={typeof ScreenSpace === "object" && "value" in ScreenSpace ? ScreenSpace?.value : ScreenSpace} /* default: false */  isRaw={typeof ScreenSpace === "object" && "isRaw" in ScreenSpace && ScreenSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="LineColor" id={typeof LineColor === "object" && "id" in LineColor ? LineColor?.id : undefined} value={typeof LineColor === "object" && "value" in LineColor ? LineColor?.value : LineColor} /* default: [0; 0; 0; 0] */  isRaw={typeof LineColor === "object" && "isRaw" in LineColor && LineColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FillColor" id={typeof FillColor === "object" && "id" in FillColor ? FillColor?.id : undefined} value={typeof FillColor === "object" && "value" in FillColor ? FillColor?.value : FillColor} /* default: [0; 0; 0; 0] */  isRaw={typeof FillColor === "object" && "isRaw" in FillColor && FillColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="InnerLineColor" id={typeof InnerLineColor === "object" && "id" in InnerLineColor ? InnerLineColor?.id : undefined} value={typeof InnerLineColor === "object" && "value" in InnerLineColor ? InnerLineColor?.value : InnerLineColor} /* default: [0; 0; 0; 0] */  isRaw={typeof InnerLineColor === "object" && "isRaw" in InnerLineColor && InnerLineColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="InnerFillColor" id={typeof InnerFillColor === "object" && "id" in InnerFillColor ? InnerFillColor?.id : undefined} value={typeof InnerFillColor === "object" && "value" in InnerFillColor ? InnerFillColor?.value : InnerFillColor} /* default: [0; 0; 0; 0] */  isRaw={typeof InnerFillColor === "object" && "isRaw" in InnerFillColor && InnerFillColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseFresnel" id={typeof UseFresnel === "object" && "id" in UseFresnel ? UseFresnel?.id : undefined} value={typeof UseFresnel === "object" && "value" in UseFresnel ? UseFresnel?.value : UseFresnel} /* default: false */  isRaw={typeof UseFresnel === "object" && "isRaw" in UseFresnel && UseFresnel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="LineFarColor" id={typeof LineFarColor === "object" && "id" in LineFarColor ? LineFarColor?.id : undefined} value={typeof LineFarColor === "object" && "value" in LineFarColor ? LineFarColor?.value : LineFarColor} /* default: [0; 0; 0; 0] */  isRaw={typeof LineFarColor === "object" && "isRaw" in LineFarColor && LineFarColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FillFarColor" id={typeof FillFarColor === "object" && "id" in FillFarColor ? FillFarColor?.id : undefined} value={typeof FillFarColor === "object" && "value" in FillFarColor ? FillFarColor?.value : FillFarColor} /* default: [0; 0; 0; 0] */  isRaw={typeof FillFarColor === "object" && "isRaw" in FillFarColor && FillFarColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="InnerLineFarColor" id={typeof InnerLineFarColor === "object" && "id" in InnerLineFarColor ? InnerLineFarColor?.id : undefined} value={typeof InnerLineFarColor === "object" && "value" in InnerLineFarColor ? InnerLineFarColor?.value : InnerLineFarColor} /* default: [0; 0; 0; 0] */  isRaw={typeof InnerLineFarColor === "object" && "isRaw" in InnerLineFarColor && InnerLineFarColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="InnerFillFarColor" id={typeof InnerFillFarColor === "object" && "id" in InnerFillFarColor ? InnerFillFarColor?.id : undefined} value={typeof InnerFillFarColor === "object" && "value" in InnerFillFarColor ? InnerFillFarColor?.value : InnerFillFarColor} /* default: [0; 0; 0; 0] */  isRaw={typeof InnerFillFarColor === "object" && "isRaw" in InnerFillFarColor && InnerFillFarColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exp" id={typeof Exp === "object" && "id" in Exp ? Exp?.id : undefined} value={typeof Exp === "object" && "value" in Exp ? Exp?.value : Exp} /* default: 0 */  isRaw={typeof Exp === "object" && "isRaw" in Exp && Exp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DoubleSided" id={typeof DoubleSided === "object" && "id" in DoubleSided ? DoubleSided?.id : undefined} value={typeof DoubleSided === "object" && "value" in DoubleSided ? DoubleSided?.value : DoubleSided} /* default: false */  isRaw={typeof DoubleSided === "object" && "isRaw" in DoubleSided && DoubleSided.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_regular-ID" id={typeof _regular === "object" && "id" in _regular ? _regular?.id : undefined} value={typeof _regular === "object" && "value" in _regular ? _regular?.value : _regular} /* default: ID0 */ readOnly isRaw={typeof _regular === "object" && "isRaw" in _regular && _regular.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_regularDoubleSided-ID" id={typeof _regularDoubleSided === "object" && "id" in _regularDoubleSided ? _regularDoubleSided?.id : undefined} value={typeof _regularDoubleSided === "object" && "value" in _regularDoubleSided ? _regularDoubleSided?.value : _regularDoubleSided} /* default: ID0 */ readOnly isRaw={typeof _regularDoubleSided === "object" && "isRaw" in _regularDoubleSided && _regularDoubleSided.isRaw ? true : undefined} />
        </Component>
      );
    };
    