import { member, Member, Component } from "../../../core";
    
    export interface AvatarHapticSourceManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HapticVolumeActiveStates?: member<any>;
    }
    
    export function AvatarHapticSourceManager(props: AvatarHapticSourceManagerInput){
      const { id, persistentId, updateOrder, Enabled,
HapticVolumeActiveStates, } = props;
    
      return (
        <Component type="FrooxEngine.AvatarHapticSourceManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.Boolean]]`} name="HapticVolumeActiveStates" id={typeof HapticVolumeActiveStates === "object" && "id" in HapticVolumeActiveStates ? HapticVolumeActiveStates?.id : undefined} value={typeof HapticVolumeActiveStates === "object" && "value" in HapticVolumeActiveStates ? HapticVolumeActiveStates?.value : HapticVolumeActiveStates} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.Boolean]] */  isRaw={typeof HapticVolumeActiveStates === "object" && "isRaw" in HapticVolumeActiveStates && HapticVolumeActiveStates.isRaw ? true : undefined} />
        </Component>
      );
    };
    