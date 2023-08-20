import { member, Member, Component } from "../../../../core";
    
    export interface AvatarAnchorLocomotionReleaseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ReleaseOnBinaryAction?: member<boolean>;
ReleaseStrengthThreshold?: member<any>;
    }
    
    export function AvatarAnchorLocomotionRelease(props: AvatarAnchorLocomotionReleaseInput){
      const { id, persistentId, updateOrder, Enabled,
ReleaseOnBinaryAction,
ReleaseStrengthThreshold, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarAnchorLocomotionRelease" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ReleaseOnBinaryAction" id={typeof ReleaseOnBinaryAction === "object" && "id" in ReleaseOnBinaryAction ? ReleaseOnBinaryAction?.id : undefined} value={typeof ReleaseOnBinaryAction === "object" && "value" in ReleaseOnBinaryAction ? ReleaseOnBinaryAction?.value : ReleaseOnBinaryAction} /* default: false */  isRaw={typeof ReleaseOnBinaryAction === "object" && "isRaw" in ReleaseOnBinaryAction && ReleaseOnBinaryAction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="ReleaseStrengthThreshold" id={typeof ReleaseStrengthThreshold === "object" && "id" in ReleaseStrengthThreshold ? ReleaseStrengthThreshold?.id : undefined} value={typeof ReleaseStrengthThreshold === "object" && "value" in ReleaseStrengthThreshold ? ReleaseStrengthThreshold?.value : ReleaseStrengthThreshold} /* default: <i>null</i> */  isRaw={typeof ReleaseStrengthThreshold === "object" && "isRaw" in ReleaseStrengthThreshold && ReleaseStrengthThreshold.isRaw ? true : undefined} />
        </Component>
      );
    };
    