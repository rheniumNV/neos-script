import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarDestroyOnDequipInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DestroyRoot?: member<any>;
    }
    
    export function AvatarDestroyOnDequip(props: AvatarDestroyOnDequipInput){
      const { id, persistentId, updateOrder, Enabled,
DestroyRoot, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarDestroyOnDequip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="DestroyRoot" id={typeof DestroyRoot === "object" && "id" in DestroyRoot ? DestroyRoot?.id : undefined} value={typeof DestroyRoot === "object" && "value" in DestroyRoot ? DestroyRoot?.value : DestroyRoot} /* default: ID0 */  />
        </Component>
      );
    };
    