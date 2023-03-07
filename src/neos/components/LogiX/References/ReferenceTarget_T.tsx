import { member, Member, Component } from "../../../core";
    
    export interface ReferenceTarget_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Reference?: member<any>;
    }
    
    export function ReferenceTarget_T(props: ReferenceTarget_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Reference, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.References.ReferenceTarget\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: null */  />
        </Component>
      );
    };
    