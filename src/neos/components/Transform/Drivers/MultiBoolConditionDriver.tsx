import { member, Member, Component } from "../../../core";
    
    export interface MultiBoolConditionDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Mode?: member<any>;
Conditions?: member<any>;
    }
    
    export function MultiBoolConditionDriver(props: MultiBoolConditionDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
Mode,
Conditions, } = props;
    
      return (
        <Component type="FrooxEngine.MultiBoolConditionDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MultiBoolConditionDriver+ConditionMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: All */  isRaw={typeof Mode === "object" && "isRaw" in Mode && Mode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.MultiBoolConditionDriver+Condition]`} name="Conditions" id={typeof Conditions === "object" && "id" in Conditions ? Conditions?.id : undefined} value={typeof Conditions === "object" && "value" in Conditions ? Conditions?.value : Conditions} /* default: FrooxEngine.SyncList`1[FrooxEngine.MultiBoolConditionDriver+Condition] */  isRaw={typeof Conditions === "object" && "isRaw" in Conditions && Conditions.isRaw ? true : undefined} />
        </Component>
      );
    };
    