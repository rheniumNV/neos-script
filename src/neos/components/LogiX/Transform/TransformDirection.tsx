import { member, Member, Component } from "../../../core";
    
    export interface TransformDirectionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
FromSpace?: member<any>;
ToSpace?: member<any>;
SourceDirection?: member<any>;
    }
    
    export function TransformDirection(props: TransformDirectionInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
FromSpace,
ToSpace,
SourceDirection, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.TransformDirection" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="FromSpace" id={typeof FromSpace === "object" && "id" in FromSpace ? FromSpace?.id : undefined} value={typeof FromSpace === "object" && "value" in FromSpace ? FromSpace?.value : FromSpace} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="ToSpace" id={typeof ToSpace === "object" && "id" in ToSpace ? ToSpace?.id : undefined} value={typeof ToSpace === "object" && "value" in ToSpace ? ToSpace?.value : ToSpace} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="SourceDirection" id={typeof SourceDirection === "object" && "id" in SourceDirection ? SourceDirection?.id : undefined} value={typeof SourceDirection === "object" && "value" in SourceDirection ? SourceDirection?.value : SourceDirection} /* default: ID0 */  />
        </Component>
      );
    };
    