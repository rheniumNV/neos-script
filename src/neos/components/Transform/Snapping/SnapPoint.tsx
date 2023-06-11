import { member, Member, Component } from "../../../core";
    
    export interface SnapPointInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SnapParent?: member<any>;
    }
    
    export function SnapPoint(props: SnapPointInput){
      const { id, persistentId, updateOrder, Enabled,
SnapParent, } = props;
    
      return (
        <Component type="FrooxEngine.SnapPoint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SnapParent" id={typeof SnapParent === "object" && "id" in SnapParent ? SnapParent?.id : undefined} value={typeof SnapParent === "object" && "value" in SnapParent ? SnapParent?.value : SnapParent} /* default: ID0 */  isRaw={typeof SnapParent === "object" && "isRaw" in SnapParent && SnapParent.isRaw ? true : undefined} />
        </Component>
      );
    };
    