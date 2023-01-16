import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TouchEventRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Touched?: member<any>;
AcceptOutOfSightTouch?: member<boolean>;
    }
    
    export function TouchEventRelay(props: TouchEventRelayInput){
      const { id, persistentId, updateOrder, Enabled,
Touched,
AcceptOutOfSightTouch, } = props;
    
      return (
        <Component type="FrooxEngine.TouchEventRelay" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.TouchEvent]`} name="Touched" id={typeof Touched === "object" && "id" in Touched ? Touched?.id : undefined} value={typeof Touched === "object" && "value" in Touched ? Touched?.value : Touched} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  />
        </Component>
      );
    };
    