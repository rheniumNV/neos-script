import { member, Member, Component } from "../../../core";
    
    export interface TutorialItemPartInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Tags?: member<any>;
LabelPointReference?: member<any>;
LabelContentReference?: member<any>;
_currentLabelContent?: member<any>;
_currentLabelMesh?: member<any>;
    }
    
    export function TutorialItemPart(props: TutorialItemPartInput){
      const { id, persistentId, updateOrder, Enabled,
Tags,
LabelPointReference,
LabelContentReference,
_currentLabelContent,
_currentLabelMesh, } = props;
    
      return (
        <Component type="FrooxEngine.TutorialItemPart" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="Tags" id={typeof Tags === "object" && "id" in Tags ? Tags?.id : undefined} value={typeof Tags === "object" && "value" in Tags ? Tags?.value : Tags} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof Tags === "object" && "isRaw" in Tags && Tags.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="LabelPointReference" id={typeof LabelPointReference === "object" && "id" in LabelPointReference ? LabelPointReference?.id : undefined} value={typeof LabelPointReference === "object" && "value" in LabelPointReference ? LabelPointReference?.value : LabelPointReference} /* default: ID0 */  isRaw={typeof LabelPointReference === "object" && "isRaw" in LabelPointReference && LabelPointReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="LabelContentReference" id={typeof LabelContentReference === "object" && "id" in LabelContentReference ? LabelContentReference?.id : undefined} value={typeof LabelContentReference === "object" && "value" in LabelContentReference ? LabelContentReference?.value : LabelContentReference} /* default: ID0 */  isRaw={typeof LabelContentReference === "object" && "isRaw" in LabelContentReference && LabelContentReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_currentLabelContent" id={typeof _currentLabelContent === "object" && "id" in _currentLabelContent ? _currentLabelContent?.id : undefined} value={typeof _currentLabelContent === "object" && "value" in _currentLabelContent ? _currentLabelContent?.value : _currentLabelContent} /* default: ID0 */  isRaw={typeof _currentLabelContent === "object" && "isRaw" in _currentLabelContent && _currentLabelContent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_currentLabelMesh" id={typeof _currentLabelMesh === "object" && "id" in _currentLabelMesh ? _currentLabelMesh?.id : undefined} value={typeof _currentLabelMesh === "object" && "value" in _currentLabelMesh ? _currentLabelMesh?.value : _currentLabelMesh} /* default: ID0 */  isRaw={typeof _currentLabelMesh === "object" && "isRaw" in _currentLabelMesh && _currentLabelMesh.isRaw ? true : undefined} />
        </Component>
      );
    };
    