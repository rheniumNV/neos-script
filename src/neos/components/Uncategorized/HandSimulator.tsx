import { member, Member, Component } from "../../core";
    
    export interface HandSimulatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Side?: member<any>;
    }
    
    export function HandSimulator(props: HandSimulatorInput){
      const { id, persistentId, updateOrder, Enabled,
Side, } = props;
    
      return (
        <Component type="FrooxEngine.HandSimulator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: Left */  isRaw={typeof Side === "object" && "isRaw" in Side && Side.isRaw ? true : undefined} />
        </Component>
      );
    };
    