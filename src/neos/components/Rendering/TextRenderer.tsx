import { member, Member, Component } from "../../core";
    
    export interface TextRendererInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Font?: member<any>;
Text?: member<any>;
ParseRichText?: member<boolean>;
NullText?: member<any>;
Size?: member<number>;
HorizontalAlign?: member<any>;
VerticalAlign?: member<any>;
AlignmentMode?: member<any>;
Color?: member<[number, number, number, number]>;
Materials?: member<Array<{ID:string, Data:string}>>;
LineHeight?: member<number>;
Bounded?: member<boolean>;
BoundsSize?: member<[number, number]>;
BoundsAlignment?: member<any>;
MaskPattern?: member<any>;
HorizontalAutoSize?: member<boolean>;
VerticalAutoSize?: member<boolean>;
CaretPosition?: member<number>;
SelectionStart?: member<number>;
CaretColor?: member<[number, number, number, number]>;
SelectionColor?: member<[number, number, number, number]>;
_legacyFontMaterial?: member<any>;
_legacyAlign?: member<any>;
    }
    
    export function TextRenderer(props: TextRendererInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Font,
Text,
ParseRichText,
NullText,
Size,
HorizontalAlign,
VerticalAlign,
AlignmentMode,
Color,
Materials,
LineHeight,
Bounded,
BoundsSize,
BoundsAlignment,
MaskPattern,
HorizontalAutoSize,
VerticalAutoSize,
CaretPosition,
SelectionStart,
CaretColor,
SelectionColor,
_legacyFontMaterial,
_legacyAlign, } = props;
    
      return (
        <Component type="FrooxEngine.TextRenderer" id={id} persistentId={persistentId} updateOrder={updateOrder} version={5}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.FontSet]`} name="Font" id={typeof Font === "object" && "id" in Font ? Font?.id : undefined} value={typeof Font === "object" && "value" in Font ? Font?.value : Font} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParseRichText" id={typeof ParseRichText === "object" && "id" in ParseRichText ? ParseRichText?.id : undefined} value={typeof ParseRichText === "object" && "value" in ParseRichText ? ParseRichText?.value : ParseRichText} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="NullText" id={typeof NullText === "object" && "id" in NullText ? NullText?.id : undefined} value={typeof NullText === "object" && "value" in NullText ? NullText?.value : NullText} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[CodeX.TextHorizontalAlignment]`} name="HorizontalAlign" id={typeof HorizontalAlign === "object" && "id" in HorizontalAlign ? HorizontalAlign?.id : undefined} value={typeof HorizontalAlign === "object" && "value" in HorizontalAlign ? HorizontalAlign?.value : HorizontalAlign} /* default: Left */  />
<Member type={`FrooxEngine.Sync\`1[CodeX.TextVerticalAlignment]`} name="VerticalAlign" id={typeof VerticalAlign === "object" && "id" in VerticalAlign ? VerticalAlign?.id : undefined} value={typeof VerticalAlign === "object" && "value" in VerticalAlign ? VerticalAlign?.value : VerticalAlign} /* default: Top */  />
<Member type={`FrooxEngine.Sync\`1[CodeX.AlignmentMode]`} name="AlignmentMode" id={typeof AlignmentMode === "object" && "id" in AlignmentMode ? AlignmentMode?.id : undefined} value={typeof AlignmentMode === "object" && "value" in AlignmentMode ? AlignmentMode?.value : AlignmentMode} /* default: Geometric */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.Material]`} name="Materials" id={typeof Materials === "object" && "id" in Materials ? Materials?.id : undefined} value={typeof Materials === "object" && "value" in Materials ? Materials?.value : Materials} /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.Material] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LineHeight" id={typeof LineHeight === "object" && "id" in LineHeight ? LineHeight?.id : undefined} value={typeof LineHeight === "object" && "value" in LineHeight ? LineHeight?.value : LineHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Bounded" id={typeof Bounded === "object" && "id" in Bounded ? Bounded?.id : undefined} value={typeof Bounded === "object" && "value" in Bounded ? Bounded?.value : Bounded} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="BoundsSize" id={typeof BoundsSize === "object" && "id" in BoundsSize ? BoundsSize?.id : undefined} value={typeof BoundsSize === "object" && "value" in BoundsSize ? BoundsSize?.value : BoundsSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.Alignment]`} name="BoundsAlignment" id={typeof BoundsAlignment === "object" && "id" in BoundsAlignment ? BoundsAlignment?.id : undefined} value={typeof BoundsAlignment === "object" && "value" in BoundsAlignment ? BoundsAlignment?.value : BoundsAlignment} /* default: TopLeft */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="MaskPattern" id={typeof MaskPattern === "object" && "id" in MaskPattern ? MaskPattern?.id : undefined} value={typeof MaskPattern === "object" && "value" in MaskPattern ? MaskPattern?.value : MaskPattern} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HorizontalAutoSize" id={typeof HorizontalAutoSize === "object" && "id" in HorizontalAutoSize ? HorizontalAutoSize?.id : undefined} value={typeof HorizontalAutoSize === "object" && "value" in HorizontalAutoSize ? HorizontalAutoSize?.value : HorizontalAutoSize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="VerticalAutoSize" id={typeof VerticalAutoSize === "object" && "id" in VerticalAutoSize ? VerticalAutoSize?.id : undefined} value={typeof VerticalAutoSize === "object" && "value" in VerticalAutoSize ? VerticalAutoSize?.value : VerticalAutoSize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="CaretPosition" id={typeof CaretPosition === "object" && "id" in CaretPosition ? CaretPosition?.id : undefined} value={typeof CaretPosition === "object" && "value" in CaretPosition ? CaretPosition?.value : CaretPosition} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SelectionStart" id={typeof SelectionStart === "object" && "id" in SelectionStart ? SelectionStart?.id : undefined} value={typeof SelectionStart === "object" && "value" in SelectionStart ? SelectionStart?.value : SelectionStart} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="CaretColor" id={typeof CaretColor === "object" && "id" in CaretColor ? CaretColor?.id : undefined} value={typeof CaretColor === "object" && "value" in CaretColor ? CaretColor?.value : CaretColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SelectionColor" id={typeof SelectionColor === "object" && "id" in SelectionColor ? SelectionColor?.id : undefined} value={typeof SelectionColor === "object" && "value" in SelectionColor ? SelectionColor?.value : SelectionColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FontMaterial]`} name="_legacyFontMaterial-ID" id={typeof _legacyFontMaterial === "object" && "id" in _legacyFontMaterial ? _legacyFontMaterial?.id : undefined} value={typeof _legacyFontMaterial === "object" && "value" in _legacyFontMaterial ? _legacyFontMaterial?.value : _legacyFontMaterial} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[BaseX.Alignment]`} name="_legacyAlign-ID" id={typeof _legacyAlign === "object" && "id" in _legacyAlign ? _legacyAlign?.id : undefined} value={typeof _legacyAlign === "object" && "value" in _legacyAlign ? _legacyAlign?.value : _legacyAlign} /* default: TopLeft */ idOnly />
        </Component>
      );
    };
    