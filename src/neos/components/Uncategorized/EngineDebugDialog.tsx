import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface EngineDebugDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
DisplayMode?: member<any>;
_contentRoot?: member<any>;
_text?: member<any>;
    }
    
    export function EngineDebugDialog(props: EngineDebugDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
DisplayMode,
_contentRoot,
_text, } = props;
    
      return (
        <Component type="FrooxEngine.EngineDebugDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.EngineDebugDialog+Mode]`} name="DisplayMode" id={typeof DisplayMode === "object" && "id" in DisplayMode ? DisplayMode?.id : undefined} value={typeof DisplayMode === "object" && "value" in DisplayMode ? DisplayMode?.value : DisplayMode} /* default: GatherJobs */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_contentRoot" id={typeof _contentRoot === "object" && "id" in _contentRoot ? _contentRoot?.id : undefined} value={typeof _contentRoot === "object" && "value" in _contentRoot ? _contentRoot?.value : _contentRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_text" id={typeof _text === "object" && "id" in _text ? _text?.id : undefined} value={typeof _text === "object" && "value" in _text ? _text?.value : _text} /* default: ID0 */  />
        </Component>
      );
    };
    