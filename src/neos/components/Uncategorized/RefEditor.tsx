import { member, Member, Component } from "../../core";
    
    export interface RefEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetRef?: member<any>;
_textDrive?: member<string>;
_button?: member<any>;
    }
    
    export function RefEditor(props: RefEditorInput){
      const { id, persistentId, updateOrder, Enabled,
_targetRef,
_textDrive,
_button, } = props;
    
      return (
        <Component type="FrooxEngine.RefEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.ISyncRef]`} name="_targetRef" id={typeof _targetRef === "object" && "id" in _targetRef ? _targetRef?.id : undefined} value={typeof _targetRef === "object" && "value" in _targetRef ? _targetRef?.value : _targetRef} /* default: ID0 */  isRaw={typeof _targetRef === "object" && "isRaw" in _targetRef && _targetRef.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_textDrive" id={typeof _textDrive === "object" && "id" in _textDrive ? _textDrive?.id : undefined} value={typeof _textDrive === "object" && "value" in _textDrive ? _textDrive?.value : _textDrive} /* default: ID0 */  isRaw={typeof _textDrive === "object" && "isRaw" in _textDrive && _textDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_button" id={typeof _button === "object" && "id" in _button ? _button?.id : undefined} value={typeof _button === "object" && "value" in _button ? _button?.value : _button} /* default: ID0 */  isRaw={typeof _button === "object" && "isRaw" in _button && _button.isRaw ? true : undefined} />
        </Component>
      );
    };
    