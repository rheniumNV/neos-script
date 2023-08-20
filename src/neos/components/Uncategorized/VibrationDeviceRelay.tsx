import { member, Member, Component } from "../../core";
    
    export interface VibrationDeviceRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetComponent?: member<any>;
DynamicLookupTarget?: member<any>;
    }
    
    export function VibrationDeviceRelay(props: VibrationDeviceRelayInput){
      const { id, persistentId, updateOrder, Enabled,
TargetComponent,
DynamicLookupTarget, } = props;
    
      return (
        <Component type="FrooxEngine.VibrationDeviceRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IVibrationDeviceComponent]`} name="TargetComponent" id={typeof TargetComponent === "object" && "id" in TargetComponent ? TargetComponent?.id : undefined} value={typeof TargetComponent === "object" && "value" in TargetComponent ? TargetComponent?.value : TargetComponent} /* default: ID0 */  isRaw={typeof TargetComponent === "object" && "isRaw" in TargetComponent && TargetComponent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="DynamicLookupTarget" id={typeof DynamicLookupTarget === "object" && "id" in DynamicLookupTarget ? DynamicLookupTarget?.id : undefined} value={typeof DynamicLookupTarget === "object" && "value" in DynamicLookupTarget ? DynamicLookupTarget?.value : DynamicLookupTarget} /* default: ID0 */  isRaw={typeof DynamicLookupTarget === "object" && "isRaw" in DynamicLookupTarget && DynamicLookupTarget.isRaw ? true : undefined} />
        </Component>
      );
    };
    