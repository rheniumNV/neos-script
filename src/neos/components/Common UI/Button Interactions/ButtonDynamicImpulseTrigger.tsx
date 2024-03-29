import { member, Member, Component } from "../../../core";
    
    export interface ButtonDynamicImpulseTriggerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
PressedTag?: member<any>;
PressingTag?: member<any>;
ReleasedTag?: member<any>;
HoverEnterTag?: member<any>;
HoverStayTag?: member<any>;
HoverLeaveTag?: member<any>;
    }
    
    export function ButtonDynamicImpulseTrigger(props: ButtonDynamicImpulseTriggerInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
PressedTag,
PressingTag,
ReleasedTag,
HoverEnterTag,
HoverStayTag,
HoverLeaveTag, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonDynamicImpulseTrigger" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="PressedTag" id={typeof PressedTag === "object" && "id" in PressedTag ? PressedTag?.id : undefined} value={typeof PressedTag === "object" && "value" in PressedTag ? PressedTag?.value : PressedTag} /* default: <i>null</i> */  isRaw={typeof PressedTag === "object" && "isRaw" in PressedTag && PressedTag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="PressingTag" id={typeof PressingTag === "object" && "id" in PressingTag ? PressingTag?.id : undefined} value={typeof PressingTag === "object" && "value" in PressingTag ? PressingTag?.value : PressingTag} /* default: <i>null</i> */  isRaw={typeof PressingTag === "object" && "isRaw" in PressingTag && PressingTag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="ReleasedTag" id={typeof ReleasedTag === "object" && "id" in ReleasedTag ? ReleasedTag?.id : undefined} value={typeof ReleasedTag === "object" && "value" in ReleasedTag ? ReleasedTag?.value : ReleasedTag} /* default: <i>null</i> */  isRaw={typeof ReleasedTag === "object" && "isRaw" in ReleasedTag && ReleasedTag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="HoverEnterTag" id={typeof HoverEnterTag === "object" && "id" in HoverEnterTag ? HoverEnterTag?.id : undefined} value={typeof HoverEnterTag === "object" && "value" in HoverEnterTag ? HoverEnterTag?.value : HoverEnterTag} /* default: <i>null</i> */  isRaw={typeof HoverEnterTag === "object" && "isRaw" in HoverEnterTag && HoverEnterTag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="HoverStayTag" id={typeof HoverStayTag === "object" && "id" in HoverStayTag ? HoverStayTag?.id : undefined} value={typeof HoverStayTag === "object" && "value" in HoverStayTag ? HoverStayTag?.value : HoverStayTag} /* default: <i>null</i> */  isRaw={typeof HoverStayTag === "object" && "isRaw" in HoverStayTag && HoverStayTag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="HoverLeaveTag" id={typeof HoverLeaveTag === "object" && "id" in HoverLeaveTag ? HoverLeaveTag?.id : undefined} value={typeof HoverLeaveTag === "object" && "value" in HoverLeaveTag ? HoverLeaveTag?.value : HoverLeaveTag} /* default: <i>null</i> */  isRaw={typeof HoverLeaveTag === "object" && "isRaw" in HoverLeaveTag && HoverLeaveTag.isRaw ? true : undefined} />
        </Component>
      );
    };
    