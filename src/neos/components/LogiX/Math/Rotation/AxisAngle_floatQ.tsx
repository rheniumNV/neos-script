import { member, Member, Component } from "../../../../core";
    
    export interface AxisAngle_floatQInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Axis?: member<any>;
Angle?: member<any>;
    }
    
    export function AxisAngle_floatQ(props: AxisAngle_floatQInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Axis,
Angle, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Quaternions.AxisAngle_floatQ" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: ID0 */  isRaw={typeof Axis === "object" && "isRaw" in Axis && Axis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Angle" id={typeof Angle === "object" && "id" in Angle ? Angle?.id : undefined} value={typeof Angle === "object" && "value" in Angle ? Angle?.value : Angle} /* default: ID0 */  isRaw={typeof Angle === "object" && "isRaw" in Angle && Angle.isRaw ? true : undefined} />
        </Component>
      );
    };
    