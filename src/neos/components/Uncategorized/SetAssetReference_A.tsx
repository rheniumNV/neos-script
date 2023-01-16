import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SetAssetReference_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function SetAssetReference_A(props: SetAssetReference_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.Undo.SetAssetReference\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    