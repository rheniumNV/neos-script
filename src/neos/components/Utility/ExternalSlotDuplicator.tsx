import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ExternalSlotDuplicatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetSlot?: member<any>;
LocalPositionOverride?: member<any>;
LocalRotationOverride?: member<any>;
LocalScaleOverride?: member<any>;
ActiveSelfOverride?: member<any>;
DoNotRestoreOriginalTransform?: member<boolean>;
    }
    
    export function ExternalSlotDuplicator(props: ExternalSlotDuplicatorInput){
      const { id, persistentId, updateOrder, Enabled,
TargetSlot,
LocalPositionOverride,
LocalRotationOverride,
LocalScaleOverride,
ActiveSelfOverride,
DoNotRestoreOriginalTransform, } = props;
    
      return (
        <Component type="FrooxEngine.ExternalSlotDuplicator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="LocalPositionOverride" id={typeof LocalPositionOverride === "object" && "id" in LocalPositionOverride ? LocalPositionOverride?.id : undefined} value={typeof LocalPositionOverride === "object" && "value" in LocalPositionOverride ? LocalPositionOverride?.value : LocalPositionOverride} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.floatQ]]`} name="LocalRotationOverride" id={typeof LocalRotationOverride === "object" && "id" in LocalRotationOverride ? LocalRotationOverride?.id : undefined} value={typeof LocalRotationOverride === "object" && "value" in LocalRotationOverride ? LocalRotationOverride?.value : LocalRotationOverride} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="LocalScaleOverride" id={typeof LocalScaleOverride === "object" && "id" in LocalScaleOverride ? LocalScaleOverride?.id : undefined} value={typeof LocalScaleOverride === "object" && "value" in LocalScaleOverride ? LocalScaleOverride?.value : LocalScaleOverride} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`} name="ActiveSelfOverride" id={typeof ActiveSelfOverride === "object" && "id" in ActiveSelfOverride ? ActiveSelfOverride?.id : undefined} value={typeof ActiveSelfOverride === "object" && "value" in ActiveSelfOverride ? ActiveSelfOverride?.value : ActiveSelfOverride} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DoNotRestoreOriginalTransform" id={typeof DoNotRestoreOriginalTransform === "object" && "id" in DoNotRestoreOriginalTransform ? DoNotRestoreOriginalTransform?.id : undefined} value={typeof DoNotRestoreOriginalTransform === "object" && "value" in DoNotRestoreOriginalTransform ? DoNotRestoreOriginalTransform?.value : DoNotRestoreOriginalTransform} /* default: false */  />
        </Component>
      );
    };
    