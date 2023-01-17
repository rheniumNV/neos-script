import { member, Member, Component } from "../../../../core";
    
    export interface AvatarAnchorDestroyOnReleaseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DestroyRoot?: member<any>;
    }
    
    export function AvatarAnchorDestroyOnRelease(props: AvatarAnchorDestroyOnReleaseInput){
      const { id, persistentId, updateOrder, Enabled,
DestroyRoot, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarAnchorDestroyOnRelease" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="DestroyRoot" id={typeof DestroyRoot === "object" && "id" in DestroyRoot ? DestroyRoot?.id : undefined} value={typeof DestroyRoot === "object" && "value" in DestroyRoot ? DestroyRoot?.value : DestroyRoot} /* default: ID0 */  />
        </Component>
      );
    };
    