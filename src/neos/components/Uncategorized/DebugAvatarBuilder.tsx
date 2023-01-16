import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupServerVoice" id={typeof SetupServerVoice === "object" && "id" in SetupServerVoice ? SetupServerVoice?.id : undefined} value={typeof SetupServerVoice === "object" && "value" in SetupServerVoice ? SetupServerVoice?.value : SetupServerVoice} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupClientVoice" id={typeof SetupClientVoice === "object" && "id" in SetupClientVoice ? SetupClientVoice?.id : undefined} value={typeof SetupClientVoice === "object" && "value" in SetupClientVoice ? SetupClientVoice?.value : SetupClientVoice} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupServerTools" id={typeof SetupServerTools === "object" && "id" in SetupServerTools ? SetupServerTools?.id : undefined} value={typeof SetupServerTools === "object" && "value" in SetupServerTools ? SetupServerTools?.value : SetupServerTools} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupClientTools" id={typeof SetupClientTools === "object" && "id" in SetupClientTools ? SetupClientTools?.id : undefined} value={typeof SetupClientTools === "object" && "value" in SetupClientTools ? SetupClientTools?.value : SetupClientTools} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupServerTeleport" id={typeof SetupServerTeleport === "object" && "id" in SetupServerTeleport ? SetupServerTeleport?.id : undefined} value={typeof SetupServerTeleport === "object" && "value" in SetupServerTeleport ? SetupServerTeleport?.value : SetupServerTeleport} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupClientTeleport" id={typeof SetupClientTeleport === "object" && "id" in SetupClientTeleport ? SetupClientTeleport?.id : undefined} value={typeof SetupClientTeleport === "object" && "value" in SetupClientTeleport ? SetupClientTeleport?.value : SetupClientTeleport} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UsersCanTransferObjects" id={typeof UsersCanTransferObjects === "object" && "id" in UsersCanTransferObjects ? UsersCanTransferObjects?.id : undefined} value={typeof UsersCanTransferObjects === "object" && "value" in UsersCanTransferObjects ? UsersCanTransferObjects?.value : UsersCanTransferObjects} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UsersCanSaveOwnCopy" id={typeof UsersCanSaveOwnCopy === "object" && "id" in UsersCanSaveOwnCopy ? UsersCanSaveOwnCopy?.id : undefined} value={typeof UsersCanSaveOwnCopy === "object" && "value" in UsersCanSaveOwnCopy ? UsersCanSaveOwnCopy?.value : UsersCanSaveOwnCopy} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParentClientsToServer" id={typeof ParentClientsToServer === "object" && "id" in ParentClientsToServer ? ParentClientsToServer?.id : undefined} value={typeof ParentClientsToServer === "object" && "value" in ParentClientsToServer ? ParentClientsToServer?.value : ParentClientsToServer} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlignTracking" id={typeof AlignTracking === "object" && "id" in AlignTracking ? AlignTracking?.id : undefined} value={typeof AlignTracking === "object" && "value" in AlignTracking ? AlignTracking?.value : AlignTracking} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DebugPositionStreamRange" id={typeof DebugPositionStreamRange === "object" && "id" in DebugPositionStreamRange ? DebugPositionStreamRange?.id : undefined} value={typeof DebugPositionStreamRange === "object" && "value" in DebugPositionStreamRange ? DebugPositionStreamRange?.value : DebugPositionStreamRange} /* default: false */  />
        </Component>
      );
    };
    