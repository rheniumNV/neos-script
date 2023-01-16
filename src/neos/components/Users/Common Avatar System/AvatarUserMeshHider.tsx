import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarUserMeshHiderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Method?: member<any>;
    }
    
    export function AvatarUserMeshHider(props: AvatarUserMeshHiderInput){
      const { id, persistentId, updateOrder, Enabled,
Method, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarUserMeshHider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.AvatarUserMeshHider+HideMethod]`} name="Method" id={typeof Method === "object" && "id" in Method ? Method?.id : undefined} value={typeof Method === "object" && "value" in Method ? Method?.value : Method} /* default: ShadowOnly */  />
        </Component>
      );
    };
    