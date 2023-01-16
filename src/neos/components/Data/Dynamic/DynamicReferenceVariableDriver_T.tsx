import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DynamicReferenceVariableDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function DynamicReferenceVariableDriver_T(props: DynamicReferenceVariableDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicReferenceVariableDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    