import { member, Member, Component } from "../../core";
    
    export interface StoppedPlayableCleanerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Playable?: member<any>;
GracePeriod?: member<number>;
CheckingUser?: member<any>;
    }
    
    export function StoppedPlayableCleaner(props: StoppedPlayableCleanerInput){
      const { id, persistentId, updateOrder, Enabled,
Playable,
GracePeriod,
CheckingUser, } = props;
    
      return (
        <Component type="FrooxEngine.StoppedPlayableCleaner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`} name="Playable" id={typeof Playable === "object" && "id" in Playable ? Playable?.id : undefined} value={typeof Playable === "object" && "value" in Playable ? Playable?.value : Playable} /* default: ID0 */  isRaw={typeof Playable === "object" && "isRaw" in Playable && Playable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GracePeriod" id={typeof GracePeriod === "object" && "id" in GracePeriod ? GracePeriod?.id : undefined} value={typeof GracePeriod === "object" && "value" in GracePeriod ? GracePeriod?.value : GracePeriod} /* default: 0 */  isRaw={typeof GracePeriod === "object" && "isRaw" in GracePeriod && GracePeriod.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="CheckingUser" id={typeof CheckingUser === "object" && "id" in CheckingUser ? CheckingUser?.id : undefined} value={typeof CheckingUser === "object" && "value" in CheckingUser ? CheckingUser?.value : CheckingUser} /* default: ID0 */  isRaw={typeof CheckingUser === "object" && "isRaw" in CheckingUser && CheckingUser.isRaw ? true : undefined} />
        </Component>
      );
    };
    