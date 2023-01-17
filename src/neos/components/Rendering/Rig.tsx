import { member, Member, Component } from "../../core";
    
    export interface RigInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Bones?: member<any>;
    }
    
    export function Rig(props: RigInput){
      const { id, persistentId, updateOrder, Enabled,
Bones, } = props;
    
      return (
        <Component type="FrooxEngine.Rig" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="Bones" id={typeof Bones === "object" && "id" in Bones ? Bones?.id : undefined} value={typeof Bones === "object" && "value" in Bones ? Bones?.value : Bones} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  />
        </Component>
      );
    };
    