import { member, Member, Component } from "../../core";
    
    export interface ClassroomModelControlsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Controller?: member<any>;
_animationButton?: member<any>;
    }
    
    export function ClassroomModelControls(props: ClassroomModelControlsInput){
      const { id, persistentId, updateOrder, Enabled,
Controller,
_animationButton, } = props;
    
      return (
        <Component type="BusinessX.ClassroomModelControls" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomDatabaseController]`} name="Controller" id={typeof Controller === "object" && "id" in Controller ? Controller?.id : undefined} value={typeof Controller === "object" && "value" in Controller ? Controller?.value : Controller} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_animationButton" id={typeof _animationButton === "object" && "id" in _animationButton ? _animationButton?.id : undefined} value={typeof _animationButton === "object" && "value" in _animationButton ? _animationButton?.value : _animationButton} /* default: ID0 */  />
        </Component>
      );
    };
    