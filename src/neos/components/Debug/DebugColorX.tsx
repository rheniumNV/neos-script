import { member, Member, Component } from "../../core";
    
    export interface DebugColorXInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Value?: member<any>;
    }
    
    export function DebugColorX(props: DebugColorXInput){
      const { id, persistentId, updateOrder, Enabled,
Value, } = props;
    
      return (
        <Component type="FrooxEngine.DebugColorX" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.colorX]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: [0; 0; 0; 0; Linear] */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
        </Component>
      );
    };
    