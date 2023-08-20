import { member, Member, Component } from "../../../core";
    
    export interface HierarchyHapticsSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetHierarchy?: member<any>;
Interval?: member<number>;
RelativeIntensity?: member<number>;
    }
    
    export function HierarchyHapticsSource(props: HierarchyHapticsSourceInput){
      const { id, persistentId, updateOrder, Enabled,
TargetHierarchy,
Interval,
RelativeIntensity, } = props;
    
      return (
        <Component type="FrooxEngine.HierarchyHapticsSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TargetHierarchy" id={typeof TargetHierarchy === "object" && "id" in TargetHierarchy ? TargetHierarchy?.id : undefined} value={typeof TargetHierarchy === "object" && "value" in TargetHierarchy ? TargetHierarchy?.value : TargetHierarchy} /* default: ID0 */  isRaw={typeof TargetHierarchy === "object" && "isRaw" in TargetHierarchy && TargetHierarchy.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Interval" id={typeof Interval === "object" && "id" in Interval ? Interval?.id : undefined} value={typeof Interval === "object" && "value" in Interval ? Interval?.value : Interval} /* default: 0 */  isRaw={typeof Interval === "object" && "isRaw" in Interval && Interval.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RelativeIntensity" id={typeof RelativeIntensity === "object" && "id" in RelativeIntensity ? RelativeIntensity?.id : undefined} value={typeof RelativeIntensity === "object" && "value" in RelativeIntensity ? RelativeIntensity?.value : RelativeIntensity} /* default: 0 */  isRaw={typeof RelativeIntensity === "object" && "isRaw" in RelativeIntensity && RelativeIntensity.isRaw ? true : undefined} />
        </Component>
      );
    };
    