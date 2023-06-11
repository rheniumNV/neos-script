import { member, Member, Component } from "../../core";
    
    export interface DisplayImpulseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
_text?: member<any>;
_impulseCount?: member<number>;
    }
    
    export function DisplayImpulse(props: DisplayImpulseInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
_text,
_impulseCount, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Display.DisplayImpulse" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_text" id={typeof _text === "object" && "id" in _text ? _text?.id : undefined} value={typeof _text === "object" && "value" in _text ? _text?.value : _text} /* default: ID0 */  isRaw={typeof _text === "object" && "isRaw" in _text && _text.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_impulseCount" id={typeof _impulseCount === "object" && "id" in _impulseCount ? _impulseCount?.id : undefined} value={typeof _impulseCount === "object" && "value" in _impulseCount ? _impulseCount?.value : _impulseCount} /* default: 0 */  isRaw={typeof _impulseCount === "object" && "isRaw" in _impulseCount && _impulseCount.isRaw ? true : undefined} />
        </Component>
      );
    };
    