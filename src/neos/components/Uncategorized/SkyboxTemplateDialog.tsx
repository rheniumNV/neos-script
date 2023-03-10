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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.SkyboxTemplate]`} name="Templates" id={typeof Templates === "object" && "id" in Templates ? Templates?.id : undefined} value={typeof Templates === "object" && "value" in Templates ? Templates?.value : Templates} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.SkyboxTemplate] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_previousTemplate" id={typeof _previousTemplate === "object" && "id" in _previousTemplate ? _previousTemplate?.id : undefined} value={typeof _previousTemplate === "object" && "value" in _previousTemplate ? _previousTemplate?.value : _previousTemplate} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
        </Component>
      );
    };
    