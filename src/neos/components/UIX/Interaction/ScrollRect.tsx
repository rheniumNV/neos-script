import { member, Member, Component } from "../../../core";
    
    export interface ScrollRectInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
NormalizedPosition?: member<[number, number]>;
HorizontalAlign?: member<any>;
VerticalAlign?: member<any>;
ViewportOverride?: member<any>;
__legacyContent?: member<any>;
    }
    
    export function ScrollRect(props: ScrollRectInput){
      const { id, persistentId, updateOrder, Enabled,
NormalizedPosition,
HorizontalAlign,
VerticalAlign,
ViewportOverride,
__legacyContent, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ScrollRect" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalizedPosition" id={typeof NormalizedPosition === "object" && "id" in NormalizedPosition ? NormalizedPosition?.id : undefined} value={typeof NormalizedPosition === "object" && "value" in NormalizedPosition ? NormalizedPosition?.value : NormalizedPosition} /* default: [0; 0] */  isRaw={typeof NormalizedPosition === "object" && "isRaw" in NormalizedPosition && NormalizedPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutHorizontalAlignment]`} name="HorizontalAlign" id={typeof HorizontalAlign === "object" && "id" in HorizontalAlign ? HorizontalAlign?.id : undefined} value={typeof HorizontalAlign === "object" && "value" in HorizontalAlign ? HorizontalAlign?.value : HorizontalAlign} /* default: Left */  isRaw={typeof HorizontalAlign === "object" && "isRaw" in HorizontalAlign && HorizontalAlign.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutVerticalAlignment]`} name="VerticalAlign" id={typeof VerticalAlign === "object" && "id" in VerticalAlign ? VerticalAlign?.id : undefined} value={typeof VerticalAlign === "object" && "value" in VerticalAlign ? VerticalAlign?.value : VerticalAlign} /* default: Top */  isRaw={typeof VerticalAlign === "object" && "isRaw" in VerticalAlign && VerticalAlign.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="ViewportOverride" id={typeof ViewportOverride === "object" && "id" in ViewportOverride ? ViewportOverride?.id : undefined} value={typeof ViewportOverride === "object" && "value" in ViewportOverride ? ViewportOverride?.value : ViewportOverride} /* default: ID0 */  isRaw={typeof ViewportOverride === "object" && "isRaw" in ViewportOverride && ViewportOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="__legacyContent-ID" id={typeof __legacyContent === "object" && "id" in __legacyContent ? __legacyContent?.id : undefined} value={typeof __legacyContent === "object" && "value" in __legacyContent ? __legacyContent?.value : __legacyContent} /* default: ID0 */ readOnly isRaw={typeof __legacyContent === "object" && "isRaw" in __legacyContent && __legacyContent.isRaw ? true : undefined} />
        </Component>
      );
    };
    