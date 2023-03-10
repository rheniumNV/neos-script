import { member, Member, Component } from "../../../core";
    
    export interface ReferenceCast_I_OInput {
        type:{I: {name: string},
O: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function ReferenceCast_I_O(props: ReferenceCast_I_OInput){
      const {type:{I:{name: I},
O:{name: O},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.ReferenceCast\`2[${[I,
O,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    