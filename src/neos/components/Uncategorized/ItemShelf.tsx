import { member, Member, Component } from "../../core";
    
    export interface ItemShelfInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
GrowDirection?: member<any>;
IgnoreGrabber?: member<any>;
MinLength?: member<number>;
Width?: member<number>;
Thickness?: member<number>;
MaxItemSize?: member<number>;
MaxPlaneDistance?: member<number>;
MaxHeightDistance?: member<number>;
_targetLength?: member<number>;
_visual?: member<any>;
_content?: member<any>;
_material?: member<any>;
_visualOffset?: member<any>;
_shelfMesh?: member<any>;
_collider?: member<any>;
    }
    
    export function ItemShelf(props: ItemShelfInput){
      const { id, persistentId, updateOrder, Enabled,
GrowDirection,
IgnoreGrabber,
MinLength,
Width,
Thickness,
MaxItemSize,
MaxPlaneDistance,
MaxHeightDistance,
_targetLength,
_visual,
_content,
_material,
_visualOffset,
_shelfMesh,
_collider, } = props;
    
      return (
        <Component type="FrooxEngine.ItemShelf" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ItemShelf+Direction]`} name="GrowDirection" id={typeof GrowDirection === "object" && "id" in GrowDirection ? GrowDirection?.id : undefined} value={typeof GrowDirection === "object" && "value" in GrowDirection ? GrowDirection?.value : GrowDirection} /* default: Left */  isRaw={typeof GrowDirection === "object" && "isRaw" in GrowDirection && GrowDirection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="IgnoreGrabber" id={typeof IgnoreGrabber === "object" && "id" in IgnoreGrabber ? IgnoreGrabber?.id : undefined} value={typeof IgnoreGrabber === "object" && "value" in IgnoreGrabber ? IgnoreGrabber?.value : IgnoreGrabber} /* default: ID0 */  isRaw={typeof IgnoreGrabber === "object" && "isRaw" in IgnoreGrabber && IgnoreGrabber.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinLength" id={typeof MinLength === "object" && "id" in MinLength ? MinLength?.id : undefined} value={typeof MinLength === "object" && "value" in MinLength ? MinLength?.value : MinLength} /* default: 0 */  isRaw={typeof MinLength === "object" && "isRaw" in MinLength && MinLength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  isRaw={typeof Width === "object" && "isRaw" in Width && Width.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  isRaw={typeof Thickness === "object" && "isRaw" in Thickness && Thickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxItemSize" id={typeof MaxItemSize === "object" && "id" in MaxItemSize ? MaxItemSize?.id : undefined} value={typeof MaxItemSize === "object" && "value" in MaxItemSize ? MaxItemSize?.value : MaxItemSize} /* default: 0 */  isRaw={typeof MaxItemSize === "object" && "isRaw" in MaxItemSize && MaxItemSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxPlaneDistance" id={typeof MaxPlaneDistance === "object" && "id" in MaxPlaneDistance ? MaxPlaneDistance?.id : undefined} value={typeof MaxPlaneDistance === "object" && "value" in MaxPlaneDistance ? MaxPlaneDistance?.value : MaxPlaneDistance} /* default: 0 */  isRaw={typeof MaxPlaneDistance === "object" && "isRaw" in MaxPlaneDistance && MaxPlaneDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxHeightDistance" id={typeof MaxHeightDistance === "object" && "id" in MaxHeightDistance ? MaxHeightDistance?.id : undefined} value={typeof MaxHeightDistance === "object" && "value" in MaxHeightDistance ? MaxHeightDistance?.value : MaxHeightDistance} /* default: 0 */  isRaw={typeof MaxHeightDistance === "object" && "isRaw" in MaxHeightDistance && MaxHeightDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_targetLength" id={typeof _targetLength === "object" && "id" in _targetLength ? _targetLength?.id : undefined} value={typeof _targetLength === "object" && "value" in _targetLength ? _targetLength?.value : _targetLength} /* default: 0 */  isRaw={typeof _targetLength === "object" && "isRaw" in _targetLength && _targetLength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visual" id={typeof _visual === "object" && "id" in _visual ? _visual?.id : undefined} value={typeof _visual === "object" && "value" in _visual ? _visual?.value : _visual} /* default: ID0 */  isRaw={typeof _visual === "object" && "isRaw" in _visual && _visual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_content" id={typeof _content === "object" && "id" in _content ? _content?.id : undefined} value={typeof _content === "object" && "value" in _content ? _content?.value : _content} /* default: ID0 */  isRaw={typeof _content === "object" && "isRaw" in _content && _content.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_visualOffset" id={typeof _visualOffset === "object" && "id" in _visualOffset ? _visualOffset?.id : undefined} value={typeof _visualOffset === "object" && "value" in _visualOffset ? _visualOffset?.value : _visualOffset} /* default: ID0 */  isRaw={typeof _visualOffset === "object" && "isRaw" in _visualOffset && _visualOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_shelfMesh" id={typeof _shelfMesh === "object" && "id" in _shelfMesh ? _shelfMesh?.id : undefined} value={typeof _shelfMesh === "object" && "value" in _shelfMesh ? _shelfMesh?.value : _shelfMesh} /* default: ID0 */  isRaw={typeof _shelfMesh === "object" && "isRaw" in _shelfMesh && _shelfMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BoxCollider]`} name="_collider" id={typeof _collider === "object" && "id" in _collider ? _collider?.id : undefined} value={typeof _collider === "object" && "value" in _collider ? _collider?.value : _collider} /* default: ID0 */  isRaw={typeof _collider === "object" && "isRaw" in _collider && _collider.isRaw ? true : undefined} />
        </Component>
      );
    };
    