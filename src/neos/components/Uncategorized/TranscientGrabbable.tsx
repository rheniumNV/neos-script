import { member, Member, Component } from "../../core";
    
    export interface TranscientGrabbableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Root?: member<any>;
    }
    
    export function TranscientGrabbable(props: TranscientGrabbableInput){
      const { id, persistentId, updateOrder, Enabled,
Root, } = props;
    
      return (
        <Component type="FrooxEngine.TranscientGrabbable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  />
        </Component>
      );
    };
    