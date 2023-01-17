import { member, Member, Component } from "../../core";
    
    export interface NeosVersionDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Text?: member<string>;
    }
    
    export function NeosVersionDriver(props: NeosVersionDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Text, } = props;
    
      return (
        <Component type="FrooxEngine.NeosVersionDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: ID0 */  />
        </Component>
      );
    };
    