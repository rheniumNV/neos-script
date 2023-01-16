import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface IsChildOfInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
Other?: member<any>;
IncludeSelf?: member<any>;
    }
    
    export function IsChildOf(props: IsChildOfInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
Other,
IncludeSelf, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.IsChildOf" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Other" id={typeof Other === "object" && "id" in Other ? Other?.id : undefined} value={typeof Other === "object" && "value" in Other ? Other?.value : Other} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IncludeSelf" id={typeof IncludeSelf === "object" && "id" in IncludeSelf ? IncludeSelf?.id : undefined} value={typeof IncludeSelf === "object" && "value" in IncludeSelf ? IncludeSelf?.value : IncludeSelf} /* default: ID0 */  />
        </Component>
      );
    };
    