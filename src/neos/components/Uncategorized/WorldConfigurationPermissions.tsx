import { member, Member, Component } from "../../core";
    
    export interface WorldConfigurationPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AllowChanges?: member<boolean>;
    }
    
    export function WorldConfigurationPermissions(props: WorldConfigurationPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
AllowChanges, } = props;
    
      return (
        <Component type="FrooxEngine.WorldConfigurationPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowChanges" id={typeof AllowChanges === "object" && "id" in AllowChanges ? AllowChanges?.id : undefined} value={typeof AllowChanges === "object" && "value" in AllowChanges ? AllowChanges?.value : AllowChanges} /* default: false */  isRaw={typeof AllowChanges === "object" && "isRaw" in AllowChanges && AllowChanges.isRaw ? true : undefined} />
        </Component>
      );
    };
    