import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ClassroomControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
_currentPanel?: member<any>;
_container?: member<any>;
CurrentScreen?: member<any>;
QuizType?: member<any>;
TargetMode?: member<any>;
ShowLabels?: member<any>;
StudentsCanGrab?: member<any>;
_loggedInUsersLabel?: member<any>;
_raiseHandButton?: member<any>;
_joinedLeaveButton?: member<any>;
_joinedStatusLabel?: member<any>;
_toggleQuizButton?: member<any>;
_labelingQuiz?: member<any>;
_assemblyQuiz?: member<any>;
_practiceQuiz?: member<any>;
_databaseDownloadButton?: member<any>;
    }
    
    export function ClassroomController(props: ClassroomControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
_currentPanel,
_container,
CurrentScreen,
QuizType,
TargetMode,
ShowLabels,
StudentsCanGrab,
_loggedInUsersLabel,
_raiseHandButton,
_joinedLeaveButton,
_joinedStatusLabel,
_toggleQuizButton,
_labelingQuiz,
_assemblyQuiz,
_practiceQuiz,
_databaseDownloadButton, } = props;
    
      return (
        <Component type="BusinessX.ClassroomController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_currentPanel" id={typeof _currentPanel === "object" && "id" in _currentPanel ? _currentPanel?.id : undefined} value={typeof _currentPanel === "object" && "value" in _currentPanel ? _currentPanel?.value : _currentPanel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_container" id={typeof _container === "object" && "id" in _container ? _container?.id : undefined} value={typeof _container === "object" && "value" in _container ? _container?.value : _container} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BusinessX.ClassroomController+Screen]`} name="CurrentScreen" id={typeof CurrentScreen === "object" && "id" in CurrentScreen ? CurrentScreen?.id : undefined} value={typeof CurrentScreen === "object" && "value" in CurrentScreen ? CurrentScreen?.value : CurrentScreen} /* default: Welcome */  />
<Member type={`FrooxEngine.Sync\`1[BusinessX.QuizType]`} name="QuizType" id={typeof QuizType === "object" && "id" in QuizType ? QuizType?.id : undefined} value={typeof QuizType === "object" && "value" in QuizType ? QuizType?.value : QuizType} /* default: Labeling */  />
<Member type={`FrooxEngine.Sync\`1[BusinessX.ClassroomController+Mode]`} name="TargetMode" id={typeof TargetMode === "object" && "id" in TargetMode ? TargetMode?.id : undefined} value={typeof TargetMode === "object" && "value" in TargetMode ? TargetMode?.value : TargetMode} /* default: Browsing */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="ShowLabels" id={typeof ShowLabels === "object" && "id" in ShowLabels ? ShowLabels?.id : undefined} value={typeof ShowLabels === "object" && "value" in ShowLabels ? ShowLabels?.value : ShowLabels} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="StudentsCanGrab" id={typeof StudentsCanGrab === "object" && "id" in StudentsCanGrab ? StudentsCanGrab?.id : undefined} value={typeof StudentsCanGrab === "object" && "value" in StudentsCanGrab ? StudentsCanGrab?.value : StudentsCanGrab} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_loggedInUsersLabel" id={typeof _loggedInUsersLabel === "object" && "id" in _loggedInUsersLabel ? _loggedInUsersLabel?.id : undefined} value={typeof _loggedInUsersLabel === "object" && "value" in _loggedInUsersLabel ? _loggedInUsersLabel?.value : _loggedInUsersLabel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_raiseHandButton" id={typeof _raiseHandButton === "object" && "id" in _raiseHandButton ? _raiseHandButton?.id : undefined} value={typeof _raiseHandButton === "object" && "value" in _raiseHandButton ? _raiseHandButton?.value : _raiseHandButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_joinedLeaveButton" id={typeof _joinedLeaveButton === "object" && "id" in _joinedLeaveButton ? _joinedLeaveButton?.id : undefined} value={typeof _joinedLeaveButton === "object" && "value" in _joinedLeaveButton ? _joinedLeaveButton?.value : _joinedLeaveButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_joinedStatusLabel" id={typeof _joinedStatusLabel === "object" && "id" in _joinedStatusLabel ? _joinedStatusLabel?.id : undefined} value={typeof _joinedStatusLabel === "object" && "value" in _joinedStatusLabel ? _joinedStatusLabel?.value : _joinedStatusLabel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_toggleQuizButton" id={typeof _toggleQuizButton === "object" && "id" in _toggleQuizButton ? _toggleQuizButton?.id : undefined} value={typeof _toggleQuizButton === "object" && "value" in _toggleQuizButton ? _toggleQuizButton?.value : _toggleQuizButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_labelingQuiz" id={typeof _labelingQuiz === "object" && "id" in _labelingQuiz ? _labelingQuiz?.id : undefined} value={typeof _labelingQuiz === "object" && "value" in _labelingQuiz ? _labelingQuiz?.value : _labelingQuiz} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_assemblyQuiz" id={typeof _assemblyQuiz === "object" && "id" in _assemblyQuiz ? _assemblyQuiz?.id : undefined} value={typeof _assemblyQuiz === "object" && "value" in _assemblyQuiz ? _assemblyQuiz?.value : _assemblyQuiz} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_practiceQuiz" id={typeof _practiceQuiz === "object" && "id" in _practiceQuiz ? _practiceQuiz?.id : undefined} value={typeof _practiceQuiz === "object" && "value" in _practiceQuiz ? _practiceQuiz?.value : _practiceQuiz} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_databaseDownloadButton" id={typeof _databaseDownloadButton === "object" && "id" in _databaseDownloadButton ? _databaseDownloadButton?.id : undefined} value={typeof _databaseDownloadButton === "object" && "value" in _databaseDownloadButton ? _databaseDownloadButton?.value : _databaseDownloadButton} /* default: ID0 */  />
        </Component>
      );
    };
    