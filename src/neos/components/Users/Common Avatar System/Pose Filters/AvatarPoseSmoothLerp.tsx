import { member, Member, Component } from "../../../../core";
    
    export interface AvatarPoseSmoothLerpInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PositionSmoothSpeed?: member<number>;
RotationSmoothSpeed?: member<number>;
    }
    
    export function AvatarPoseSmoothLerp(props: AvatarPoseSmoothLerpInput){
      const { id, persistentId, updateOrder, Enabled,
PositionSmoothSpeed,
RotationSmoothSpeed, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarPoseSmoothLerp" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionSmoothSpeed" id={typeof PositionSmoothSpeed === "object" && "id" in PositionSmoothSpeed ? PositionSmoothSpeed?.id : undefined} value={typeof PositionSmoothSpeed === "object" && "value" in PositionSmoothSpeed ? PositionSmoothSpeed?.value : PositionSmoothSpeed} /* default: 0 */  isRaw={typeof PositionSmoothSpeed === "object" && "isRaw" in PositionSmoothSpeed && PositionSmoothSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RotationSmoothSpeed" id={typeof RotationSmoothSpeed === "object" && "id" in RotationSmoothSpeed ? RotationSmoothSpeed?.id : undefined} value={typeof RotationSmoothSpeed === "object" && "value" in RotationSmoothSpeed ? RotationSmoothSpeed?.value : RotationSmoothSpeed} /* default: 0 */  isRaw={typeof RotationSmoothSpeed === "object" && "isRaw" in RotationSmoothSpeed && RotationSmoothSpeed.isRaw ? true : undefined} />
        </Component>
      );
    };
    