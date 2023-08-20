import { member, Member, Component } from "../../../core";
    
    export interface SnapperInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UseBoundingBoxCenter?: member<boolean>;
SnapCheckRadius?: member<number>;
CheckStaticColliders?: member<boolean>;
SnapTargetWhitelist?: member<any>;
Keywords?: member<any>;
    }
    
    export function Snapper(props: SnapperInput){
      const { id, persistentId, updateOrder, Enabled,
UseBoundingBoxCenter,
SnapCheckRadius,
CheckStaticColliders,
SnapTargetWhitelist,
Keywords, } = props;
    
      return (
        <Component type="FrooxEngine.Snapper" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseBoundingBoxCenter" id={typeof UseBoundingBoxCenter === "object" && "id" in UseBoundingBoxCenter ? UseBoundingBoxCenter?.id : undefined} value={typeof UseBoundingBoxCenter === "object" && "value" in UseBoundingBoxCenter ? UseBoundingBoxCenter?.value : UseBoundingBoxCenter} /* default: false */  isRaw={typeof UseBoundingBoxCenter === "object" && "isRaw" in UseBoundingBoxCenter && UseBoundingBoxCenter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapCheckRadius" id={typeof SnapCheckRadius === "object" && "id" in SnapCheckRadius ? SnapCheckRadius?.id : undefined} value={typeof SnapCheckRadius === "object" && "value" in SnapCheckRadius ? SnapCheckRadius?.value : SnapCheckRadius} /* default: 0 */  isRaw={typeof SnapCheckRadius === "object" && "isRaw" in SnapCheckRadius && SnapCheckRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CheckStaticColliders" id={typeof CheckStaticColliders === "object" && "id" in CheckStaticColliders ? CheckStaticColliders?.id : undefined} value={typeof CheckStaticColliders === "object" && "value" in CheckStaticColliders ? CheckStaticColliders?.value : CheckStaticColliders} /* default: false */  isRaw={typeof CheckStaticColliders === "object" && "isRaw" in CheckStaticColliders && CheckStaticColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.SnapTarget]`} name="SnapTargetWhitelist" id={typeof SnapTargetWhitelist === "object" && "id" in SnapTargetWhitelist ? SnapTargetWhitelist?.id : undefined} value={typeof SnapTargetWhitelist === "object" && "value" in SnapTargetWhitelist ? SnapTargetWhitelist?.value : SnapTargetWhitelist} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.SnapTarget] */  isRaw={typeof SnapTargetWhitelist === "object" && "isRaw" in SnapTargetWhitelist && SnapTargetWhitelist.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="Keywords" id={typeof Keywords === "object" && "id" in Keywords ? Keywords?.id : undefined} value={typeof Keywords === "object" && "value" in Keywords ? Keywords?.value : Keywords} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof Keywords === "object" && "isRaw" in Keywords && Keywords.isRaw ? true : undefined} />
        </Component>
      );
    };
    