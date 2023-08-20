import { member, Member, Component } from "../../../core";
    
    export interface CharacterTeleporterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TriggersOnly?: member<boolean>;
Exits?: member<any>;
MinimumVelocity?: member<number>;
DirectionReference?: member<[number, number, number]>;
MaxDirectionAngle?: member<number>;
IgnoreParentUser?: member<boolean>;
TeleportEntered?: member<any>;
TeleportExited?: member<any>;
    }
    
    export function CharacterTeleporter(props: CharacterTeleporterInput){
      const { id, persistentId, updateOrder, Enabled,
TriggersOnly,
Exits,
MinimumVelocity,
DirectionReference,
MaxDirectionAngle,
IgnoreParentUser,
TeleportEntered,
TeleportExited, } = props;
    
      return (
        <Component type="FrooxEngine.CharacterTeleporter" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TriggersOnly" id={typeof TriggersOnly === "object" && "id" in TriggersOnly ? TriggersOnly?.id : undefined} value={typeof TriggersOnly === "object" && "value" in TriggersOnly ? TriggersOnly?.value : TriggersOnly} /* default: false */  isRaw={typeof TriggersOnly === "object" && "isRaw" in TriggersOnly && TriggersOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CharacterTeleporter+Exit]`} name="Exits" id={typeof Exits === "object" && "id" in Exits ? Exits?.id : undefined} value={typeof Exits === "object" && "value" in Exits ? Exits?.value : Exits} /* default: FrooxEngine.SyncList`1[FrooxEngine.CharacterTeleporter+Exit] */  isRaw={typeof Exits === "object" && "isRaw" in Exits && Exits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinimumVelocity" id={typeof MinimumVelocity === "object" && "id" in MinimumVelocity ? MinimumVelocity?.id : undefined} value={typeof MinimumVelocity === "object" && "value" in MinimumVelocity ? MinimumVelocity?.value : MinimumVelocity} /* default: 0 */  isRaw={typeof MinimumVelocity === "object" && "isRaw" in MinimumVelocity && MinimumVelocity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="DirectionReference" id={typeof DirectionReference === "object" && "id" in DirectionReference ? DirectionReference?.id : undefined} value={typeof DirectionReference === "object" && "value" in DirectionReference ? DirectionReference?.value : DirectionReference} /* default: [0; 0; 0] */  isRaw={typeof DirectionReference === "object" && "isRaw" in DirectionReference && DirectionReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDirectionAngle" id={typeof MaxDirectionAngle === "object" && "id" in MaxDirectionAngle ? MaxDirectionAngle?.id : undefined} value={typeof MaxDirectionAngle === "object" && "value" in MaxDirectionAngle ? MaxDirectionAngle?.value : MaxDirectionAngle} /* default: 0 */  isRaw={typeof MaxDirectionAngle === "object" && "isRaw" in MaxDirectionAngle && MaxDirectionAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreParentUser" id={typeof IgnoreParentUser === "object" && "id" in IgnoreParentUser ? IgnoreParentUser?.id : undefined} value={typeof IgnoreParentUser === "object" && "value" in IgnoreParentUser ? IgnoreParentUser?.value : IgnoreParentUser} /* default: false */  isRaw={typeof IgnoreParentUser === "object" && "isRaw" in IgnoreParentUser && IgnoreParentUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegateList\`1[System.Action\`1[BaseX.float3]]`} name="TeleportEntered" id={typeof TeleportEntered === "object" && "id" in TeleportEntered ? TeleportEntered?.id : undefined} value={typeof TeleportEntered === "object" && "value" in TeleportEntered ? TeleportEntered?.value : TeleportEntered} /* default: FrooxEngine.SyncDelegateList`1[System.Action`1[BaseX.float3]] */  isRaw={typeof TeleportEntered === "object" && "isRaw" in TeleportEntered && TeleportEntered.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegateList\`1[System.Action\`1[BaseX.float3]]`} name="TeleportExited" id={typeof TeleportExited === "object" && "id" in TeleportExited ? TeleportExited?.id : undefined} value={typeof TeleportExited === "object" && "value" in TeleportExited ? TeleportExited?.value : TeleportExited} /* default: FrooxEngine.SyncDelegateList`1[System.Action`1[BaseX.float3]] */  isRaw={typeof TeleportExited === "object" && "isRaw" in TeleportExited && TeleportExited.isRaw ? true : undefined} />
        </Component>
      );
    };
    