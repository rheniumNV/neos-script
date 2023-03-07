import { member, Member, Component } from "../../core";
    
    export interface UserPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AllowEnableEditMode?: member<boolean>;
AllowRespawn?: member<boolean>;
AllowSilence?: member<boolean>;
AllowKick?: member<boolean>;
AllowBan?: member<boolean>;
AllowAssignRoles?: member<boolean>;
AllowSeeOtherRoles?: member<boolean>;
    }
    
    export function UserPermissions(props: UserPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
AllowEnableEditMode,
AllowRespawn,
AllowSilence,
AllowKick,
AllowBan,
AllowAssignRoles,
AllowSeeOtherRoles, } = props;
    
      return (
        <Component type="FrooxEngine.UserPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder} version={3}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowEnableEditMode" id={typeof AllowEnableEditMode === "object" && "id" in AllowEnableEditMode ? AllowEnableEditMode?.id : undefined} value={typeof AllowEnableEditMode === "object" && "value" in AllowEnableEditMode ? AllowEnableEditMode?.value : AllowEnableEditMode} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowRespawn" id={typeof AllowRespawn === "object" && "id" in AllowRespawn ? AllowRespawn?.id : undefined} value={typeof AllowRespawn === "object" && "value" in AllowRespawn ? AllowRespawn?.value : AllowRespawn} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSilence" id={typeof AllowSilence === "object" && "id" in AllowSilence ? AllowSilence?.id : undefined} value={typeof AllowSilence === "object" && "value" in AllowSilence ? AllowSilence?.value : AllowSilence} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowKick" id={typeof AllowKick === "object" && "id" in AllowKick ? AllowKick?.id : undefined} value={typeof AllowKick === "object" && "value" in AllowKick ? AllowKick?.value : AllowKick} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowBan" id={typeof AllowBan === "object" && "id" in AllowBan ? AllowBan?.id : undefined} value={typeof AllowBan === "object" && "value" in AllowBan ? AllowBan?.value : AllowBan} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowAssignRoles" id={typeof AllowAssignRoles === "object" && "id" in AllowAssignRoles ? AllowAssignRoles?.id : undefined} value={typeof AllowAssignRoles === "object" && "value" in AllowAssignRoles ? AllowAssignRoles?.value : AllowAssignRoles} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSeeOtherRoles" id={typeof AllowSeeOtherRoles === "object" && "id" in AllowSeeOtherRoles ? AllowSeeOtherRoles?.id : undefined} value={typeof AllowSeeOtherRoles === "object" && "value" in AllowSeeOtherRoles ? AllowSeeOtherRoles?.value : AllowSeeOtherRoles} /* default: false */  />
        </Component>
      );
    };
    