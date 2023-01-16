import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarParentNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Node?: member<any>;
DestroyOnDequip?: member<boolean>;
Scale?: member<[number, number, number]>;
EquipOrderPriority?: member<number>;
_originalParent?: member<any>;
    }
    
    export function AvatarParentNode(props: AvatarParentNodeInput){
      const { id, persistentId, updateOrder, Enabled,
Node,
DestroyOnDequip,
Scale,
EquipOrderPriority,
_originalParent, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarParentNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BodyNode]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: NONE */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DestroyOnDequip" id={typeof DestroyOnDequip === "object" && "id" in DestroyOnDequip ? DestroyOnDequip?.id : undefined} value={typeof DestroyOnDequip === "object" && "value" in DestroyOnDequip ? DestroyOnDequip?.value : DestroyOnDequip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="EquipOrderPriority" id={typeof EquipOrderPriority === "object" && "id" in EquipOrderPriority ? EquipOrderPriority?.id : undefined} value={typeof EquipOrderPriority === "object" && "value" in EquipOrderPriority ? EquipOrderPriority?.value : EquipOrderPriority} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_originalParent" id={typeof _originalParent === "object" && "id" in _originalParent ? _originalParent?.id : undefined} value={typeof _originalParent === "object" && "value" in _originalParent ? _originalParent?.value : _originalParent} /* default: ID0 */  />
        </Component>
      );
    };
    