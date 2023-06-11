import { member, Member, Component } from "../../../core";
    
    export interface DynamicVariableInputWithEvents_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
_variableName?: member<any>;
DetectingUser?: member<any>;
OnSpaceLinked?: member<any>;
OnSpaceUnlinked?: member<any>;
    }
    
    export function DynamicVariableInputWithEvents_T(props: DynamicVariableInputWithEvents_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
_variableName,
DetectingUser,
OnSpaceLinked,
OnSpaceUnlinked, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Data.DynamicVariableInputWithEvents\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_variableName" id={typeof _variableName === "object" && "id" in _variableName ? _variableName?.id : undefined} value={typeof _variableName === "object" && "value" in _variableName ? _variableName?.value : _variableName} /* default: <i>null</i> */  isRaw={typeof _variableName === "object" && "isRaw" in _variableName && _variableName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="DetectingUser" id={typeof DetectingUser === "object" && "id" in DetectingUser ? DetectingUser?.id : undefined} value={typeof DetectingUser === "object" && "value" in DetectingUser ? DetectingUser?.value : DetectingUser} /* default: null */  isRaw={typeof DetectingUser === "object" && "isRaw" in DetectingUser && DetectingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSpaceLinked" id={typeof OnSpaceLinked === "object" && "id" in OnSpaceLinked ? OnSpaceLinked?.id : undefined} value={typeof OnSpaceLinked === "object" && "value" in OnSpaceLinked ? OnSpaceLinked?.value : OnSpaceLinked} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnSpaceLinked === "object" && "isRaw" in OnSpaceLinked && OnSpaceLinked.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSpaceUnlinked" id={typeof OnSpaceUnlinked === "object" && "id" in OnSpaceUnlinked ? OnSpaceUnlinked?.id : undefined} value={typeof OnSpaceUnlinked === "object" && "value" in OnSpaceUnlinked ? OnSpaceUnlinked?.value : OnSpaceUnlinked} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnSpaceUnlinked === "object" && "isRaw" in OnSpaceUnlinked && OnSpaceUnlinked.isRaw ? true : undefined} />
        </Component>
      );
    };
    