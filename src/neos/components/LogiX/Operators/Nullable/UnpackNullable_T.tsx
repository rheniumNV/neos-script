import { member, Member, Component } from "../../../../core";
    
    export interface UnpackNullable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Nullable?: member<any>;
    }
    
    export function UnpackNullable_T(props: UnpackNullable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Nullable, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Operators.UnpackNullable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Nullable\`1[${T}]]`} name="Nullable" id={typeof Nullable === "object" && "id" in Nullable ? Nullable?.id : undefined} value={typeof Nullable === "object" && "value" in Nullable ? Nullable?.value : Nullable} /* default: null */  isRaw={typeof Nullable === "object" && "isRaw" in Nullable && Nullable.isRaw ? true : undefined} />
        </Component>
      );
    };
    