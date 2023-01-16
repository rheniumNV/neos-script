import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface QuantityTextFormatDriver_UInput {
        type:{U: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function QuantityTextFormatDriver_U(props: QuantityTextFormatDriver_UInput){
      const {type:{U:{name: U},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.QuantityTextFormatDriver\`1[${[U,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    