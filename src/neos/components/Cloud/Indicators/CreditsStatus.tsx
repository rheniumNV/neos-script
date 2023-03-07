import { member, Member, Component } from "../../../core";
    
    export interface CreditsStatusInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Token?: member<any>;
CurrentValue?: member<any>;
ApproximateUSDValue?: member<any>;
HasAnyBalance?: member<any>;
    }
    
    export function CreditsStatus(props: CreditsStatusInput){
      const { id, persistentId, updateOrder, Enabled,
Token,
CurrentValue,
ApproximateUSDValue,
HasAnyBalance, } = props;
    
      return (
        <Component type="FrooxEngine.CreditsStatus" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Token" id={typeof Token === "object" && "id" in Token ? Token?.id : undefined} value={typeof Token === "object" && "value" in Token ? Token?.value : Token} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Decimal]`} name="CurrentValue" id={typeof CurrentValue === "object" && "id" in CurrentValue ? CurrentValue?.id : undefined} value={typeof CurrentValue === "object" && "value" in CurrentValue ? CurrentValue?.value : CurrentValue} /* default: FrooxEngine.RawOutput`1[System.Decimal] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Decimal]`} name="ApproximateUSDValue" id={typeof ApproximateUSDValue === "object" && "id" in ApproximateUSDValue ? ApproximateUSDValue?.id : undefined} value={typeof ApproximateUSDValue === "object" && "value" in ApproximateUSDValue ? ApproximateUSDValue?.value : ApproximateUSDValue} /* default: FrooxEngine.RawOutput`1[System.Decimal] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasAnyBalance" id={typeof HasAnyBalance === "object" && "id" in HasAnyBalance ? HasAnyBalance?.id : undefined} value={typeof HasAnyBalance === "object" && "value" in HasAnyBalance ? HasAnyBalance?.value : HasAnyBalance} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
        </Component>
      );
    };
    