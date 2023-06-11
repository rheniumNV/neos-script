import { member, Member, Component } from "../../core";
    
    export interface DevModeControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DevModeEnabled?: member<boolean>;
    }
    
    export function DevModeController(props: DevModeControllerInput){
      const { id, persistentId, updateOrder, Enabled,
DevModeEnabled, } = props;
    
      return (
        <Component type="FrooxEngine.DevModeController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DevModeEnabled" id={typeof DevModeEnabled === "object" && "id" in DevModeEnabled ? DevModeEnabled?.id : undefined} value={typeof DevModeEnabled === "object" && "value" in DevModeEnabled ? DevModeEnabled?.value : DevModeEnabled} /* default: false */  isRaw={typeof DevModeEnabled === "object" && "isRaw" in DevModeEnabled && DevModeEnabled.isRaw ? true : undefined} />
        </Component>
      );
    };
    