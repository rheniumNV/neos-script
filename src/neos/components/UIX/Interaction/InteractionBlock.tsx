import { member, Member, Component } from "../../../core";
    
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TouchExitLock" id={typeof TouchExitLock === "object" && "id" in TouchExitLock ? TouchExitLock?.id : undefined} value={typeof TouchExitLock === "object" && "value" in TouchExitLock ? TouchExitLock?.value : TouchExitLock} /* default: false */  isRaw={typeof TouchExitLock === "object" && "isRaw" in TouchExitLock && TouchExitLock.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TouchEnterLock" id={typeof TouchEnterLock === "object" && "id" in TouchEnterLock ? TouchEnterLock?.id : undefined} value={typeof TouchEnterLock === "object" && "value" in TouchEnterLock ? TouchEnterLock?.value : TouchEnterLock} /* default: false */  isRaw={typeof TouchEnterLock === "object" && "isRaw" in TouchEnterLock && TouchEnterLock.isRaw ? true : undefined} />
        </Component>
      );
    };
    