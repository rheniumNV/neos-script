import { member, Member, Component } from "../../../../core";
    
    export interface AvatarNameplateVisibilityDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AlwaysShowToContacts?: member<boolean>;
Visible?: member<any>;
    }
    
    export function AvatarNameplateVisibilityDriver(props: AvatarNameplateVisibilityDriverInput){
      const { id, persistentId, updateOrder, Enabled,
AlwaysShowToContacts,
Visible, } = props;
    
      return (
        <Component type="FrooxEngine.AvatarNameplateVisibilityDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlwaysShowToContacts" id={typeof AlwaysShowToContacts === "object" && "id" in AlwaysShowToContacts ? AlwaysShowToContacts?.id : undefined} value={typeof AlwaysShowToContacts === "object" && "value" in AlwaysShowToContacts ? AlwaysShowToContacts?.value : AlwaysShowToContacts} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="Visible" id={typeof Visible === "object" && "id" in Visible ? Visible?.id : undefined} value={typeof Visible === "object" && "value" in Visible ? Visible?.value : Visible} /* default: ID0 */  />
        </Component>
      );
    };
    