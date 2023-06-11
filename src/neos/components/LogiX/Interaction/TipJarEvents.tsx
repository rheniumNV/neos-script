import { member, Member, Component } from "../../../core";
    
    export interface TipJarEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
TipJar?: member<any>;
OnTipOpen?: member<any>;
OnTipSent?: member<any>;
    }
    
    export function TipJarEvents(props: TipJarEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
TipJar,
OnTipOpen,
OnTipSent, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.TipJarEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.TipJar]`} name="TipJar" id={typeof TipJar === "object" && "id" in TipJar ? TipJar?.id : undefined} value={typeof TipJar === "object" && "value" in TipJar ? TipJar?.value : TipJar} /* default: ID0 */  isRaw={typeof TipJar === "object" && "isRaw" in TipJar && TipJar.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnTipOpen" id={typeof OnTipOpen === "object" && "id" in OnTipOpen ? OnTipOpen?.id : undefined} value={typeof OnTipOpen === "object" && "value" in OnTipOpen ? OnTipOpen?.value : OnTipOpen} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnTipOpen === "object" && "isRaw" in OnTipOpen && OnTipOpen.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnTipSent" id={typeof OnTipSent === "object" && "id" in OnTipSent ? OnTipSent?.id : undefined} value={typeof OnTipSent === "object" && "value" in OnTipSent ? OnTipSent?.value : OnTipSent} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnTipSent === "object" && "isRaw" in OnTipSent && OnTipSent.isRaw ? true : undefined} />
        </Component>
      );
    };
    