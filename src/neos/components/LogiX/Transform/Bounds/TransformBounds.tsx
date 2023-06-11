import { member, Member, Component } from "../../../../core";
    
    export interface TransformBoundsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Bounds?: member<any>;
SourceSpace?: member<any>;
TargetSpace?: member<any>;
    }
    
    export function TransformBounds(props: TransformBoundsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Bounds,
SourceSpace,
TargetSpace, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Transform.TransformBounds" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.BoundingBox]`} name="Bounds" id={typeof Bounds === "object" && "id" in Bounds ? Bounds?.id : undefined} value={typeof Bounds === "object" && "value" in Bounds ? Bounds?.value : Bounds} /* default: ID0 */  isRaw={typeof Bounds === "object" && "isRaw" in Bounds && Bounds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="SourceSpace" id={typeof SourceSpace === "object" && "id" in SourceSpace ? SourceSpace?.id : undefined} value={typeof SourceSpace === "object" && "value" in SourceSpace ? SourceSpace?.value : SourceSpace} /* default: ID0 */  isRaw={typeof SourceSpace === "object" && "isRaw" in SourceSpace && SourceSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="TargetSpace" id={typeof TargetSpace === "object" && "id" in TargetSpace ? TargetSpace?.id : undefined} value={typeof TargetSpace === "object" && "value" in TargetSpace ? TargetSpace?.value : TargetSpace} /* default: ID0 */  isRaw={typeof TargetSpace === "object" && "isRaw" in TargetSpace && TargetSpace.isRaw ? true : undefined} />
        </Component>
      );
    };
    