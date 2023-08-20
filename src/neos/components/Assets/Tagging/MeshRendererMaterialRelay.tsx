import { member, Member, Component } from "../../../core";
    
    export interface MeshRendererMaterialRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Renderers?: member<any>;
_renderer?: member<any>;
    }
    
    export function MeshRendererMaterialRelay(props: MeshRendererMaterialRelayInput){
      const { id, persistentId, updateOrder, Enabled,
Renderers,
_renderer, } = props;
    
      return (
        <Component type="FrooxEngine.MeshRendererMaterialRelay" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.MeshRenderer]`} name="Renderers" id={typeof Renderers === "object" && "id" in Renderers ? Renderers?.id : undefined} value={typeof Renderers === "object" && "value" in Renderers ? Renderers?.value : Renderers} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.MeshRenderer] */  isRaw={typeof Renderers === "object" && "isRaw" in Renderers && Renderers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="_renderer-ID" id={typeof _renderer === "object" && "id" in _renderer ? _renderer?.id : undefined} value={typeof _renderer === "object" && "value" in _renderer ? _renderer?.value : _renderer} /* default: ID0 */ readOnly isRaw={typeof _renderer === "object" && "isRaw" in _renderer && _renderer.isRaw ? true : undefined} />
        </Component>
      );
    };
    