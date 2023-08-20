import { member, Member, Component } from "../../../core";
    
    export interface DynamicImpulseReceiverWithValue_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Tag?: member<any>;
Impulse?: member<any>;
    }
    
    export function DynamicImpulseReceiverWithValue_T(props: DynamicImpulseReceiverWithValue_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Tag,
Impulse, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.ProgramFlow.DynamicImpulseReceiverWithValue\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Tag" id={typeof Tag === "object" && "id" in Tag ? Tag?.id : undefined} value={typeof Tag === "object" && "value" in Tag ? Tag?.value : Tag} /* default: null */  isRaw={typeof Tag === "object" && "isRaw" in Tag && Tag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Impulse" id={typeof Impulse === "object" && "id" in Impulse ? Impulse?.id : undefined} value={typeof Impulse === "object" && "value" in Impulse ? Impulse?.value : Impulse} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Impulse === "object" && "isRaw" in Impulse && Impulse.isRaw ? true : undefined} />
        </Component>
      );
    };
    