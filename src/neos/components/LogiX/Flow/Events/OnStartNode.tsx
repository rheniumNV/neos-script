import { member, Member, Component } from "../../../../core";
    
    export interface OnStartNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Started?: member<any>;
OnlyHost?: member<any>;
    }
    
    export function OnStartNode(props: OnStartNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Started,
OnlyHost, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnStartNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Started" id={typeof Started === "object" && "id" in Started ? Started?.id : undefined} value={typeof Started === "object" && "value" in Started ? Started?.value : Started} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="OnlyHost" id={typeof OnlyHost === "object" && "id" in OnlyHost ? OnlyHost?.id : undefined} value={typeof OnlyHost === "object" && "value" in OnlyHost ? OnlyHost?.value : OnlyHost} /* default: ID0 */  />
        </Component>
      );
    };
    