import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowChanges" id={typeof AllowChanges === "object" && "id" in AllowChanges ? AllowChanges?.id : undefined} value={typeof AllowChanges === "object" && "value" in AllowChanges ? AllowChanges?.value : AllowChanges} /* default: false */  />
        </Component>
      );
    };
    