import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RectMesh_MInput {
        type:{M: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function RectMesh_M(props: RectMesh_MInput){
      const {type:{M:{name: M},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.UIX.RectMesh\`1[${[M,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    