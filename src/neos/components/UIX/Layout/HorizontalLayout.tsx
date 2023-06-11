import { member, Member, Component } from "../../../core";
    
    export interface HorizontalLayoutInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PaddingTop?: member<number>;
PaddingRight?: member<number>;
PaddingBottom?: member<number>;
PaddingLeft?: member<number>;
Spacing?: member<number>;
HorizontalAlign?: member<any>;
VerticalAlign?: member<any>;
ForceExpandWidth?: member<boolean>;
ForceExpandHeight?: member<boolean>;
    }
    
    export function HorizontalLayout(props: HorizontalLayoutInput){
      const { id, persistentId, updateOrder, Enabled,
PaddingTop,
PaddingRight,
PaddingBottom,
PaddingLeft,
Spacing,
HorizontalAlign,
VerticalAlign,
ForceExpandWidth,
ForceExpandHeight, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.HorizontalLayout" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PaddingTop" id={typeof PaddingTop === "object" && "id" in PaddingTop ? PaddingTop?.id : undefined} value={typeof PaddingTop === "object" && "value" in PaddingTop ? PaddingTop?.value : PaddingTop} /* default: 0 */  isRaw={typeof PaddingTop === "object" && "isRaw" in PaddingTop && PaddingTop.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PaddingRight" id={typeof PaddingRight === "object" && "id" in PaddingRight ? PaddingRight?.id : undefined} value={typeof PaddingRight === "object" && "value" in PaddingRight ? PaddingRight?.value : PaddingRight} /* default: 0 */  isRaw={typeof PaddingRight === "object" && "isRaw" in PaddingRight && PaddingRight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PaddingBottom" id={typeof PaddingBottom === "object" && "id" in PaddingBottom ? PaddingBottom?.id : undefined} value={typeof PaddingBottom === "object" && "value" in PaddingBottom ? PaddingBottom?.value : PaddingBottom} /* default: 0 */  isRaw={typeof PaddingBottom === "object" && "isRaw" in PaddingBottom && PaddingBottom.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PaddingLeft" id={typeof PaddingLeft === "object" && "id" in PaddingLeft ? PaddingLeft?.id : undefined} value={typeof PaddingLeft === "object" && "value" in PaddingLeft ? PaddingLeft?.value : PaddingLeft} /* default: 0 */  isRaw={typeof PaddingLeft === "object" && "isRaw" in PaddingLeft && PaddingLeft.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Spacing" id={typeof Spacing === "object" && "id" in Spacing ? Spacing?.id : undefined} value={typeof Spacing === "object" && "value" in Spacing ? Spacing?.value : Spacing} /* default: 0 */  isRaw={typeof Spacing === "object" && "isRaw" in Spacing && Spacing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutHorizontalAlignment]`} name="HorizontalAlign" id={typeof HorizontalAlign === "object" && "id" in HorizontalAlign ? HorizontalAlign?.id : undefined} value={typeof HorizontalAlign === "object" && "value" in HorizontalAlign ? HorizontalAlign?.value : HorizontalAlign} /* default: Left */  isRaw={typeof HorizontalAlign === "object" && "isRaw" in HorizontalAlign && HorizontalAlign.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutVerticalAlignment]`} name="VerticalAlign" id={typeof VerticalAlign === "object" && "id" in VerticalAlign ? VerticalAlign?.id : undefined} value={typeof VerticalAlign === "object" && "value" in VerticalAlign ? VerticalAlign?.value : VerticalAlign} /* default: Top */  isRaw={typeof VerticalAlign === "object" && "isRaw" in VerticalAlign && VerticalAlign.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceExpandWidth" id={typeof ForceExpandWidth === "object" && "id" in ForceExpandWidth ? ForceExpandWidth?.id : undefined} value={typeof ForceExpandWidth === "object" && "value" in ForceExpandWidth ? ForceExpandWidth?.value : ForceExpandWidth} /* default: false */  isRaw={typeof ForceExpandWidth === "object" && "isRaw" in ForceExpandWidth && ForceExpandWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceExpandHeight" id={typeof ForceExpandHeight === "object" && "id" in ForceExpandHeight ? ForceExpandHeight?.id : undefined} value={typeof ForceExpandHeight === "object" && "value" in ForceExpandHeight ? ForceExpandHeight?.value : ForceExpandHeight} /* default: false */  isRaw={typeof ForceExpandHeight === "object" && "isRaw" in ForceExpandHeight && ForceExpandHeight.isRaw ? true : undefined} />
        </Component>
      );
    };
    