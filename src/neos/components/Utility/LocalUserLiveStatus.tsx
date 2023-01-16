import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LocalUserLiveStatusInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
IsLive?: member<any>;
    }
    
    export function LocalUserLiveStatus(props: LocalUserLiveStatusInput){
      const { id, persistentId, updateOrder, Enabled,
IsLive, } = props;
    
      return (
        <Component type="FrooxEngine.LocalUserLiveStatus" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsLive" id={typeof IsLive === "object" && "id" in IsLive ? IsLive?.id : undefined} value={typeof IsLive === "object" && "value" in IsLive ? IsLive?.value : IsLive} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
        </Component>
      );
    };
    