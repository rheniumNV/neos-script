import { member, Member, Component } from "../../../core";
    
    export interface ButtonDelegateRelay_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function ButtonDelegateRelay_T(props: ButtonDelegateRelay_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.UIX.ButtonDelegateRelay\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    