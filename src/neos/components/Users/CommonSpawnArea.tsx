import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CommonSpawnAreaInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SpawnPointGenerator?: member<any>;
FloorPointRay?: member<[number, number, number]>;
OtherUserCheckRadius?: member<number>;
ParentUser?: member<boolean>;
OrientUser?: member<boolean>;
ScaleUser?: member<boolean>;
Capacity?: member<number>;
BaseWeight?: member<number>;
PositionNode?: member<any>;
RotationNode?: member<any>;
    }
    
    export function CommonSpawnArea(props: CommonSpawnAreaInput){
      const { id, persistentId, updateOrder, Enabled,
SpawnPointGenerator,
FloorPointRay,
OtherUserCheckRadius,
ParentUser,
OrientUser,
ScaleUser,
Capacity,
BaseWeight,
PositionNode,
RotationNode, } = props;
    
      return (
        <Component type="FrooxEngine.CommonSpawnArea" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPointGenerator]`} name="SpawnPointGenerator" id={typeof SpawnPointGenerator === "object" && "id" in SpawnPointGenerator ? SpawnPointGenerator?.id : undefined} value={typeof SpawnPointGenerator === "object" && "value" in SpawnPointGenerator ? SpawnPointGenerator?.value : SpawnPointGenerator} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="FloorPointRay" id={typeof FloorPointRay === "object" && "id" in FloorPointRay ? FloorPointRay?.id : undefined} value={typeof FloorPointRay === "object" && "value" in FloorPointRay ? FloorPointRay?.value : FloorPointRay} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OtherUserCheckRadius" id={typeof OtherUserCheckRadius === "object" && "id" in OtherUserCheckRadius ? OtherUserCheckRadius?.id : undefined} value={typeof OtherUserCheckRadius === "object" && "value" in OtherUserCheckRadius ? OtherUserCheckRadius?.value : OtherUserCheckRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParentUser" id={typeof ParentUser === "object" && "id" in ParentUser ? ParentUser?.id : undefined} value={typeof ParentUser === "object" && "value" in ParentUser ? ParentUser?.value : ParentUser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OrientUser" id={typeof OrientUser === "object" && "id" in OrientUser ? OrientUser?.id : undefined} value={typeof OrientUser === "object" && "value" in OrientUser ? OrientUser?.value : OrientUser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScaleUser" id={typeof ScaleUser === "object" && "id" in ScaleUser ? ScaleUser?.id : undefined} value={typeof ScaleUser === "object" && "value" in ScaleUser ? ScaleUser?.value : ScaleUser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Capacity" id={typeof Capacity === "object" && "id" in Capacity ? Capacity?.id : undefined} value={typeof Capacity === "object" && "value" in Capacity ? Capacity?.value : Capacity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BaseWeight" id={typeof BaseWeight === "object" && "id" in BaseWeight ? BaseWeight?.id : undefined} value={typeof BaseWeight === "object" && "value" in BaseWeight ? BaseWeight?.value : BaseWeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="PositionNode" id={typeof PositionNode === "object" && "id" in PositionNode ? PositionNode?.id : undefined} value={typeof PositionNode === "object" && "value" in PositionNode ? PositionNode?.value : PositionNode} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="RotationNode" id={typeof RotationNode === "object" && "id" in RotationNode ? RotationNode?.id : undefined} value={typeof RotationNode === "object" && "value" in RotationNode ? RotationNode?.value : RotationNode} /* default: None */  />
        </Component>
      );
    };
    