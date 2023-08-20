import { member, Member, Component } from "../../../core";
    
    export interface NotifyModifiedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
ModifiedComponent?: member<any>;
OnDone?: member<any>;
    }
    
    export function NotifyModified(props: NotifyModifiedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
ModifiedComponent,
OnDone, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.NotifyModified" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IComponent]`} name="ModifiedComponent" id={typeof ModifiedComponent === "object" && "id" in ModifiedComponent ? ModifiedComponent?.id : undefined} value={typeof ModifiedComponent === "object" && "value" in ModifiedComponent ? ModifiedComponent?.value : ModifiedComponent} /* default: ID0 */  isRaw={typeof ModifiedComponent === "object" && "isRaw" in ModifiedComponent && ModifiedComponent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDone === "object" && "isRaw" in OnDone && OnDone.isRaw ? true : undefined} />
        </Component>
      );
    };
    