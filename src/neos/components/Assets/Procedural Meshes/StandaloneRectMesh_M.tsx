import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface StandaloneRectMesh_MInput {
        type:{M: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function StandaloneRectMesh_M(props: StandaloneRectMesh_MInput){
      const {type:{M:{name: M},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.StandaloneRectMesh\`1[${[M,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    