import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NearestUserHandInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
GetLeft?: member<any>;
GetRight?: member<any>;
Reference?: member<any>;
IgnoreUser?: member<any>;
IgnoreAFK?: member<any>;
    }
    
    export function NearestUserHand(props: NearestUserHandInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
GetLeft,
GetRight,
Reference,
IgnoreUser,
IgnoreAFK, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Avatar.NearestUserHand" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="GetLeft" id={typeof GetLeft === "object" && "id" in GetLeft ? GetLeft?.id : undefined} value={typeof GetLeft === "object" && "value" in GetLeft ? GetLeft?.value : GetLeft} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="GetRight" id={typeof GetRight === "object" && "id" in GetRight ? GetRight?.id : undefined} value={typeof GetRight === "object" && "value" in GetRight ? GetRight?.value : GetRight} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="IgnoreUser" id={typeof IgnoreUser === "object" && "id" in IgnoreUser ? IgnoreUser?.id : undefined} value={typeof IgnoreUser === "object" && "value" in IgnoreUser ? IgnoreUser?.value : IgnoreUser} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IgnoreAFK" id={typeof IgnoreAFK === "object" && "id" in IgnoreAFK ? IgnoreAFK?.id : undefined} value={typeof IgnoreAFK === "object" && "value" in IgnoreAFK ? IgnoreAFK?.value : IgnoreAFK} /* default: ID0 */  />
        </Component>
      );
    };
    