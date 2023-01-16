import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ReleaseOnBinaryAction" id={typeof ReleaseOnBinaryAction === "object" && "id" in ReleaseOnBinaryAction ? ReleaseOnBinaryAction?.id : undefined} value={typeof ReleaseOnBinaryAction === "object" && "value" in ReleaseOnBinaryAction ? ReleaseOnBinaryAction?.value : ReleaseOnBinaryAction} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="ReleaseStrengthThreshold" id={typeof ReleaseStrengthThreshold === "object" && "id" in ReleaseStrengthThreshold ? ReleaseStrengthThreshold?.id : undefined} value={typeof ReleaseStrengthThreshold === "object" && "value" in ReleaseStrengthThreshold ? ReleaseStrengthThreshold?.value : ReleaseStrengthThreshold} /* default: <i>null</i> */  />
        </Component>
      );
    };
    