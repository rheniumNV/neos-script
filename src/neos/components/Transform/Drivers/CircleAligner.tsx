import { member, Member, Component } from "../../../core";
    
    export interface CircleAlignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoAddChildren?: member<boolean>;
Axis?: member<[number, number, number]>;
Radius?: member<number>;
Offset?: member<number>;
Arc?: member<number>;
FillWholeArc?: member<boolean>;
RotationOffset?: member<number>;
Items?: member<any>;
    }
    
    export function CircleAligner(props: CircleAlignerInput){
      const { id, persistentId, updateOrder, Enabled,
AutoAddChildren,
Axis,
Radius,
Offset,
Arc,
FillWholeArc,
RotationOffset,
Items, } = props;
    
      return (
        <Component type="FrooxEngine.CircleAligner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddChildren" id={typeof AutoAddChildren === "object" && "id" in AutoAddChildren ? AutoAddChildren?.id : undefined} value={typeof AutoAddChildren === "object" && "value" in AutoAddChildren ? AutoAddChildren?.value : AutoAddChildren} /* default: false */  isRaw={typeof AutoAddChildren === "object" && "isRaw" in AutoAddChildren && AutoAddChildren.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: [0; 0; 0] */  isRaw={typeof Axis === "object" && "isRaw" in Axis && Axis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: 0 */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Arc" id={typeof Arc === "object" && "id" in Arc ? Arc?.id : undefined} value={typeof Arc === "object" && "value" in Arc ? Arc?.value : Arc} /* default: 0 */  isRaw={typeof Arc === "object" && "isRaw" in Arc && Arc.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FillWholeArc" id={typeof FillWholeArc === "object" && "id" in FillWholeArc ? FillWholeArc?.id : undefined} value={typeof FillWholeArc === "object" && "value" in FillWholeArc ? FillWholeArc?.value : FillWholeArc} /* default: false */  isRaw={typeof FillWholeArc === "object" && "isRaw" in FillWholeArc && FillWholeArc.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: 0 */  isRaw={typeof RotationOffset === "object" && "isRaw" in RotationOffset && RotationOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CircleAligner+Item]`} name="Items" id={typeof Items === "object" && "id" in Items ? Items?.id : undefined} value={typeof Items === "object" && "value" in Items ? Items?.value : Items} /* default: FrooxEngine.SyncList`1[FrooxEngine.CircleAligner+Item] */  isRaw={typeof Items === "object" && "isRaw" in Items && Items.isRaw ? true : undefined} />
        </Component>
      );
    };
    