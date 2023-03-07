import { member, Member, Component } from "../../core";
    
    export interface ObjectOrbInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PreviewRoot?: member<any>;
TemplateRoot?: member<any>;
    }
    
    export function ObjectOrb(props: ObjectOrbInput){
      const { id, persistentId, updateOrder, Enabled,
PreviewRoot,
TemplateRoot, } = props;
    
      return (
        <Component type="FrooxEngine.ObjectOrb" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PreviewRoot" id={typeof PreviewRoot === "object" && "id" in PreviewRoot ? PreviewRoot?.id : undefined} value={typeof PreviewRoot === "object" && "value" in PreviewRoot ? PreviewRoot?.value : PreviewRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TemplateRoot" id={typeof TemplateRoot === "object" && "id" in TemplateRoot ? TemplateRoot?.id : undefined} value={typeof TemplateRoot === "object" && "value" in TemplateRoot ? TemplateRoot?.value : TemplateRoot} /* default: ID0 */  />
        </Component>
      );
    };
    