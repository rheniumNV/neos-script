import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SpawnArcInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Weight?: member<number>;
Capacity?: member<number>;
Radius?: member<number>;
Arc?: member<number>;
UsersPerArc?: member<number>;
CenterArcOffset?: member<number>;
GrowBothSides?: member<boolean>;
RowHeightOffset?: member<number>;
OrientUser?: member<boolean>;
ParentUser?: member<boolean>;
TiltUsers?: member<boolean>;
PositionNode?: member<any>;
RotationNode?: member<any>;
_showTest?: member<boolean>;
_testSlots?: member<number>;
    }
    
    export function SpawnArc(props: SpawnArcInput){
      const { id, persistentId, updateOrder, Enabled,
Weight,
Capacity,
Radius,
Arc,
UsersPerArc,
CenterArcOffset,
GrowBothSides,
RowHeightOffset,
OrientUser,
ParentUser,
TiltUsers,
PositionNode,
RotationNode,
_showTest,
_testSlots, } = props;
    
      return (
        <Component type="FrooxEngine.SpawnArc" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Weight" id={typeof Weight === "object" && "id" in Weight ? Weight?.id : undefined} value={typeof Weight === "object" && "value" in Weight ? Weight?.value : Weight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Capacity" id={typeof Capacity === "object" && "id" in Capacity ? Capacity?.id : undefined} value={typeof Capacity === "object" && "value" in Capacity ? Capacity?.value : Capacity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Arc" id={typeof Arc === "object" && "id" in Arc ? Arc?.id : undefined} value={typeof Arc === "object" && "value" in Arc ? Arc?.value : Arc} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="UsersPerArc" id={typeof UsersPerArc === "object" && "id" in UsersPerArc ? UsersPerArc?.id : undefined} value={typeof UsersPerArc === "object" && "value" in UsersPerArc ? UsersPerArc?.value : UsersPerArc} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CenterArcOffset" id={typeof CenterArcOffset === "object" && "id" in CenterArcOffset ? CenterArcOffset?.id : undefined} value={typeof CenterArcOffset === "object" && "value" in CenterArcOffset ? CenterArcOffset?.value : CenterArcOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="GrowBothSides" id={typeof GrowBothSides === "object" && "id" in GrowBothSides ? GrowBothSides?.id : undefined} value={typeof GrowBothSides === "object" && "value" in GrowBothSides ? GrowBothSides?.value : GrowBothSides} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RowHeightOffset" id={typeof RowHeightOffset === "object" && "id" in RowHeightOffset ? RowHeightOffset?.id : undefined} value={typeof RowHeightOffset === "object" && "value" in RowHeightOffset ? RowHeightOffset?.value : RowHeightOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OrientUser" id={typeof OrientUser === "object" && "id" in OrientUser ? OrientUser?.id : undefined} value={typeof OrientUser === "object" && "value" in OrientUser ? OrientUser?.value : OrientUser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParentUser" id={typeof ParentUser === "object" && "id" in ParentUser ? ParentUser?.id : undefined} value={typeof ParentUser === "object" && "value" in ParentUser ? ParentUser?.value : ParentUser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TiltUsers" id={typeof TiltUsers === "object" && "id" in TiltUsers ? TiltUsers?.id : undefined} value={typeof TiltUsers === "object" && "value" in TiltUsers ? TiltUsers?.value : TiltUsers} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="PositionNode" id={typeof PositionNode === "object" && "id" in PositionNode ? PositionNode?.id : undefined} value={typeof PositionNode === "object" && "value" in PositionNode ? PositionNode?.value : PositionNode} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="RotationNode" id={typeof RotationNode === "object" && "id" in RotationNode ? RotationNode?.id : undefined} value={typeof RotationNode === "object" && "value" in RotationNode ? RotationNode?.value : RotationNode} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_showTest" id={typeof _showTest === "object" && "id" in _showTest ? _showTest?.id : undefined} value={typeof _showTest === "object" && "value" in _showTest ? _showTest?.value : _showTest} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_testSlots" id={typeof _testSlots === "object" && "id" in _testSlots ? _testSlots?.id : undefined} value={typeof _testSlots === "object" && "value" in _testSlots ? _testSlots?.value : _testSlots} /* default: 0 */  />
        </Component>
      );
    };
    