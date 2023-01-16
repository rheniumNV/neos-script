import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ClearDynamicVariablesInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
SpaceName?: member<any>;
OnNotFound?: member<any>;
OnCleared?: member<any>;
    }
    
    export function ClearDynamicVariables(props: ClearDynamicVariablesInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
SpaceName,
OnNotFound,
OnCleared, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Data.ClearDynamicVariables" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="SpaceName" id={typeof SpaceName === "object" && "id" in SpaceName ? SpaceName?.id : undefined} value={typeof SpaceName === "object" && "value" in SpaceName ? SpaceName?.value : SpaceName} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnNotFound" id={typeof OnNotFound === "object" && "id" in OnNotFound ? OnNotFound?.id : undefined} value={typeof OnNotFound === "object" && "value" in OnNotFound ? OnNotFound?.value : OnNotFound} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnCleared" id={typeof OnCleared === "object" && "id" in OnCleared ? OnCleared?.id : undefined} value={typeof OnCleared === "object" && "value" in OnCleared ? OnCleared?.value : OnCleared} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    