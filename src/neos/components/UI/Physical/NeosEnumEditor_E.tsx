import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NeosEnumEditor_EInput {
        type:{E: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function NeosEnumEditor_E(props: NeosEnumEditor_EInput){
      const {type:{E:{name: E},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.NeosEnumEditor\`1[${[E,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    