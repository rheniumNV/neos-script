import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface IKDraggableOffsetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Solver?: member<any>;
PositionTarget?: member<any>;
RotationTarget?: member<any>;
Weight?: member<any>;
_grabber?: member<any>;
_grabbingUser?: member<any>;
_holdSlot?: member<any>;
_posOffset?: member<[number, number, number]>;
_rotOffset?: member<any>;
    }
    
    export function IKDraggableOffset(props: IKDraggableOffsetInput){
      const { id, persistentId, updateOrder, Enabled,
Solver,
PositionTarget,
RotationTarget,
Weight,
_grabber,
_grabbingUser,
_holdSlot,
_posOffset,
_rotOffset, } = props;
    
      return (
        <Component type="FrooxEngine.FinalIK.IKDraggableOffset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FinalIK.IKSolver]`} name="Solver" id={typeof Solver === "object" && "id" in Solver ? Solver?.id : undefined} value={typeof Solver === "object" && "value" in Solver ? Solver?.value : Solver} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`} name="PositionTarget" id={typeof PositionTarget === "object" && "id" in PositionTarget ? PositionTarget?.id : undefined} value={typeof PositionTarget === "object" && "value" in PositionTarget ? PositionTarget?.value : PositionTarget} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Sync\`1[BaseX.floatQ]]`} name="RotationTarget" id={typeof RotationTarget === "object" && "id" in RotationTarget ? RotationTarget?.id : undefined} value={typeof RotationTarget === "object" && "value" in RotationTarget ? RotationTarget?.value : RotationTarget} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Sync\`1[System.Single]]`} name="Weight" id={typeof Weight === "object" && "id" in Weight ? Weight?.id : undefined} value={typeof Weight === "object" && "value" in Weight ? Weight?.value : Weight} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_grabber" id={typeof _grabber === "object" && "id" in _grabber ? _grabber?.id : undefined} value={typeof _grabber === "object" && "value" in _grabber ? _grabber?.value : _grabber} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_grabbingUser" id={typeof _grabbingUser === "object" && "id" in _grabbingUser ? _grabbingUser?.id : undefined} value={typeof _grabbingUser === "object" && "value" in _grabbingUser ? _grabbingUser?.value : _grabbingUser} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_holdSlot" id={typeof _holdSlot === "object" && "id" in _holdSlot ? _holdSlot?.id : undefined} value={typeof _holdSlot === "object" && "value" in _holdSlot ? _holdSlot?.value : _holdSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_posOffset" id={typeof _posOffset === "object" && "id" in _posOffset ? _posOffset?.id : undefined} value={typeof _posOffset === "object" && "value" in _posOffset ? _posOffset?.value : _posOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_rotOffset" id={typeof _rotOffset === "object" && "id" in _rotOffset ? _rotOffset?.id : undefined} value={typeof _rotOffset === "object" && "value" in _rotOffset ? _rotOffset?.value : _rotOffset} /* default: [0; 0; 0; 1] */  />
        </Component>
      );
    };
    