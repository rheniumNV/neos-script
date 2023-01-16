import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FieldEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetField?: member<any>;
    }
    
    export function FieldEditor(props: FieldEditorInput){
      const { id, persistentId, updateOrder, Enabled,
_targetField, } = props;
    
      return (
        <Component type="FrooxEngine.FieldEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField]`} name="_targetField" id={typeof _targetField === "object" && "id" in _targetField ? _targetField?.id : undefined} value={typeof _targetField === "object" && "value" in _targetField ? _targetField?.value : _targetField} /* default: ID0 */  />
        </Component>
      );
    };
    