import { member, Member, Component } from "../../../core";
    
    export interface InstallLocomotionModulesInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
ModulesRoot?: member<any>;
TargetUser?: member<any>;
ClearExisting?: member<any>;
OnInstalled?: member<any>;
    }
    
    export function InstallLocomotionModules(props: InstallLocomotionModulesInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
ModulesRoot,
TargetUser,
ClearExisting,
OnInstalled, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Locomotion.InstallLocomotionModules" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="ModulesRoot" id={typeof ModulesRoot === "object" && "id" in ModulesRoot ? ModulesRoot?.id : undefined} value={typeof ModulesRoot === "object" && "value" in ModulesRoot ? ModulesRoot?.value : ModulesRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ClearExisting" id={typeof ClearExisting === "object" && "id" in ClearExisting ? ClearExisting?.id : undefined} value={typeof ClearExisting === "object" && "value" in ClearExisting ? ClearExisting?.value : ClearExisting} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnInstalled" id={typeof OnInstalled === "object" && "id" in OnInstalled ? OnInstalled?.id : undefined} value={typeof OnInstalled === "object" && "value" in OnInstalled ? OnInstalled?.value : OnInstalled} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    