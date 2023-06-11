import { member, Member, Component } from "../../core";
    
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
QuizLabels?: member<any>;
QuizSnappers?: member<any>;
ClassroomGrabbables?: member<any>;
ObservingQuizUser?: member<any>;
InventoryBrowserActive?: member<any>;
QuizControllerActive?: member<any>;
_userAvatars?: member<any>;
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
QuizLabels,
QuizSnappers,
ClassroomGrabbables,
ObservingQuizUser,
InventoryBrowserActive,
QuizControllerActive,
_userAvatars,
_lastLoadingSlot, } = props;
    
      return (
        <Component type="BusinessX.ClassroomDatabaseController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomDatabaseController+QuizLabel]`} name="GlobalHighlightedLabel" id={typeof GlobalHighlightedLabel === "object" && "id" in GlobalHighlightedLabel ? GlobalHighlightedLabel?.id : undefined} value={typeof GlobalHighlightedLabel === "object" && "value" in GlobalHighlightedLabel ? GlobalHighlightedLabel?.value : GlobalHighlightedLabel} /* default: ID0 */  isRaw={typeof GlobalHighlightedLabel === "object" && "isRaw" in GlobalHighlightedLabel && GlobalHighlightedLabel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="StudentsCanGrab" id={typeof StudentsCanGrab === "object" && "id" in StudentsCanGrab ? StudentsCanGrab?.id : undefined} value={typeof StudentsCanGrab === "object" && "value" in StudentsCanGrab ? StudentsCanGrab?.value : StudentsCanGrab} /* default: false */  isRaw={typeof StudentsCanGrab === "object" && "isRaw" in StudentsCanGrab && StudentsCanGrab.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowLabels" id={typeof ShowLabels === "object" && "id" in ShowLabels ? ShowLabels?.id : undefined} value={typeof ShowLabels === "object" && "value" in ShowLabels ? ShowLabels?.value : ShowLabels} /* default: false */  isRaw={typeof ShowLabels === "object" && "isRaw" in ShowLabels && ShowLabels.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="CurrentPupil" id={typeof CurrentPupil === "object" && "id" in CurrentPupil ? CurrentPupil?.id : undefined} value={typeof CurrentPupil === "object" && "value" in CurrentPupil ? CurrentPupil?.value : CurrentPupil} /* default: ID0 */  isRaw={typeof CurrentPupil === "object" && "isRaw" in CurrentPupil && CurrentPupil.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomQuizController]`} name="QuizController" id={typeof QuizController === "object" && "id" in QuizController ? QuizController?.id : undefined} value={typeof QuizController === "object" && "value" in QuizController ? QuizController?.value : QuizController} /* default: ID0 */  isRaw={typeof QuizController === "object" && "isRaw" in QuizController && QuizController.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SpawnPoint" id={typeof SpawnPoint === "object" && "id" in SpawnPoint ? SpawnPoint?.id : undefined} value={typeof SpawnPoint === "object" && "value" in SpawnPoint ? SpawnPoint?.value : SpawnPoint} /* default: ID0 */  isRaw={typeof SpawnPoint === "object" && "isRaw" in SpawnPoint && SpawnPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BusinessX.ClassroomDatabaseController+State]`} name="CurrentState" id={typeof CurrentState === "object" && "id" in CurrentState ? CurrentState?.id : undefined} value={typeof CurrentState === "object" && "value" in CurrentState ? CurrentState?.value : CurrentState} /* default: Browsing */  isRaw={typeof CurrentState === "object" && "isRaw" in CurrentState && CurrentState.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BusinessX.QuizType]`} name="QuizType" id={typeof QuizType === "object" && "id" in QuizType ? QuizType?.id : undefined} value={typeof QuizType === "object" && "value" in QuizType ? QuizType?.value : QuizType} /* default: Labeling */  isRaw={typeof QuizType === "object" && "isRaw" in QuizType && QuizType.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomGrabbable]`} name="RootGrabbable" id={typeof RootGrabbable === "object" && "id" in RootGrabbable ? RootGrabbable?.id : undefined} value={typeof RootGrabbable === "object" && "value" in RootGrabbable ? RootGrabbable?.value : RootGrabbable} /* default: ID0 */  isRaw={typeof RootGrabbable === "object" && "isRaw" in RootGrabbable && RootGrabbable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Animator]`} name="Animator" id={typeof Animator === "object" && "id" in Animator ? Animator?.id : undefined} value={typeof Animator === "object" && "value" in Animator ? Animator?.value : Animator} /* default: ID0 */  isRaw={typeof Animator === "object" && "isRaw" in Animator && Animator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[BusinessX.ClassroomDatabaseController+QuizLabel]`} name="QuizLabels" id={typeof QuizLabels === "object" && "id" in QuizLabels ? QuizLabels?.id : undefined} value={typeof QuizLabels === "object" && "value" in QuizLabels ? QuizLabels?.value : QuizLabels} /* default: FrooxEngine.SyncList`1[BusinessX.ClassroomDatabaseController+QuizLabel] */  isRaw={typeof QuizLabels === "object" && "isRaw" in QuizLabels && QuizLabels.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[BusinessX.ClassroomDatabaseController+QuizSnapper]`} name="QuizSnappers" id={typeof QuizSnappers === "object" && "id" in QuizSnappers ? QuizSnappers?.id : undefined} value={typeof QuizSnappers === "object" && "value" in QuizSnappers ? QuizSnappers?.value : QuizSnappers} /* default: FrooxEngine.SyncList`1[BusinessX.ClassroomDatabaseController+QuizSnapper] */  isRaw={typeof QuizSnappers === "object" && "isRaw" in QuizSnappers && QuizSnappers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[BusinessX.ClassroomGrabbable]`} name="ClassroomGrabbables" id={typeof ClassroomGrabbables === "object" && "id" in ClassroomGrabbables ? ClassroomGrabbables?.id : undefined} value={typeof ClassroomGrabbables === "object" && "value" in ClassroomGrabbables ? ClassroomGrabbables?.value : ClassroomGrabbables} /* default: FrooxEngine.SyncRefList`1[BusinessX.ClassroomGrabbable] */  isRaw={typeof ClassroomGrabbables === "object" && "isRaw" in ClassroomGrabbables && ClassroomGrabbables.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="ObservingQuizUser" id={typeof ObservingQuizUser === "object" && "id" in ObservingQuizUser ? ObservingQuizUser?.id : undefined} value={typeof ObservingQuizUser === "object" && "value" in ObservingQuizUser ? ObservingQuizUser?.value : ObservingQuizUser} /* default: ID0 */  isRaw={typeof ObservingQuizUser === "object" && "isRaw" in ObservingQuizUser && ObservingQuizUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="InventoryBrowserActive" id={typeof InventoryBrowserActive === "object" && "id" in InventoryBrowserActive ? InventoryBrowserActive?.id : undefined} value={typeof InventoryBrowserActive === "object" && "value" in InventoryBrowserActive ? InventoryBrowserActive?.value : InventoryBrowserActive} /* default: ID0 */  isRaw={typeof InventoryBrowserActive === "object" && "isRaw" in InventoryBrowserActive && InventoryBrowserActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="QuizControllerActive" id={typeof QuizControllerActive === "object" && "id" in QuizControllerActive ? QuizControllerActive?.id : undefined} value={typeof QuizControllerActive === "object" && "value" in QuizControllerActive ? QuizControllerActive?.value : QuizControllerActive} /* default: ID0 */  isRaw={typeof QuizControllerActive === "object" && "isRaw" in QuizControllerActive && QuizControllerActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[BusinessX.ClassroomDatabaseController+UserAvatar]`} name="_userAvatars" id={typeof _userAvatars === "object" && "id" in _userAvatars ? _userAvatars?.id : undefined} value={typeof _userAvatars === "object" && "value" in _userAvatars ? _userAvatars?.value : _userAvatars} /* default: FrooxEngine.SyncList`1[BusinessX.ClassroomDatabaseController+UserAvatar] */  isRaw={typeof _userAvatars === "object" && "isRaw" in _userAvatars && _userAvatars.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lastLoadingSlot" id={typeof _lastLoadingSlot === "object" && "id" in _lastLoadingSlot ? _lastLoadingSlot?.id : undefined} value={typeof _lastLoadingSlot === "object" && "value" in _lastLoadingSlot ? _lastLoadingSlot?.value : _lastLoadingSlot} /* default: ID0 */  isRaw={typeof _lastLoadingSlot === "object" && "isRaw" in _lastLoadingSlot && _lastLoadingSlot.isRaw ? true : undefined} />
        </Component>
      );
    };
    