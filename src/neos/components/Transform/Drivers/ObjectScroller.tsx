import { member, Member, Component } from "../../../core";
    
    export interface ObjectScrollerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Items?: member<any>;
Offset?: member<[number, number, number]>;
RegionSize?: member<[number, number, number]>;
    }
    
    export function ObjectScroller(props: ObjectScrollerInput){
      const { id, persistentId, updateOrder, Enabled,
Items,
Offset,
RegionSize, } = props;
    
      return (
        <Component type="FrooxEngine.ObjectScroller" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.ObjectScroller+Item]`} name="Items" id={typeof Items === "object" && "id" in Items ? Items?.id : undefined} value={typeof Items === "object" && "value" in Items ? Items?.value : Items} /* default: FrooxEngine.SyncList`1[FrooxEngine.ObjectScroller+Item] */  isRaw={typeof Items === "object" && "isRaw" in Items && Items.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="RegionSize" id={typeof RegionSize === "object" && "id" in RegionSize ? RegionSize?.id : undefined} value={typeof RegionSize === "object" && "value" in RegionSize ? RegionSize?.value : RegionSize} /* default: [0; 0; 0] */  isRaw={typeof RegionSize === "object" && "isRaw" in RegionSize && RegionSize.isRaw ? true : undefined} />
        </Component>
      );
    };
    