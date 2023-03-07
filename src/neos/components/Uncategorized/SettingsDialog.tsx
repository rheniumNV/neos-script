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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.QuantityTextEditorParser\`1[QuantityX.Distance]]`} name="_heightField" id={typeof _heightField === "object" && "id" in _heightField ? _heightField?.id : undefined} value={typeof _heightField === "object" && "value" in _heightField ? _heightField?.value : _heightField} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_useImperial" id={typeof _useImperial === "object" && "id" in _useImperial ? _useImperial?.id : undefined} value={typeof _useImperial === "object" && "value" in _useImperial ? _useImperial?.value : _useImperial} /* default: false */  />
        </Component>
      );
    };
    