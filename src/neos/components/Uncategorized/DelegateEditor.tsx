import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DelegateEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetDelegate?: member<any>;
_textDrive?: member<string>;
_button?: member<any>;
    }
    
    export function DelegateEditor(props: DelegateEditorInput){
      const { id, persistentId, updateOrder, Enabled,
_targetDelegate,
_textDrive,
_button, } = props;
    
      return (
        <Component type="FrooxEngine.DelegateEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.ISyncDelegate]`} name="_targetDelegate" id={typeof _targetDelegate === "object" && "id" in _targetDelegate ? _targetDelegate?.id : undefined} value={typeof _targetDelegate === "object" && "value" in _targetDelegate ? _targetDelegate?.value : _targetDelegate} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_textDrive" id={typeof _textDrive === "object" && "id" in _textDrive ? _textDrive?.id : undefined} value={typeof _textDrive === "object" && "value" in _textDrive ? _textDrive?.value : _textDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_button" id={typeof _button === "object" && "id" in _button ? _button?.id : undefined} value={typeof _button === "object" && "value" in _button ? _button?.value : _button} /* default: ID0 */  />
        </Component>
      );
    };
    