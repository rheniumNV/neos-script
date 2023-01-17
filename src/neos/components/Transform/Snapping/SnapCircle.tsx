import { member, Member, Component } from "../../../core";
    
    export interface SnapCircleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
Normal?: member<[number, number, number]>;
SnapParent?: member<any>;
    }
    
    export function SnapCircle(props: SnapCircleInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
Normal,
SnapParent, } = props;
    
      return (
        <Component type="FrooxEngine.SnapCircle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Normal" id={typeof Normal === "object" && "id" in Normal ? Normal?.id : undefined} value={typeof Normal === "object" && "value" in Normal ? Normal?.value : Normal} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SnapParent" id={typeof SnapParent === "object" && "id" in SnapParent ? SnapParent?.id : undefined} value={typeof SnapParent === "object" && "value" in SnapParent ? SnapParent?.value : SnapParent} /* default: ID0 */  />
        </Component>
      );
    };
    