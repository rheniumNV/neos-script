import { member, Member, Component } from "../../../core";
    
    export interface TransformRotationInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
FromSpace?: member<any>;
ToSpace?: member<any>;
SourceRotation?: member<[number, number, number, number]>;
    }
    
    export function TransformRotation(props: TransformRotationInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
FromSpace,
ToSpace,
SourceRotation, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.TransformRotation" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="FromSpace" id={typeof FromSpace === "object" && "id" in FromSpace ? FromSpace?.id : undefined} value={typeof FromSpace === "object" && "value" in FromSpace ? FromSpace?.value : FromSpace} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="ToSpace" id={typeof ToSpace === "object" && "id" in ToSpace ? ToSpace?.id : undefined} value={typeof ToSpace === "object" && "value" in ToSpace ? ToSpace?.value : ToSpace} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="SourceRotation" id={typeof SourceRotation === "object" && "id" in SourceRotation ? SourceRotation?.id : undefined} value={typeof SourceRotation === "object" && "value" in SourceRotation ? SourceRotation?.value : SourceRotation} /* default: ID0 */  />
        </Component>
      );
    };
    