import { member, Member, Component } from "../../../core";
    
    export interface AvatarUserMeshHiderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Method?: member<any>;
Exclude?: member<any>;
    }
    
    export function AvatarUserMeshHider(props: AvatarUserMeshHiderInput){
      const { id, persistentId, updateOrder, Enabled,
Method,
Exclude, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarUserMeshHider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.AvatarUserMeshHider+HideMethod]`} name="Method" id={typeof Method === "object" && "id" in Method ? Method?.id : undefined} value={typeof Method === "object" && "value" in Method ? Method?.value : Method} /* default: ShadowOnly */  isRaw={typeof Method === "object" && "isRaw" in Method && Method.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.MeshRenderer]`} name="Exclude" id={typeof Exclude === "object" && "id" in Exclude ? Exclude?.id : undefined} value={typeof Exclude === "object" && "value" in Exclude ? Exclude?.value : Exclude} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.MeshRenderer] */  isRaw={typeof Exclude === "object" && "isRaw" in Exclude && Exclude.isRaw ? true : undefined} />
        </Component>
      );
    };
    