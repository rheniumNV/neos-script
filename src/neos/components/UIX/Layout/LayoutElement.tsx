import { member, Member, Component } from "../../../core";
    
    export interface LayoutElementInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MinWidth?: member<number>;
PreferredWidth?: member<number>;
FlexibleWidth?: member<number>;
MinHeight?: member<number>;
PreferredHeight?: member<number>;
FlexibleHeight?: member<number>;
Area?: member<number>;
Priority?: member<number>;
UseZeroMetrics?: member<boolean>;
    }
    
    export function LayoutElement(props: LayoutElementInput){
      const { id, persistentId, updateOrder, Enabled,
MinWidth,
PreferredWidth,
FlexibleWidth,
MinHeight,
PreferredHeight,
FlexibleHeight,
Area,
Priority,
UseZeroMetrics, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.LayoutElement" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinWidth" id={typeof MinWidth === "object" && "id" in MinWidth ? MinWidth?.id : undefined} value={typeof MinWidth === "object" && "value" in MinWidth ? MinWidth?.value : MinWidth} /* default: 0 */  isRaw={typeof MinWidth === "object" && "isRaw" in MinWidth && MinWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PreferredWidth" id={typeof PreferredWidth === "object" && "id" in PreferredWidth ? PreferredWidth?.id : undefined} value={typeof PreferredWidth === "object" && "value" in PreferredWidth ? PreferredWidth?.value : PreferredWidth} /* default: 0 */  isRaw={typeof PreferredWidth === "object" && "isRaw" in PreferredWidth && PreferredWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FlexibleWidth" id={typeof FlexibleWidth === "object" && "id" in FlexibleWidth ? FlexibleWidth?.id : undefined} value={typeof FlexibleWidth === "object" && "value" in FlexibleWidth ? FlexibleWidth?.value : FlexibleWidth} /* default: 0 */  isRaw={typeof FlexibleWidth === "object" && "isRaw" in FlexibleWidth && FlexibleWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinHeight" id={typeof MinHeight === "object" && "id" in MinHeight ? MinHeight?.id : undefined} value={typeof MinHeight === "object" && "value" in MinHeight ? MinHeight?.value : MinHeight} /* default: 0 */  isRaw={typeof MinHeight === "object" && "isRaw" in MinHeight && MinHeight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PreferredHeight" id={typeof PreferredHeight === "object" && "id" in PreferredHeight ? PreferredHeight?.id : undefined} value={typeof PreferredHeight === "object" && "value" in PreferredHeight ? PreferredHeight?.value : PreferredHeight} /* default: 0 */  isRaw={typeof PreferredHeight === "object" && "isRaw" in PreferredHeight && PreferredHeight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FlexibleHeight" id={typeof FlexibleHeight === "object" && "id" in FlexibleHeight ? FlexibleHeight?.id : undefined} value={typeof FlexibleHeight === "object" && "value" in FlexibleHeight ? FlexibleHeight?.value : FlexibleHeight} /* default: 0 */  isRaw={typeof FlexibleHeight === "object" && "isRaw" in FlexibleHeight && FlexibleHeight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Area" id={typeof Area === "object" && "id" in Area ? Area?.id : undefined} value={typeof Area === "object" && "value" in Area ? Area?.value : Area} /* default: 0 */  isRaw={typeof Area === "object" && "isRaw" in Area && Area.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: 0 */  isRaw={typeof Priority === "object" && "isRaw" in Priority && Priority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseZeroMetrics" id={typeof UseZeroMetrics === "object" && "id" in UseZeroMetrics ? UseZeroMetrics?.id : undefined} value={typeof UseZeroMetrics === "object" && "value" in UseZeroMetrics ? UseZeroMetrics?.value : UseZeroMetrics} /* default: false */  isRaw={typeof UseZeroMetrics === "object" && "isRaw" in UseZeroMetrics && UseZeroMetrics.isRaw ? true : undefined} />
        </Component>
      );
    };
    