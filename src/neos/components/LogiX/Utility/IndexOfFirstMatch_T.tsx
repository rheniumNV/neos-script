import { member, Member, Component } from "../../../core";
    
    export interface IndexOfFirstMatch_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Match?: member<any>;
    }
    
    export function IndexOfFirstMatch_T(props: IndexOfFirstMatch_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Match, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Utility.IndexOfFirstMatch\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Match" id={typeof Match === "object" && "id" in Match ? Match?.id : undefined} value={typeof Match === "object" && "value" in Match ? Match?.value : Match} /* default: null */  isRaw={typeof Match === "object" && "isRaw" in Match && Match.isRaw ? true : undefined} />
        </Component>
      );
    };
    