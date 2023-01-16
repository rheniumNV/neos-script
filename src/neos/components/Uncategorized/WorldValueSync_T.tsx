import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface WorldValueSync_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LocalValue?: member<any>;
    }
    
    export function WorldValueSync_T(props: WorldValueSync_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
LocalValue, } = props;
    
      return (
        <Component type={`FrooxEngine.WorldValueSync\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="LocalValue" id={typeof LocalValue === "object" && "id" in LocalValue ? LocalValue?.id : undefined} value={typeof LocalValue === "object" && "value" in LocalValue ? LocalValue?.value : LocalValue} /* default: null */  />
        </Component>
      );
    };
    