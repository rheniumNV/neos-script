import { member, Member, Component } from "../../../core";
    
    export interface BakeMeshesInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Root?: member<any>;
SkinnedMeshMode?: member<any>;
IncludeInactive?: member<any>;
Undoable?: member<any>;
DestroyOriginal?: member<any>;
GrabbableHandling?: member<any>;
ColliderHandling?: member<any>;
OnBaked?: member<any>;
    }
    
    export function BakeMeshes(props: BakeMeshesInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Root,
SkinnedMeshMode,
IncludeInactive,
Undoable,
DestroyOriginal,
GrabbableHandling,
ColliderHandling,
OnBaked, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Assets.BakeMeshes" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="SkinnedMeshMode" id={typeof SkinnedMeshMode === "object" && "id" in SkinnedMeshMode ? SkinnedMeshMode?.id : undefined} value={typeof SkinnedMeshMode === "object" && "value" in SkinnedMeshMode ? SkinnedMeshMode?.value : SkinnedMeshMode} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IncludeInactive" id={typeof IncludeInactive === "object" && "id" in IncludeInactive ? IncludeInactive?.id : undefined} value={typeof IncludeInactive === "object" && "value" in IncludeInactive ? IncludeInactive?.value : IncludeInactive} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Undoable" id={typeof Undoable === "object" && "id" in Undoable ? Undoable?.id : undefined} value={typeof Undoable === "object" && "value" in Undoable ? Undoable?.value : Undoable} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="DestroyOriginal" id={typeof DestroyOriginal === "object" && "id" in DestroyOriginal ? DestroyOriginal?.id : undefined} value={typeof DestroyOriginal === "object" && "value" in DestroyOriginal ? DestroyOriginal?.value : DestroyOriginal} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.ComponentHandling]`} name="GrabbableHandling" id={typeof GrabbableHandling === "object" && "id" in GrabbableHandling ? GrabbableHandling?.id : undefined} value={typeof GrabbableHandling === "object" && "value" in GrabbableHandling ? GrabbableHandling?.value : GrabbableHandling} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.ComponentHandling]`} name="ColliderHandling" id={typeof ColliderHandling === "object" && "id" in ColliderHandling ? ColliderHandling?.id : undefined} value={typeof ColliderHandling === "object" && "value" in ColliderHandling ? ColliderHandling?.value : ColliderHandling} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnBaked" id={typeof OnBaked === "object" && "id" in OnBaked ? OnBaked?.id : undefined} value={typeof OnBaked === "object" && "value" in OnBaked ? OnBaked?.value : OnBaked} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    