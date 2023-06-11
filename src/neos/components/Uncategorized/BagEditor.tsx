import { member, Member, Component } from "../../core";
    
    export interface BagEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetBag?: member<any>;
_addNewButton?: member<any>;
    }
    
    export function BagEditor(props: BagEditorInput){
      const { id, persistentId, updateOrder, Enabled,
_targetBag,
_addNewButton, } = props;
    
      return (
        <Component type="FrooxEngine.BagEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ISyncBag]`} name="_targetBag" id={typeof _targetBag === "object" && "id" in _targetBag ? _targetBag?.id : undefined} value={typeof _targetBag === "object" && "value" in _targetBag ? _targetBag?.value : _targetBag} /* default: ID0 */  isRaw={typeof _targetBag === "object" && "isRaw" in _targetBag && _targetBag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_addNewButton" id={typeof _addNewButton === "object" && "id" in _addNewButton ? _addNewButton?.id : undefined} value={typeof _addNewButton === "object" && "value" in _addNewButton ? _addNewButton?.value : _addNewButton} /* default: ID0 */  isRaw={typeof _addNewButton === "object" && "isRaw" in _addNewButton && _addNewButton.isRaw ? true : undefined} />
        </Component>
      );
    };
    