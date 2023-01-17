import { member, Member, Component } from "../../core";
    
    export interface NeosSwapCanvasPanelInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
_currentPanel?: member<any>;
_container?: member<any>;
    }
    
    export function NeosSwapCanvasPanel(props: NeosSwapCanvasPanelInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
_currentPanel,
_container, } = props;
    
      return (
        <Component type="FrooxEngine.NeosSwapCanvasPanel" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_currentPanel" id={typeof _currentPanel === "object" && "id" in _currentPanel ? _currentPanel?.id : undefined} value={typeof _currentPanel === "object" && "value" in _currentPanel ? _currentPanel?.value : _currentPanel} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_container" id={typeof _container === "object" && "id" in _container ? _container?.id : undefined} value={typeof _container === "object" && "value" in _container ? _container?.value : _container} /* default: ID0 */  />
        </Component>
      );
    };
    