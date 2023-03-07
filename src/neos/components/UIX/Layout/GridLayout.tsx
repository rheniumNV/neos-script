import { member, Member, Component } from "../../../core";
    
    export interface GridLayoutInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PaddingTop?: member<number>;
PaddingRight?: member<number>;
PaddingBottom?: member<number>;
PaddingLeft?: member<number>;
CellSize?: member<[number, number]>;
Spacing?: member<[number, number]>;
HorizontalAlign?: member<any>;
VerticalAlign?: member<any>;
ExpandWidthToFit?: member<boolean>;
PreserveAspectOnExpand?: member<boolean>;
AlignLastRowIndividually?: member<boolean>;
    }
    
    export function GridLayout(props: GridLayoutInput){
      const { id, persistentId, updateOrder, Enabled,
PaddingTop,
PaddingRight,
PaddingBottom,
PaddingLeft,
CellSize,
Spacing,
HorizontalAlign,
VerticalAlign,
ExpandWidthToFit,
PreserveAspectOnExpand,
AlignLastRowIndividually, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.GridLayout" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PaddingTop" id={typeof PaddingTop === "object" && "id" in PaddingTop ? PaddingTop?.id : undefined} value={typeof PaddingTop === "object" && "value" in PaddingTop ? PaddingTop?.value : PaddingTop} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PaddingRight" id={typeof PaddingRight === "object" && "id" in PaddingRight ? PaddingRight?.id : undefined} value={typeof PaddingRight === "object" && "value" in PaddingRight ? PaddingRight?.value : PaddingRight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PaddingBottom" id={typeof PaddingBottom === "object" && "id" in PaddingBottom ? PaddingBottom?.id : undefined} value={typeof PaddingBottom === "object" && "value" in PaddingBottom ? PaddingBottom?.value : PaddingBottom} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PaddingLeft" id={typeof PaddingLeft === "object" && "id" in PaddingLeft ? PaddingLeft?.id : undefined} value={typeof PaddingLeft === "object" && "value" in PaddingLeft ? PaddingLeft?.value : PaddingLeft} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="CellSize" id={typeof CellSize === "object" && "id" in CellSize ? CellSize?.id : undefined} value={typeof CellSize === "object" && "value" in CellSize ? CellSize?.value : CellSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Spacing" id={typeof Spacing === "object" && "id" in Spacing ? Spacing?.id : undefined} value={typeof Spacing === "object" && "value" in Spacing ? Spacing?.value : Spacing} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutHorizontalAlignment]`} name="HorizontalAlign" id={typeof HorizontalAlign === "object" && "id" in HorizontalAlign ? HorizontalAlign?.id : undefined} value={typeof HorizontalAlign === "object" && "value" in HorizontalAlign ? HorizontalAlign?.value : HorizontalAlign} /* default: Left */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutVerticalAlignment]`} name="VerticalAlign" id={typeof VerticalAlign === "object" && "id" in VerticalAlign ? VerticalAlign?.id : undefined} value={typeof VerticalAlign === "object" && "value" in VerticalAlign ? VerticalAlign?.value : VerticalAlign} /* default: Top */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ExpandWidthToFit" id={typeof ExpandWidthToFit === "object" && "id" in ExpandWidthToFit ? ExpandWidthToFit?.id : undefined} value={typeof ExpandWidthToFit === "object" && "value" in ExpandWidthToFit ? ExpandWidthToFit?.value : ExpandWidthToFit} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveAspectOnExpand" id={typeof PreserveAspectOnExpand === "object" && "id" in PreserveAspectOnExpand ? PreserveAspectOnExpand?.id : undefined} value={typeof PreserveAspectOnExpand === "object" && "value" in PreserveAspectOnExpand ? PreserveAspectOnExpand?.value : PreserveAspectOnExpand} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlignLastRowIndividually" id={typeof AlignLastRowIndividually === "object" && "id" in AlignLastRowIndividually ? AlignLastRowIndividually?.id : undefined} value={typeof AlignLastRowIndividually === "object" && "value" in AlignLastRowIndividually ? AlignLastRowIndividually?.value : AlignLastRowIndividually} /* default: false */  />
        </Component>
      );
    };
    