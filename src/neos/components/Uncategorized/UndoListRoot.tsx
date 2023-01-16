import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UndoListRootInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OwnerUser?: member<any>;
    }
    
    export function UndoListRoot(props: UndoListRootInput){
      const { id, persistentId, updateOrder, Enabled,
OwnerUser, } = props;
    
      return (
        <Component type="FrooxEngine.Undo.UndoListRoot" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="OwnerUser" id={typeof OwnerUser === "object" && "id" in OwnerUser ? OwnerUser?.id : undefined} value={typeof OwnerUser === "object" && "value" in OwnerUser ? OwnerUser?.value : OwnerUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
        </Component>
      );
    };
    