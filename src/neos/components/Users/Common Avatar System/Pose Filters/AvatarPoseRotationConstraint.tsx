import { member, Member, Component } from "../../../../core";
    
    export interface AvatarPoseRotationConstraintInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MaxTwist?: member<number>;
MaxSwing?: member<number>;
Axis?: member<[number, number, number]>;
TwistReferenceAxis?: member<[number, number, number]>;
    }
    
    export function AvatarPoseRotationConstraint(props: AvatarPoseRotationConstraintInput){
      const { id, persistentId, updateOrder, Enabled,
MaxTwist,
MaxSwing,
Axis,
TwistReferenceAxis, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarPoseRotationConstraint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTwist" id={typeof MaxTwist === "object" && "id" in MaxTwist ? MaxTwist?.id : undefined} value={typeof MaxTwist === "object" && "value" in MaxTwist ? MaxTwist?.value : MaxTwist} /* default: 0 */  isRaw={typeof MaxTwist === "object" && "isRaw" in MaxTwist && MaxTwist.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSwing" id={typeof MaxSwing === "object" && "id" in MaxSwing ? MaxSwing?.id : undefined} value={typeof MaxSwing === "object" && "value" in MaxSwing ? MaxSwing?.value : MaxSwing} /* default: 0 */  isRaw={typeof MaxSwing === "object" && "isRaw" in MaxSwing && MaxSwing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: [0; 0; 0] */  isRaw={typeof Axis === "object" && "isRaw" in Axis && Axis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TwistReferenceAxis" id={typeof TwistReferenceAxis === "object" && "id" in TwistReferenceAxis ? TwistReferenceAxis?.id : undefined} value={typeof TwistReferenceAxis === "object" && "value" in TwistReferenceAxis ? TwistReferenceAxis?.value : TwistReferenceAxis} /* default: [0; 0; 0] */  isRaw={typeof TwistReferenceAxis === "object" && "isRaw" in TwistReferenceAxis && TwistReferenceAxis.isRaw ? true : undefined} />
        </Component>
      );
    };
    