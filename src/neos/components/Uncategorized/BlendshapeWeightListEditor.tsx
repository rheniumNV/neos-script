import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface BlendshapeWeightListEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetList?: member<any>;
_addNewButton?: member<any>;
_targetSkin?: member<any>;
    }
    
    export function BlendshapeWeightListEditor(props: BlendshapeWeightListEditorInput){
      const { id, persistentId, updateOrder, Enabled,
_targetList,
_addNewButton,
_targetSkin, } = props;
    
      return (
        <Component type="FrooxEngine.BlendshapeWeightListEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ISyncList]`} name="_targetList" id={typeof _targetList === "object" && "id" in _targetList ? _targetList?.id : undefined} value={typeof _targetList === "object" && "value" in _targetList ? _targetList?.value : _targetList} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_addNewButton" id={typeof _addNewButton === "object" && "id" in _addNewButton ? _addNewButton?.id : undefined} value={typeof _addNewButton === "object" && "value" in _addNewButton ? _addNewButton?.value : _addNewButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SkinnedMeshRenderer]`} name="_targetSkin" id={typeof _targetSkin === "object" && "id" in _targetSkin ? _targetSkin?.id : undefined} value={typeof _targetSkin === "object" && "value" in _targetSkin ? _targetSkin?.value : _targetSkin} /* default: ID0 */  />
        </Component>
      );
    };
    