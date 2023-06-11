import { member, Member, Component } from "../../core";
    
    export interface ExternalSlotSaverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetSlot?: member<any>;
SaveActiveSelfOverride?: member<any>;
SaveLocalPositionOverride?: member<any>;
SaveLocalRotationOverride?: member<any>;
SaveLocalScaleOverride?: member<any>;
IgnoreWhenNonPersistentSelf?: member<boolean>;
    }
    
    export function ExternalSlotSaver(props: ExternalSlotSaverInput){
      const { id, persistentId, updateOrder, Enabled,
TargetSlot,
SaveActiveSelfOverride,
SaveLocalPositionOverride,
SaveLocalRotationOverride,
SaveLocalScaleOverride,
IgnoreWhenNonPersistentSelf, } = props;
    
      return (
        <Component type="FrooxEngine.ExternalSlotSaver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  isRaw={typeof TargetSlot === "object" && "isRaw" in TargetSlot && TargetSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`} name="SaveActiveSelfOverride" id={typeof SaveActiveSelfOverride === "object" && "id" in SaveActiveSelfOverride ? SaveActiveSelfOverride?.id : undefined} value={typeof SaveActiveSelfOverride === "object" && "value" in SaveActiveSelfOverride ? SaveActiveSelfOverride?.value : SaveActiveSelfOverride} /* default: <i>null</i> */  isRaw={typeof SaveActiveSelfOverride === "object" && "isRaw" in SaveActiveSelfOverride && SaveActiveSelfOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="SaveLocalPositionOverride" id={typeof SaveLocalPositionOverride === "object" && "id" in SaveLocalPositionOverride ? SaveLocalPositionOverride?.id : undefined} value={typeof SaveLocalPositionOverride === "object" && "value" in SaveLocalPositionOverride ? SaveLocalPositionOverride?.value : SaveLocalPositionOverride} /* default: <i>null</i> */  isRaw={typeof SaveLocalPositionOverride === "object" && "isRaw" in SaveLocalPositionOverride && SaveLocalPositionOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.floatQ]]`} name="SaveLocalRotationOverride" id={typeof SaveLocalRotationOverride === "object" && "id" in SaveLocalRotationOverride ? SaveLocalRotationOverride?.id : undefined} value={typeof SaveLocalRotationOverride === "object" && "value" in SaveLocalRotationOverride ? SaveLocalRotationOverride?.value : SaveLocalRotationOverride} /* default: <i>null</i> */  isRaw={typeof SaveLocalRotationOverride === "object" && "isRaw" in SaveLocalRotationOverride && SaveLocalRotationOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="SaveLocalScaleOverride" id={typeof SaveLocalScaleOverride === "object" && "id" in SaveLocalScaleOverride ? SaveLocalScaleOverride?.id : undefined} value={typeof SaveLocalScaleOverride === "object" && "value" in SaveLocalScaleOverride ? SaveLocalScaleOverride?.value : SaveLocalScaleOverride} /* default: <i>null</i> */  isRaw={typeof SaveLocalScaleOverride === "object" && "isRaw" in SaveLocalScaleOverride && SaveLocalScaleOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreWhenNonPersistentSelf" id={typeof IgnoreWhenNonPersistentSelf === "object" && "id" in IgnoreWhenNonPersistentSelf ? IgnoreWhenNonPersistentSelf?.id : undefined} value={typeof IgnoreWhenNonPersistentSelf === "object" && "value" in IgnoreWhenNonPersistentSelf ? IgnoreWhenNonPersistentSelf?.value : IgnoreWhenNonPersistentSelf} /* default: false */  isRaw={typeof IgnoreWhenNonPersistentSelf === "object" && "isRaw" in IgnoreWhenNonPersistentSelf && IgnoreWhenNonPersistentSelf.isRaw ? true : undefined} />
        </Component>
      );
    };
    