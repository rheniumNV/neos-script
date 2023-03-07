import { member, Member, Component } from "../../../core";
    
    export interface TooltipAvatarPoseFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Filter?: member<any>;
Priority?: member<number>;
    }
    
    export function TooltipAvatarPoseFilter(props: TooltipAvatarPoseFilterInput){
      const { id, persistentId, updateOrder, Enabled,
Filter,
Priority, } = props;
    
      return (
        <Component type="FrooxEngine.TooltipAvatarPoseFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.IAvatarPoseFilter]`} name="Filter" id={typeof Filter === "object" && "id" in Filter ? Filter?.id : undefined} value={typeof Filter === "object" && "value" in Filter ? Filter?.value : Filter} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: 0 */  />
        </Component>
      );
    };
    