import { member, Member, Component } from "../../../core";
    
    export interface ImpulseMultiplexerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Impulses?: member<any>;
Index?: member<any>;
    }
    
    export function ImpulseMultiplexer(props: ImpulseMultiplexerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Impulses,
Index, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.ImpulseMultiplexer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LogiX.Impulse]`} name="Impulses" id={typeof Impulses === "object" && "id" in Impulses ? Impulses?.id : undefined} value={typeof Impulses === "object" && "value" in Impulses ? Impulses?.value : Impulses} /* default: FrooxEngine.SyncList`1[FrooxEngine.LogiX.Impulse] */  isRaw={typeof Impulses === "object" && "isRaw" in Impulses && Impulses.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Index" id={typeof Index === "object" && "id" in Index ? Index?.id : undefined} value={typeof Index === "object" && "value" in Index ? Index?.value : Index} /* default: ID0 */  isRaw={typeof Index === "object" && "isRaw" in Index && Index.isRaw ? true : undefined} />
        </Component>
      );
    };
    