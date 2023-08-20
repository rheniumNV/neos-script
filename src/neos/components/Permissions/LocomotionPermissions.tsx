import { member, Member, Component } from "../../core";
    
    export interface LocomotionPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LocomotionListMode?: member<any>;
Locomotions?: member<any>;
Scaling?: member<any>;
MinScale?: member<number>;
MaxScale?: member<number>;
JumpToUser?: member<any>;
    }
    
    export function LocomotionPermissions(props: LocomotionPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
LocomotionListMode,
Locomotions,
Scaling,
MinScale,
MaxScale,
JumpToUser, } = props;
    
      return (
        <Component type="FrooxEngine.LocomotionPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ListFilterMode]`} name="LocomotionListMode" id={typeof LocomotionListMode === "object" && "id" in LocomotionListMode ? LocomotionListMode?.id : undefined} value={typeof LocomotionListMode === "object" && "value" in LocomotionListMode ? LocomotionListMode?.value : LocomotionListMode} /* default: Whitelist */  isRaw={typeof LocomotionListMode === "object" && "isRaw" in LocomotionListMode && LocomotionListMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LocomotionPermissions+LocomotionFilter]`} name="Locomotions" id={typeof Locomotions === "object" && "id" in Locomotions ? Locomotions?.id : undefined} value={typeof Locomotions === "object" && "value" in Locomotions ? Locomotions?.value : Locomotions} /* default: FrooxEngine.SyncList`1[FrooxEngine.LocomotionPermissions+LocomotionFilter] */  isRaw={typeof Locomotions === "object" && "isRaw" in Locomotions && Locomotions.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PermissionState]`} name="Scaling" id={typeof Scaling === "object" && "id" in Scaling ? Scaling?.id : undefined} value={typeof Scaling === "object" && "value" in Scaling ? Scaling?.value : Scaling} /* default: Allow */  isRaw={typeof Scaling === "object" && "isRaw" in Scaling && Scaling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinScale" id={typeof MinScale === "object" && "id" in MinScale ? MinScale?.id : undefined} value={typeof MinScale === "object" && "value" in MinScale ? MinScale?.value : MinScale} /* default: 0 */  isRaw={typeof MinScale === "object" && "isRaw" in MinScale && MinScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxScale" id={typeof MaxScale === "object" && "id" in MaxScale ? MaxScale?.id : undefined} value={typeof MaxScale === "object" && "value" in MaxScale ? MaxScale?.value : MaxScale} /* default: 0 */  isRaw={typeof MaxScale === "object" && "isRaw" in MaxScale && MaxScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PermissionState]`} name="JumpToUser" id={typeof JumpToUser === "object" && "id" in JumpToUser ? JumpToUser?.id : undefined} value={typeof JumpToUser === "object" && "value" in JumpToUser ? JumpToUser?.value : JumpToUser} /* default: Allow */  isRaw={typeof JumpToUser === "object" && "isRaw" in JumpToUser && JumpToUser.isRaw ? true : undefined} />
        </Component>
      );
    };
    