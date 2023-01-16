import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface MultiValueTextFormatDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Format?: member<any>;
Text?: member<string>;
    }
    
    export function MultiValueTextFormatDriver(props: MultiValueTextFormatDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Format,
Text, } = props;
    
      return (
        <Component type="FrooxEngine.MultiValueTextFormatDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: ID0 */  />
        </Component>
      );
    };
    