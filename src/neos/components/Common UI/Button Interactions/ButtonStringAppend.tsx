import { member, Member, Component } from "../../../core";
    
    export interface ButtonStringAppendInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetString?: member<any>;
AppendString?: member<any>;
AppendInFront?: member<boolean>;
    }
    
    export function ButtonStringAppend(props: ButtonStringAppendInput){
      const { id, persistentId, updateOrder, Enabled,
TargetString,
AppendString,
AppendInFront, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonStringAppend" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.String]]`} name="TargetString" id={typeof TargetString === "object" && "id" in TargetString ? TargetString?.id : undefined} value={typeof TargetString === "object" && "value" in TargetString ? TargetString?.value : TargetString} /* default: ID0 */  isRaw={typeof TargetString === "object" && "isRaw" in TargetString && TargetString.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="AppendString" id={typeof AppendString === "object" && "id" in AppendString ? AppendString?.id : undefined} value={typeof AppendString === "object" && "value" in AppendString ? AppendString?.value : AppendString} /* default: <i>null</i> */  isRaw={typeof AppendString === "object" && "isRaw" in AppendString && AppendString.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AppendInFront" id={typeof AppendInFront === "object" && "id" in AppendInFront ? AppendInFront?.id : undefined} value={typeof AppendInFront === "object" && "value" in AppendInFront ? AppendInFront?.value : AppendInFront} /* default: false */  isRaw={typeof AppendInFront === "object" && "isRaw" in AppendInFront && AppendInFront.isRaw ? true : undefined} />
        </Component>
      );
    };
    