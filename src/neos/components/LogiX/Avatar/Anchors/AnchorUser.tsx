import { member, Member, Component } from "../../../../core";
    
    export interface AnchorUserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Anchor?: member<any>;
User?: member<any>;
OnAnchored?: member<any>;
    }
    
    export function AnchorUser(props: AnchorUserInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Anchor,
User,
OnAnchored, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Avatar.AnchorUser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IAvatarAnchor]`} name="Anchor" id={typeof Anchor === "object" && "id" in Anchor ? Anchor?.id : undefined} value={typeof Anchor === "object" && "value" in Anchor ? Anchor?.value : Anchor} /* default: ID0 */  isRaw={typeof Anchor === "object" && "isRaw" in Anchor && Anchor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnAnchored" id={typeof OnAnchored === "object" && "id" in OnAnchored ? OnAnchored?.id : undefined} value={typeof OnAnchored === "object" && "value" in OnAnchored ? OnAnchored?.value : OnAnchored} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnAnchored === "object" && "isRaw" in OnAnchored && OnAnchored.isRaw ? true : undefined} />
        </Component>
      );
    };
    