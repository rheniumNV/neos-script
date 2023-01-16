import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CommonToolPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AllowOnlyWhitelistedTools?: member<boolean>;
    }
    
    export function CommonToolPermissions(props: CommonToolPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
AllowOnlyWhitelistedTools, } = props;
    
      return (
        <Component type="FrooxEngine.CommonToolPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowOnlyWhitelistedTools" id={typeof AllowOnlyWhitelistedTools === "object" && "id" in AllowOnlyWhitelistedTools ? AllowOnlyWhitelistedTools?.id : undefined} value={typeof AllowOnlyWhitelistedTools === "object" && "value" in AllowOnlyWhitelistedTools ? AllowOnlyWhitelistedTools?.value : AllowOnlyWhitelistedTools} /* default: false */  />
        </Component>
      );
    };
    