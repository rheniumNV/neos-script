import { member, Member, Component } from "../../../core";
    
    export interface AudioStreamMetadata_SInput {
        type:{S: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        
    }
    
    export function AudioStreamMetadata_S(props: AudioStreamMetadata_SInput){
      const {type:{S:{name: S},}, id, persistentId, updateOrder,  } = props;
    
      return (
        <Component type={`FrooxEngine.AudioStreamMetadata\`1[${[S,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        
        </Component>
      );
    };
    