import { member, Member, Component } from "../../core";
    
    export interface SettingsDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_heightField?: member<any>;
_useImperial?: member<boolean>;
    }
    
    export function SettingsDialog(props: SettingsDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_heightField,
_useImperial, } = props;
    
      return (
        <Component type="FrooxEngine.SettingsDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.QuantityTextEditorParser\`1[QuantityX.Distance]]`} name="_heightField" id={typeof _heightField === "object" && "id" in _heightField ? _heightField?.id : undefined} value={typeof _heightField === "object" && "value" in _heightField ? _heightField?.value : _heightField} /* default: ID0 */  isRaw={typeof _heightField === "object" && "isRaw" in _heightField && _heightField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_useImperial" id={typeof _useImperial === "object" && "id" in _useImperial ? _useImperial?.id : undefined} value={typeof _useImperial === "object" && "value" in _useImperial ? _useImperial?.value : _useImperial} /* default: false */  isRaw={typeof _useImperial === "object" && "isRaw" in _useImperial && _useImperial.isRaw ? true : undefined} />
        </Component>
      );
    };
    