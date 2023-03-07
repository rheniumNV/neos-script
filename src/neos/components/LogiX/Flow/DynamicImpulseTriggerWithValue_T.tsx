import { member, Member, Component } from "../../../core";
    
    export interface DynamicImpulseTriggerWithValue_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Tag?: member<any>;
TargetHierarchy?: member<any>;
ExcludeDisabled?: member<any>;
Value?: member<any>;
OnTriggered?: member<any>;
    }
    
    export function DynamicImpulseTriggerWithValue_T(props: DynamicImpulseTriggerWithValue_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Tag,
TargetHierarchy,
ExcludeDisabled,
Value,
OnTriggered, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.ProgramFlow.DynamicImpulseTriggerWithValue\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Tag" id={typeof Tag === "object" && "id" in Tag ? Tag?.id : undefined} value={typeof Tag === "object" && "value" in Tag ? Tag?.value : Tag} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="TargetHierarchy" id={typeof TargetHierarchy === "object" && "id" in TargetHierarchy ? TargetHierarchy?.id : undefined} value={typeof TargetHierarchy === "object" && "value" in TargetHierarchy ? TargetHierarchy?.value : TargetHierarchy} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ExcludeDisabled" id={typeof ExcludeDisabled === "object" && "id" in ExcludeDisabled ? ExcludeDisabled?.id : undefined} value={typeof ExcludeDisabled === "object" && "value" in ExcludeDisabled ? ExcludeDisabled?.value : ExcludeDisabled} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnTriggered" id={typeof OnTriggered === "object" && "id" in OnTriggered ? OnTriggered?.id : undefined} value={typeof OnTriggered === "object" && "value" in OnTriggered ? OnTriggered?.value : OnTriggered} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    