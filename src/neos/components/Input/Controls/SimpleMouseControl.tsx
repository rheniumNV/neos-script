import { member, Member, Component } from "../../../core";
    
    export interface SimpleMouseControlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
TooltipRoot?: member<any>;
TouchSource?: member<any>;
CharacterController?: member<any>;
_grabber?: member<any>;
ActiveToolTipLink?: member<any>;
_laserSlot?: member<any>;
_laser?: member<any>;
    }
    
    export function SimpleMouseControl(props: SimpleMouseControlInput){
      const { id, persistentId, updateOrder, Enabled,
User,
TooltipRoot,
TouchSource,
CharacterController,
_grabber,
ActiveToolTipLink,
_laserSlot,
_laser, } = props;
    
      return (
        <Component type="FrooxEngine.SimpleMouseControl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TooltipRoot" id={typeof TooltipRoot === "object" && "id" in TooltipRoot ? TooltipRoot?.id : undefined} value={typeof TooltipRoot === "object" && "value" in TooltipRoot ? TooltipRoot?.value : TooltipRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PointTouchSource]`} name="TouchSource" id={typeof TouchSource === "object" && "id" in TouchSource ? TouchSource?.id : undefined} value={typeof TouchSource === "object" && "value" in TouchSource ? TouchSource?.value : TouchSource} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CharacterController]`} name="CharacterController" id={typeof CharacterController === "object" && "id" in CharacterController ? CharacterController?.id : undefined} value={typeof CharacterController === "object" && "value" in CharacterController ? CharacterController?.value : CharacterController} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_grabber" id={typeof _grabber === "object" && "id" in _grabber ? _grabber?.id : undefined} value={typeof _grabber === "object" && "value" in _grabber ? _grabber?.value : _grabber} /* default: ID0 */  />
<Member type={`FrooxEngine.LinkTargetRef\`1[FrooxEngine.IToolTip]`} name="ActiveToolTipLink" id={typeof ActiveToolTipLink === "object" && "id" in ActiveToolTipLink ? ActiveToolTipLink?.id : undefined} value={typeof ActiveToolTipLink === "object" && "value" in ActiveToolTipLink ? ActiveToolTipLink?.value : ActiveToolTipLink} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_laserSlot" id={typeof _laserSlot === "object" && "id" in _laserSlot ? _laserSlot?.id : undefined} value={typeof _laserSlot === "object" && "value" in _laserSlot ? _laserSlot?.value : _laserSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Laser]`} name="_laser" id={typeof _laser === "object" && "id" in _laser ? _laser?.id : undefined} value={typeof _laser === "object" && "value" in _laser ? _laser?.value : _laser} /* default: ID0 */  />
        </Component>
      );
    };
    