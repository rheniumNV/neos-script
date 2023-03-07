import { member, Member, Component } from "../../../core";
    
    export interface AvatarDebugHandInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_objects?: member<any>;
_materialTarget?: member<any>;
_material?: member<any>;
    }
    
    export function AvatarDebugHand(props: AvatarDebugHandInput){
      const { id, persistentId, updateOrder, Enabled,
_objects,
_materialTarget,
_material, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarDebugHand" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="_objects" id={typeof _objects === "object" && "id" in _objects ? _objects?.id : undefined} value={typeof _objects === "object" && "value" in _objects ? _objects?.value : _objects} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.HierarchyMaterialTarget]`} name="_materialTarget" id={typeof _materialTarget === "object" && "id" in _materialTarget ? _materialTarget?.id : undefined} value={typeof _materialTarget === "object" && "value" in _materialTarget ? _materialTarget?.value : _materialTarget} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_Metallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  />
        </Component>
      );
    };
    