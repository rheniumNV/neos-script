import { member, Member, Component } from "../../../core";
    
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
Directions?: member<any>;
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
Directions,
TagFilter, } = props;
    
      return (
        <Component type="FrooxEngine.GrabbableReceiverSurface" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParentPlaced" id={typeof ParentPlaced === "object" && "id" in ParentPlaced ? ParentPlaced?.id : undefined} value={typeof ParentPlaced === "object" && "value" in ParentPlaced ? ParentPlaced?.value : ParentPlaced} /* default: false */  isRaw={typeof ParentPlaced === "object" && "isRaw" in ParentPlaced && ParentPlaced.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OverrideParent" id={typeof OverrideParent === "object" && "id" in OverrideParent ? OverrideParent?.id : undefined} value={typeof OverrideParent === "object" && "value" in OverrideParent ? OverrideParent?.value : OverrideParent} /* default: ID0 */  isRaw={typeof OverrideParent === "object" && "isRaw" in OverrideParent && OverrideParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TweenTime" id={typeof TweenTime === "object" && "id" in TweenTime ? TweenTime?.id : undefined} value={typeof TweenTime === "object" && "value" in TweenTime ? TweenTime?.value : TweenTime} /* default: 0 */  isRaw={typeof TweenTime === "object" && "isRaw" in TweenTime && TweenTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  isRaw={typeof MaxDistance === "object" && "isRaw" in MaxDistance && MaxDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: 0 */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CheckOffset" id={typeof CheckOffset === "object" && "id" in CheckOffset ? CheckOffset?.id : undefined} value={typeof CheckOffset === "object" && "value" in CheckOffset ? CheckOffset?.value : CheckOffset} /* default: 0 */  isRaw={typeof CheckOffset === "object" && "isRaw" in CheckOffset && CheckOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[BaseX.float3]`} name="Directions" id={typeof Directions === "object" && "id" in Directions ? Directions?.id : undefined} value={typeof Directions === "object" && "value" in Directions ? Directions?.value : Directions} /* default: FrooxEngine.SyncFieldList`1[BaseX.float3] */  isRaw={typeof Directions === "object" && "isRaw" in Directions && Directions.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TagFilter`} name="TagFilter" id={typeof TagFilter === "object" && "id" in TagFilter ? TagFilter?.id : undefined} value={typeof TagFilter === "object" && "value" in TagFilter ? TagFilter?.value : TagFilter} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TagFilter,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof TagFilter === "object" && "isRaw" in TagFilter && TagFilter.isRaw ? true : undefined} />
        </Component>
      );
    };
    