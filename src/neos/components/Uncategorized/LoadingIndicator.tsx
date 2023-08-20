import { member, Member, Component } from "../../core";
    
    export interface LoadingIndicatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_visual?: member<any>;
_majorText?: member<any>;
_infoText?: member<any>;
    }
    
    export function LoadingIndicator(props: LoadingIndicatorInput){
      const { id, persistentId, updateOrder, Enabled,
_visual,
_majorText,
_infoText, } = props;
    
      return (
        <Component type="FrooxEngine.LoadingIndicator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visual" id={typeof _visual === "object" && "id" in _visual ? _visual?.id : undefined} value={typeof _visual === "object" && "value" in _visual ? _visual?.value : _visual} /* default: ID0 */  isRaw={typeof _visual === "object" && "isRaw" in _visual && _visual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_majorText" id={typeof _majorText === "object" && "id" in _majorText ? _majorText?.id : undefined} value={typeof _majorText === "object" && "value" in _majorText ? _majorText?.value : _majorText} /* default: ID0 */  isRaw={typeof _majorText === "object" && "isRaw" in _majorText && _majorText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_infoText" id={typeof _infoText === "object" && "id" in _infoText ? _infoText?.id : undefined} value={typeof _infoText === "object" && "value" in _infoText ? _infoText?.value : _infoText} /* default: ID0 */  isRaw={typeof _infoText === "object" && "isRaw" in _infoText && _infoText.isRaw ? true : undefined} />
        </Component>
      );
    };
    