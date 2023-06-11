import { member, Member, Component } from "../../../core";
    
    export interface DuplicateSlotInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Template?: member<any>;
OnDuplicated?: member<any>;
    }
    
    export function DuplicateSlot(props: DuplicateSlotInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Template,
OnDuplicated, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.DuplicateSlot" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Template" id={typeof Template === "object" && "id" in Template ? Template?.id : undefined} value={typeof Template === "object" && "value" in Template ? Template?.value : Template} /* default: ID0 */  isRaw={typeof Template === "object" && "isRaw" in Template && Template.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDuplicated" id={typeof OnDuplicated === "object" && "id" in OnDuplicated ? OnDuplicated?.id : undefined} value={typeof OnDuplicated === "object" && "value" in OnDuplicated ? OnDuplicated?.value : OnDuplicated} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDuplicated === "object" && "isRaw" in OnDuplicated && OnDuplicated.isRaw ? true : undefined} />
        </Component>
      );
    };
    