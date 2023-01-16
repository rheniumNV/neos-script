import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AssetLoader_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function AssetLoader_A(props: AssetLoader_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.AssetLoader\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    