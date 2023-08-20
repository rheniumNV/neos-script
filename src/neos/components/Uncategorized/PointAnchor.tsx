import { member, Member, Component } from "../../core";
    
    export interface PointAnchorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OwnerRoot?: member<any>;
SnapParent?: member<any>;
    }
    
    export function PointAnchor(props: PointAnchorInput){
      const { id, persistentId, updateOrder, Enabled,
OwnerRoot,
SnapParent, } = props;
    
      return (
        <Component type="FrooxEngine.PointAnchor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OwnerRoot" id={typeof OwnerRoot === "object" && "id" in OwnerRoot ? OwnerRoot?.id : undefined} value={typeof OwnerRoot === "object" && "value" in OwnerRoot ? OwnerRoot?.value : OwnerRoot} /* default: ID0 */  isRaw={typeof OwnerRoot === "object" && "isRaw" in OwnerRoot && OwnerRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SnapParent" id={typeof SnapParent === "object" && "id" in SnapParent ? SnapParent?.id : undefined} value={typeof SnapParent === "object" && "value" in SnapParent ? SnapParent?.value : SnapParent} /* default: ID0 */  isRaw={typeof SnapParent === "object" && "isRaw" in SnapParent && SnapParent.isRaw ? true : undefined} />
        </Component>
      );
    };
    