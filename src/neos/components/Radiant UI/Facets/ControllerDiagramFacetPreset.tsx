import { member, Member, Component } from "../../../core";
    
    export interface ControllerDiagramFacetPresetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_texture?: member<any>;
    }
    
    export function ControllerDiagramFacetPreset(props: ControllerDiagramFacetPresetInput){
      const { id, persistentId, updateOrder, Enabled,
_texture, } = props;
    
      return (
        <Component type="FrooxEngine.ControllerDiagramFacetPreset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_texture" id={typeof _texture === "object" && "id" in _texture ? _texture?.id : undefined} value={typeof _texture === "object" && "value" in _texture ? _texture?.value : _texture} /* default: ID0 */  isRaw={typeof _texture === "object" && "isRaw" in _texture && _texture.isRaw ? true : undefined} />
        </Component>
      );
    };
    