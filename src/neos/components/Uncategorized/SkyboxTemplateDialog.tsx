import { member, Member, Component } from "../../core";
    
    export interface SkyboxTemplateDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Templates?: member<any>;
_previousTemplate?: member<any>;
_canvas?: member<any>;
    }
    
    export function SkyboxTemplateDialog(props: SkyboxTemplateDialogInput){
      const { id, persistentId, updateOrder, Enabled,
Templates,
_previousTemplate,
_canvas, } = props;
    
      return (
        <Component type="FrooxEngine.SkyboxTemplateDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.SkyboxTemplate]`} name="Templates" id={typeof Templates === "object" && "id" in Templates ? Templates?.id : undefined} value={typeof Templates === "object" && "value" in Templates ? Templates?.value : Templates} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.SkyboxTemplate] */  isRaw={typeof Templates === "object" && "isRaw" in Templates && Templates.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_previousTemplate" id={typeof _previousTemplate === "object" && "id" in _previousTemplate ? _previousTemplate?.id : undefined} value={typeof _previousTemplate === "object" && "value" in _previousTemplate ? _previousTemplate?.value : _previousTemplate} /* default: ID0 */  isRaw={typeof _previousTemplate === "object" && "isRaw" in _previousTemplate && _previousTemplate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  isRaw={typeof _canvas === "object" && "isRaw" in _canvas && _canvas.isRaw ? true : undefined} />
        </Component>
      );
    };
    