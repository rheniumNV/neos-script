import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LookAtInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
TargetPoint?: member<[number, number, number]>;
TargetPointSpace?: member<any>;
Up?: member<[number, number, number]>;
RotationOffset?: member<any>;
SwingReference?: member<[number, number, number]>;
TwistReference?: member<[number, number, number]>;
MaxSwing?: member<number>;
MaxTwist?: member<number>;
_target?: member<any>;
    }
    
    export function LookAt(props: LookAtInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
TargetPoint,
TargetPointSpace,
Up,
RotationOffset,
SwingReference,
TwistReference,
MaxSwing,
MaxTwist,
_target, } = props;
    
      return (
        <Component type="FrooxEngine.LookAt" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetPoint" id={typeof TargetPoint === "object" && "id" in TargetPoint ? TargetPoint?.id : undefined} value={typeof TargetPoint === "object" && "value" in TargetPoint ? TargetPoint?.value : TargetPoint} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.RootSpace`} name="TargetPointSpace" id={typeof TargetPointSpace === "object" && "id" in TargetPointSpace ? TargetPointSpace?.id : undefined} value={typeof TargetPointSpace === "object" && "value" in TargetPointSpace ? TargetPointSpace?.value : TargetPointSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Up" id={typeof Up === "object" && "id" in Up ? Up?.id : undefined} value={typeof Up === "object" && "value" in Up ? Up?.value : Up} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SwingReference" id={typeof SwingReference === "object" && "id" in SwingReference ? SwingReference?.id : undefined} value={typeof SwingReference === "object" && "value" in SwingReference ? SwingReference?.value : SwingReference} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TwistReference" id={typeof TwistReference === "object" && "id" in TwistReference ? TwistReference?.id : undefined} value={typeof TwistReference === "object" && "value" in TwistReference ? TwistReference?.value : TwistReference} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSwing" id={typeof MaxSwing === "object" && "id" in MaxSwing ? MaxSwing?.id : undefined} value={typeof MaxSwing === "object" && "value" in MaxSwing ? MaxSwing?.value : MaxSwing} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTwist" id={typeof MaxTwist === "object" && "id" in MaxTwist ? MaxTwist?.id : undefined} value={typeof MaxTwist === "object" && "value" in MaxTwist ? MaxTwist?.value : MaxTwist} /* default: 0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  />
        </Component>
      );
    };
    