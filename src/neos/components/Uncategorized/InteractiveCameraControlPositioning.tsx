import { member, Member, Component } from "../../core";
    
    export interface InteractiveCameraControlPositioningInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
_control?: member<any>;
    }
    
    export function InteractiveCameraControlPositioning(props: InteractiveCameraControlPositioningInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
_control, } = props;
    
      return (
        <Component type="FrooxEngine.InteractiveCameraControlPositioning" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  isRaw={typeof _canvas === "object" && "isRaw" in _canvas && _canvas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  isRaw={typeof _panel === "object" && "isRaw" in _panel && _panel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraControl]`} name="_control" id={typeof _control === "object" && "id" in _control ? _control?.id : undefined} value={typeof _control === "object" && "value" in _control ? _control?.value : _control} /* default: ID0 */  isRaw={typeof _control === "object" && "isRaw" in _control && _control.isRaw ? true : undefined} />
        </Component>
      );
    };
    