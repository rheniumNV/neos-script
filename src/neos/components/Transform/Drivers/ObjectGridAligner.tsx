import { member, Member, Component } from "../../../core";
    
    export interface ObjectGridAlignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoAddChildren?: member<boolean>;
ItemsPerRow?: member<number>;
CellSize?: member<[number, number]>;
LerpSpeed?: member<number>;
HorizontalAlignment?: member<any>;
VerticalAlignment?: member<any>;
RowAxis?: member<any>;
ColumnAxis?: member<any>;
Items?: member<any>;
    }
    
    export function ObjectGridAligner(props: ObjectGridAlignerInput){
      const { id, persistentId, updateOrder, Enabled,
AutoAddChildren,
ItemsPerRow,
CellSize,
LerpSpeed,
HorizontalAlignment,
VerticalAlignment,
RowAxis,
ColumnAxis,
Items, } = props;
    
      return (
        <Component type="FrooxEngine.ObjectGridAligner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddChildren" id={typeof AutoAddChildren === "object" && "id" in AutoAddChildren ? AutoAddChildren?.id : undefined} value={typeof AutoAddChildren === "object" && "value" in AutoAddChildren ? AutoAddChildren?.value : AutoAddChildren} /* default: false */  isRaw={typeof AutoAddChildren === "object" && "isRaw" in AutoAddChildren && AutoAddChildren.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ItemsPerRow" id={typeof ItemsPerRow === "object" && "id" in ItemsPerRow ? ItemsPerRow?.id : undefined} value={typeof ItemsPerRow === "object" && "value" in ItemsPerRow ? ItemsPerRow?.value : ItemsPerRow} /* default: 0 */  isRaw={typeof ItemsPerRow === "object" && "isRaw" in ItemsPerRow && ItemsPerRow.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="CellSize" id={typeof CellSize === "object" && "id" in CellSize ? CellSize?.id : undefined} value={typeof CellSize === "object" && "value" in CellSize ? CellSize?.value : CellSize} /* default: [0; 0] */  isRaw={typeof CellSize === "object" && "isRaw" in CellSize && CellSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LerpSpeed" id={typeof LerpSpeed === "object" && "id" in LerpSpeed ? LerpSpeed?.id : undefined} value={typeof LerpSpeed === "object" && "value" in LerpSpeed ? LerpSpeed?.value : LerpSpeed} /* default: 0 */  isRaw={typeof LerpSpeed === "object" && "isRaw" in LerpSpeed && LerpSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ObjectGridAligner+Align]`} name="HorizontalAlignment" id={typeof HorizontalAlignment === "object" && "id" in HorizontalAlignment ? HorizontalAlignment?.id : undefined} value={typeof HorizontalAlignment === "object" && "value" in HorizontalAlignment ? HorizontalAlignment?.value : HorizontalAlignment} /* default: Neg */  isRaw={typeof HorizontalAlignment === "object" && "isRaw" in HorizontalAlignment && HorizontalAlignment.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ObjectGridAligner+Align]`} name="VerticalAlignment" id={typeof VerticalAlignment === "object" && "id" in VerticalAlignment ? VerticalAlignment?.id : undefined} value={typeof VerticalAlignment === "object" && "value" in VerticalAlignment ? VerticalAlignment?.value : VerticalAlignment} /* default: Neg */  isRaw={typeof VerticalAlignment === "object" && "isRaw" in VerticalAlignment && VerticalAlignment.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ObjectGridAligner+AxisDir]`} name="RowAxis" id={typeof RowAxis === "object" && "id" in RowAxis ? RowAxis?.id : undefined} value={typeof RowAxis === "object" && "value" in RowAxis ? RowAxis?.value : RowAxis} /* default: Xpos */  isRaw={typeof RowAxis === "object" && "isRaw" in RowAxis && RowAxis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ObjectGridAligner+AxisDir]`} name="ColumnAxis" id={typeof ColumnAxis === "object" && "id" in ColumnAxis ? ColumnAxis?.id : undefined} value={typeof ColumnAxis === "object" && "value" in ColumnAxis ? ColumnAxis?.value : ColumnAxis} /* default: Xpos */  isRaw={typeof ColumnAxis === "object" && "isRaw" in ColumnAxis && ColumnAxis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.ObjectGridAligner+Item]`} name="Items" id={typeof Items === "object" && "id" in Items ? Items?.id : undefined} value={typeof Items === "object" && "value" in Items ? Items?.value : Items} /* default: FrooxEngine.SyncList`1[FrooxEngine.ObjectGridAligner+Item] */  isRaw={typeof Items === "object" && "isRaw" in Items && Items.isRaw ? true : undefined} />
        </Component>
      );
    };
    