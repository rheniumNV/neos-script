import { member, Member, Component } from "../../core";
    
    export interface AvatarUserPositionerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PositionNode?: member<any>;
RotationNode?: member<any>;
PositionReference?: member<any>;
RotationReference?: member<any>;
PreserveUp?: member<boolean>;
OnManualEquipOnly?: member<boolean>;
    }
    
    export function AvatarUserPositioner(props: AvatarUserPositionerInput){
      const { id, persistentId, updateOrder, Enabled,
PositionNode,
RotationNode,
PositionReference,
RotationReference,
PreserveUp,
OnManualEquipOnly, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarUserPositioner" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="PositionNode" id={typeof PositionNode === "object" && "id" in PositionNode ? PositionNode?.id : undefined} value={typeof PositionNode === "object" && "value" in PositionNode ? PositionNode?.value : PositionNode} /* default: None */  isRaw={typeof PositionNode === "object" && "isRaw" in PositionNode && PositionNode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="RotationNode" id={typeof RotationNode === "object" && "id" in RotationNode ? RotationNode?.id : undefined} value={typeof RotationNode === "object" && "value" in RotationNode ? RotationNode?.value : RotationNode} /* default: None */  isRaw={typeof RotationNode === "object" && "isRaw" in RotationNode && RotationNode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PositionReference" id={typeof PositionReference === "object" && "id" in PositionReference ? PositionReference?.id : undefined} value={typeof PositionReference === "object" && "value" in PositionReference ? PositionReference?.value : PositionReference} /* default: ID0 */  isRaw={typeof PositionReference === "object" && "isRaw" in PositionReference && PositionReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="RotationReference" id={typeof RotationReference === "object" && "id" in RotationReference ? RotationReference?.id : undefined} value={typeof RotationReference === "object" && "value" in RotationReference ? RotationReference?.value : RotationReference} /* default: ID0 */  isRaw={typeof RotationReference === "object" && "isRaw" in RotationReference && RotationReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveUp" id={typeof PreserveUp === "object" && "id" in PreserveUp ? PreserveUp?.id : undefined} value={typeof PreserveUp === "object" && "value" in PreserveUp ? PreserveUp?.value : PreserveUp} /* default: false */  isRaw={typeof PreserveUp === "object" && "isRaw" in PreserveUp && PreserveUp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OnManualEquipOnly" id={typeof OnManualEquipOnly === "object" && "id" in OnManualEquipOnly ? OnManualEquipOnly?.id : undefined} value={typeof OnManualEquipOnly === "object" && "value" in OnManualEquipOnly ? OnManualEquipOnly?.value : OnManualEquipOnly} /* default: false */  isRaw={typeof OnManualEquipOnly === "object" && "isRaw" in OnManualEquipOnly && OnManualEquipOnly.isRaw ? true : undefined} />
        </Component>
      );
    };
    