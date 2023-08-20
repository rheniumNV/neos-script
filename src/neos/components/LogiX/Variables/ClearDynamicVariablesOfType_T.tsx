import { member, Member, Component } from "../../../core";
    
    export interface ClearDynamicVariablesOfType_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
SpaceName?: member<any>;
OnNotFound?: member<any>;
OnCleared?: member<any>;
    }
    
    export function ClearDynamicVariablesOfType_T(props: ClearDynamicVariablesOfType_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
SpaceName,
OnNotFound,
OnCleared, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Data.ClearDynamicVariablesOfType\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="SpaceName" id={typeof SpaceName === "object" && "id" in SpaceName ? SpaceName?.id : undefined} value={typeof SpaceName === "object" && "value" in SpaceName ? SpaceName?.value : SpaceName} /* default: null */  isRaw={typeof SpaceName === "object" && "isRaw" in SpaceName && SpaceName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnNotFound" id={typeof OnNotFound === "object" && "id" in OnNotFound ? OnNotFound?.id : undefined} value={typeof OnNotFound === "object" && "value" in OnNotFound ? OnNotFound?.value : OnNotFound} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnNotFound === "object" && "isRaw" in OnNotFound && OnNotFound.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnCleared" id={typeof OnCleared === "object" && "id" in OnCleared ? OnCleared?.id : undefined} value={typeof OnCleared === "object" && "value" in OnCleared ? OnCleared?.value : OnCleared} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnCleared === "object" && "isRaw" in OnCleared && OnCleared.isRaw ? true : undefined} />
        </Component>
      );
    };
    