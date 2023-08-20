import { member, Member, Component } from "../../core";
    
    export interface InteractiveCameraControlAnchorsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
_uiRoot?: member<any>;
_cameraControl?: member<any>;
_noAnchorMessage?: member<any>;
    }
    
    export function InteractiveCameraControlAnchors(props: InteractiveCameraControlAnchorsInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
_uiRoot,
_cameraControl,
_noAnchorMessage, } = props;
    
      return (
        <Component type="FrooxEngine.InteractiveCameraControlAnchors" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  isRaw={typeof _canvas === "object" && "isRaw" in _canvas && _canvas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  isRaw={typeof _panel === "object" && "isRaw" in _panel && _panel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_uiRoot" id={typeof _uiRoot === "object" && "id" in _uiRoot ? _uiRoot?.id : undefined} value={typeof _uiRoot === "object" && "value" in _uiRoot ? _uiRoot?.value : _uiRoot} /* default: ID0 */  isRaw={typeof _uiRoot === "object" && "isRaw" in _uiRoot && _uiRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraControl]`} name="_cameraControl" id={typeof _cameraControl === "object" && "id" in _cameraControl ? _cameraControl?.id : undefined} value={typeof _cameraControl === "object" && "value" in _cameraControl ? _cameraControl?.value : _cameraControl} /* default: ID0 */  isRaw={typeof _cameraControl === "object" && "isRaw" in _cameraControl && _cameraControl.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_noAnchorMessage" id={typeof _noAnchorMessage === "object" && "id" in _noAnchorMessage ? _noAnchorMessage?.id : undefined} value={typeof _noAnchorMessage === "object" && "value" in _noAnchorMessage ? _noAnchorMessage?.value : _noAnchorMessage} /* default: ID0 */  isRaw={typeof _noAnchorMessage === "object" && "isRaw" in _noAnchorMessage && _noAnchorMessage.isRaw ? true : undefined} />
        </Component>
      );
    };
    