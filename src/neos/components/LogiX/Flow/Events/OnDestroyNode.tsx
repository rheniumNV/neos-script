import { member, Member, Component } from "../../../../core";
    
    export interface OnDestroyNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Destroyed?: member<any>;
OnlyHost?: member<any>;
    }
    
    export function OnDestroyNode(props: OnDestroyNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Destroyed,
OnlyHost, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnDestroyNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Destroyed" id={typeof Destroyed === "object" && "id" in Destroyed ? Destroyed?.id : undefined} value={typeof Destroyed === "object" && "value" in Destroyed ? Destroyed?.value : Destroyed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Destroyed === "object" && "isRaw" in Destroyed && Destroyed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="OnlyHost" id={typeof OnlyHost === "object" && "id" in OnlyHost ? OnlyHost?.id : undefined} value={typeof OnlyHost === "object" && "value" in OnlyHost ? OnlyHost?.value : OnlyHost} /* default: ID0 */  isRaw={typeof OnlyHost === "object" && "isRaw" in OnlyHost && OnlyHost.isRaw ? true : undefined} />
        </Component>
      );
    };
    