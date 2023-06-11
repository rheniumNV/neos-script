import { member, Member, Component } from "../../../core";
    
    export interface LocalLeakyImpulseBucketInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Pulse?: member<any>;
Overflow?: member<any>;
Interval?: member<any>;
MaximumCapacity?: member<any>;
    }
    
    export function LocalLeakyImpulseBucket(props: LocalLeakyImpulseBucketInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Pulse,
Overflow,
Interval,
MaximumCapacity, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.LocalLeakyImpulseBucket" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pulse === "object" && "isRaw" in Pulse && Pulse.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Overflow" id={typeof Overflow === "object" && "id" in Overflow ? Overflow?.id : undefined} value={typeof Overflow === "object" && "value" in Overflow ? Overflow?.value : Overflow} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Overflow === "object" && "isRaw" in Overflow && Overflow.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Interval" id={typeof Interval === "object" && "id" in Interval ? Interval?.id : undefined} value={typeof Interval === "object" && "value" in Interval ? Interval?.value : Interval} /* default: ID0 */  isRaw={typeof Interval === "object" && "isRaw" in Interval && Interval.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="MaximumCapacity" id={typeof MaximumCapacity === "object" && "id" in MaximumCapacity ? MaximumCapacity?.id : undefined} value={typeof MaximumCapacity === "object" && "value" in MaximumCapacity ? MaximumCapacity?.value : MaximumCapacity} /* default: ID0 */  isRaw={typeof MaximumCapacity === "object" && "isRaw" in MaximumCapacity && MaximumCapacity.isRaw ? true : undefined} />
        </Component>
      );
    };
    