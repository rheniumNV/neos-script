import { member, Member, Component } from "../../../core";
    
    export interface AxisMultiViewportPannerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ViewportIndex?: member<number>;
AnimationTime?: member<number>;
Direction?: member<any>;
Viewports?: member<any>;
    }
    
    export function AxisMultiViewportPanner(props: AxisMultiViewportPannerInput){
      const { id, persistentId, updateOrder, Enabled,
ViewportIndex,
AnimationTime,
Direction,
Viewports, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.AxisMultiViewportPanner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ViewportIndex" id={typeof ViewportIndex === "object" && "id" in ViewportIndex ? ViewportIndex?.id : undefined} value={typeof ViewportIndex === "object" && "value" in ViewportIndex ? ViewportIndex?.value : ViewportIndex} /* default: 0 */  isRaw={typeof ViewportIndex === "object" && "isRaw" in ViewportIndex && ViewportIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnimationTime" id={typeof AnimationTime === "object" && "id" in AnimationTime ? AnimationTime?.id : undefined} value={typeof AnimationTime === "object" && "value" in AnimationTime ? AnimationTime?.value : AnimationTime} /* default: 0 */  isRaw={typeof AnimationTime === "object" && "isRaw" in AnimationTime && AnimationTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.AxisMultiViewportPanner+AlignDirection]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: LeftToRight */  isRaw={typeof Direction === "object" && "isRaw" in Direction && Direction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UIX.AxisMultiViewportPanner+Viewport]`} name="Viewports" id={typeof Viewports === "object" && "id" in Viewports ? Viewports?.id : undefined} value={typeof Viewports === "object" && "value" in Viewports ? Viewports?.value : Viewports} /* default: FrooxEngine.SyncList`1[FrooxEngine.UIX.AxisMultiViewportPanner+Viewport] */  isRaw={typeof Viewports === "object" && "isRaw" in Viewports && Viewports.isRaw ? true : undefined} />
        </Component>
      );
    };
    