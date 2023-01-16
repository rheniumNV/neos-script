import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TwitchRewardRedeemEventInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Interface?: member<any>;
OnRedeem?: member<any>;
    }
    
    export function TwitchRewardRedeemEvent(props: TwitchRewardRedeemEventInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Interface,
OnRedeem, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Twitch.TwitchRewardRedeemEvent" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.TwitchInterface]`} name="Interface" id={typeof Interface === "object" && "id" in Interface ? Interface?.id : undefined} value={typeof Interface === "object" && "value" in Interface ? Interface?.value : Interface} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnRedeem" id={typeof OnRedeem === "object" && "id" in OnRedeem ? OnRedeem?.id : undefined} value={typeof OnRedeem === "object" && "value" in OnRedeem ? OnRedeem?.value : OnRedeem} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    