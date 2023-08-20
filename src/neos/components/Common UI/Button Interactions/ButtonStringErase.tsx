import { member, Member, Component } from "../../../core";
    
    export interface ButtonStringEraseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetString?: member<any>;
Count?: member<number>;
EraseFromBeginning?: member<boolean>;
    }
    
    export function ButtonStringErase(props: ButtonStringEraseInput){
      const { id, persistentId, updateOrder, Enabled,
TargetString,
Count,
EraseFromBeginning, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonStringErase" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`} name="TargetString" id={typeof TargetString === "object" && "id" in TargetString ? TargetString?.id : undefined} value={typeof TargetString === "object" && "value" in TargetString ? TargetString?.value : TargetString} /* default: ID0 */  isRaw={typeof TargetString === "object" && "isRaw" in TargetString && TargetString.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Count" id={typeof Count === "object" && "id" in Count ? Count?.id : undefined} value={typeof Count === "object" && "value" in Count ? Count?.value : Count} /* default: 0 */  isRaw={typeof Count === "object" && "isRaw" in Count && Count.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EraseFromBeginning" id={typeof EraseFromBeginning === "object" && "id" in EraseFromBeginning ? EraseFromBeginning?.id : undefined} value={typeof EraseFromBeginning === "object" && "value" in EraseFromBeginning ? EraseFromBeginning?.value : EraseFromBeginning} /* default: false */  isRaw={typeof EraseFromBeginning === "object" && "isRaw" in EraseFromBeginning && EraseFromBeginning.isRaw ? true : undefined} />
        </Component>
      );
    };
    