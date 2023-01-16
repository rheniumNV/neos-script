import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NullableMemberEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Continuous?: member<boolean>;
_path?: member<any>;
_target?: member<any>;
NullableBaseType?: member<any>;
_checkBox?: member<any>;
_stateDrive?: member<any>;
_button?: member<any>;
    }
    
    export function NullableMemberEditor(props: NullableMemberEditorInput){
      const { id, persistentId, updateOrder, Enabled,
Continuous,
_path,
_target,
NullableBaseType,
_checkBox,
_stateDrive,
_button, } = props;
    
      return (
        <Component type="FrooxEngine.NullableMemberEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Continuous" id={typeof Continuous === "object" && "id" in Continuous ? Continuous?.id : undefined} value={typeof Continuous === "object" && "value" in Continuous ? Continuous?.value : Continuous} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_path" id={typeof _path === "object" && "id" in _path ? _path?.id : undefined} value={typeof _path === "object" && "value" in _path ? _path?.value : _path} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncType`} name="NullableBaseType" id={typeof NullableBaseType === "object" && "id" in NullableBaseType ? NullableBaseType?.id : undefined} value={typeof NullableBaseType === "object" && "value" in NullableBaseType ? NullableBaseType?.value : NullableBaseType} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_checkBox" id={typeof _checkBox === "object" && "id" in _checkBox ? _checkBox?.id : undefined} value={typeof _checkBox === "object" && "value" in _checkBox ? _checkBox?.value : _checkBox} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_stateDrive" id={typeof _stateDrive === "object" && "id" in _stateDrive ? _stateDrive?.id : undefined} value={typeof _stateDrive === "object" && "value" in _stateDrive ? _stateDrive?.value : _stateDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_button" id={typeof _button === "object" && "id" in _button ? _button?.id : undefined} value={typeof _button === "object" && "value" in _button ? _button?.value : _button} /* default: ID0 */  />
        </Component>
      );
    };
    