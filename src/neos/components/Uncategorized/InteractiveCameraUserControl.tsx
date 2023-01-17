import { member, Member, Component } from "../../core";
    
    export interface InteractiveCameraUserControlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
Control?: member<any>;
_uiRoot?: member<any>;
    }
    
    export function InteractiveCameraUserControl(props: InteractiveCameraUserControlInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
Control,
_uiRoot, } = props;
    
      return (
        <Component type="FrooxEngine.InteractiveCameraUserControl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraControl]`} name="Control" id={typeof Control === "object" && "id" in Control ? Control?.id : undefined} value={typeof Control === "object" && "value" in Control ? Control?.value : Control} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_uiRoot" id={typeof _uiRoot === "object" && "id" in _uiRoot ? _uiRoot?.id : undefined} value={typeof _uiRoot === "object" && "value" in _uiRoot ? _uiRoot?.value : _uiRoot} /* default: ID0 */  />
        </Component>
      );
    };
    