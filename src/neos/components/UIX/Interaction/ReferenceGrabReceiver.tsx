import { member, Member, Component } from "../../../core";
    
    export interface ReferenceGrabReceiverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetReference?: member<any>;
    }
    
    export function ReferenceGrabReceiver(props: ReferenceGrabReceiverInput){
      const { id, persistentId, updateOrder, Enabled,
TargetReference, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ReferenceGrabReceiver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ISyncRef]`} name="TargetReference" id={typeof TargetReference === "object" && "id" in TargetReference ? TargetReference?.id : undefined} value={typeof TargetReference === "object" && "value" in TargetReference ? TargetReference?.value : TargetReference} /* default: ID0 */  isRaw={typeof TargetReference === "object" && "isRaw" in TargetReference && TargetReference.isRaw ? true : undefined} />
        </Component>
      );
    };
    