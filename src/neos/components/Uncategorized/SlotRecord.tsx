import { member, Member, Component } from "../../core";
    
    export interface SlotRecordInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetSlot?: member<any>;
    }
    
    export function SlotRecord(props: SlotRecordInput){
      const { id, persistentId, updateOrder, Enabled,
TargetSlot, } = props;
    
      return (
        <Component type="FrooxEngine.SlotRecord" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  />
        </Component>
      );
    };
    