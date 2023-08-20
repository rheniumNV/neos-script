import { member, Member, Component } from "../../core";
    
    export interface CurvePointInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LeftTangentSource?: member<any>;
RightTangentSource?: member<any>;
    }
    
    export function CurvePoint(props: CurvePointInput){
      const { id, persistentId, updateOrder, Enabled,
LeftTangentSource,
RightTangentSource, } = props;
    
      return (
        <Component type="FrooxEngine.CurvePoint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="LeftTangentSource" id={typeof LeftTangentSource === "object" && "id" in LeftTangentSource ? LeftTangentSource?.id : undefined} value={typeof LeftTangentSource === "object" && "value" in LeftTangentSource ? LeftTangentSource?.value : LeftTangentSource} /* default: ID0 */  isRaw={typeof LeftTangentSource === "object" && "isRaw" in LeftTangentSource && LeftTangentSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="RightTangentSource" id={typeof RightTangentSource === "object" && "id" in RightTangentSource ? RightTangentSource?.id : undefined} value={typeof RightTangentSource === "object" && "value" in RightTangentSource ? RightTangentSource?.value : RightTangentSource} /* default: ID0 */  isRaw={typeof RightTangentSource === "object" && "isRaw" in RightTangentSource && RightTangentSource.isRaw ? true : undefined} />
        </Component>
      );
    };
    