import { member, Member, Component } from "../../core";
    
    export interface InteractiveCameraOBSInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
_currentPanel?: member<any>;
_container?: member<any>;
CameraControl?: member<any>;
_connectAddress?: member<any>;
_connectPassword?: member<any>;
_status?: member<any>;
_active?: member<boolean>;
_streamTime?: member<any>;
_bytesPerSec?: member<any>;
_fps?: member<any>;
_droppedFrames?: member<any>;
_streamButton?: member<any>;
_recordButton?: member<any>;
_launchOBSbutton?: member<any>;
_autoMirror?: member<any>;
    }
    
    export function InteractiveCameraOBS(props: InteractiveCameraOBSInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
_currentPanel,
_container,
CameraControl,
_connectAddress,
_connectPassword,
_status,
_active,
_streamTime,
_bytesPerSec,
_fps,
_droppedFrames,
_streamButton,
_recordButton,
_launchOBSbutton,
_autoMirror, } = props;
    
      return (
        <Component type="FrooxEngine.InteractiveCameraOBS" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_currentPanel" id={typeof _currentPanel === "object" && "id" in _currentPanel ? _currentPanel?.id : undefined} value={typeof _currentPanel === "object" && "value" in _currentPanel ? _currentPanel?.value : _currentPanel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_container" id={typeof _container === "object" && "id" in _container ? _container?.id : undefined} value={typeof _container === "object" && "value" in _container ? _container?.value : _container} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraControl]`} name="CameraControl" id={typeof CameraControl === "object" && "id" in CameraControl ? CameraControl?.id : undefined} value={typeof CameraControl === "object" && "value" in CameraControl ? CameraControl?.value : CameraControl} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_connectAddress" id={typeof _connectAddress === "object" && "id" in _connectAddress ? _connectAddress?.id : undefined} value={typeof _connectAddress === "object" && "value" in _connectAddress ? _connectAddress?.value : _connectAddress} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_connectPassword" id={typeof _connectPassword === "object" && "id" in _connectPassword ? _connectPassword?.id : undefined} value={typeof _connectPassword === "object" && "value" in _connectPassword ? _connectPassword?.value : _connectPassword} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_status" id={typeof _status === "object" && "id" in _status ? _status?.id : undefined} value={typeof _status === "object" && "value" in _status ? _status?.value : _status} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_active" id={typeof _active === "object" && "id" in _active ? _active?.id : undefined} value={typeof _active === "object" && "value" in _active ? _active?.value : _active} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_streamTime" id={typeof _streamTime === "object" && "id" in _streamTime ? _streamTime?.id : undefined} value={typeof _streamTime === "object" && "value" in _streamTime ? _streamTime?.value : _streamTime} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_bytesPerSec" id={typeof _bytesPerSec === "object" && "id" in _bytesPerSec ? _bytesPerSec?.id : undefined} value={typeof _bytesPerSec === "object" && "value" in _bytesPerSec ? _bytesPerSec?.value : _bytesPerSec} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_fps" id={typeof _fps === "object" && "id" in _fps ? _fps?.id : undefined} value={typeof _fps === "object" && "value" in _fps ? _fps?.value : _fps} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_droppedFrames" id={typeof _droppedFrames === "object" && "id" in _droppedFrames ? _droppedFrames?.id : undefined} value={typeof _droppedFrames === "object" && "value" in _droppedFrames ? _droppedFrames?.value : _droppedFrames} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_streamButton" id={typeof _streamButton === "object" && "id" in _streamButton ? _streamButton?.id : undefined} value={typeof _streamButton === "object" && "value" in _streamButton ? _streamButton?.value : _streamButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_recordButton" id={typeof _recordButton === "object" && "id" in _recordButton ? _recordButton?.id : undefined} value={typeof _recordButton === "object" && "value" in _recordButton ? _recordButton?.value : _recordButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_launchOBSbutton" id={typeof _launchOBSbutton === "object" && "id" in _launchOBSbutton ? _launchOBSbutton?.id : undefined} value={typeof _launchOBSbutton === "object" && "value" in _launchOBSbutton ? _launchOBSbutton?.value : _launchOBSbutton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_autoMirror" id={typeof _autoMirror === "object" && "id" in _autoMirror ? _autoMirror?.id : undefined} value={typeof _autoMirror === "object" && "value" in _autoMirror ? _autoMirror?.value : _autoMirror} /* default: ID0 */  />
        </Component>
      );
    };
    