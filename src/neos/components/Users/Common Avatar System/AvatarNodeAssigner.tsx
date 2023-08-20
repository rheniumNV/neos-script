import { member, Member, Component } from "../../../core";
    
    export interface AvatarNodeAssignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Node?: member<any>;
Targets?: member<any>;
    }
    
    export function AvatarNodeAssigner(props: AvatarNodeAssignerInput){
      const { id, persistentId, updateOrder, Enabled,
Node,
Targets, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarNodeAssigner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BodyNode]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: NONE */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.SyncRef\`1[FrooxEngine.Slot]]`} name="Targets" id={typeof Targets === "object" && "id" in Targets ? Targets?.id : undefined} value={typeof Targets === "object" && "value" in Targets ? Targets?.value : Targets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.SyncRef`1[FrooxEngine.Slot]] */  isRaw={typeof Targets === "object" && "isRaw" in Targets && Targets.isRaw ? true : undefined} />
        </Component>
      );
    };
    