import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GrabbableReceiverSurfaceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ParentPlaced?: member<boolean>;
OverrideParent?: member<any>;
TweenTime?: member<number>;
MaxDistance?: member<number>;
Offset?: member<number>;
CheckOffset?: member<number>;
TagFilter?: member<any>;
    }
    
    export function GrabbableReceiverSurface(props: GrabbableReceiverSurfaceInput){
      const { id, persistentId, updateOrder, Enabled,
ParentPlaced,
OverrideParent,
TweenTime,
MaxDistance,
Offset,
CheckOffset,
TagFilter, } = props;
    
      return (
        <Component type="FrooxEngine.GrabbableReceiverSurface" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParentPlaced" id={typeof ParentPlaced === "object" && "id" in ParentPlaced ? ParentPlaced?.id : undefined} value={typeof ParentPlaced === "object" && "value" in ParentPlaced ? ParentPlaced?.value : ParentPlaced} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OverrideParent" id={typeof OverrideParent === "object" && "id" in OverrideParent ? OverrideParent?.id : undefined} value={typeof OverrideParent === "object" && "value" in OverrideParent ? OverrideParent?.value : OverrideParent} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TweenTime" id={typeof TweenTime === "object" && "id" in TweenTime ? TweenTime?.id : undefined} value={typeof TweenTime === "object" && "value" in TweenTime ? TweenTime?.value : TweenTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CheckOffset" id={typeof CheckOffset === "object" && "id" in CheckOffset ? CheckOffset?.id : undefined} value={typeof CheckOffset === "object" && "value" in CheckOffset ? CheckOffset?.value : CheckOffset} /* default: 0 */  />
<Member type={`FrooxEngine.TagFilter`} name="TagFilter" id={typeof TagFilter === "object" && "id" in TagFilter ? TagFilter?.id : undefined} value={typeof TagFilter === "object" && "value" in TagFilter ? TagFilter?.value : TagFilter} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TagFilter,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
        </Component>
      );
    };
    