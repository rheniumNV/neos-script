import { member, Member, Component } from "../../core";
    
    export interface LocomotionControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ScalingEnabled?: member<boolean>;
SupressSources?: member<any>;
InputSupressSources?: member<any>;
LocomotionModules?: member<any>;
ActiveModuleIndex?: member<number>;
SyncActiveLocomotionModule?: member<boolean>;
_currentGroundCollider?: member<any>;
_lastGroundCollider?: member<any>;
OnInitialized?: member<any>;
_parentHierarchy?: member<any>;
_dummyCharacterController?: member<any>;
    }
    
    export function LocomotionController(props: LocomotionControllerInput){
      const { id, persistentId, updateOrder, Enabled,
ScalingEnabled,
SupressSources,
InputSupressSources,
LocomotionModules,
ActiveModuleIndex,
SyncActiveLocomotionModule,
_currentGroundCollider,
_lastGroundCollider,
OnInitialized,
_parentHierarchy,
_dummyCharacterController, } = props;
    
      return (
        <Component type="FrooxEngine.LocomotionController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScalingEnabled" id={typeof ScalingEnabled === "object" && "id" in ScalingEnabled ? ScalingEnabled?.id : undefined} value={typeof ScalingEnabled === "object" && "value" in ScalingEnabled ? ScalingEnabled?.value : ScalingEnabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Component]`} name="SupressSources" id={typeof SupressSources === "object" && "id" in SupressSources ? SupressSources?.id : undefined} value={typeof SupressSources === "object" && "value" in SupressSources ? SupressSources?.value : SupressSources} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Component] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Component]`} name="InputSupressSources" id={typeof InputSupressSources === "object" && "id" in InputSupressSources ? InputSupressSources?.id : undefined} value={typeof InputSupressSources === "object" && "value" in InputSupressSources ? InputSupressSources?.value : InputSupressSources} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Component] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.ILocomotionModule]`} name="LocomotionModules" id={typeof LocomotionModules === "object" && "id" in LocomotionModules ? LocomotionModules?.id : undefined} value={typeof LocomotionModules === "object" && "value" in LocomotionModules ? LocomotionModules?.value : LocomotionModules} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.ILocomotionModule] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ActiveModuleIndex" id={typeof ActiveModuleIndex === "object" && "id" in ActiveModuleIndex ? ActiveModuleIndex?.id : undefined} value={typeof ActiveModuleIndex === "object" && "value" in ActiveModuleIndex ? ActiveModuleIndex?.value : ActiveModuleIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SyncActiveLocomotionModule" id={typeof SyncActiveLocomotionModule === "object" && "id" in SyncActiveLocomotionModule ? SyncActiveLocomotionModule?.id : undefined} value={typeof SyncActiveLocomotionModule === "object" && "value" in SyncActiveLocomotionModule ? SyncActiveLocomotionModule?.value : SyncActiveLocomotionModule} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ICollider]`} name="_currentGroundCollider" id={typeof _currentGroundCollider === "object" && "id" in _currentGroundCollider ? _currentGroundCollider?.id : undefined} value={typeof _currentGroundCollider === "object" && "value" in _currentGroundCollider ? _currentGroundCollider?.value : _currentGroundCollider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ICollider]`} name="_lastGroundCollider" id={typeof _lastGroundCollider === "object" && "id" in _lastGroundCollider ? _lastGroundCollider?.id : undefined} value={typeof _lastGroundCollider === "object" && "value" in _lastGroundCollider ? _lastGroundCollider?.value : _lastGroundCollider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.LocomotionController]]`} name="OnInitialized" id={typeof OnInitialized === "object" && "id" in OnInitialized ? OnInitialized?.id : undefined} value={typeof OnInitialized === "object" && "value" in OnInitialized ? OnInitialized?.value : OnInitialized} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="_parentHierarchy" id={typeof _parentHierarchy === "object" && "id" in _parentHierarchy ? _parentHierarchy?.id : undefined} value={typeof _parentHierarchy === "object" && "value" in _parentHierarchy ? _parentHierarchy?.value : _parentHierarchy} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CharacterController]`} name="_dummyCharacterController" id={typeof _dummyCharacterController === "object" && "id" in _dummyCharacterController ? _dummyCharacterController?.id : undefined} value={typeof _dummyCharacterController === "object" && "value" in _dummyCharacterController ? _dummyCharacterController?.value : _dummyCharacterController} /* default: ID0 */  />
        </Component>
      );
    };
    