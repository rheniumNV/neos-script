import { member, Member, Component } from "../../../core";
    
    export interface NearestUserHeadInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Reference?: member<any>;
IgnoreUser?: member<any>;
IgnoreAFK?: member<any>;
    }
    
    export function NearestUserHead(props: NearestUserHeadInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Reference,
IgnoreUser,
IgnoreAFK, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Avatar.NearestUserHead" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: ID0 */  isRaw={typeof Reference === "object" && "isRaw" in Reference && Reference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="IgnoreUser" id={typeof IgnoreUser === "object" && "id" in IgnoreUser ? IgnoreUser?.id : undefined} value={typeof IgnoreUser === "object" && "value" in IgnoreUser ? IgnoreUser?.value : IgnoreUser} /* default: ID0 */  isRaw={typeof IgnoreUser === "object" && "isRaw" in IgnoreUser && IgnoreUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IgnoreAFK" id={typeof IgnoreAFK === "object" && "id" in IgnoreAFK ? IgnoreAFK?.id : undefined} value={typeof IgnoreAFK === "object" && "value" in IgnoreAFK ? IgnoreAFK?.value : IgnoreAFK} /* default: ID0 */  isRaw={typeof IgnoreAFK === "object" && "isRaw" in IgnoreAFK && IgnoreAFK.isRaw ? true : undefined} />
        </Component>
      );
    };
    