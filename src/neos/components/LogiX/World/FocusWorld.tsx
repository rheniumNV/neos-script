import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FocusWorldInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
URL?: member<any>;
CloseCurrent?: member<any>;
NotFound?: member<any>;
Focused?: member<any>;
    }
    
    export function FocusWorld(props: FocusWorldInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
URL,
CloseCurrent,
NotFound,
Focused, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldNodes.FocusWorld" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="CloseCurrent" id={typeof CloseCurrent === "object" && "id" in CloseCurrent ? CloseCurrent?.id : undefined} value={typeof CloseCurrent === "object" && "value" in CloseCurrent ? CloseCurrent?.value : CloseCurrent} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="NotFound" id={typeof NotFound === "object" && "id" in NotFound ? NotFound?.id : undefined} value={typeof NotFound === "object" && "value" in NotFound ? NotFound?.value : NotFound} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Focused" id={typeof Focused === "object" && "id" in Focused ? Focused?.id : undefined} value={typeof Focused === "object" && "value" in Focused ? Focused?.value : Focused} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    