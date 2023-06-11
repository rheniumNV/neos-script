import { member, Member, Component } from "../../core";
    
    export interface LicenseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RequireCredit?: member<boolean>;
CreditString?: member<any>;
CanExport?: member<boolean>;
    }
    
    export function License(props: LicenseInput){
      const { id, persistentId, updateOrder, Enabled,
RequireCredit,
CreditString,
CanExport, } = props;
    
      return (
        <Component type="FrooxEngine.License" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RequireCredit" id={typeof RequireCredit === "object" && "id" in RequireCredit ? RequireCredit?.id : undefined} value={typeof RequireCredit === "object" && "value" in RequireCredit ? RequireCredit?.value : RequireCredit} /* default: false */  isRaw={typeof RequireCredit === "object" && "isRaw" in RequireCredit && RequireCredit.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CreditString" id={typeof CreditString === "object" && "id" in CreditString ? CreditString?.id : undefined} value={typeof CreditString === "object" && "value" in CreditString ? CreditString?.value : CreditString} /* default: <i>null</i> */  isRaw={typeof CreditString === "object" && "isRaw" in CreditString && CreditString.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CanExport" id={typeof CanExport === "object" && "id" in CanExport ? CanExport?.id : undefined} value={typeof CanExport === "object" && "value" in CanExport ? CanExport?.value : CanExport} /* default: false */  isRaw={typeof CanExport === "object" && "isRaw" in CanExport && CanExport.isRaw ? true : undefined} />
        </Component>
      );
    };
    