import { member, Member, Component } from "../../core";
    
    export interface BezierCurveInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Points?: member<any>;
CoordinateSpace?: member<any>;
AssignCurveData?: member<any>;
    }
    
    export function BezierCurve(props: BezierCurveInput){
      const { id, persistentId, updateOrder, Enabled,
Points,
CoordinateSpace,
AssignCurveData, } = props;
    
      return (
        <Component type="FrooxEngine.BezierCurve" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRelayList\`1[FrooxEngine.CurvePoint]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: FrooxEngine.SyncRelayList`1[FrooxEngine.CurvePoint] */  isRaw={typeof Points === "object" && "isRaw" in Points && Points.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="CoordinateSpace" id={typeof CoordinateSpace === "object" && "id" in CoordinateSpace ? CoordinateSpace?.id : undefined} value={typeof CoordinateSpace === "object" && "value" in CoordinateSpace ? CoordinateSpace?.value : CoordinateSpace} /* default: ID0 */  isRaw={typeof CoordinateSpace === "object" && "isRaw" in CoordinateSpace && CoordinateSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncCurve\`1[BaseX.float3]]`} name="AssignCurveData" id={typeof AssignCurveData === "object" && "id" in AssignCurveData ? AssignCurveData?.id : undefined} value={typeof AssignCurveData === "object" && "value" in AssignCurveData ? AssignCurveData?.value : AssignCurveData} /* default: ID0 */  isRaw={typeof AssignCurveData === "object" && "isRaw" in AssignCurveData && AssignCurveData.isRaw ? true : undefined} />
        </Component>
      );
    };
    