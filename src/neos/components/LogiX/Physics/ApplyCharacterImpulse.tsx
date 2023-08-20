import { member, Member, Component } from "../../../core";
    
    export interface ApplyCharacterImpulseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Impulse?: member<any>;
Character?: member<any>;
IgnoreMass?: member<any>;
OnDone?: member<any>;
    }
    
    export function ApplyCharacterImpulse(props: ApplyCharacterImpulseInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Impulse,
Character,
IgnoreMass,
OnDone, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Physics.ApplyCharacterImpulse" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Impulse" id={typeof Impulse === "object" && "id" in Impulse ? Impulse?.id : undefined} value={typeof Impulse === "object" && "value" in Impulse ? Impulse?.value : Impulse} /* default: ID0 */  isRaw={typeof Impulse === "object" && "isRaw" in Impulse && Impulse.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.CharacterController]`} name="Character" id={typeof Character === "object" && "id" in Character ? Character?.id : undefined} value={typeof Character === "object" && "value" in Character ? Character?.value : Character} /* default: ID0 */  isRaw={typeof Character === "object" && "isRaw" in Character && Character.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IgnoreMass" id={typeof IgnoreMass === "object" && "id" in IgnoreMass ? IgnoreMass?.id : undefined} value={typeof IgnoreMass === "object" && "value" in IgnoreMass ? IgnoreMass?.value : IgnoreMass} /* default: ID0 */  isRaw={typeof IgnoreMass === "object" && "isRaw" in IgnoreMass && IgnoreMass.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDone === "object" && "isRaw" in OnDone && OnDone.isRaw ? true : undefined} />
        </Component>
      );
    };
    