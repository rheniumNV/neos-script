import { member, Member, Component } from "../../../core";
    
    export interface BooleanToggleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnSet?: member<any>;
OnReset?: member<any>;
State?: member<boolean>;
    }
    
    export function BooleanToggle(props: BooleanToggleInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnSet,
OnReset,
State, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.BooleanToggle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSet" id={typeof OnSet === "object" && "id" in OnSet ? OnSet?.id : undefined} value={typeof OnSet === "object" && "value" in OnSet ? OnSet?.value : OnSet} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReset" id={typeof OnReset === "object" && "id" in OnReset ? OnReset?.id : undefined} value={typeof OnReset === "object" && "value" in OnReset ? OnReset?.value : OnReset} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="State" id={typeof State === "object" && "id" in State ? State?.id : undefined} value={typeof State === "object" && "value" in State ? State?.value : State} /* default: false */  />
        </Component>
      );
    };
    