import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface MultiTextureFader_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function MultiTextureFader_A(props: MultiTextureFader_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.MultiTextureFader\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    