import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VirtualParentInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OverrideParent?: member<any>;
_targetPos?: member<any>;
_targetRot?: member<any>;
_targetScl?: member<any>;
LocalPosition?: member<[number, number, number]>;
LocalRotation?: member<any>;
LocalScale?: member<[number, number, number]>;
    }
    
    export function VirtualParent(props: VirtualParentInput){
      const { id, persistentId, updateOrder, Enabled,
OverrideParent,
_targetPos,
_targetRot,
_targetScl,
LocalPosition,
LocalRotation,
LocalScale, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualParent" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OverrideParent" id={typeof OverrideParent === "object" && "id" in OverrideParent ? OverrideParent?.id : undefined} value={typeof OverrideParent === "object" && "value" in OverrideParent ? OverrideParent?.value : OverrideParent} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_targetPos" id={typeof _targetPos === "object" && "id" in _targetPos ? _targetPos?.id : undefined} value={typeof _targetPos === "object" && "value" in _targetPos ? _targetPos?.value : _targetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_targetRot" id={typeof _targetRot === "object" && "id" in _targetRot ? _targetRot?.id : undefined} value={typeof _targetRot === "object" && "value" in _targetRot ? _targetRot?.value : _targetRot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_targetScl" id={typeof _targetScl === "object" && "id" in _targetScl ? _targetScl?.id : undefined} value={typeof _targetScl === "object" && "value" in _targetScl ? _targetScl?.value : _targetScl} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalPosition" id={typeof LocalPosition === "object" && "id" in LocalPosition ? LocalPosition?.id : undefined} value={typeof LocalPosition === "object" && "value" in LocalPosition ? LocalPosition?.value : LocalPosition} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="LocalRotation" id={typeof LocalRotation === "object" && "id" in LocalRotation ? LocalRotation?.id : undefined} value={typeof LocalRotation === "object" && "value" in LocalRotation ? LocalRotation?.value : LocalRotation} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalScale" id={typeof LocalScale === "object" && "id" in LocalScale ? LocalScale?.id : undefined} value={typeof LocalScale === "object" && "value" in LocalScale ? LocalScale?.value : LocalScale} /* default: [0; 0; 0] */  />
        </Component>
      );
    };
    