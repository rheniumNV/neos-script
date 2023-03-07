import { member, Member, Component } from "../../core";
    
    export interface GridContainerAnimatedEditVisualInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Grid?: member<any>;
_tiledImage?: member<any>;
_tiling?: member<any>;
_offset?: member<any>;
_tint?: member<any>;
    }
    
    export function GridContainerAnimatedEditVisual(props: GridContainerAnimatedEditVisualInput){
      const { id, persistentId, updateOrder, Enabled,
Grid,
_tiledImage,
_tiling,
_offset,
_tint, } = props;
    
      return (
        <Component type="FrooxEngine.GridContainerAnimatedEditVisual" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.GridContainer]`} name="Grid" id={typeof Grid === "object" && "id" in Grid ? Grid?.id : undefined} value={typeof Grid === "object" && "value" in Grid ? Grid?.value : Grid} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TiledRawImage]`} name="_tiledImage" id={typeof _tiledImage === "object" && "id" in _tiledImage ? _tiledImage?.id : undefined} value={typeof _tiledImage === "object" && "value" in _tiledImage ? _tiledImage?.value : _tiledImage} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_tiling" id={typeof _tiling === "object" && "id" in _tiling ? _tiling?.id : undefined} value={typeof _tiling === "object" && "value" in _tiling ? _tiling?.value : _tiling} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_offset" id={typeof _offset === "object" && "id" in _offset ? _offset?.id : undefined} value={typeof _offset === "object" && "value" in _offset ? _offset?.value : _offset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_tint" id={typeof _tint === "object" && "id" in _tint ? _tint?.id : undefined} value={typeof _tint === "object" && "value" in _tint ? _tint?.value : _tint} /* default: ID0 */  />
        </Component>
      );
    };
    