import { member, Member, Component } from "../../core";
    
    export interface ReferenceNode_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
RefTarget?: member<any>;
_registeredReference?: member<any>;
    }
    
    export function ReferenceNode_T(props: ReferenceNode_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
RefTarget,
_registeredReference, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.ReferenceNode\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[${T}]`} name="RefTarget" id={typeof RefTarget === "object" && "id" in RefTarget ? RefTarget?.id : undefined} value={typeof RefTarget === "object" && "value" in RefTarget ? RefTarget?.value : RefTarget} /* default: null */  isRaw={typeof RefTarget === "object" && "isRaw" in RefTarget && RefTarget.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.LogiX.LogixReference]`} name="_registeredReference" id={typeof _registeredReference === "object" && "id" in _registeredReference ? _registeredReference?.id : undefined} value={typeof _registeredReference === "object" && "value" in _registeredReference ? _registeredReference?.value : _registeredReference} /* default: ID0 */  isRaw={typeof _registeredReference === "object" && "isRaw" in _registeredReference && _registeredReference.isRaw ? true : undefined} />
        </Component>
      );
    };
    