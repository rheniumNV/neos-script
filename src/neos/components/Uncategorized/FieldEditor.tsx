import { member, Member, Component } from "../../core";
    
    export interface FieldEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetField?: member<any>;
_textEditors?: member<any>;
_textDrives?: member<any>;
    }
    
    export function FieldEditor(props: FieldEditorInput){
      const { id, persistentId, updateOrder, Enabled,
_targetField,
_textEditors,
_textDrives, } = props;
    
      return (
        <Component type="FrooxEngine.FieldEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField]`} name="_targetField" id={typeof _targetField === "object" && "id" in _targetField ? _targetField?.id : undefined} value={typeof _targetField === "object" && "value" in _targetField ? _targetField?.value : _targetField} /* default: ID0 */  isRaw={typeof _targetField === "object" && "isRaw" in _targetField && _targetField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.TextEditor]`} name="_textEditors" id={typeof _textEditors === "object" && "id" in _textEditors ? _textEditors?.id : undefined} value={typeof _textEditors === "object" && "value" in _textEditors ? _textEditors?.value : _textEditors} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.TextEditor] */  isRaw={typeof _textEditors === "object" && "isRaw" in _textEditors && _textEditors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.String]]`} name="_textDrives" id={typeof _textDrives === "object" && "id" in _textDrives ? _textDrives?.id : undefined} value={typeof _textDrives === "object" && "value" in _textDrives ? _textDrives?.value : _textDrives} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.String]] */  isRaw={typeof _textDrives === "object" && "isRaw" in _textDrives && _textDrives.isRaw ? true : undefined} />
        </Component>
      );
    };
    