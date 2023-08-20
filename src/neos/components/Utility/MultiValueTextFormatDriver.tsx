import { member, Member, Component } from "../../core";
    
    export interface MultiValueTextFormatDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Sources?: member<any>;
Format?: member<any>;
Text?: member<string>;
    }
    
    export function MultiValueTextFormatDriver(props: MultiValueTextFormatDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Sources,
Format,
Text, } = props;
    
      return (
        <Component type="FrooxEngine.MultiValueTextFormatDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRelayList\`1[FrooxEngine.IField]`} name="Sources" id={typeof Sources === "object" && "id" in Sources ? Sources?.id : undefined} value={typeof Sources === "object" && "value" in Sources ? Sources?.value : Sources} /* default: FrooxEngine.SyncRelayList`1[FrooxEngine.IField] */  isRaw={typeof Sources === "object" && "isRaw" in Sources && Sources.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: <i>null</i> */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: ID0 */  isRaw={typeof Text === "object" && "isRaw" in Text && Text.isRaw ? true : undefined} />
        </Component>
      );
    };
    