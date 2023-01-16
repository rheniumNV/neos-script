import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TouchablePermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Tags?: member<any>;
Components?: member<any>;
    }
    
    export function TouchablePermissions(props: TouchablePermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
Tags,
Components, } = props;
    
      return (
        <Component type="FrooxEngine.TouchablePermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.TagFilter`} name="Tags" id={typeof Tags === "object" && "id" in Tags ? Tags?.id : undefined} value={typeof Tags === "object" && "value" in Tags ? Tags?.value : Tags} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TagFilter,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.ComponentFilter`} name="Components" id={typeof Components === "object" && "id" in Components ? Components?.id : undefined} value={typeof Components === "object" && "value" in Components ? Components?.value : Components} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.ComponentFilter,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
        </Component>
      );
    };
    