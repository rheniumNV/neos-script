import { member, Member, Component } from "../../core";
    
    export interface LocaleStringDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<string>;
Key?: member<any>;
Format?: member<any>;
Locale?: member<any>;
    }
    
    export function LocaleStringDriver(props: LocaleStringDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
Key,
Format,
Locale, } = props;
    
      return (
        <Component type="FrooxEngine.LocaleStringDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Key" id={typeof Key === "object" && "id" in Key ? Key?.id : undefined} value={typeof Key === "object" && "value" in Key ? Key?.value : Key} /* default: <i>null</i> */  isRaw={typeof Key === "object" && "isRaw" in Key && Key.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: <i>null</i> */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.LocaleResource]`} name="Locale" id={typeof Locale === "object" && "id" in Locale ? Locale?.id : undefined} value={typeof Locale === "object" && "value" in Locale ? Locale?.value : Locale} /* default: ID0 */  isRaw={typeof Locale === "object" && "isRaw" in Locale && Locale.isRaw ? true : undefined} />
        </Component>
      );
    };
    