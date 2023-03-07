import { member, Member, Component } from "../../core";
    
    export interface TutorialScreenInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Icon?: member<any>;
ActiveColor?: member<[number, number, number, number]>;
Label?: member<any>;
_screenRoot?: member<any>;
_screenCanvas?: member<any>;
_modalOverlayManager?: member<any>;
_swapRegion?: member<any>;
_currentScreen?: member<any>;
_heightField?: member<any>;
_useImperial?: member<boolean>;
_nextEnabled?: member<boolean>;
    }
    
    export function TutorialScreen(props: TutorialScreenInput){
      const { id, persistentId, updateOrder, Enabled,
Icon,
ActiveColor,
Label,
_screenRoot,
_screenCanvas,
_modalOverlayManager,
_swapRegion,
_currentScreen,
_heightField,
_useImperial,
_nextEnabled, } = props;
    
      return (
        <Component type="FrooxEngine.TutorialScreen" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ActiveColor" id={typeof ActiveColor === "object" && "id" in ActiveColor ? ActiveColor?.id : undefined} value={typeof ActiveColor === "object" && "value" in ActiveColor ? ActiveColor?.value : ActiveColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_screenRoot" id={typeof _screenRoot === "object" && "id" in _screenRoot ? _screenRoot?.id : undefined} value={typeof _screenRoot === "object" && "value" in _screenRoot ? _screenRoot?.value : _screenRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_screenCanvas" id={typeof _screenCanvas === "object" && "id" in _screenCanvas ? _screenCanvas?.id : undefined} value={typeof _screenCanvas === "object" && "value" in _screenCanvas ? _screenCanvas?.value : _screenCanvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ModalOverlayManager]`} name="_modalOverlayManager" id={typeof _modalOverlayManager === "object" && "id" in _modalOverlayManager ? _modalOverlayManager?.id : undefined} value={typeof _modalOverlayManager === "object" && "value" in _modalOverlayManager ? _modalOverlayManager?.value : _modalOverlayManager} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.SlideSwapRegion]`} name="_swapRegion" id={typeof _swapRegion === "object" && "id" in _swapRegion ? _swapRegion?.id : undefined} value={typeof _swapRegion === "object" && "value" in _swapRegion ? _swapRegion?.value : _swapRegion} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TutorialScreen+Screen]`} name="_currentScreen" id={typeof _currentScreen === "object" && "id" in _currentScreen ? _currentScreen?.id : undefined} value={typeof _currentScreen === "object" && "value" in _currentScreen ? _currentScreen?.value : _currentScreen} /* default: Welcome */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.QuantityTextEditorParser\`1[QuantityX.Distance]]`} name="_heightField" id={typeof _heightField === "object" && "id" in _heightField ? _heightField?.id : undefined} value={typeof _heightField === "object" && "value" in _heightField ? _heightField?.value : _heightField} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_useImperial" id={typeof _useImperial === "object" && "id" in _useImperial ? _useImperial?.id : undefined} value={typeof _useImperial === "object" && "value" in _useImperial ? _useImperial?.value : _useImperial} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_nextEnabled" id={typeof _nextEnabled === "object" && "id" in _nextEnabled ? _nextEnabled?.id : undefined} value={typeof _nextEnabled === "object" && "value" in _nextEnabled ? _nextEnabled?.value : _nextEnabled} /* default: false */  />
        </Component>
      );
    };
    