import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ClassroomDatabaseControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
GlobalHighlightedLabel?: member<any>;
StudentsCanGrab?: member<boolean>;
ShowLabels?: member<boolean>;
CurrentPupil?: member<any>;
QuizController?: member<any>;
SpawnPoint?: member<any>;
CurrentState?: member<any>;
QuizType?: member<any>;
RootGrabbable?: member<any>;
Animator?: member<any>;
ObservingQuizUser?: member<any>;
InventoryBrowserActive?: member<any>;
QuizControllerActive?: member<any>;
_lastLoadingSlot?: member<any>;
    }
    
    export function ClassroomDatabaseController(props: ClassroomDatabaseControllerInput){
      const { id, persistentId, updateOrder, Enabled,
GlobalHighlightedLabel,
StudentsCanGrab,
ShowLabels,
CurrentPupil,
QuizController,
SpawnPoint,
CurrentState,
QuizType,
RootGrabbable,
Animator,
ObservingQuizUser,
InventoryBrowserActive,
QuizControllerActive,
_lastLoadingSlot, } = props;
    
      return (
        <Component type="BusinessX.ClassroomDatabaseController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomDatabaseController+QuizLabel]`} name="GlobalHighlightedLabel" id={typeof GlobalHighlightedLabel === "object" && "id" in GlobalHighlightedLabel ? GlobalHighlightedLabel?.id : undefined} value={typeof GlobalHighlightedLabel === "object" && "value" in GlobalHighlightedLabel ? GlobalHighlightedLabel?.value : GlobalHighlightedLabel} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="StudentsCanGrab" id={typeof StudentsCanGrab === "object" && "id" in StudentsCanGrab ? StudentsCanGrab?.id : undefined} value={typeof StudentsCanGrab === "object" && "value" in StudentsCanGrab ? StudentsCanGrab?.value : StudentsCanGrab} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowLabels" id={typeof ShowLabels === "object" && "id" in ShowLabels ? ShowLabels?.id : undefined} value={typeof ShowLabels === "object" && "value" in ShowLabels ? ShowLabels?.value : ShowLabels} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="CurrentPupil" id={typeof CurrentPupil === "object" && "id" in CurrentPupil ? CurrentPupil?.id : undefined} value={typeof CurrentPupil === "object" && "value" in CurrentPupil ? CurrentPupil?.value : CurrentPupil} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomQuizController]`} name="QuizController" id={typeof QuizController === "object" && "id" in QuizController ? QuizController?.id : undefined} value={typeof QuizController === "object" && "value" in QuizController ? QuizController?.value : QuizController} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SpawnPoint" id={typeof SpawnPoint === "object" && "id" in SpawnPoint ? SpawnPoint?.id : undefined} value={typeof SpawnPoint === "object" && "value" in SpawnPoint ? SpawnPoint?.value : SpawnPoint} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BusinessX.ClassroomDatabaseController+State]`} name="CurrentState" id={typeof CurrentState === "object" && "id" in CurrentState ? CurrentState?.id : undefined} value={typeof CurrentState === "object" && "value" in CurrentState ? CurrentState?.value : CurrentState} /* default: Browsing */  />
<Member type={`FrooxEngine.Sync\`1[BusinessX.QuizType]`} name="QuizType" id={typeof QuizType === "object" && "id" in QuizType ? QuizType?.id : undefined} value={typeof QuizType === "object" && "value" in QuizType ? QuizType?.value : QuizType} /* default: Labeling */  />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomGrabbable]`} name="RootGrabbable" id={typeof RootGrabbable === "object" && "id" in RootGrabbable ? RootGrabbable?.id : undefined} value={typeof RootGrabbable === "object" && "value" in RootGrabbable ? RootGrabbable?.value : RootGrabbable} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Animator]`} name="Animator" id={typeof Animator === "object" && "id" in Animator ? Animator?.id : undefined} value={typeof Animator === "object" && "value" in Animator ? Animator?.value : Animator} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="ObservingQuizUser" id={typeof ObservingQuizUser === "object" && "id" in ObservingQuizUser ? ObservingQuizUser?.id : undefined} value={typeof ObservingQuizUser === "object" && "value" in ObservingQuizUser ? ObservingQuizUser?.value : ObservingQuizUser} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="InventoryBrowserActive" id={typeof InventoryBrowserActive === "object" && "id" in InventoryBrowserActive ? InventoryBrowserActive?.id : undefined} value={typeof InventoryBrowserActive === "object" && "value" in InventoryBrowserActive ? InventoryBrowserActive?.value : InventoryBrowserActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="QuizControllerActive" id={typeof QuizControllerActive === "object" && "id" in QuizControllerActive ? QuizControllerActive?.id : undefined} value={typeof QuizControllerActive === "object" && "value" in QuizControllerActive ? QuizControllerActive?.value : QuizControllerActive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lastLoadingSlot" id={typeof _lastLoadingSlot === "object" && "id" in _lastLoadingSlot ? _lastLoadingSlot?.id : undefined} value={typeof _lastLoadingSlot === "object" && "value" in _lastLoadingSlot ? _lastLoadingSlot?.value : _lastLoadingSlot} /* default: ID0 */  />
        </Component>
      );
    };
    