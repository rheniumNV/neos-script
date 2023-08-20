import { member, Member, Component } from "../../core";
    
    export interface CommonToolPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AllowOnlyWhitelistedTools?: member<boolean>;
TooltipRules?: member<any>;
    }
    
    export function CommonToolPermissions(props: CommonToolPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
AllowOnlyWhitelistedTools,
TooltipRules, } = props;
    
      return (
        <Component type="FrooxEngine.CommonToolPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowOnlyWhitelistedTools" id={typeof AllowOnlyWhitelistedTools === "object" && "id" in AllowOnlyWhitelistedTools ? AllowOnlyWhitelistedTools?.id : undefined} value={typeof AllowOnlyWhitelistedTools === "object" && "value" in AllowOnlyWhitelistedTools ? AllowOnlyWhitelistedTools?.value : AllowOnlyWhitelistedTools} /* default: false */  isRaw={typeof AllowOnlyWhitelistedTools === "object" && "isRaw" in AllowOnlyWhitelistedTools && AllowOnlyWhitelistedTools.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonToolPermissions+TooltipRule]`} name="TooltipRules" id={typeof TooltipRules === "object" && "id" in TooltipRules ? TooltipRules?.id : undefined} value={typeof TooltipRules === "object" && "value" in TooltipRules ? TooltipRules?.value : TooltipRules} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonToolPermissions+TooltipRule] */  isRaw={typeof TooltipRules === "object" && "isRaw" in TooltipRules && TooltipRules.isRaw ? true : undefined} />
        </Component>
      );
    };
    