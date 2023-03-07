import { member, Member, Component } from "../../core";
    
    export interface SnapNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SnapRadius?: member<number>;
_colliderRadius?: member<any>;
    }
    
    export function SnapNode(props: SnapNodeInput){
      const { id, persistentId, updateOrder, Enabled,
SnapRadius,
_colliderRadius, } = props;
    
      return (
        <Component type="FrooxEngine.SnapNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapRadius" id={typeof SnapRadius === "object" && "id" in SnapRadius ? SnapRadius?.id : undefined} value={typeof SnapRadius === "object" && "value" in SnapRadius ? SnapRadius?.value : SnapRadius} /* default: 0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_colliderRadius" id={typeof _colliderRadius === "object" && "id" in _colliderRadius ? _colliderRadius?.id : undefined} value={typeof _colliderRadius === "object" && "value" in _colliderRadius ? _colliderRadius?.value : _colliderRadius} /* default: ID0 */  />
        </Component>
      );
    };
    