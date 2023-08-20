import { member, Member, Component } from "../../../core";
    
    export interface UpdateNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Update?: member<any>;
UpdatingUser?: member<any>;
    }
    
    export function UpdateNode(props: UpdateNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Update,
UpdatingUser, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.UpdateNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Update" id={typeof Update === "object" && "id" in Update ? Update?.id : undefined} value={typeof Update === "object" && "value" in Update ? Update?.value : Update} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Update === "object" && "isRaw" in Update && Update.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="UpdatingUser" id={typeof UpdatingUser === "object" && "id" in UpdatingUser ? UpdatingUser?.id : undefined} value={typeof UpdatingUser === "object" && "value" in UpdatingUser ? UpdatingUser?.value : UpdatingUser} /* default: ID0 */  isRaw={typeof UpdatingUser === "object" && "isRaw" in UpdatingUser && UpdatingUser.isRaw ? true : undefined} />
        </Component>
      );
    };
    