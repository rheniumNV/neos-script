import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonDynamicImpulseTriggerWithReference_TInput {
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
    
    export function ButtonDynamicImpulseTriggerWithReference_T(props: ButtonDynamicImpulseTriggerWithReference_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Target,
PressedData,
PressingData,
ReleasedData,
HoverEnterData,
HoverStayData,
HoverLeaveData, } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonDynamicImpulseTriggerWithReference\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithReference\`1+EventData[FrooxEngine.Grabbable]`} name="PressedData" id={typeof PressedData === "object" && "id" in PressedData ? PressedData?.id : undefined} value={typeof PressedData === "object" && "value" in PressedData ? PressedData?.value : PressedData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithReference`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithReference\`1+EventData[FrooxEngine.Grabbable]`} name="PressingData" id={typeof PressingData === "object" && "id" in PressingData ? PressingData?.id : undefined} value={typeof PressingData === "object" && "value" in PressingData ? PressingData?.value : PressingData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithReference`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithReference\`1+EventData[FrooxEngine.Grabbable]`} name="ReleasedData" id={typeof ReleasedData === "object" && "id" in ReleasedData ? ReleasedData?.id : undefined} value={typeof ReleasedData === "object" && "value" in ReleasedData ? ReleasedData?.value : ReleasedData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithReference`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithReference\`1+EventData[FrooxEngine.Grabbable]`} name="HoverEnterData" id={typeof HoverEnterData === "object" && "id" in HoverEnterData ? HoverEnterData?.id : undefined} value={typeof HoverEnterData === "object" && "value" in HoverEnterData ? HoverEnterData?.value : HoverEnterData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithReference`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithReference\`1+EventData[FrooxEngine.Grabbable]`} name="HoverStayData" id={typeof HoverStayData === "object" && "id" in HoverStayData ? HoverStayData?.id : undefined} value={typeof HoverStayData === "object" && "value" in HoverStayData ? HoverStayData?.value : HoverStayData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithReference`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.ButtonDynamicImpulseTriggerWithReference\`1+EventData[FrooxEngine.Grabbable]`} name="HoverLeaveData" id={typeof HoverLeaveData === "object" && "id" in HoverLeaveData ? HoverLeaveData?.id : undefined} value={typeof HoverLeaveData === "object" && "value" in HoverLeaveData ? HoverLeaveData?.value : HoverLeaveData} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ButtonDynamicImpulseTriggerWithReference`1\+EventData\[FrooxEngine\.Grabbable],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
        </Component>
      );
    };
    