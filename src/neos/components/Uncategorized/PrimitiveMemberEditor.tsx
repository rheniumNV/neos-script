import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PrimitiveMemberEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Continuous?: member<boolean>;
_path?: member<any>;
_target?: member<any>;
Format?: member<any>;
_textEditor?: member<any>;
_textDrive?: member<string>;
_button?: member<any>;
_resetButton?: member<any>;
    }
    
    export function PrimitiveMemberEditor(props: PrimitiveMemberEditorInput){
      const { id, persistentId, updateOrder, Enabled,
Continuous,
_path,
_target,
Format,
_textEditor,
_textDrive,
_button,
_resetButton, } = props;
    
      return (
        <Component type="FrooxEngine.PrimitiveMemberEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Continuous" id={typeof Continuous === "object" && "id" in Continuous ? Continuous?.id : undefined} value={typeof Continuous === "object" && "value" in Continuous ? Continuous?.value : Continuous} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_path" id={typeof _path === "object" && "id" in _path ? _path?.id : undefined} value={typeof _path === "object" && "value" in _path ? _path?.value : _path} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextEditor]`} name="_textEditor" id={typeof _textEditor === "object" && "id" in _textEditor ? _textEditor?.id : undefined} value={typeof _textEditor === "object" && "value" in _textEditor ? _textEditor?.value : _textEditor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_textDrive" id={typeof _textDrive === "object" && "id" in _textDrive ? _textDrive?.id : undefined} value={typeof _textDrive === "object" && "value" in _textDrive ? _textDrive?.value : _textDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_button" id={typeof _button === "object" && "id" in _button ? _button?.id : undefined} value={typeof _button === "object" && "value" in _button ? _button?.value : _button} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_resetButton" id={typeof _resetButton === "object" && "id" in _resetButton ? _resetButton?.id : undefined} value={typeof _resetButton === "object" && "value" in _resetButton ? _resetButton?.value : _resetButton} /* default: ID0 */  />
        </Component>
      );
    };
    