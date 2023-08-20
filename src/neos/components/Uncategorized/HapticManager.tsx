import { member, Member, Component } from "../../core";
    
    export interface HapticManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
InjectedBodyPartIntensity?: member<number>;
InjectedHandIntensity?: member<number>;
InjectedHeadIntensity?: member<number>;
InjectedRadiusStartRatio?: member<number>;
InjectedRadiusEndRatio?: member<number>;
InjectedRadiusPower?: member<number>;
ShowDebugVisuals?: member<boolean>;
    }
    
    export function HapticManager(props: HapticManagerInput){
      const { id, persistentId, updateOrder, Enabled,
InjectedBodyPartIntensity,
InjectedHandIntensity,
InjectedHeadIntensity,
InjectedRadiusStartRatio,
InjectedRadiusEndRatio,
InjectedRadiusPower,
ShowDebugVisuals, } = props;
    
      return (
        <Component type="FrooxEngine.HapticManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InjectedBodyPartIntensity" id={typeof InjectedBodyPartIntensity === "object" && "id" in InjectedBodyPartIntensity ? InjectedBodyPartIntensity?.id : undefined} value={typeof InjectedBodyPartIntensity === "object" && "value" in InjectedBodyPartIntensity ? InjectedBodyPartIntensity?.value : InjectedBodyPartIntensity} /* default: 0 */  isRaw={typeof InjectedBodyPartIntensity === "object" && "isRaw" in InjectedBodyPartIntensity && InjectedBodyPartIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InjectedHandIntensity" id={typeof InjectedHandIntensity === "object" && "id" in InjectedHandIntensity ? InjectedHandIntensity?.id : undefined} value={typeof InjectedHandIntensity === "object" && "value" in InjectedHandIntensity ? InjectedHandIntensity?.value : InjectedHandIntensity} /* default: 0 */  isRaw={typeof InjectedHandIntensity === "object" && "isRaw" in InjectedHandIntensity && InjectedHandIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InjectedHeadIntensity" id={typeof InjectedHeadIntensity === "object" && "id" in InjectedHeadIntensity ? InjectedHeadIntensity?.id : undefined} value={typeof InjectedHeadIntensity === "object" && "value" in InjectedHeadIntensity ? InjectedHeadIntensity?.value : InjectedHeadIntensity} /* default: 0 */  isRaw={typeof InjectedHeadIntensity === "object" && "isRaw" in InjectedHeadIntensity && InjectedHeadIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InjectedRadiusStartRatio" id={typeof InjectedRadiusStartRatio === "object" && "id" in InjectedRadiusStartRatio ? InjectedRadiusStartRatio?.id : undefined} value={typeof InjectedRadiusStartRatio === "object" && "value" in InjectedRadiusStartRatio ? InjectedRadiusStartRatio?.value : InjectedRadiusStartRatio} /* default: 0 */  isRaw={typeof InjectedRadiusStartRatio === "object" && "isRaw" in InjectedRadiusStartRatio && InjectedRadiusStartRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InjectedRadiusEndRatio" id={typeof InjectedRadiusEndRatio === "object" && "id" in InjectedRadiusEndRatio ? InjectedRadiusEndRatio?.id : undefined} value={typeof InjectedRadiusEndRatio === "object" && "value" in InjectedRadiusEndRatio ? InjectedRadiusEndRatio?.value : InjectedRadiusEndRatio} /* default: 0 */  isRaw={typeof InjectedRadiusEndRatio === "object" && "isRaw" in InjectedRadiusEndRatio && InjectedRadiusEndRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InjectedRadiusPower" id={typeof InjectedRadiusPower === "object" && "id" in InjectedRadiusPower ? InjectedRadiusPower?.id : undefined} value={typeof InjectedRadiusPower === "object" && "value" in InjectedRadiusPower ? InjectedRadiusPower?.value : InjectedRadiusPower} /* default: 0 */  isRaw={typeof InjectedRadiusPower === "object" && "isRaw" in InjectedRadiusPower && InjectedRadiusPower.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowDebugVisuals" id={typeof ShowDebugVisuals === "object" && "id" in ShowDebugVisuals ? ShowDebugVisuals?.id : undefined} value={typeof ShowDebugVisuals === "object" && "value" in ShowDebugVisuals ? ShowDebugVisuals?.value : ShowDebugVisuals} /* default: false */  isRaw={typeof ShowDebugVisuals === "object" && "isRaw" in ShowDebugVisuals && ShowDebugVisuals.isRaw ? true : undefined} />
        </Component>
      );
    };
    