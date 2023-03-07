import { member, Member, Component } from "../../core";
    
    export interface ClassroomQuizControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
Controller?: member<any>;
_quizItemsActive?: member<any>;
_quizUsersActive?: member<any>;
_itemButtonColors?: member<any>;
_itemButtons?: member<any>;
_finishQuizButton?: member<any>;
    }
    
    export function ClassroomQuizController(props: ClassroomQuizControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
Controller,
_quizItemsActive,
_quizUsersActive,
_itemButtonColors,
_itemButtons,
_finishQuizButton, } = props;
    
      return (
        <Component type="BusinessX.ClassroomQuizController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomDatabaseController]`} name="Controller" id={typeof Controller === "object" && "id" in Controller ? Controller?.id : undefined} value={typeof Controller === "object" && "value" in Controller ? Controller?.value : Controller} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_quizItemsActive" id={typeof _quizItemsActive === "object" && "id" in _quizItemsActive ? _quizItemsActive?.id : undefined} value={typeof _quizItemsActive === "object" && "value" in _quizItemsActive ? _quizItemsActive?.value : _quizItemsActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_quizUsersActive" id={typeof _quizUsersActive === "object" && "id" in _quizUsersActive ? _quizUsersActive?.id : undefined} value={typeof _quizUsersActive === "object" && "value" in _quizUsersActive ? _quizUsersActive?.value : _quizUsersActive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[BaseX.color]]`} name="_itemButtonColors" id={typeof _itemButtonColors === "object" && "id" in _itemButtonColors ? _itemButtonColors?.id : undefined} value={typeof _itemButtonColors === "object" && "value" in _itemButtonColors ? _itemButtonColors?.value : _itemButtonColors} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[BaseX.color]] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.UIX.Button]`} name="_itemButtons" id={typeof _itemButtons === "object" && "id" in _itemButtons ? _itemButtons?.id : undefined} value={typeof _itemButtons === "object" && "value" in _itemButtons ? _itemButtons?.value : _itemButtons} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.UIX.Button] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_finishQuizButton" id={typeof _finishQuizButton === "object" && "id" in _finishQuizButton ? _finishQuizButton?.id : undefined} value={typeof _finishQuizButton === "object" && "value" in _finishQuizButton ? _finishQuizButton?.value : _finishQuizButton} /* default: ID0 */  />
        </Component>
      );
    };
    