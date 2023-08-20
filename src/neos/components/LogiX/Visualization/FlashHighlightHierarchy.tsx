import { member, Member, Component } from "../../../core";
    
    export interface FlashHighlightHierarchyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
HierarchyRoot?: member<any>;
ExcludeColliders?: member<any>;
ExcludeMeshes?: member<any>;
ExcludeDisabled?: member<any>;
Duration?: member<any>;
Color?: member<any>;
OnDone?: member<any>;
    }
    
    export function FlashHighlightHierarchy(props: FlashHighlightHierarchyInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
HierarchyRoot,
ExcludeColliders,
ExcludeMeshes,
ExcludeDisabled,
Duration,
Color,
OnDone, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Nodes.Visualization.FlashHighlightHierarchy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="HierarchyRoot" id={typeof HierarchyRoot === "object" && "id" in HierarchyRoot ? HierarchyRoot?.id : undefined} value={typeof HierarchyRoot === "object" && "value" in HierarchyRoot ? HierarchyRoot?.value : HierarchyRoot} /* default: ID0 */  isRaw={typeof HierarchyRoot === "object" && "isRaw" in HierarchyRoot && HierarchyRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ExcludeColliders" id={typeof ExcludeColliders === "object" && "id" in ExcludeColliders ? ExcludeColliders?.id : undefined} value={typeof ExcludeColliders === "object" && "value" in ExcludeColliders ? ExcludeColliders?.value : ExcludeColliders} /* default: ID0 */  isRaw={typeof ExcludeColliders === "object" && "isRaw" in ExcludeColliders && ExcludeColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ExcludeMeshes" id={typeof ExcludeMeshes === "object" && "id" in ExcludeMeshes ? ExcludeMeshes?.id : undefined} value={typeof ExcludeMeshes === "object" && "value" in ExcludeMeshes ? ExcludeMeshes?.value : ExcludeMeshes} /* default: ID0 */  isRaw={typeof ExcludeMeshes === "object" && "isRaw" in ExcludeMeshes && ExcludeMeshes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ExcludeDisabled" id={typeof ExcludeDisabled === "object" && "id" in ExcludeDisabled ? ExcludeDisabled?.id : undefined} value={typeof ExcludeDisabled === "object" && "value" in ExcludeDisabled ? ExcludeDisabled?.value : ExcludeDisabled} /* default: ID0 */  isRaw={typeof ExcludeDisabled === "object" && "isRaw" in ExcludeDisabled && ExcludeDisabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Duration" id={typeof Duration === "object" && "id" in Duration ? Duration?.id : undefined} value={typeof Duration === "object" && "value" in Duration ? Duration?.value : Duration} /* default: ID0 */  isRaw={typeof Duration === "object" && "isRaw" in Duration && Duration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: ID0 */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDone === "object" && "isRaw" in OnDone && OnDone.isRaw ? true : undefined} />
        </Component>
      );
    };
    