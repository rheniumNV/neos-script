import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GripPoseReferenceEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ReferenceRoot?: member<any>;
Item?: member<any>;
Slider?: member<any>;
PoseReference?: member<any>;
HideVisualOnEnd?: member<boolean>;
RootPosition?: member<[number, number, number]>;
RootRotation?: member<any>;
RootScale?: member<[number, number, number]>;
    }
    
    export function GripPoseReferenceEditor(props: GripPoseReferenceEditorInput){
      const { id, persistentId, updateOrder, Enabled,
ReferenceRoot,
Item,
Slider,
PoseReference,
HideVisualOnEnd,
RootPosition,
RootRotation,
RootScale, } = props;
    
      return (
        <Component type="FrooxEngine.GripPoseReferenceEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ReferenceRoot" id={typeof ReferenceRoot === "object" && "id" in ReferenceRoot ? ReferenceRoot?.id : undefined} value={typeof ReferenceRoot === "object" && "value" in ReferenceRoot ? ReferenceRoot?.value : ReferenceRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Item" id={typeof Item === "object" && "id" in Item ? Item?.id : undefined} value={typeof Item === "object" && "value" in Item ? Item?.value : Item} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slider]`} name="Slider" id={typeof Slider === "object" && "id" in Slider ? Slider?.id : undefined} value={typeof Slider === "object" && "value" in Slider ? Slider?.value : Slider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.GripPoseReference]`} name="PoseReference" id={typeof PoseReference === "object" && "id" in PoseReference ? PoseReference?.id : undefined} value={typeof PoseReference === "object" && "value" in PoseReference ? PoseReference?.value : PoseReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HideVisualOnEnd" id={typeof HideVisualOnEnd === "object" && "id" in HideVisualOnEnd ? HideVisualOnEnd?.id : undefined} value={typeof HideVisualOnEnd === "object" && "value" in HideVisualOnEnd ? HideVisualOnEnd?.value : HideVisualOnEnd} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="RootPosition" id={typeof RootPosition === "object" && "id" in RootPosition ? RootPosition?.id : undefined} value={typeof RootPosition === "object" && "value" in RootPosition ? RootPosition?.value : RootPosition} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RootRotation" id={typeof RootRotation === "object" && "id" in RootRotation ? RootRotation?.id : undefined} value={typeof RootRotation === "object" && "value" in RootRotation ? RootRotation?.value : RootRotation} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="RootScale" id={typeof RootScale === "object" && "id" in RootScale ? RootScale?.id : undefined} value={typeof RootScale === "object" && "value" in RootScale ? RootScale?.value : RootScale} /* default: [0; 0; 0] */  />
        </Component>
      );
    };
    