import { member, Member, Component } from "../../core";
    
    export interface TwoFactorCodeDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_code?: member<any>;
    }
    
    export function TwoFactorCodeDialog(props: TwoFactorCodeDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_code, } = props;
    
      return (
        <Component type="FrooxEngine.TwoFactorCodeDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_code" id={typeof _code === "object" && "id" in _code ? _code?.id : undefined} value={typeof _code === "object" && "value" in _code ? _code?.value : _code} /* default: ID0 */  isRaw={typeof _code === "object" && "isRaw" in _code && _code.isRaw ? true : undefined} />
        </Component>
      );
    };
    