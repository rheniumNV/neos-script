import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ExportDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetFolder?: member<any>;
_style?: member<any>;
_name?: member<any>;
_radioGroup?: member<any>;
_cancel?: member<any>;
_export?: member<any>;
_exportOptions?: member<any>;
    }
    
    export function ExportDialog(props: ExportDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_targetFolder,
_style,
_name,
_radioGroup,
_cancel,
_export,
_exportOptions, } = props;
    
      return (
        <Component type="FrooxEngine.ExportDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_targetFolder" id={typeof _targetFolder === "object" && "id" in _targetFolder ? _targetFolder?.id : undefined} value={typeof _targetFolder === "object" && "value" in _targetFolder ? _targetFolder?.value : _targetFolder} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosUIStyle]`} name="_style" id={typeof _style === "object" && "id" in _style ? _style?.id : undefined} value={typeof _style === "object" && "value" in _style ? _style?.value : _style} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosTextField]`} name="_name" id={typeof _name === "object" && "id" in _name ? _name?.id : undefined} value={typeof _name === "object" && "value" in _name ? _name?.value : _name} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosRadioGroup]`} name="_radioGroup" id={typeof _radioGroup === "object" && "id" in _radioGroup ? _radioGroup?.id : undefined} value={typeof _radioGroup === "object" && "value" in _radioGroup ? _radioGroup?.value : _radioGroup} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosButton]`} name="_cancel" id={typeof _cancel === "object" && "id" in _cancel ? _cancel?.id : undefined} value={typeof _cancel === "object" && "value" in _cancel ? _cancel?.value : _cancel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosButton]`} name="_export" id={typeof _export === "object" && "id" in _export ? _export?.id : undefined} value={typeof _export === "object" && "value" in _export ? _export?.value : _export} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.ExportDialog+ExportOption]`} name="_exportOptions" id={typeof _exportOptions === "object" && "id" in _exportOptions ? _exportOptions?.id : undefined} value={typeof _exportOptions === "object" && "value" in _exportOptions ? _exportOptions?.value : _exportOptions} /* default: FrooxEngine.SyncList`1[FrooxEngine.ExportDialog+ExportOption] */  />
        </Component>
      );
    };
    