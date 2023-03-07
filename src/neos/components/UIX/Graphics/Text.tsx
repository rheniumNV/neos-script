import { member, Member, Component } from "../../../core";
    
    export interface TextInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Font?: member<any>;
Content?: member<any>;
ParseRichText?: member<boolean>;
NullContent?: member<any>;
Size?: member<number>;
HorizontalAlign?: member<any>;
VerticalAlign?: member<any>;
AlignmentMode?: member<any>;
Color?: member<[number, number, number, number]>;
Materials?: member<Array<{ID:string, Data:string}>>;
LineHeight?: member<number>;
MaskPattern?: member<any>;
HorizontalAutoSize?: member<boolean>;
VerticalAutoSize?: member<boolean>;
AutoSizeMin?: member<number>;
AutoSizeMax?: member<number>;
CaretPosition?: member<number>;
SelectionStart?: member<number>;
CaretColor?: member<[number, number, number, number]>;
SelectionColor?: member<[number, number, number, number]>;
InteractionTarget?: member<boolean>;
_legacyFontMaterial?: member<any>;
_legacyAlign?: member<any>;
    }
    
    export function Text(props: TextInput){
      const { id, persistentId, updateOrder, Enabled,
Font,
Content,
ParseRichText,
NullContent,
Size,
HorizontalAlign,
VerticalAlign,
AlignmentMode,
Color,
Materials,
LineHeight,
MaskPattern,
HorizontalAutoSize,
VerticalAutoSize,
AutoSizeMin,
AutoSizeMax,
CaretPosition,
SelectionStart,
CaretColor,
SelectionColor,
InteractionTarget,
_legacyFontMaterial,
_legacyAlign, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.Text" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.FontSet]`} name="Font" id={typeof Font === "object" && "id" in Font ? Font?.id : undefined} value={typeof Font === "object" && "value" in Font ? Font?.value : Font} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Content" id={typeof Content === "object" && "id" in Content ? Content?.id : undefined} value={typeof Content === "object" && "value" in Content ? Content?.value : Content} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParseRichText" id={typeof ParseRichText === "object" && "id" in ParseRichText ? ParseRichText?.id : undefined} value={typeof ParseRichText === "object" && "value" in ParseRichText ? ParseRichText?.value : ParseRichText} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="NullContent" id={typeof NullContent === "object" && "id" in NullContent ? NullContent?.id : undefined} value={typeof NullContent === "object" && "value" in NullContent ? NullContent?.value : NullContent} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[CodeX.TextHorizontalAlignment]`} name="HorizontalAlign" id={typeof HorizontalAlign === "object" && "id" in HorizontalAlign ? HorizontalAlign?.id : undefined} value={typeof HorizontalAlign === "object" && "value" in HorizontalAlign ? HorizontalAlign?.value : HorizontalAlign} /* default: Left */  />
<Member type={`FrooxEngine.Sync\`1[CodeX.TextVerticalAlignment]`} name="VerticalAlign" id={typeof VerticalAlign === "object" && "id" in VerticalAlign ? VerticalAlign?.id : undefined} value={typeof VerticalAlign === "object" && "value" in VerticalAlign ? VerticalAlign?.value : VerticalAlign} /* default: Top */  />
<Member type={`FrooxEngine.Sync\`1[CodeX.AlignmentMode]`} name="AlignmentMode" id={typeof AlignmentMode === "object" && "id" in AlignmentMode ? AlignmentMode?.id : undefined} value={typeof AlignmentMode === "object" && "value" in AlignmentMode ? AlignmentMode?.value : AlignmentMode} /* default: Geometric */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.Material]`} name="Materials" id={typeof Materials === "object" && "id" in Materials ? Materials?.id : undefined} value={typeof Materials === "object" && "value" in Materials ? Materials?.value : Materials} /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.Material] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LineHeight" id={typeof LineHeight === "object" && "id" in LineHeight ? LineHeight?.id : undefined} value={typeof LineHeight === "object" && "value" in LineHeight ? LineHeight?.value : LineHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="MaskPattern" id={typeof MaskPattern === "object" && "id" in MaskPattern ? MaskPattern?.id : undefined} value={typeof MaskPattern === "object" && "value" in MaskPattern ? MaskPattern?.value : MaskPattern} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HorizontalAutoSize" id={typeof HorizontalAutoSize === "object" && "id" in HorizontalAutoSize ? HorizontalAutoSize?.id : undefined} value={typeof HorizontalAutoSize === "object" && "value" in HorizontalAutoSize ? HorizontalAutoSize?.value : HorizontalAutoSize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="VerticalAutoSize" id={typeof VerticalAutoSize === "object" && "id" in VerticalAutoSize ? VerticalAutoSize?.id : undefined} value={typeof VerticalAutoSize === "object" && "value" in VerticalAutoSize ? VerticalAutoSize?.value : VerticalAutoSize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AutoSizeMin" id={typeof AutoSizeMin === "object" && "id" in AutoSizeMin ? AutoSizeMin?.id : undefined} value={typeof AutoSizeMin === "object" && "value" in AutoSizeMin ? AutoSizeMin?.value : AutoSizeMin} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AutoSizeMax" id={typeof AutoSizeMax === "object" && "id" in AutoSizeMax ? AutoSizeMax?.id : undefined} value={typeof AutoSizeMax === "object" && "value" in AutoSizeMax ? AutoSizeMax?.value : AutoSizeMax} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="CaretPosition" id={typeof CaretPosition === "object" && "id" in CaretPosition ? CaretPosition?.id : undefined} value={typeof CaretPosition === "object" && "value" in CaretPosition ? CaretPosition?.value : CaretPosition} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SelectionStart" id={typeof SelectionStart === "object" && "id" in SelectionStart ? SelectionStart?.id : undefined} value={typeof SelectionStart === "object" && "value" in SelectionStart ? SelectionStart?.value : SelectionStart} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="CaretColor" id={typeof CaretColor === "object" && "id" in CaretColor ? CaretColor?.id : undefined} value={typeof CaretColor === "object" && "value" in CaretColor ? CaretColor?.value : CaretColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SelectionColor" id={typeof SelectionColor === "object" && "id" in SelectionColor ? SelectionColor?.id : undefined} value={typeof SelectionColor === "object" && "value" in SelectionColor ? SelectionColor?.value : SelectionColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="InteractionTarget" id={typeof InteractionTarget === "object" && "id" in InteractionTarget ? InteractionTarget?.id : undefined} value={typeof InteractionTarget === "object" && "value" in InteractionTarget ? InteractionTarget?.value : InteractionTarget} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FontMaterial]`} name="_legacyFontMaterial-ID" id={typeof _legacyFontMaterial === "object" && "id" in _legacyFontMaterial ? _legacyFontMaterial?.id : undefined} value={typeof _legacyFontMaterial === "object" && "value" in _legacyFontMaterial ? _legacyFontMaterial?.value : _legacyFontMaterial} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[BaseX.Alignment]`} name="_legacyAlign-ID" id={typeof _legacyAlign === "object" && "id" in _legacyAlign ? _legacyAlign?.id : undefined} value={typeof _legacyAlign === "object" && "value" in _legacyAlign ? _legacyAlign?.value : _legacyAlign} /* default: TopLeft */ idOnly />
        </Component>
      );
    };
    