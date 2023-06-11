import { member, Member, Component } from "../../../core";
    
    export interface SnapGridInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BoundsSize?: member<[number, number, number]>;
GridSize?: member<[number, number, number]>;
ColliderSize?: member<any>;
SnapParent?: member<any>;
    }
    
    export function SnapGrid(props: SnapGridInput){
      const { id, persistentId, updateOrder, Enabled,
BoundsSize,
GridSize,
ColliderSize,
SnapParent, } = props;
    
      return (
        <Component type="FrooxEngine.SnapGrid" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="BoundsSize" id={typeof BoundsSize === "object" && "id" in BoundsSize ? BoundsSize?.id : undefined} value={typeof BoundsSize === "object" && "value" in BoundsSize ? BoundsSize?.value : BoundsSize} /* default: [0; 0; 0] */  isRaw={typeof BoundsSize === "object" && "isRaw" in BoundsSize && BoundsSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="GridSize" id={typeof GridSize === "object" && "id" in GridSize ? GridSize?.id : undefined} value={typeof GridSize === "object" && "value" in GridSize ? GridSize?.value : GridSize} /* default: [0; 0; 0] */  isRaw={typeof GridSize === "object" && "isRaw" in GridSize && GridSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="ColliderSize" id={typeof ColliderSize === "object" && "id" in ColliderSize ? ColliderSize?.id : undefined} value={typeof ColliderSize === "object" && "value" in ColliderSize ? ColliderSize?.value : ColliderSize} /* default: ID0 */  isRaw={typeof ColliderSize === "object" && "isRaw" in ColliderSize && ColliderSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SnapParent" id={typeof SnapParent === "object" && "id" in SnapParent ? SnapParent?.id : undefined} value={typeof SnapParent === "object" && "value" in SnapParent ? SnapParent?.value : SnapParent} /* default: ID0 */  isRaw={typeof SnapParent === "object" && "isRaw" in SnapParent && SnapParent.isRaw ? true : undefined} />
        </Component>
      );
    };
    