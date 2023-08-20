import { member, Member, Component } from "../../core";
    
    export interface FreeformTargettingControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FocusTarget?: member<any>;
FocusCenterPoint?: member<[number, number, number]>;
    }
    
    export function FreeformTargettingController(props: FreeformTargettingControllerInput){
      const { id, persistentId, updateOrder, Enabled,
FocusTarget,
FocusCenterPoint, } = props;
    
      return (
        <Component type="FrooxEngine.FreeformTargettingController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="FocusTarget" id={typeof FocusTarget === "object" && "id" in FocusTarget ? FocusTarget?.id : undefined} value={typeof FocusTarget === "object" && "value" in FocusTarget ? FocusTarget?.value : FocusTarget} /* default: ID0 */  isRaw={typeof FocusTarget === "object" && "isRaw" in FocusTarget && FocusTarget.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="FocusCenterPoint" id={typeof FocusCenterPoint === "object" && "id" in FocusCenterPoint ? FocusCenterPoint?.id : undefined} value={typeof FocusCenterPoint === "object" && "value" in FocusCenterPoint ? FocusCenterPoint?.value : FocusCenterPoint} /* default: [0; 0; 0] */  isRaw={typeof FocusCenterPoint === "object" && "isRaw" in FocusCenterPoint && FocusCenterPoint.isRaw ? true : undefined} />
        </Component>
      );
    };
    