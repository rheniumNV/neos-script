import { member, Member, Component } from "../../../core";
    
    export interface SnapPlaneInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Normal?: member<[number, number, number]>;
SnapParent?: member<any>;
    }
    
    export function SnapPlane(props: SnapPlaneInput){
      const { id, persistentId, updateOrder, Enabled,
Normal,
SnapParent, } = props;
    
      return (
        <Component type="FrooxEngine.SnapPlane" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Normal" id={typeof Normal === "object" && "id" in Normal ? Normal?.id : undefined} value={typeof Normal === "object" && "value" in Normal ? Normal?.value : Normal} /* default: [0; 0; 0] */  isRaw={typeof Normal === "object" && "isRaw" in Normal && Normal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SnapParent" id={typeof SnapParent === "object" && "id" in SnapParent ? SnapParent?.id : undefined} value={typeof SnapParent === "object" && "value" in SnapParent ? SnapParent?.value : SnapParent} /* default: ID0 */  isRaw={typeof SnapParent === "object" && "isRaw" in SnapParent && SnapParent.isRaw ? true : undefined} />
        </Component>
      );
    };
    