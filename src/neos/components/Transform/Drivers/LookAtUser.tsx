import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LookAtUserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
TargetAtLocalUser?: member<boolean>;
SourcePositionOffset?: member<[number, number, number]>;
Invert?: member<boolean>;
RotationOffset?: member<any>;
PositionSource?: member<any>;
AroundAxis?: member<boolean>;
Axis?: member<[number, number, number]>;
_rotationDrive?: member<any>;
    }
    
    export function LookAtUser(props: LookAtUserInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser,
TargetAtLocalUser,
SourcePositionOffset,
Invert,
RotationOffset,
PositionSource,
AroundAxis,
Axis,
_rotationDrive, } = props;
    
      return (
        <Component type="FrooxEngine.LookAtUser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TargetAtLocalUser" id={typeof TargetAtLocalUser === "object" && "id" in TargetAtLocalUser ? TargetAtLocalUser?.id : undefined} value={typeof TargetAtLocalUser === "object" && "value" in TargetAtLocalUser ? TargetAtLocalUser?.value : TargetAtLocalUser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SourcePositionOffset" id={typeof SourcePositionOffset === "object" && "id" in SourcePositionOffset ? SourcePositionOffset?.id : undefined} value={typeof SourcePositionOffset === "object" && "value" in SourcePositionOffset ? SourcePositionOffset?.value : SourcePositionOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Invert" id={typeof Invert === "object" && "id" in Invert ? Invert?.id : undefined} value={typeof Invert === "object" && "value" in Invert ? Invert?.value : Invert} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.LookAtUser+UserNode]`} name="PositionSource" id={typeof PositionSource === "object" && "id" in PositionSource ? PositionSource?.id : undefined} value={typeof PositionSource === "object" && "value" in PositionSource ? PositionSource?.value : PositionSource} /* default: Root */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AroundAxis" id={typeof AroundAxis === "object" && "id" in AroundAxis ? AroundAxis?.id : undefined} value={typeof AroundAxis === "object" && "value" in AroundAxis ? AroundAxis?.value : AroundAxis} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotationDrive" id={typeof _rotationDrive === "object" && "id" in _rotationDrive ? _rotationDrive?.id : undefined} value={typeof _rotationDrive === "object" && "value" in _rotationDrive ? _rotationDrive?.value : _rotationDrive} /* default: ID0 */  />
        </Component>
      );
    };
    