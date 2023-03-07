import { member, Member, Component } from "../../../../core";
    
    export interface AvatarPoseBoxConstraintInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BoxSize?: member<[number, number, number]>;
DefaultPoseReference?: member<any>;
    }
    
    export function AvatarPoseBoxConstraint(props: AvatarPoseBoxConstraintInput){
      const { id, persistentId, updateOrder, Enabled,
BoxSize,
DefaultPoseReference, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarPoseBoxConstraint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="BoxSize" id={typeof BoxSize === "object" && "id" in BoxSize ? BoxSize?.id : undefined} value={typeof BoxSize === "object" && "value" in BoxSize ? BoxSize?.value : BoxSize} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="DefaultPoseReference" id={typeof DefaultPoseReference === "object" && "id" in DefaultPoseReference ? DefaultPoseReference?.id : undefined} value={typeof DefaultPoseReference === "object" && "value" in DefaultPoseReference ? DefaultPoseReference?.value : DefaultPoseReference} /* default: ID0 */  />
        </Component>
      );
    };
    