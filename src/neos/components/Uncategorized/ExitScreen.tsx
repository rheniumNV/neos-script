import { member, Member, Component } from "../../core";
    
    export interface ExitScreenInput {
        
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
_exitMessage?: member<any>;
    }
    
    export function ExitScreen(props: ExitScreenInput){
      const { id, persistentId, updateOrder, Enabled,
Icon,
ActiveColor,
Label,
_screenRoot,
_screenCanvas,
_modalOverlayManager,
_exitMessage, } = props;
    
      return (
        <Component type="FrooxEngine.ExitScreen" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ActiveColor" id={typeof ActiveColor === "object" && "id" in ActiveColor ? ActiveColor?.id : undefined} value={typeof ActiveColor === "object" && "value" in ActiveColor ? ActiveColor?.value : ActiveColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_screenRoot" id={typeof _screenRoot === "object" && "id" in _screenRoot ? _screenRoot?.id : undefined} value={typeof _screenRoot === "object" && "value" in _screenRoot ? _screenRoot?.value : _screenRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_screenCanvas" id={typeof _screenCanvas === "object" && "id" in _screenCanvas ? _screenCanvas?.id : undefined} value={typeof _screenCanvas === "object" && "value" in _screenCanvas ? _screenCanvas?.value : _screenCanvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ModalOverlayManager]`} name="_modalOverlayManager" id={typeof _modalOverlayManager === "object" && "id" in _modalOverlayManager ? _modalOverlayManager?.id : undefined} value={typeof _modalOverlayManager === "object" && "value" in _modalOverlayManager ? _modalOverlayManager?.value : _modalOverlayManager} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_exitMessage" id={typeof _exitMessage === "object" && "id" in _exitMessage ? _exitMessage?.id : undefined} value={typeof _exitMessage === "object" && "value" in _exitMessage ? _exitMessage?.value : _exitMessage} /* default: ID0 */  />
        </Component>
      );
    };
    