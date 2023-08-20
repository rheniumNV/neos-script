import { member, Member, Component } from "../../core";
    
    export interface BatchActionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_description?: member<any>;
    }
    
    export function BatchAction(props: BatchActionInput){
      const { id, persistentId, updateOrder, Enabled,
_description, } = props;
    
      return (
        <Component type="FrooxEngine.Undo.BatchAction" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_description" id={typeof _description === "object" && "id" in _description ? _description?.id : undefined} value={typeof _description === "object" && "value" in _description ? _description?.value : _description} /* default: <i>null</i> */  isRaw={typeof _description === "object" && "isRaw" in _description && _description.isRaw ? true : undefined} />
        </Component>
      );
    };
    