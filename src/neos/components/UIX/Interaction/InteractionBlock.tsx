import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface InteractionBlockInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TouchExitLock?: member<boolean>;
TouchEnterLock?: member<boolean>;
    }
    
    export function InteractionBlock(props: InteractionBlockInput){
      const { id, persistentId, updateOrder, Enabled,
TouchExitLock,
TouchEnterLock, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.InteractionBlock" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TouchExitLock" id={typeof TouchExitLock === "object" && "id" in TouchExitLock ? TouchExitLock?.id : undefined} value={typeof TouchExitLock === "object" && "value" in TouchExitLock ? TouchExitLock?.value : TouchExitLock} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TouchEnterLock" id={typeof TouchEnterLock === "object" && "id" in TouchEnterLock ? TouchEnterLock?.id : undefined} value={typeof TouchEnterLock === "object" && "value" in TouchEnterLock ? TouchEnterLock?.value : TouchEnterLock} /* default: false */  />
        </Component>
      );
    };
    