import { member, Member, Component } from "../../../../core";
    
    export interface CylindricalDistanceHapticFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
StartRadius?: member<number>;
EndRadius?: member<number>;
StartRadiusIntensity?: member<number>;
EndRadiusIntensity?: member<number>;
RadiusPower?: member<number>;
StartAxisOffset?: member<number>;
EndAxisOffset?: member<number>;
StartAxisIntensity?: member<number>;
EndAxisIntensity?: member<number>;
AxisPower?: member<number>;
    }
    
    export function CylindricalDistanceHapticFilter(props: CylindricalDistanceHapticFilterInput){
      const { id, persistentId, updateOrder, Enabled,
StartRadius,
EndRadius,
StartRadiusIntensity,
EndRadiusIntensity,
RadiusPower,
StartAxisOffset,
EndAxisOffset,
StartAxisIntensity,
EndAxisIntensity,
AxisPower, } = props;
    
      return (
        <Component type="FrooxEngine.CylindricalDistanceHapticFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartRadius" id={typeof StartRadius === "object" && "id" in StartRadius ? StartRadius?.id : undefined} value={typeof StartRadius === "object" && "value" in StartRadius ? StartRadius?.value : StartRadius} /* default: 0 */  isRaw={typeof StartRadius === "object" && "isRaw" in StartRadius && StartRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndRadius" id={typeof EndRadius === "object" && "id" in EndRadius ? EndRadius?.id : undefined} value={typeof EndRadius === "object" && "value" in EndRadius ? EndRadius?.value : EndRadius} /* default: 0 */  isRaw={typeof EndRadius === "object" && "isRaw" in EndRadius && EndRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartRadiusIntensity" id={typeof StartRadiusIntensity === "object" && "id" in StartRadiusIntensity ? StartRadiusIntensity?.id : undefined} value={typeof StartRadiusIntensity === "object" && "value" in StartRadiusIntensity ? StartRadiusIntensity?.value : StartRadiusIntensity} /* default: 0 */  isRaw={typeof StartRadiusIntensity === "object" && "isRaw" in StartRadiusIntensity && StartRadiusIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndRadiusIntensity" id={typeof EndRadiusIntensity === "object" && "id" in EndRadiusIntensity ? EndRadiusIntensity?.id : undefined} value={typeof EndRadiusIntensity === "object" && "value" in EndRadiusIntensity ? EndRadiusIntensity?.value : EndRadiusIntensity} /* default: 0 */  isRaw={typeof EndRadiusIntensity === "object" && "isRaw" in EndRadiusIntensity && EndRadiusIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RadiusPower" id={typeof RadiusPower === "object" && "id" in RadiusPower ? RadiusPower?.id : undefined} value={typeof RadiusPower === "object" && "value" in RadiusPower ? RadiusPower?.value : RadiusPower} /* default: 0 */  isRaw={typeof RadiusPower === "object" && "isRaw" in RadiusPower && RadiusPower.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartAxisOffset" id={typeof StartAxisOffset === "object" && "id" in StartAxisOffset ? StartAxisOffset?.id : undefined} value={typeof StartAxisOffset === "object" && "value" in StartAxisOffset ? StartAxisOffset?.value : StartAxisOffset} /* default: 0 */  isRaw={typeof StartAxisOffset === "object" && "isRaw" in StartAxisOffset && StartAxisOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndAxisOffset" id={typeof EndAxisOffset === "object" && "id" in EndAxisOffset ? EndAxisOffset?.id : undefined} value={typeof EndAxisOffset === "object" && "value" in EndAxisOffset ? EndAxisOffset?.value : EndAxisOffset} /* default: 0 */  isRaw={typeof EndAxisOffset === "object" && "isRaw" in EndAxisOffset && EndAxisOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartAxisIntensity" id={typeof StartAxisIntensity === "object" && "id" in StartAxisIntensity ? StartAxisIntensity?.id : undefined} value={typeof StartAxisIntensity === "object" && "value" in StartAxisIntensity ? StartAxisIntensity?.value : StartAxisIntensity} /* default: 0 */  isRaw={typeof StartAxisIntensity === "object" && "isRaw" in StartAxisIntensity && StartAxisIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndAxisIntensity" id={typeof EndAxisIntensity === "object" && "id" in EndAxisIntensity ? EndAxisIntensity?.id : undefined} value={typeof EndAxisIntensity === "object" && "value" in EndAxisIntensity ? EndAxisIntensity?.value : EndAxisIntensity} /* default: 0 */  isRaw={typeof EndAxisIntensity === "object" && "isRaw" in EndAxisIntensity && EndAxisIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AxisPower" id={typeof AxisPower === "object" && "id" in AxisPower ? AxisPower?.id : undefined} value={typeof AxisPower === "object" && "value" in AxisPower ? AxisPower?.value : AxisPower} /* default: 0 */  isRaw={typeof AxisPower === "object" && "isRaw" in AxisPower && AxisPower.isRaw ? true : undefined} />
        </Component>
      );
    };
    