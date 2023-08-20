import { member, Member, Component } from "../../core";
    
    export interface RepulsionTreeItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Force?: member<number>;
Radius?: member<number>;
    }
    
    export function RepulsionTreeItem(props: RepulsionTreeItemInput){
      const { id, persistentId, updateOrder, Enabled,
Force,
Radius, } = props;
    
      return (
        <Component type="FrooxEngine.RepulsionTreeItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Force" id={typeof Force === "object" && "id" in Force ? Force?.id : undefined} value={typeof Force === "object" && "value" in Force ? Force?.value : Force} /* default: 0 */  isRaw={typeof Force === "object" && "isRaw" in Force && Force.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
        </Component>
      );
    };
    