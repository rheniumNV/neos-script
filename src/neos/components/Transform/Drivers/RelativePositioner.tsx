import { member, Member, Component } from "../../../core";
    
    export interface RelativePositionerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Reference?: member<any>;
ReferenceBoundsSpace?: member<any>;
ReferenceAnchor?: member<[number, number, number]>;
ReferenceOffset?: member<[number, number, number]>;
DestroyAfterDone?: member<boolean>;
_target?: member<any>;
    }
    
    export function RelativePositioner(props: RelativePositionerInput){
      const { id, persistentId, updateOrder, Enabled,
Reference,
ReferenceBoundsSpace,
ReferenceAnchor,
ReferenceOffset,
DestroyAfterDone,
_target, } = props;
    
      return (
        <Component type="FrooxEngine.RelativePositioner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: ID0 */  isRaw={typeof Reference === "object" && "isRaw" in Reference && Reference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="ReferenceBoundsSpace" id={typeof ReferenceBoundsSpace === "object" && "id" in ReferenceBoundsSpace ? ReferenceBoundsSpace?.id : undefined} value={typeof ReferenceBoundsSpace === "object" && "value" in ReferenceBoundsSpace ? ReferenceBoundsSpace?.value : ReferenceBoundsSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof ReferenceBoundsSpace === "object" && "isRaw" in ReferenceBoundsSpace && ReferenceBoundsSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ReferenceAnchor" id={typeof ReferenceAnchor === "object" && "id" in ReferenceAnchor ? ReferenceAnchor?.id : undefined} value={typeof ReferenceAnchor === "object" && "value" in ReferenceAnchor ? ReferenceAnchor?.value : ReferenceAnchor} /* default: [0; 0; 0] */  isRaw={typeof ReferenceAnchor === "object" && "isRaw" in ReferenceAnchor && ReferenceAnchor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ReferenceOffset" id={typeof ReferenceOffset === "object" && "id" in ReferenceOffset ? ReferenceOffset?.id : undefined} value={typeof ReferenceOffset === "object" && "value" in ReferenceOffset ? ReferenceOffset?.value : ReferenceOffset} /* default: [0; 0; 0] */  isRaw={typeof ReferenceOffset === "object" && "isRaw" in ReferenceOffset && ReferenceOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DestroyAfterDone" id={typeof DestroyAfterDone === "object" && "id" in DestroyAfterDone ? DestroyAfterDone?.id : undefined} value={typeof DestroyAfterDone === "object" && "value" in DestroyAfterDone ? DestroyAfterDone?.value : DestroyAfterDone} /* default: false */  isRaw={typeof DestroyAfterDone === "object" && "isRaw" in DestroyAfterDone && DestroyAfterDone.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
        </Component>
      );
    };
    