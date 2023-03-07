import { member, Member, Component } from "../../../core";
    
    export interface VirtualKeyTextDriveInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Key?: member<any>;
Text?: member<string>;
    }
    
    export function VirtualKeyTextDrive(props: VirtualKeyTextDriveInput){
      const { id, persistentId, updateOrder, Enabled,
Key,
Text, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualKeyTextDrive" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.VirtualKey]`} name="Key" id={typeof Key === "object" && "id" in Key ? Key?.id : undefined} value={typeof Key === "object" && "value" in Key ? Key?.value : Key} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: ID0 */  />
        </Component>
      );
    };
    