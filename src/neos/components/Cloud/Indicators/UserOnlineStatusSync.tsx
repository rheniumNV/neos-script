import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UserOnlineStatusSyncInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OnlineStatus?: member<any>;
    }
    
    export function UserOnlineStatusSync(props: UserOnlineStatusSyncInput){
      const { id, persistentId, updateOrder, Enabled,
OnlineStatus, } = props;
    
      return (
        <Component type="FrooxEngine.UserOnlineStatusSync" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.OnlineStatus]`} name="OnlineStatus" id={typeof OnlineStatus === "object" && "id" in OnlineStatus ? OnlineStatus?.id : undefined} value={typeof OnlineStatus === "object" && "value" in OnlineStatus ? OnlineStatus?.value : OnlineStatus} /* default: Offline */  />
        </Component>
      );
    };
    