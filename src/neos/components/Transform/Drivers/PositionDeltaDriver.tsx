import { member, Member, Component } from "../../../core";
    
    export interface PositionDeltaDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Origin?: member<any>;
Target?: member<any>;
VectorSpace?: member<any>;
Normalized?: member<boolean>;
Vector?: member<any>;
    }
    
    export function PositionDeltaDriver(props: PositionDeltaDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Origin,
Target,
VectorSpace,
Normalized,
Vector, } = props;
    
      return (
        <Component type="FrooxEngine.PositionDeltaDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="Origin" id={typeof Origin === "object" && "id" in Origin ? Origin?.id : undefined} value={typeof Origin === "object" && "value" in Origin ? Origin?.value : Origin} /* default: ID0 */  isRaw={typeof Origin === "object" && "isRaw" in Origin && Origin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="VectorSpace" id={typeof VectorSpace === "object" && "id" in VectorSpace ? VectorSpace?.id : undefined} value={typeof VectorSpace === "object" && "value" in VectorSpace ? VectorSpace?.value : VectorSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof VectorSpace === "object" && "isRaw" in VectorSpace && VectorSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Normalized" id={typeof Normalized === "object" && "id" in Normalized ? Normalized?.id : undefined} value={typeof Normalized === "object" && "value" in Normalized ? Normalized?.value : Normalized} /* default: false */  isRaw={typeof Normalized === "object" && "isRaw" in Normalized && Normalized.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Vector" id={typeof Vector === "object" && "id" in Vector ? Vector?.id : undefined} value={typeof Vector === "object" && "value" in Vector ? Vector?.value : Vector} /* default: ID0 */  isRaw={typeof Vector === "object" && "isRaw" in Vector && Vector.isRaw ? true : undefined} />
        </Component>
      );
    };
    