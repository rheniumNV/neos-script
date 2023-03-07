import { member, Member, Component } from "../../../core";
    
    export interface SwitchLocomotionModuleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
TargetUser?: member<any>;
ModuleName?: member<any>;
ExactMatch?: member<any>;
OnSwitched?: member<any>;
OnNotFound?: member<any>;
    }
    
    export function SwitchLocomotionModule(props: SwitchLocomotionModuleInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
TargetUser,
ModuleName,
ExactMatch,
OnSwitched,
OnNotFound, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Locomotion.SwitchLocomotionModule" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="ModuleName" id={typeof ModuleName === "object" && "id" in ModuleName ? ModuleName?.id : undefined} value={typeof ModuleName === "object" && "value" in ModuleName ? ModuleName?.value : ModuleName} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ExactMatch" id={typeof ExactMatch === "object" && "id" in ExactMatch ? ExactMatch?.id : undefined} value={typeof ExactMatch === "object" && "value" in ExactMatch ? ExactMatch?.value : ExactMatch} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSwitched" id={typeof OnSwitched === "object" && "id" in OnSwitched ? OnSwitched?.id : undefined} value={typeof OnSwitched === "object" && "value" in OnSwitched ? OnSwitched?.value : OnSwitched} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnNotFound" id={typeof OnNotFound === "object" && "id" in OnNotFound ? OnNotFound?.id : undefined} value={typeof OnNotFound === "object" && "value" in OnNotFound ? OnNotFound?.value : OnNotFound} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    