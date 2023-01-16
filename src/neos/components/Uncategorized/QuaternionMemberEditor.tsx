import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface QuaternionMemberEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Continuous?: member<boolean>;
_path?: member<any>;
_target?: member<any>;
_xEditor?: member<any>;
_yEditor?: member<any>;
_zEditor?: member<any>;
_xDrive?: member<string>;
_yDrive?: member<string>;
_zDrive?: member<string>;
_xButton?: member<any>;
_yButton?: member<any>;
_zButton?: member<any>;
_editingValue?: member<any>;
    }
    
    export function QuaternionMemberEditor(props: QuaternionMemberEditorInput){
      const { id, persistentId, updateOrder, Enabled,
Continuous,
_path,
_target,
_xEditor,
_yEditor,
_zEditor,
_xDrive,
_yDrive,
_zDrive,
_xButton,
_yButton,
_zButton,
_editingValue, } = props;
    
      return (
        <Component type="FrooxEngine.QuaternionMemberEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Continuous" id={typeof Continuous === "object" && "id" in Continuous ? Continuous?.id : undefined} value={typeof Continuous === "object" && "value" in Continuous ? Continuous?.value : Continuous} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_path" id={typeof _path === "object" && "id" in _path ? _path?.id : undefined} value={typeof _path === "object" && "value" in _path ? _path?.value : _path} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.TextEditor]`} name="_xEditor" id={typeof _xEditor === "object" && "id" in _xEditor ? _xEditor?.id : undefined} value={typeof _xEditor === "object" && "value" in _xEditor ? _xEditor?.value : _xEditor} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.TextEditor]`} name="_yEditor" id={typeof _yEditor === "object" && "id" in _yEditor ? _yEditor?.id : undefined} value={typeof _yEditor === "object" && "value" in _yEditor ? _yEditor?.value : _yEditor} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.TextEditor]`} name="_zEditor" id={typeof _zEditor === "object" && "id" in _zEditor ? _zEditor?.id : undefined} value={typeof _zEditor === "object" && "value" in _zEditor ? _zEditor?.value : _zEditor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_xDrive" id={typeof _xDrive === "object" && "id" in _xDrive ? _xDrive?.id : undefined} value={typeof _xDrive === "object" && "value" in _xDrive ? _xDrive?.value : _xDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_yDrive" id={typeof _yDrive === "object" && "id" in _yDrive ? _yDrive?.id : undefined} value={typeof _yDrive === "object" && "value" in _yDrive ? _yDrive?.value : _yDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_zDrive" id={typeof _zDrive === "object" && "id" in _zDrive ? _zDrive?.id : undefined} value={typeof _zDrive === "object" && "value" in _zDrive ? _zDrive?.value : _zDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_xButton" id={typeof _xButton === "object" && "id" in _xButton ? _xButton?.id : undefined} value={typeof _xButton === "object" && "value" in _xButton ? _xButton?.value : _xButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_yButton" id={typeof _yButton === "object" && "id" in _yButton ? _yButton?.id : undefined} value={typeof _yButton === "object" && "value" in _yButton ? _yButton?.value : _yButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_zButton" id={typeof _zButton === "object" && "id" in _zButton ? _zButton?.id : undefined} value={typeof _zButton === "object" && "value" in _zButton ? _zButton?.value : _zButton} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.double3]]`} name="_editingValue" id={typeof _editingValue === "object" && "id" in _editingValue ? _editingValue?.id : undefined} value={typeof _editingValue === "object" && "value" in _editingValue ? _editingValue?.value : _editingValue} /* default: <i>null</i> */  />
        </Component>
      );
    };
    