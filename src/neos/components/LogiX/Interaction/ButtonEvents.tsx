import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Button?: member<any>;
Pressed?: member<any>;
Pressing?: member<any>;
Released?: member<any>;
HoverEnter?: member<any>;
HoverStay?: member<any>;
HoverLeave?: member<any>;
    }
    
    export function ButtonEvents(props: ButtonEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Button,
Pressed,
Pressing,
Released,
HoverEnter,
HoverStay,
HoverLeave, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.ButtonEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IButton]`} name="Button" id={typeof Button === "object" && "id" in Button ? Button?.id : undefined} value={typeof Button === "object" && "value" in Button ? Button?.value : Button} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pressed" id={typeof Pressed === "object" && "id" in Pressed ? Pressed?.id : undefined} value={typeof Pressed === "object" && "value" in Pressed ? Pressed?.value : Pressed} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pressing" id={typeof Pressing === "object" && "id" in Pressing ? Pressing?.id : undefined} value={typeof Pressing === "object" && "value" in Pressing ? Pressing?.value : Pressing} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Released" id={typeof Released === "object" && "id" in Released ? Released?.id : undefined} value={typeof Released === "object" && "value" in Released ? Released?.value : Released} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="HoverEnter" id={typeof HoverEnter === "object" && "id" in HoverEnter ? HoverEnter?.id : undefined} value={typeof HoverEnter === "object" && "value" in HoverEnter ? HoverEnter?.value : HoverEnter} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="HoverStay" id={typeof HoverStay === "object" && "id" in HoverStay ? HoverStay?.id : undefined} value={typeof HoverStay === "object" && "value" in HoverStay ? HoverStay?.value : HoverStay} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="HoverLeave" id={typeof HoverLeave === "object" && "id" in HoverLeave ? HoverLeave?.id : undefined} value={typeof HoverLeave === "object" && "value" in HoverLeave ? HoverLeave?.value : HoverLeave} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    