import { member, Member, Component } from "../../../core";
    
    export interface AvatarToolAnchorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AnchorPoint?: member<any>;
    }
    
    export function AvatarToolAnchor(props: AvatarToolAnchorInput){
      const { id, persistentId, updateOrder, Enabled,
AnchorPoint, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarToolAnchor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.AvatarToolAnchor+Point]`} name="AnchorPoint" id={typeof AnchorPoint === "object" && "id" in AnchorPoint ? AnchorPoint?.id : undefined} value={typeof AnchorPoint === "object" && "value" in AnchorPoint ? AnchorPoint?.value : AnchorPoint} /* default: Tooltip */  />
        </Component>
      );
    };
    