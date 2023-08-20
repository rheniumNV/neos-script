import { member, Member, Component } from "../../../core";
    
    export interface TransformPointInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
FromSpace?: member<any>;
ToSpace?: member<any>;
SourcePoint?: member<any>;
    }
    
    export function TransformPoint(props: TransformPointInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
FromSpace,
ToSpace,
SourcePoint, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.TransformPoint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="FromSpace" id={typeof FromSpace === "object" && "id" in FromSpace ? FromSpace?.id : undefined} value={typeof FromSpace === "object" && "value" in FromSpace ? FromSpace?.value : FromSpace} /* default: ID0 */  isRaw={typeof FromSpace === "object" && "isRaw" in FromSpace && FromSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="ToSpace" id={typeof ToSpace === "object" && "id" in ToSpace ? ToSpace?.id : undefined} value={typeof ToSpace === "object" && "value" in ToSpace ? ToSpace?.value : ToSpace} /* default: ID0 */  isRaw={typeof ToSpace === "object" && "isRaw" in ToSpace && ToSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="SourcePoint" id={typeof SourcePoint === "object" && "id" in SourcePoint ? SourcePoint?.id : undefined} value={typeof SourcePoint === "object" && "value" in SourcePoint ? SourcePoint?.value : SourcePoint} /* default: ID0 */  isRaw={typeof SourcePoint === "object" && "isRaw" in SourcePoint && SourcePoint.isRaw ? true : undefined} />
        </Component>
      );
    };
    