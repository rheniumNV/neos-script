import { member, Member, Component } from "../../../core";
    
    export interface SnapSphereInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
SnapParent?: member<any>;
    }
    
    export function SnapSphere(props: SnapSphereInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
SnapParent, } = props;
    
      return (
        <Component type="FrooxEngine.SnapSphere" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SnapParent" id={typeof SnapParent === "object" && "id" in SnapParent ? SnapParent?.id : undefined} value={typeof SnapParent === "object" && "value" in SnapParent ? SnapParent?.value : SnapParent} /* default: ID0 */  isRaw={typeof SnapParent === "object" && "isRaw" in SnapParent && SnapParent.isRaw ? true : undefined} />
        </Component>
      );
    };
    