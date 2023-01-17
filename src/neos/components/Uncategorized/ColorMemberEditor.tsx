import { member, Member, Component } from "../../core";
    
    export interface ColorMemberEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Continuous?: member<boolean>;
_path?: member<any>;
_target?: member<any>;
_colorDrive?: member<any>;
_colorDriveNoAlpha?: member<any>;
_colorDialog?: member<any>;
    }
    
    export function ColorMemberEditor(props: ColorMemberEditorInput){
      const { id, persistentId, updateOrder, Enabled,
Continuous,
_path,
_target,
_colorDrive,
_colorDriveNoAlpha,
_colorDialog, } = props;
    
      return (
        <Component type="FrooxEngine.ColorMemberEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Continuous" id={typeof Continuous === "object" && "id" in Continuous ? Continuous?.id : undefined} value={typeof Continuous === "object" && "value" in Continuous ? Continuous?.value : Continuous} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_path" id={typeof _path === "object" && "id" in _path ? _path?.id : undefined} value={typeof _path === "object" && "value" in _path ? _path?.value : _path} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_colorDrive" id={typeof _colorDrive === "object" && "id" in _colorDrive ? _colorDrive?.id : undefined} value={typeof _colorDrive === "object" && "value" in _colorDrive ? _colorDrive?.value : _colorDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_colorDriveNoAlpha" id={typeof _colorDriveNoAlpha === "object" && "id" in _colorDriveNoAlpha ? _colorDriveNoAlpha?.id : undefined} value={typeof _colorDriveNoAlpha === "object" && "value" in _colorDriveNoAlpha ? _colorDriveNoAlpha?.value : _colorDriveNoAlpha} /* default: ID0 */  />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.NeosColorDialog]`} name="_colorDialog" id={typeof _colorDialog === "object" && "id" in _colorDialog ? _colorDialog?.id : undefined} value={typeof _colorDialog === "object" && "value" in _colorDialog ? _colorDialog?.value : _colorDialog} /* default: ID0 */  />
        </Component>
      );
    };
    