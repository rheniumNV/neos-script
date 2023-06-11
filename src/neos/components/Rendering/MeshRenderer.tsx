import { member, Member, Component } from "../../core";
    
    export interface MeshRendererInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Mesh?: member<any>;
Materials?: member<Array<{ID:string, Data:string}>>;
MaterialPropertyBlocks?: member<any>;
ShadowCastMode?: member<any>;
MotionVectorMode?: member<any>;
SortingOrder?: member<number>;
    }
    
    export function MeshRenderer(props: MeshRendererInput){
      const { id, persistentId, updateOrder, Enabled,
Mesh,
Materials,
MaterialPropertyBlocks,
ShadowCastMode,
MotionVectorMode,
SortingOrder, } = props;
    
      return (
        <Component type="FrooxEngine.MeshRenderer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`} name="Mesh" id={typeof Mesh === "object" && "id" in Mesh ? Mesh?.id : undefined} value={typeof Mesh === "object" && "value" in Mesh ? Mesh?.value : Mesh} /* default: ID0 */  isRaw={typeof Mesh === "object" && "isRaw" in Mesh && Mesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.Material]`} name="Materials" id={typeof Materials === "object" && "id" in Materials ? Materials?.id : undefined} value={typeof Materials === "object" && "value" in Materials ? Materials?.value : Materials} /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.Material] */  isRaw={typeof Materials === "object" && "isRaw" in Materials && Materials.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.MaterialPropertyBlock]`} name="MaterialPropertyBlocks" id={typeof MaterialPropertyBlocks === "object" && "id" in MaterialPropertyBlocks ? MaterialPropertyBlocks?.id : undefined} value={typeof MaterialPropertyBlocks === "object" && "value" in MaterialPropertyBlocks ? MaterialPropertyBlocks?.value : MaterialPropertyBlocks} /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.MaterialPropertyBlock] */  isRaw={typeof MaterialPropertyBlocks === "object" && "isRaw" in MaterialPropertyBlocks && MaterialPropertyBlocks.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ShadowCastMode]`} name="ShadowCastMode" id={typeof ShadowCastMode === "object" && "id" in ShadowCastMode ? ShadowCastMode?.id : undefined} value={typeof ShadowCastMode === "object" && "value" in ShadowCastMode ? ShadowCastMode?.value : ShadowCastMode} /* default: Off */  isRaw={typeof ShadowCastMode === "object" && "isRaw" in ShadowCastMode && ShadowCastMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MotionVectorMode]`} name="MotionVectorMode" id={typeof MotionVectorMode === "object" && "id" in MotionVectorMode ? MotionVectorMode?.id : undefined} value={typeof MotionVectorMode === "object" && "value" in MotionVectorMode ? MotionVectorMode?.value : MotionVectorMode} /* default: Camera */  isRaw={typeof MotionVectorMode === "object" && "isRaw" in MotionVectorMode && MotionVectorMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SortingOrder" id={typeof SortingOrder === "object" && "id" in SortingOrder ? SortingOrder?.id : undefined} value={typeof SortingOrder === "object" && "value" in SortingOrder ? SortingOrder?.value : SortingOrder} /* default: 0 */  isRaw={typeof SortingOrder === "object" && "isRaw" in SortingOrder && SortingOrder.isRaw ? true : undefined} />
        </Component>
      );
    };
    