import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ReferenceRadio_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function ReferenceRadio_T(props: ReferenceRadio_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.UIX.ReferenceRadio\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    