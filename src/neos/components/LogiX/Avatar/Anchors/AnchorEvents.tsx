import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AnchorEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Anchor?: member<any>;
OnAnchored?: member<any>;
OnReleased?: member<any>;
    }
    
    export function AnchorEvents(props: AnchorEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Anchor,
OnAnchored,
OnReleased, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Avatar.AnchorEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.CommonAvatar.AvatarAnchor]`} name="Anchor" id={typeof Anchor === "object" && "id" in Anchor ? Anchor?.id : undefined} value={typeof Anchor === "object" && "value" in Anchor ? Anchor?.value : Anchor} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnAnchored" id={typeof OnAnchored === "object" && "id" in OnAnchored ? OnAnchored?.id : undefined} value={typeof OnAnchored === "object" && "value" in OnAnchored ? OnAnchored?.value : OnAnchored} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReleased" id={typeof OnReleased === "object" && "id" in OnReleased ? OnReleased?.id : undefined} value={typeof OnReleased === "object" && "value" in OnReleased ? OnReleased?.value : OnReleased} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    