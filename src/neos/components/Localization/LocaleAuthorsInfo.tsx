import { member, Member, Component } from "../../core";
    
    export interface LocaleAuthorsInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Locale?: member<any>;
CreditsString?: member<any>;
    }
    
    export function LocaleAuthorsInfo(props: LocaleAuthorsInfoInput){
      const { id, persistentId, updateOrder, Enabled,
Locale,
CreditsString, } = props;
    
      return (
        <Component type="FrooxEngine.LocaleAuthorsInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.LocaleResource]`} name="Locale" id={typeof Locale === "object" && "id" in Locale ? Locale?.id : undefined} value={typeof Locale === "object" && "value" in Locale ? Locale?.value : Locale} /* default: ID0 */  isRaw={typeof Locale === "object" && "isRaw" in Locale && Locale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="CreditsString" id={typeof CreditsString === "object" && "id" in CreditsString ? CreditsString?.id : undefined} value={typeof CreditsString === "object" && "value" in CreditsString ? CreditsString?.value : CreditsString} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof CreditsString === "object" && "isRaw" in CreditsString && CreditsString.isRaw ? true : undefined} />
        </Component>
      );
    };
    