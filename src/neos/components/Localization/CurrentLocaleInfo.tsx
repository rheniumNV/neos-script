import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CurrentLocaleInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LocaleCode?: member<any>;
LanguageCode?: member<any>;
NativeLocaleName?: member<any>;
EnglishLocaleName?: member<any>;
    }
    
    export function CurrentLocaleInfo(props: CurrentLocaleInfoInput){
      const { id, persistentId, updateOrder, Enabled,
LocaleCode,
LanguageCode,
NativeLocaleName,
EnglishLocaleName, } = props;
    
      return (
        <Component type="FrooxEngine.CurrentLocaleInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="LocaleCode" id={typeof LocaleCode === "object" && "id" in LocaleCode ? LocaleCode?.id : undefined} value={typeof LocaleCode === "object" && "value" in LocaleCode ? LocaleCode?.value : LocaleCode} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="LanguageCode" id={typeof LanguageCode === "object" && "id" in LanguageCode ? LanguageCode?.id : undefined} value={typeof LanguageCode === "object" && "value" in LanguageCode ? LanguageCode?.value : LanguageCode} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="NativeLocaleName" id={typeof NativeLocaleName === "object" && "id" in NativeLocaleName ? NativeLocaleName?.id : undefined} value={typeof NativeLocaleName === "object" && "value" in NativeLocaleName ? NativeLocaleName?.value : NativeLocaleName} /* default: FrooxEngine.RawOutput`1[System.String] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="EnglishLocaleName" id={typeof EnglishLocaleName === "object" && "id" in EnglishLocaleName ? EnglishLocaleName?.id : undefined} value={typeof EnglishLocaleName === "object" && "value" in EnglishLocaleName ? EnglishLocaleName?.value : EnglishLocaleName} /* default: FrooxEngine.RawOutput`1[System.String] */  />
        </Component>
      );
    };
    