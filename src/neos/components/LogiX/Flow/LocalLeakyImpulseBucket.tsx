import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Overflow" id={typeof Overflow === "object" && "id" in Overflow ? Overflow?.id : undefined} value={typeof Overflow === "object" && "value" in Overflow ? Overflow?.value : Overflow} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Interval" id={typeof Interval === "object" && "id" in Interval ? Interval?.id : undefined} value={typeof Interval === "object" && "value" in Interval ? Interval?.value : Interval} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="MaximumCapacity" id={typeof MaximumCapacity === "object" && "id" in MaximumCapacity ? MaximumCapacity?.id : undefined} value={typeof MaximumCapacity === "object" && "value" in MaximumCapacity ? MaximumCapacity?.value : MaximumCapacity} /* default: ID0 */  />
        </Component>
      );
    };
    