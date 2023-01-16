import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ScreenControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TransitionSpeed?: member<number>;
PointerController?: member<any>;
ActiveTargetting?: member<any>;
Head?: member<any>;
LeftHand?: member<any>;
RightHand?: member<any>;
_previousTargetting?: member<any>;
_firstPerson?: member<any>;
_thirdPerson?: member<any>;
_uiCamera?: member<any>;
_freeformCamera?: member<any>;
    }
    
    export function ScreenController(props: ScreenControllerInput){
      const { id, persistentId, updateOrder, Enabled,
TransitionSpeed,
PointerController,
ActiveTargetting,
Head,
LeftHand,
RightHand,
_previousTargetting,
_firstPerson,
_thirdPerson,
_uiCamera,
_freeformCamera, } = props;
    
      return (
        <Component type="FrooxEngine.ScreenController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TransitionSpeed" id={typeof TransitionSpeed === "object" && "id" in TransitionSpeed ? TransitionSpeed?.id : undefined} value={typeof TransitionSpeed === "object" && "value" in TransitionSpeed ? TransitionSpeed?.value : TransitionSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PointerInteractionController]`} name="PointerController" id={typeof PointerController === "object" && "id" in PointerController ? PointerController?.id : undefined} value={typeof PointerController === "object" && "value" in PointerController ? PointerController?.value : PointerController} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IViewTargettingController]`} name="ActiveTargetting" id={typeof ActiveTargetting === "object" && "id" in ActiveTargetting ? ActiveTargetting?.id : undefined} value={typeof ActiveTargetting === "object" && "value" in ActiveTargetting ? ActiveTargetting?.value : ActiveTargetting} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.HeadSimulator]`} name="Head" id={typeof Head === "object" && "id" in Head ? Head?.id : undefined} value={typeof Head === "object" && "value" in Head ? Head?.value : Head} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.HandSimulator]`} name="LeftHand" id={typeof LeftHand === "object" && "id" in LeftHand ? LeftHand?.id : undefined} value={typeof LeftHand === "object" && "value" in LeftHand ? LeftHand?.value : LeftHand} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.HandSimulator]`} name="RightHand" id={typeof RightHand === "object" && "id" in RightHand ? RightHand?.id : undefined} value={typeof RightHand === "object" && "value" in RightHand ? RightHand?.value : RightHand} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IViewTargettingController]`} name="_previousTargetting" id={typeof _previousTargetting === "object" && "id" in _previousTargetting ? _previousTargetting?.id : undefined} value={typeof _previousTargetting === "object" && "value" in _previousTargetting ? _previousTargetting?.value : _previousTargetting} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FirstPersonTargettingController]`} name="_firstPerson" id={typeof _firstPerson === "object" && "id" in _firstPerson ? _firstPerson?.id : undefined} value={typeof _firstPerson === "object" && "value" in _firstPerson ? _firstPerson?.value : _firstPerson} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ThirdPersonTargettingController]`} name="_thirdPerson" id={typeof _thirdPerson === "object" && "id" in _thirdPerson ? _thirdPerson?.id : undefined} value={typeof _thirdPerson === "object" && "value" in _thirdPerson ? _thirdPerson?.value : _thirdPerson} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UI_TargettingController]`} name="_uiCamera" id={typeof _uiCamera === "object" && "id" in _uiCamera ? _uiCamera?.id : undefined} value={typeof _uiCamera === "object" && "value" in _uiCamera ? _uiCamera?.value : _uiCamera} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FreeformTargettingController]`} name="_freeformCamera" id={typeof _freeformCamera === "object" && "id" in _freeformCamera ? _freeformCamera?.id : undefined} value={typeof _freeformCamera === "object" && "value" in _freeformCamera ? _freeformCamera?.value : _freeformCamera} /* default: ID0 */  />
        </Component>
      );
    };
    