import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionSmoothSpeed" id={typeof PositionSmoothSpeed === "object" && "id" in PositionSmoothSpeed ? PositionSmoothSpeed?.id : undefined} value={typeof PositionSmoothSpeed === "object" && "value" in PositionSmoothSpeed ? PositionSmoothSpeed?.value : PositionSmoothSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RotationSmoothSpeed" id={typeof RotationSmoothSpeed === "object" && "id" in RotationSmoothSpeed ? RotationSmoothSpeed?.id : undefined} value={typeof RotationSmoothSpeed === "object" && "value" in RotationSmoothSpeed ? RotationSmoothSpeed?.value : RotationSmoothSpeed} /* default: 0 */  />
        </Component>
      );
    };
    