import { member, Member, Component } from "../../../core";
    
    export interface ButtonDynamicImpulseTriggerWithValue_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
PressedData?: member<any>;
PressingData?: member<any>;
ReleasedData?: member<any>;
HoverEnterData?: member<any>;
HoverStayData?: member<any>;
HoverLeaveData?: member<any>;
    }
    
    export function ButtonDynamicImpulseTriggerWithValue_T(props: ButtonDynamicImpulseTriggerWithValue_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Target,
PressedData,
PressingData,
ReleasedData,
HoverEnterData,
HoverStayData,
HoverLeaveData, } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`} name="PressedData" id={typeof PressedData === "object" && "id" in PressedData ? PressedData?.id : undefined} value={typeof PressedData === "object" && "value" in PressedData ? PressedData?.value : PressedData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof PressedData === "object" && "isRaw" in PressedData && PressedData.isRaw ? true : undefined} />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`} name="PressingData" id={typeof PressingData === "object" && "id" in PressingData ? PressingData?.id : undefined} value={typeof PressingData === "object" && "value" in PressingData ? PressingData?.value : PressingData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof PressingData === "object" && "isRaw" in PressingData && PressingData.isRaw ? true : undefined} />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`} name="ReleasedData" id={typeof ReleasedData === "object" && "id" in ReleasedData ? ReleasedData?.id : undefined} value={typeof ReleasedData === "object" && "value" in ReleasedData ? ReleasedData?.value : ReleasedData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof ReleasedData === "object" && "isRaw" in ReleasedData && ReleasedData.isRaw ? true : undefined} />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`} name="HoverEnterData" id={typeof HoverEnterData === "object" && "id" in HoverEnterData ? HoverEnterData?.id : undefined} value={typeof HoverEnterData === "object" && "value" in HoverEnterData ? HoverEnterData?.value : HoverEnterData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof HoverEnterData === "object" && "isRaw" in HoverEnterData && HoverEnterData.isRaw ? true : undefined} />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`} name="HoverStayData" id={typeof HoverStayData === "object" && "id" in HoverStayData ? HoverStayData?.id : undefined} value={typeof HoverStayData === "object" && "value" in HoverStayData ? HoverStayData?.value : HoverStayData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof HoverStayData === "object" && "isRaw" in HoverStayData && HoverStayData.isRaw ? true : undefined} />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithValue\`1+EventData[FrooxEngine.Grabbable]`} name="HoverLeaveData" id={typeof HoverLeaveData === "object" && "id" in HoverLeaveData ? HoverLeaveData?.id : undefined} value={typeof HoverLeaveData === "object" && "value" in HoverLeaveData ? HoverLeaveData?.value : HoverLeaveData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithValue`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof HoverLeaveData === "object" && "isRaw" in HoverLeaveData && HoverLeaveData.isRaw ? true : undefined} />
        </Component>
      );
    };
    