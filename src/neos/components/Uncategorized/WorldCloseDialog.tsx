import { member, Member, Component } from "../../core";
    
    export interface WorldCloseDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_worldName?: member<any>;
_saveButton?: member<any>;
_saveAsButton?: member<any>;
_discardButton?: member<any>;
_saveAction?: member<any>;
_saveAsAction?: member<any>;
_discardAction?: member<any>;
    }
    
    export function WorldCloseDialog(props: WorldCloseDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_worldName,
_saveButton,
_saveAsButton,
_discardButton,
_saveAction,
_saveAsAction,
_discardAction, } = props;
    
      return (
        <Component type="FrooxEngine.WorldCloseDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_worldName" id={typeof _worldName === "object" && "id" in _worldName ? _worldName?.id : undefined} value={typeof _worldName === "object" && "value" in _worldName ? _worldName?.value : _worldName} /* default: ID0 */  isRaw={typeof _worldName === "object" && "isRaw" in _worldName && _worldName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_saveButton" id={typeof _saveButton === "object" && "id" in _saveButton ? _saveButton?.id : undefined} value={typeof _saveButton === "object" && "value" in _saveButton ? _saveButton?.value : _saveButton} /* default: ID0 */  isRaw={typeof _saveButton === "object" && "isRaw" in _saveButton && _saveButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_saveAsButton" id={typeof _saveAsButton === "object" && "id" in _saveAsButton ? _saveAsButton?.id : undefined} value={typeof _saveAsButton === "object" && "value" in _saveAsButton ? _saveAsButton?.value : _saveAsButton} /* default: ID0 */  isRaw={typeof _saveAsButton === "object" && "isRaw" in _saveAsButton && _saveAsButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_discardButton" id={typeof _discardButton === "object" && "id" in _discardButton ? _discardButton?.id : undefined} value={typeof _discardButton === "object" && "value" in _discardButton ? _discardButton?.value : _discardButton} /* default: ID0 */  isRaw={typeof _discardButton === "object" && "isRaw" in _discardButton && _discardButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldCloseAction]`} name="_saveAction" id={typeof _saveAction === "object" && "id" in _saveAction ? _saveAction?.id : undefined} value={typeof _saveAction === "object" && "value" in _saveAction ? _saveAction?.value : _saveAction} /* default: ID0 */  isRaw={typeof _saveAction === "object" && "isRaw" in _saveAction && _saveAction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldCloseAction]`} name="_saveAsAction" id={typeof _saveAsAction === "object" && "id" in _saveAsAction ? _saveAsAction?.id : undefined} value={typeof _saveAsAction === "object" && "value" in _saveAsAction ? _saveAsAction?.value : _saveAsAction} /* default: ID0 */  isRaw={typeof _saveAsAction === "object" && "isRaw" in _saveAsAction && _saveAsAction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldCloseAction]`} name="_discardAction" id={typeof _discardAction === "object" && "id" in _discardAction ? _discardAction?.id : undefined} value={typeof _discardAction === "object" && "value" in _discardAction ? _discardAction?.value : _discardAction} /* default: ID0 */  isRaw={typeof _discardAction === "object" && "isRaw" in _discardAction && _discardAction.isRaw ? true : undefined} />
        </Component>
      );
    };
    