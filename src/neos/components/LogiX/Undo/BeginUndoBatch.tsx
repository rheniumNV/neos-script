import { member, Member, Component } from "../../../core";
    
    export interface BeginUndoBatchInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Description?: member<any>;
OnBegin?: member<any>;
    }
    
    export function BeginUndoBatch(props: BeginUndoBatchInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Description,
OnBegin, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Undo.BeginUndoBatch" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Description" id={typeof Description === "object" && "id" in Description ? Description?.id : undefined} value={typeof Description === "object" && "value" in Description ? Description?.value : Description} /* default: ID0 */  isRaw={typeof Description === "object" && "isRaw" in Description && Description.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnBegin" id={typeof OnBegin === "object" && "id" in OnBegin ? OnBegin?.id : undefined} value={typeof OnBegin === "object" && "value" in OnBegin ? OnBegin?.value : OnBegin} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnBegin === "object" && "isRaw" in OnBegin && OnBegin.isRaw ? true : undefined} />
        </Component>
      );
    };
    