import { member, Member, Component } from "../../../core";
    
    export interface RaycastDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
IgnoreHierarchy?: member<any>;
FilterDistance?: member<number>;
Origin?: member<any>;
Offset?: member<[number, number, number]>;
Direction?: member<[number, number, number]>;
MaxDistance?: member<number>;
NoHitDistance?: member<number>;
Filter?: member<any>;
_positionDrive?: member<any>;
_rotationDrive?: member<any>;
    }
    
    export function RaycastDriver(props: RaycastDriverInput){
      const { id, persistentId, updateOrder, Enabled,
IgnoreHierarchy,
FilterDistance,
Origin,
Offset,
Direction,
MaxDistance,
NoHitDistance,
Filter,
_positionDrive,
_rotationDrive, } = props;
    
      return (
        <Component type="FrooxEngine.RaycastDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="IgnoreHierarchy" id={typeof IgnoreHierarchy === "object" && "id" in IgnoreHierarchy ? IgnoreHierarchy?.id : undefined} value={typeof IgnoreHierarchy === "object" && "value" in IgnoreHierarchy ? IgnoreHierarchy?.value : IgnoreHierarchy} /* default: ID0 */  isRaw={typeof IgnoreHierarchy === "object" && "isRaw" in IgnoreHierarchy && IgnoreHierarchy.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FilterDistance" id={typeof FilterDistance === "object" && "id" in FilterDistance ? FilterDistance?.id : undefined} value={typeof FilterDistance === "object" && "value" in FilterDistance ? FilterDistance?.value : FilterDistance} /* default: 0 */  isRaw={typeof FilterDistance === "object" && "isRaw" in FilterDistance && FilterDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Origin" id={typeof Origin === "object" && "id" in Origin ? Origin?.id : undefined} value={typeof Origin === "object" && "value" in Origin ? Origin?.value : Origin} /* default: ID0 */  isRaw={typeof Origin === "object" && "isRaw" in Origin && Origin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: [0; 0; 0] */  isRaw={typeof Direction === "object" && "isRaw" in Direction && Direction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  isRaw={typeof MaxDistance === "object" && "isRaw" in MaxDistance && MaxDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NoHitDistance" id={typeof NoHitDistance === "object" && "id" in NoHitDistance ? NoHitDistance?.id : undefined} value={typeof NoHitDistance === "object" && "value" in NoHitDistance ? NoHitDistance?.value : NoHitDistance} /* default: 0 */  isRaw={typeof NoHitDistance === "object" && "isRaw" in NoHitDistance && NoHitDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`2[FrooxEngine.ICollider,System.Boolean]]`} name="Filter" id={typeof Filter === "object" && "id" in Filter ? Filter?.id : undefined} value={typeof Filter === "object" && "value" in Filter ? Filter?.value : Filter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Filter === "object" && "isRaw" in Filter && Filter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_positionDrive" id={typeof _positionDrive === "object" && "id" in _positionDrive ? _positionDrive?.id : undefined} value={typeof _positionDrive === "object" && "value" in _positionDrive ? _positionDrive?.value : _positionDrive} /* default: ID0 */  isRaw={typeof _positionDrive === "object" && "isRaw" in _positionDrive && _positionDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotationDrive" id={typeof _rotationDrive === "object" && "id" in _rotationDrive ? _rotationDrive?.id : undefined} value={typeof _rotationDrive === "object" && "value" in _rotationDrive ? _rotationDrive?.value : _rotationDrive} /* default: ID0 */  isRaw={typeof _rotationDrive === "object" && "isRaw" in _rotationDrive && _rotationDrive.isRaw ? true : undefined} />
        </Component>
      );
    };
    