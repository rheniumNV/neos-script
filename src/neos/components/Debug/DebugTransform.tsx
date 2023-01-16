import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DebugTransformInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ShowToUser?: member<any>;
    }
    
    export function DebugTransform(props: DebugTransformInput){
      const { id, persistentId, updateOrder, Enabled,
ShowToUser, } = props;
    
      return (
        <Component type="FrooxEngine.DebugTransform" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="ShowToUser" id={typeof ShowToUser === "object" && "id" in ShowToUser ? ShowToUser?.id : undefined} value={typeof ShowToUser === "object" && "value" in ShowToUser ? ShowToUser?.value : ShowToUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
        </Component>
      );
    };
    