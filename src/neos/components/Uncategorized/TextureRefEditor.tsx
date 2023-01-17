import { member, Member, Component } from "../../core";
    
    export interface TextureRefEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetRef?: member<any>;
_drive?: member<any>;
_clearReferenceButton?: member<any>;
_openInspectorButton?: member<any>;
_referenceText?: member<string>;
_infoText?: member<string>;
_isNormalMap?: member<boolean>;
    }
    
    export function TextureRefEditor(props: TextureRefEditorInput){
      const { id, persistentId, updateOrder, Enabled,
_targetRef,
_drive,
_clearReferenceButton,
_openInspectorButton,
_referenceText,
_infoText,
_isNormalMap, } = props;
    
      return (
        <Component type="FrooxEngine.TextureRefEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]]`} name="_targetRef" id={typeof _targetRef === "object" && "id" in _targetRef ? _targetRef?.id : undefined} value={typeof _targetRef === "object" && "value" in _targetRef ? _targetRef?.value : _targetRef} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]]`} name="_drive" id={typeof _drive === "object" && "id" in _drive ? _drive?.id : undefined} value={typeof _drive === "object" && "value" in _drive ? _drive?.value : _drive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_clearReferenceButton" id={typeof _clearReferenceButton === "object" && "id" in _clearReferenceButton ? _clearReferenceButton?.id : undefined} value={typeof _clearReferenceButton === "object" && "value" in _clearReferenceButton ? _clearReferenceButton?.value : _clearReferenceButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_openInspectorButton" id={typeof _openInspectorButton === "object" && "id" in _openInspectorButton ? _openInspectorButton?.id : undefined} value={typeof _openInspectorButton === "object" && "value" in _openInspectorButton ? _openInspectorButton?.value : _openInspectorButton} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_referenceText" id={typeof _referenceText === "object" && "id" in _referenceText ? _referenceText?.id : undefined} value={typeof _referenceText === "object" && "value" in _referenceText ? _referenceText?.value : _referenceText} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_infoText" id={typeof _infoText === "object" && "id" in _infoText ? _infoText?.id : undefined} value={typeof _infoText === "object" && "value" in _infoText ? _infoText?.value : _infoText} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isNormalMap" id={typeof _isNormalMap === "object" && "id" in _isNormalMap ? _isNormalMap?.id : undefined} value={typeof _isNormalMap === "object" && "value" in _isNormalMap ? _isNormalMap?.value : _isNormalMap} /* default: false */  />
        </Component>
      );
    };
    