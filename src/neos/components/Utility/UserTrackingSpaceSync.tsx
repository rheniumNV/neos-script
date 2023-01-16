import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UserTrackingSpaceSyncInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SeatedMode?: member<boolean>;
UserHeight?: member<number>;
    }
    
    export function UserTrackingSpaceSync(props: UserTrackingSpaceSyncInput){
      const { id, persistentId, updateOrder, Enabled,
SeatedMode,
UserHeight, } = props;
    
      return (
        <Component type="FrooxEngine.UserTrackingSpaceSync" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SeatedMode" id={typeof SeatedMode === "object" && "id" in SeatedMode ? SeatedMode?.id : undefined} value={typeof SeatedMode === "object" && "value" in SeatedMode ? SeatedMode?.value : SeatedMode} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UserHeight" id={typeof UserHeight === "object" && "id" in UserHeight ? UserHeight?.id : undefined} value={typeof UserHeight === "object" && "value" in UserHeight ? UserHeight?.value : UserHeight} /* default: 0 */  />
        </Component>
      );
    };
    