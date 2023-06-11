import { member, Member, Component } from "../../core";
    
    export interface WorldCloseScreenInput {
        
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
_closeDialog?: member<any>;
    }
    
    export function WorldCloseScreen(props: WorldCloseScreenInput){
      const { id, persistentId, updateOrder, Enabled,
Icon,
ActiveColor,
Label,
_screenRoot,
_screenCanvas,
_modalOverlayManager,
_closeDialog, } = props;
    
      return (
        <Component type="FrooxEngine.WorldCloseScreen" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="Icon" id={typeof Icon === "object" && "id" in Icon ? Icon?.id : undefined} value={typeof Icon === "object" && "value" in Icon ? Icon?.value : Icon} /* default: <i>null</i> */  isRaw={typeof Icon === "object" && "isRaw" in Icon && Icon.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ActiveColor" id={typeof ActiveColor === "object" && "id" in ActiveColor ? ActiveColor?.id : undefined} value={typeof ActiveColor === "object" && "value" in ActiveColor ? ActiveColor?.value : ActiveColor} /* default: [0; 0; 0; 0] */  isRaw={typeof ActiveColor === "object" && "isRaw" in ActiveColor && ActiveColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: <i>null</i> */  isRaw={typeof Label === "object" && "isRaw" in Label && Label.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_screenRoot" id={typeof _screenRoot === "object" && "id" in _screenRoot ? _screenRoot?.id : undefined} value={typeof _screenRoot === "object" && "value" in _screenRoot ? _screenRoot?.value : _screenRoot} /* default: ID0 */  isRaw={typeof _screenRoot === "object" && "isRaw" in _screenRoot && _screenRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_screenCanvas" id={typeof _screenCanvas === "object" && "id" in _screenCanvas ? _screenCanvas?.id : undefined} value={typeof _screenCanvas === "object" && "value" in _screenCanvas ? _screenCanvas?.value : _screenCanvas} /* default: ID0 */  isRaw={typeof _screenCanvas === "object" && "isRaw" in _screenCanvas && _screenCanvas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ModalOverlayManager]`} name="_modalOverlayManager" id={typeof _modalOverlayManager === "object" && "id" in _modalOverlayManager ? _modalOverlayManager?.id : undefined} value={typeof _modalOverlayManager === "object" && "value" in _modalOverlayManager ? _modalOverlayManager?.value : _modalOverlayManager} /* default: ID0 */  isRaw={typeof _modalOverlayManager === "object" && "isRaw" in _modalOverlayManager && _modalOverlayManager.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldCloseDialog]`} name="_closeDialog" id={typeof _closeDialog === "object" && "id" in _closeDialog ? _closeDialog?.id : undefined} value={typeof _closeDialog === "object" && "value" in _closeDialog ? _closeDialog?.value : _closeDialog} /* default: ID0 */  isRaw={typeof _closeDialog === "object" && "isRaw" in _closeDialog && _closeDialog.isRaw ? true : undefined} />
        </Component>
      );
    };
    