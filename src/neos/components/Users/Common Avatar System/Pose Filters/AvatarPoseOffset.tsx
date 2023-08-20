import { member, Member, Component } from "../../../../core";
    
    export interface AvatarPoseOffsetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PositionOffset?: member<[number, number, number]>;
RotationOffset?: member<any>;
    }
    
    export function AvatarPoseOffset(props: AvatarPoseOffsetInput){
      const { id, persistentId, updateOrder, Enabled,
PositionOffset,
RotationOffset, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarPoseOffset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="PositionOffset" id={typeof PositionOffset === "object" && "id" in PositionOffset ? PositionOffset?.id : undefined} value={typeof PositionOffset === "object" && "value" in PositionOffset ? PositionOffset?.value : PositionOffset} /* default: [0; 0; 0] */  isRaw={typeof PositionOffset === "object" && "isRaw" in PositionOffset && PositionOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: [0; 0; 0; 1] */  isRaw={typeof RotationOffset === "object" && "isRaw" in RotationOffset && RotationOffset.isRaw ? true : undefined} />
        </Component>
      );
    };
    