import { member, Member, Component } from "../../core";
    
    export interface NewWorldDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_worldName?: member<any>;
_mobileFriendly?: member<any>;
_unsafeMode?: member<any>;
_autoPort?: member<any>;
_port?: member<any>;
_accessLevel?: member<any>;
CustomStart?: member<any>;
_presetIndex?: member<number>;
_uiBuilt?: member<boolean>;
_accessLevelRadios?: member<any>;
_initialized?: member<boolean>;
    }
    
    export function NewWorldDialog(props: NewWorldDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_worldName,
_mobileFriendly,
_unsafeMode,
_autoPort,
_port,
_accessLevel,
CustomStart,
_presetIndex,
_uiBuilt,
_accessLevelRadios,
_initialized, } = props;
    
      return (
        <Component type="FrooxEngine.NewWorldDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_worldName" id={typeof _worldName === "object" && "id" in _worldName ? _worldName?.id : undefined} value={typeof _worldName === "object" && "value" in _worldName ? _worldName?.value : _worldName} /* default: ID0 */  isRaw={typeof _worldName === "object" && "isRaw" in _worldName && _worldName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_mobileFriendly" id={typeof _mobileFriendly === "object" && "id" in _mobileFriendly ? _mobileFriendly?.id : undefined} value={typeof _mobileFriendly === "object" && "value" in _mobileFriendly ? _mobileFriendly?.value : _mobileFriendly} /* default: ID0 */  isRaw={typeof _mobileFriendly === "object" && "isRaw" in _mobileFriendly && _mobileFriendly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_unsafeMode" id={typeof _unsafeMode === "object" && "id" in _unsafeMode ? _unsafeMode?.id : undefined} value={typeof _unsafeMode === "object" && "value" in _unsafeMode ? _unsafeMode?.value : _unsafeMode} /* default: ID0 */  isRaw={typeof _unsafeMode === "object" && "isRaw" in _unsafeMode && _unsafeMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_autoPort" id={typeof _autoPort === "object" && "id" in _autoPort ? _autoPort?.id : undefined} value={typeof _autoPort === "object" && "value" in _autoPort ? _autoPort?.value : _autoPort} /* default: ID0 */  isRaw={typeof _autoPort === "object" && "isRaw" in _autoPort && _autoPort.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_port" id={typeof _port === "object" && "id" in _port ? _port?.id : undefined} value={typeof _port === "object" && "value" in _port ? _port?.value : _port} /* default: ID0 */  isRaw={typeof _port === "object" && "isRaw" in _port && _port.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.SessionAccessLevel]`} name="_accessLevel" id={typeof _accessLevel === "object" && "id" in _accessLevel ? _accessLevel?.id : undefined} value={typeof _accessLevel === "object" && "value" in _accessLevel ? _accessLevel?.value : _accessLevel} /* default: Private */  isRaw={typeof _accessLevel === "object" && "isRaw" in _accessLevel && _accessLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.NewWorldDialog]]`} name="CustomStart" id={typeof CustomStart === "object" && "id" in CustomStart ? CustomStart?.id : undefined} value={typeof CustomStart === "object" && "value" in CustomStart ? CustomStart?.value : CustomStart} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof CustomStart === "object" && "isRaw" in CustomStart && CustomStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_presetIndex" id={typeof _presetIndex === "object" && "id" in _presetIndex ? _presetIndex?.id : undefined} value={typeof _presetIndex === "object" && "value" in _presetIndex ? _presetIndex?.value : _presetIndex} /* default: 0 */  isRaw={typeof _presetIndex === "object" && "isRaw" in _presetIndex && _presetIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_uiBuilt" id={typeof _uiBuilt === "object" && "id" in _uiBuilt ? _uiBuilt?.id : undefined} value={typeof _uiBuilt === "object" && "value" in _uiBuilt ? _uiBuilt?.value : _uiBuilt} /* default: false */  isRaw={typeof _uiBuilt === "object" && "isRaw" in _uiBuilt && _uiBuilt.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.UIX.ValueRadio\`1[CloudX.Shared.SessionAccessLevel]]`} name="_accessLevelRadios" id={typeof _accessLevelRadios === "object" && "id" in _accessLevelRadios ? _accessLevelRadios?.id : undefined} value={typeof _accessLevelRadios === "object" && "value" in _accessLevelRadios ? _accessLevelRadios?.value : _accessLevelRadios} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.UIX.ValueRadio`1[CloudX.Shared.SessionAccessLevel]] */  isRaw={typeof _accessLevelRadios === "object" && "isRaw" in _accessLevelRadios && _accessLevelRadios.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_initialized" id={typeof _initialized === "object" && "id" in _initialized ? _initialized?.id : undefined} value={typeof _initialized === "object" && "value" in _initialized ? _initialized?.value : _initialized} /* default: false */  isRaw={typeof _initialized === "object" && "isRaw" in _initialized && _initialized.isRaw ? true : undefined} />
        </Component>
      );
    };
    