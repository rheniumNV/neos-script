import { member, Member, Component } from "../../core";
    
    export interface DebugAvatarBuilderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SetupServerVoice?: member<boolean>;
SetupClientVoice?: member<boolean>;
SetupServerTools?: member<boolean>;
SetupClientTools?: member<boolean>;
SetupServerTeleport?: member<boolean>;
SetupClientTeleport?: member<boolean>;
UsersCanTransferObjects?: member<boolean>;
UsersCanSaveOwnCopy?: member<boolean>;
ParentClientsToServer?: member<boolean>;
AlignTracking?: member<boolean>;
DebugPositionStreamRange?: member<boolean>;
    }
    
    export function DebugAvatarBuilder(props: DebugAvatarBuilderInput){
      const { id, persistentId, updateOrder, Enabled,
SetupServerVoice,
SetupClientVoice,
SetupServerTools,
SetupClientTools,
SetupServerTeleport,
SetupClientTeleport,
UsersCanTransferObjects,
UsersCanSaveOwnCopy,
ParentClientsToServer,
AlignTracking,
DebugPositionStreamRange, } = props;
    
      return (
        <Component type="FrooxEngine.DebugAvatarBuilder" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupServerVoice" id={typeof SetupServerVoice === "object" && "id" in SetupServerVoice ? SetupServerVoice?.id : undefined} value={typeof SetupServerVoice === "object" && "value" in SetupServerVoice ? SetupServerVoice?.value : SetupServerVoice} /* default: false */  isRaw={typeof SetupServerVoice === "object" && "isRaw" in SetupServerVoice && SetupServerVoice.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupClientVoice" id={typeof SetupClientVoice === "object" && "id" in SetupClientVoice ? SetupClientVoice?.id : undefined} value={typeof SetupClientVoice === "object" && "value" in SetupClientVoice ? SetupClientVoice?.value : SetupClientVoice} /* default: false */  isRaw={typeof SetupClientVoice === "object" && "isRaw" in SetupClientVoice && SetupClientVoice.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupServerTools" id={typeof SetupServerTools === "object" && "id" in SetupServerTools ? SetupServerTools?.id : undefined} value={typeof SetupServerTools === "object" && "value" in SetupServerTools ? SetupServerTools?.value : SetupServerTools} /* default: false */  isRaw={typeof SetupServerTools === "object" && "isRaw" in SetupServerTools && SetupServerTools.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupClientTools" id={typeof SetupClientTools === "object" && "id" in SetupClientTools ? SetupClientTools?.id : undefined} value={typeof SetupClientTools === "object" && "value" in SetupClientTools ? SetupClientTools?.value : SetupClientTools} /* default: false */  isRaw={typeof SetupClientTools === "object" && "isRaw" in SetupClientTools && SetupClientTools.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupServerTeleport" id={typeof SetupServerTeleport === "object" && "id" in SetupServerTeleport ? SetupServerTeleport?.id : undefined} value={typeof SetupServerTeleport === "object" && "value" in SetupServerTeleport ? SetupServerTeleport?.value : SetupServerTeleport} /* default: false */  isRaw={typeof SetupServerTeleport === "object" && "isRaw" in SetupServerTeleport && SetupServerTeleport.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupClientTeleport" id={typeof SetupClientTeleport === "object" && "id" in SetupClientTeleport ? SetupClientTeleport?.id : undefined} value={typeof SetupClientTeleport === "object" && "value" in SetupClientTeleport ? SetupClientTeleport?.value : SetupClientTeleport} /* default: false */  isRaw={typeof SetupClientTeleport === "object" && "isRaw" in SetupClientTeleport && SetupClientTeleport.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UsersCanTransferObjects" id={typeof UsersCanTransferObjects === "object" && "id" in UsersCanTransferObjects ? UsersCanTransferObjects?.id : undefined} value={typeof UsersCanTransferObjects === "object" && "value" in UsersCanTransferObjects ? UsersCanTransferObjects?.value : UsersCanTransferObjects} /* default: false */  isRaw={typeof UsersCanTransferObjects === "object" && "isRaw" in UsersCanTransferObjects && UsersCanTransferObjects.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UsersCanSaveOwnCopy" id={typeof UsersCanSaveOwnCopy === "object" && "id" in UsersCanSaveOwnCopy ? UsersCanSaveOwnCopy?.id : undefined} value={typeof UsersCanSaveOwnCopy === "object" && "value" in UsersCanSaveOwnCopy ? UsersCanSaveOwnCopy?.value : UsersCanSaveOwnCopy} /* default: false */  isRaw={typeof UsersCanSaveOwnCopy === "object" && "isRaw" in UsersCanSaveOwnCopy && UsersCanSaveOwnCopy.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParentClientsToServer" id={typeof ParentClientsToServer === "object" && "id" in ParentClientsToServer ? ParentClientsToServer?.id : undefined} value={typeof ParentClientsToServer === "object" && "value" in ParentClientsToServer ? ParentClientsToServer?.value : ParentClientsToServer} /* default: false */  isRaw={typeof ParentClientsToServer === "object" && "isRaw" in ParentClientsToServer && ParentClientsToServer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlignTracking" id={typeof AlignTracking === "object" && "id" in AlignTracking ? AlignTracking?.id : undefined} value={typeof AlignTracking === "object" && "value" in AlignTracking ? AlignTracking?.value : AlignTracking} /* default: false */  isRaw={typeof AlignTracking === "object" && "isRaw" in AlignTracking && AlignTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DebugPositionStreamRange" id={typeof DebugPositionStreamRange === "object" && "id" in DebugPositionStreamRange ? DebugPositionStreamRange?.id : undefined} value={typeof DebugPositionStreamRange === "object" && "value" in DebugPositionStreamRange ? DebugPositionStreamRange?.value : DebugPositionStreamRange} /* default: false */  isRaw={typeof DebugPositionStreamRange === "object" && "isRaw" in DebugPositionStreamRange && DebugPositionStreamRange.isRaw ? true : undefined} />
        </Component>
      );
    };
    