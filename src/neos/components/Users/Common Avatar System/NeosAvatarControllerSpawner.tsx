import { member, Member, Component } from "../../../core";
    
    export interface NeosAvatarControllerSpawnerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SpawnRoot?: member<any>;
MaterialOverride?: member<any>;
ControllerSpawned?: member<any>;
_sourceControllerInfo?: member<any>;
_lastSpawned?: member<any>;
    }
    
    export function NeosAvatarControllerSpawner(props: NeosAvatarControllerSpawnerInput){
      const { id, persistentId, updateOrder, Enabled,
SpawnRoot,
MaterialOverride,
ControllerSpawned,
_sourceControllerInfo,
_lastSpawned, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.NeosAvatarControllerSpawner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SpawnRoot" id={typeof SpawnRoot === "object" && "id" in SpawnRoot ? SpawnRoot?.id : undefined} value={typeof SpawnRoot === "object" && "value" in SpawnRoot ? SpawnRoot?.value : SpawnRoot} /* default: ID0 */  isRaw={typeof SpawnRoot === "object" && "isRaw" in SpawnRoot && SpawnRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="MaterialOverride" id={typeof MaterialOverride === "object" && "id" in MaterialOverride ? MaterialOverride?.id : undefined} value={typeof MaterialOverride === "object" && "value" in MaterialOverride ? MaterialOverride?.value : MaterialOverride} /* default: ID0 */  isRaw={typeof MaterialOverride === "object" && "isRaw" in MaterialOverride && MaterialOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`2[FrooxEngine.Slot,FrooxEngine.User]]`} name="ControllerSpawned" id={typeof ControllerSpawned === "object" && "id" in ControllerSpawned ? ControllerSpawned?.id : undefined} value={typeof ControllerSpawned === "object" && "value" in ControllerSpawned ? ControllerSpawned?.value : ControllerSpawned} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof ControllerSpawned === "object" && "isRaw" in ControllerSpawned && ControllerSpawned.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarControllerInfo]`} name="_sourceControllerInfo" id={typeof _sourceControllerInfo === "object" && "id" in _sourceControllerInfo ? _sourceControllerInfo?.id : undefined} value={typeof _sourceControllerInfo === "object" && "value" in _sourceControllerInfo ? _sourceControllerInfo?.value : _sourceControllerInfo} /* default: ID0 */  isRaw={typeof _sourceControllerInfo === "object" && "isRaw" in _sourceControllerInfo && _sourceControllerInfo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncType`} name="_lastSpawned" id={typeof _lastSpawned === "object" && "id" in _lastSpawned ? _lastSpawned?.id : undefined} value={typeof _lastSpawned === "object" && "value" in _lastSpawned ? _lastSpawned?.value : _lastSpawned} /* default: <i>null</i> */  isRaw={typeof _lastSpawned === "object" && "isRaw" in _lastSpawned && _lastSpawned.isRaw ? true : undefined} />
        </Component>
      );
    };
    