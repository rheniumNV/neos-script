import { member, Member, Component } from "../../core";
    
    export interface BrowserCreateDirectoryDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_browser?: member<any>;
_callback?: member<any>;
_text?: member<any>;
_textField?: member<any>;
    }
    
    export function BrowserCreateDirectoryDialog(props: BrowserCreateDirectoryDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_browser,
_callback,
_text,
_textField, } = props;
    
      return (
        <Component type="FrooxEngine.BrowserCreateDirectoryDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BrowserDialog]`} name="_browser" id={typeof _browser === "object" && "id" in _browser ? _browser?.id : undefined} value={typeof _browser === "object" && "value" in _browser ? _browser?.value : _browser} /* default: ID0 */  isRaw={typeof _browser === "object" && "isRaw" in _browser && _browser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.BrowserCreateDirectoryDialog+CreateHandler]`} name="_callback" id={typeof _callback === "object" && "id" in _callback ? _callback?.id : undefined} value={typeof _callback === "object" && "value" in _callback ? _callback?.value : _callback} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof _callback === "object" && "isRaw" in _callback && _callback.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_text" id={typeof _text === "object" && "id" in _text ? _text?.id : undefined} value={typeof _text === "object" && "value" in _text ? _text?.value : _text} /* default: ID0 */  isRaw={typeof _text === "object" && "isRaw" in _text && _text.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_textField" id={typeof _textField === "object" && "id" in _textField ? _textField?.id : undefined} value={typeof _textField === "object" && "value" in _textField ? _textField?.value : _textField} /* default: ID0 */  isRaw={typeof _textField === "object" && "isRaw" in _textField && _textField.isRaw ? true : undefined} />
        </Component>
      );
    };
    