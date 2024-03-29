import { member, Member, Component } from "../../core";
    
    export interface TimeDiagnosisInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FormatTime?: member<boolean>;
text?: member<any>;
    }
    
    export function TimeDiagnosis(props: TimeDiagnosisInput){
      const { id, persistentId, updateOrder, Enabled,
FormatTime,
text, } = props;
    
      return (
        <Component type="FrooxEngine.TimeDiagnosis" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FormatTime" id={typeof FormatTime === "object" && "id" in FormatTime ? FormatTime?.id : undefined} value={typeof FormatTime === "object" && "value" in FormatTime ? FormatTime?.value : FormatTime} /* default: false */  isRaw={typeof FormatTime === "object" && "isRaw" in FormatTime && FormatTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[System.String]]`} name="text" id={typeof text === "object" && "id" in text ? text?.id : undefined} value={typeof text === "object" && "value" in text ? text?.value : text} /* default: ID0 */  isRaw={typeof text === "object" && "isRaw" in text && text.isRaw ? true : undefined} />
        </Component>
      );
    };
    