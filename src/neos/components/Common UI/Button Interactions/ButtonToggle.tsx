import { member, Member, Component } from "../../../core";
    
    export interface ButtonToggleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetValue?: member<any>;
    }
    
    export function ButtonToggle(props: ButtonToggleInput){
      const { id, persistentId, updateOrder, Enabled,
TargetValue, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonToggle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Boolean]]`} name="TargetValue" id={typeof TargetValue === "object" && "id" in TargetValue ? TargetValue?.id : undefined} value={typeof TargetValue === "object" && "value" in TargetValue ? TargetValue?.value : TargetValue} /* default: ID0 */  isRaw={typeof TargetValue === "object" && "isRaw" in TargetValue && TargetValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    