import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GetAsset_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function GetAsset_A(props: GetAsset_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Assets.GetAsset\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    