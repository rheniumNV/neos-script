import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VHACD_DialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetCollider?: member<any>;
MergeDoubles?: member<any>;
Resolution?: member<any>;
Depth?: member<any>;
Concavity?: member<any>;
PlaneDownsampling?: member<any>;
ConvexHullDownsampling?: member<any>;
Alpha?: member<any>;
Beta?: member<any>;
Gamma?: member<any>;
Delta?: member<any>;
PCA?: member<any>;
Mode?: member<any>;
MaxVerticesPerHull?: member<any>;
MinVolumePerHull?: member<any>;
ConvexHullApproximation?: member<any>;
    }
    
    export function VHACD_Dialog(props: VHACD_DialogInput){
      const { id, persistentId, updateOrder, Enabled,
TargetCollider,
MergeDoubles,
Resolution,
Depth,
Concavity,
PlaneDownsampling,
ConvexHullDownsampling,
Alpha,
Beta,
Gamma,
Delta,
PCA,
Mode,
MaxVerticesPerHull,
MinVolumePerHull,
ConvexHullApproximation, } = props;
    
      return (
        <Component type="FrooxEngine.VHACD_Dialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshCollider]`} name="TargetCollider" id={typeof TargetCollider === "object" && "id" in TargetCollider ? TargetCollider?.id : undefined} value={typeof TargetCollider === "object" && "value" in TargetCollider ? TargetCollider?.value : TargetCollider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="MergeDoubles" id={typeof MergeDoubles === "object" && "id" in MergeDoubles ? MergeDoubles?.id : undefined} value={typeof MergeDoubles === "object" && "value" in MergeDoubles ? MergeDoubles?.value : MergeDoubles} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IntTextEditorParser]`} name="Resolution" id={typeof Resolution === "object" && "id" in Resolution ? Resolution?.id : undefined} value={typeof Resolution === "object" && "value" in Resolution ? Resolution?.value : Resolution} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IntTextEditorParser]`} name="Depth" id={typeof Depth === "object" && "id" in Depth ? Depth?.id : undefined} value={typeof Depth === "object" && "value" in Depth ? Depth?.value : Depth} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="Concavity" id={typeof Concavity === "object" && "id" in Concavity ? Concavity?.id : undefined} value={typeof Concavity === "object" && "value" in Concavity ? Concavity?.value : Concavity} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IntTextEditorParser]`} name="PlaneDownsampling" id={typeof PlaneDownsampling === "object" && "id" in PlaneDownsampling ? PlaneDownsampling?.id : undefined} value={typeof PlaneDownsampling === "object" && "value" in PlaneDownsampling ? PlaneDownsampling?.value : PlaneDownsampling} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IntTextEditorParser]`} name="ConvexHullDownsampling" id={typeof ConvexHullDownsampling === "object" && "id" in ConvexHullDownsampling ? ConvexHullDownsampling?.id : undefined} value={typeof ConvexHullDownsampling === "object" && "value" in ConvexHullDownsampling ? ConvexHullDownsampling?.value : ConvexHullDownsampling} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="Alpha" id={typeof Alpha === "object" && "id" in Alpha ? Alpha?.id : undefined} value={typeof Alpha === "object" && "value" in Alpha ? Alpha?.value : Alpha} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="Beta" id={typeof Beta === "object" && "id" in Beta ? Beta?.id : undefined} value={typeof Beta === "object" && "value" in Beta ? Beta?.value : Beta} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="Gamma" id={typeof Gamma === "object" && "id" in Gamma ? Gamma?.id : undefined} value={typeof Gamma === "object" && "value" in Gamma ? Gamma?.value : Gamma} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="Delta" id={typeof Delta === "object" && "id" in Delta ? Delta?.id : undefined} value={typeof Delta === "object" && "value" in Delta ? Delta?.value : Delta} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="PCA" id={typeof PCA === "object" && "id" in PCA ? PCA?.id : undefined} value={typeof PCA === "object" && "value" in PCA ? PCA?.value : PCA} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[CodeX.VHACDInterface+DecompositionMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: Voxel */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IntTextEditorParser]`} name="MaxVerticesPerHull" id={typeof MaxVerticesPerHull === "object" && "id" in MaxVerticesPerHull ? MaxVerticesPerHull?.id : undefined} value={typeof MaxVerticesPerHull === "object" && "value" in MaxVerticesPerHull ? MaxVerticesPerHull?.value : MaxVerticesPerHull} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="MinVolumePerHull" id={typeof MinVolumePerHull === "object" && "id" in MinVolumePerHull ? MinVolumePerHull?.id : undefined} value={typeof MinVolumePerHull === "object" && "value" in MinVolumePerHull ? MinVolumePerHull?.value : MinVolumePerHull} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="ConvexHullApproximation" id={typeof ConvexHullApproximation === "object" && "id" in ConvexHullApproximation ? ConvexHullApproximation?.id : undefined} value={typeof ConvexHullApproximation === "object" && "value" in ConvexHullApproximation ? ConvexHullApproximation?.value : ConvexHullApproximation} /* default: ID0 */  />
        </Component>
      );
    };
    