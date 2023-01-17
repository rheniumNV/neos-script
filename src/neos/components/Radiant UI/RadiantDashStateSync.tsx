import { member, Member, Component } from "../../core";
    
    export interface RadiantDashStateSyncInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
IsFreeform?: member<boolean>;
IsOpen?: member<boolean>;
Curvature?: member<number>;
    }
    
    export function RadiantDashStateSync(props: RadiantDashStateSyncInput){
      const { id, persistentId, updateOrder, Enabled,
IsFreeform,
IsOpen,
Curvature, } = props;
    
      return (
        <Component type="FrooxEngine.RadiantDashStateSync" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsFreeform" id={typeof IsFreeform === "object" && "id" in IsFreeform ? IsFreeform?.id : undefined} value={typeof IsFreeform === "object" && "value" in IsFreeform ? IsFreeform?.value : IsFreeform} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsOpen" id={typeof IsOpen === "object" && "id" in IsOpen ? IsOpen?.id : undefined} value={typeof IsOpen === "object" && "value" in IsOpen ? IsOpen?.value : IsOpen} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Curvature" id={typeof Curvature === "object" && "id" in Curvature ? Curvature?.id : undefined} value={typeof Curvature === "object" && "value" in Curvature ? Curvature?.value : Curvature} /* default: 0 */  />
        </Component>
      );
    };
    