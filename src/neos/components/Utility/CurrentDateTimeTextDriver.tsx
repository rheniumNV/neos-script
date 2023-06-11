import { member, Member, Component } from "../../core";
    
    export interface CurrentDateTimeTextDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<string>;
Format?: member<any>;
UseUTC?: member<boolean>;
    }
    
    export function CurrentDateTimeTextDriver(props: CurrentDateTimeTextDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
Format,
UseUTC, } = props;
    
      return (
        <Component type="FrooxEngine.CurrentDateTimeTextDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: <i>null</i> */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseUTC" id={typeof UseUTC === "object" && "id" in UseUTC ? UseUTC?.id : undefined} value={typeof UseUTC === "object" && "value" in UseUTC ? UseUTC?.value : UseUTC} /* default: false */  isRaw={typeof UseUTC === "object" && "isRaw" in UseUTC && UseUTC.isRaw ? true : undefined} />
        </Component>
      );
    };
    