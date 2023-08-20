import { member, Member, Component } from "../../core";
    
    export interface TextGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_editor?: member<any>;
_editIconPosition?: member<any>;
_editIconScale?: member<any>;
    }
    
    export function TextGizmo(props: TextGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_editor,
_editIconPosition,
_editIconScale, } = props;
    
      return (
        <Component type="FrooxEngine.TextGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.TextRenderer]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextEditor]`} name="_editor" id={typeof _editor === "object" && "id" in _editor ? _editor?.id : undefined} value={typeof _editor === "object" && "value" in _editor ? _editor?.value : _editor} /* default: ID0 */  isRaw={typeof _editor === "object" && "isRaw" in _editor && _editor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_editIconPosition" id={typeof _editIconPosition === "object" && "id" in _editIconPosition ? _editIconPosition?.id : undefined} value={typeof _editIconPosition === "object" && "value" in _editIconPosition ? _editIconPosition?.value : _editIconPosition} /* default: ID0 */  isRaw={typeof _editIconPosition === "object" && "isRaw" in _editIconPosition && _editIconPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_editIconScale" id={typeof _editIconScale === "object" && "id" in _editIconScale ? _editIconScale?.id : undefined} value={typeof _editIconScale === "object" && "value" in _editIconScale ? _editIconScale?.value : _editIconScale} /* default: ID0 */  isRaw={typeof _editIconScale === "object" && "isRaw" in _editIconScale && _editIconScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    