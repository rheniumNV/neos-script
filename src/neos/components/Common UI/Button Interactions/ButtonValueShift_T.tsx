import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonValueShift_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function ButtonValueShift_T(props: ButtonValueShift_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonValueShift\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    