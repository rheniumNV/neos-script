import { member, Member, Component } from "../../core";
    
    export interface StaticLocaleProviderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
OverrideLocale?: member<any>;
    }
    
    export function StaticLocaleProvider(props: StaticLocaleProviderInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
OverrideLocale, } = props;
    
      return (
        <Component type="FrooxEngine.StaticLocaleProvider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  isRaw={typeof URL === "object" && "isRaw" in URL && URL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="OverrideLocale" id={typeof OverrideLocale === "object" && "id" in OverrideLocale ? OverrideLocale?.id : undefined} value={typeof OverrideLocale === "object" && "value" in OverrideLocale ? OverrideLocale?.value : OverrideLocale} /* default: <i>null</i> */  isRaw={typeof OverrideLocale === "object" && "isRaw" in OverrideLocale && OverrideLocale.isRaw ? true : undefined} />
        </Component>
      );
    };
    