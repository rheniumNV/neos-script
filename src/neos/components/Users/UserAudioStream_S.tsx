import { member, Member, Component } from "../../core";
    
    export interface UserAudioStream_SInput {
        type:{S: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function UserAudioStream_S(props: UserAudioStream_SInput){
      const {type:{S:{name: S},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.UserAudioStream\`1[${[S,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    