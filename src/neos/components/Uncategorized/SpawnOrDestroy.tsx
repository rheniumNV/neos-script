import { member, Member, Component } from "../../core";
    
    export interface SpawnOrDestroyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
TargetParent?: member<any>;
_mode?: member<any>;
_preserveAssets?: member<boolean>;
_sendDestroyingEvents?: member<boolean>;
_savedObject?: member<any>;
_isComponent?: member<boolean>;
_referenceTable?: member<any>;
_isSaving?: member<boolean>;
_description?: member<any>;
_performed?: member<boolean>;
    }
    
    export function SpawnOrDestroy(props: SpawnOrDestroyInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
TargetParent,
_mode,
_preserveAssets,
_sendDestroyingEvents,
_savedObject,
_isComponent,
_referenceTable,
_isSaving,
_description,
_performed, } = props;
    
      return (
        <Component type="FrooxEngine.Undo.SpawnOrDestroy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TargetParent" id={typeof TargetParent === "object" && "id" in TargetParent ? TargetParent?.id : undefined} value={typeof TargetParent === "object" && "value" in TargetParent ? TargetParent?.value : TargetParent} /* default: ID0 */  isRaw={typeof TargetParent === "object" && "isRaw" in TargetParent && TargetParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Undo.SpawnOrDestroy+Mode]`} name="_mode" id={typeof _mode === "object" && "id" in _mode ? _mode?.id : undefined} value={typeof _mode === "object" && "value" in _mode ? _mode?.value : _mode} /* default: Spawn */  isRaw={typeof _mode === "object" && "isRaw" in _mode && _mode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_preserveAssets" id={typeof _preserveAssets === "object" && "id" in _preserveAssets ? _preserveAssets?.id : undefined} value={typeof _preserveAssets === "object" && "value" in _preserveAssets ? _preserveAssets?.value : _preserveAssets} /* default: false */  isRaw={typeof _preserveAssets === "object" && "isRaw" in _preserveAssets && _preserveAssets.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_sendDestroyingEvents" id={typeof _sendDestroyingEvents === "object" && "id" in _sendDestroyingEvents ? _sendDestroyingEvents?.id : undefined} value={typeof _sendDestroyingEvents === "object" && "value" in _sendDestroyingEvents ? _sendDestroyingEvents?.value : _sendDestroyingEvents} /* default: false */  isRaw={typeof _sendDestroyingEvents === "object" && "isRaw" in _sendDestroyingEvents && _sendDestroyingEvents.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="_savedObject" id={typeof _savedObject === "object" && "id" in _savedObject ? _savedObject?.id : undefined} value={typeof _savedObject === "object" && "value" in _savedObject ? _savedObject?.value : _savedObject} /* default: <i>null</i> */  isRaw={typeof _savedObject === "object" && "isRaw" in _savedObject && _savedObject.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isComponent" id={typeof _isComponent === "object" && "id" in _isComponent ? _isComponent?.id : undefined} value={typeof _isComponent === "object" && "value" in _isComponent ? _isComponent?.value : _isComponent} /* default: false */  isRaw={typeof _isComponent === "object" && "isRaw" in _isComponent && _isComponent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SavedReferenceTable]`} name="_referenceTable" id={typeof _referenceTable === "object" && "id" in _referenceTable ? _referenceTable?.id : undefined} value={typeof _referenceTable === "object" && "value" in _referenceTable ? _referenceTable?.value : _referenceTable} /* default: ID0 */  isRaw={typeof _referenceTable === "object" && "isRaw" in _referenceTable && _referenceTable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isSaving" id={typeof _isSaving === "object" && "id" in _isSaving ? _isSaving?.id : undefined} value={typeof _isSaving === "object" && "value" in _isSaving ? _isSaving?.value : _isSaving} /* default: false */  isRaw={typeof _isSaving === "object" && "isRaw" in _isSaving && _isSaving.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_description" id={typeof _description === "object" && "id" in _description ? _description?.id : undefined} value={typeof _description === "object" && "value" in _description ? _description?.value : _description} /* default: <i>null</i> */  isRaw={typeof _description === "object" && "isRaw" in _description && _description.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_performed" id={typeof _performed === "object" && "id" in _performed ? _performed?.id : undefined} value={typeof _performed === "object" && "value" in _performed ? _performed?.value : _performed} /* default: false */  isRaw={typeof _performed === "object" && "isRaw" in _performed && _performed.isRaw ? true : undefined} />
        </Component>
      );
    };
    