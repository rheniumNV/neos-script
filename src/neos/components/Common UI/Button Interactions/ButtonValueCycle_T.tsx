import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonValueCycle_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function ButtonValueCycle_T(props: ButtonValueCycle_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonValueCycle\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    