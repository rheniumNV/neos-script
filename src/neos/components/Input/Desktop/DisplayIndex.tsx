import { member, Member, Component } from "../../../core";
    
    export interface DisplayIndexInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Index?: member<number>;
    }
    
    export function DisplayIndex(props: DisplayIndexInput){
      const { id, persistentId, updateOrder, Enabled,
Index, } = props;
    
      return (
        <Component type="FrooxEngine.DisplayIndex" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Index" id={typeof Index === "object" && "id" in Index ? Index?.id : undefined} value={typeof Index === "object" && "value" in Index ? Index?.value : Index} /* default: 0 */  />
        </Component>
      );
    };
    