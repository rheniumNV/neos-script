import { member, Member, Component } from "../../../core";
    
    export interface GrabInstancerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Template?: member<any>;
ActivateRoot?: member<boolean>;
EnableGrabbable?: member<boolean>;
Physical?: member<boolean>;
GrabPriority?: member<number>;
    }
    
    export function GrabInstancer(props: GrabInstancerInput){
      const { id, persistentId, updateOrder, Enabled,
Template,
ActivateRoot,
EnableGrabbable,
Physical,
GrabPriority, } = props;
    
      return (
        <Component type="FrooxEngine.GrabInstancer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Template" id={typeof Template === "object" && "id" in Template ? Template?.id : undefined} value={typeof Template === "object" && "value" in Template ? Template?.value : Template} /* default: ID0 */  isRaw={typeof Template === "object" && "isRaw" in Template && Template.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ActivateRoot" id={typeof ActivateRoot === "object" && "id" in ActivateRoot ? ActivateRoot?.id : undefined} value={typeof ActivateRoot === "object" && "value" in ActivateRoot ? ActivateRoot?.value : ActivateRoot} /* default: false */  isRaw={typeof ActivateRoot === "object" && "isRaw" in ActivateRoot && ActivateRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EnableGrabbable" id={typeof EnableGrabbable === "object" && "id" in EnableGrabbable ? EnableGrabbable?.id : undefined} value={typeof EnableGrabbable === "object" && "value" in EnableGrabbable ? EnableGrabbable?.value : EnableGrabbable} /* default: false */  isRaw={typeof EnableGrabbable === "object" && "isRaw" in EnableGrabbable && EnableGrabbable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Physical" id={typeof Physical === "object" && "id" in Physical ? Physical?.id : undefined} value={typeof Physical === "object" && "value" in Physical ? Physical?.value : Physical} /* default: false */  isRaw={typeof Physical === "object" && "isRaw" in Physical && Physical.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="GrabPriority" id={typeof GrabPriority === "object" && "id" in GrabPriority ? GrabPriority?.id : undefined} value={typeof GrabPriority === "object" && "value" in GrabPriority ? GrabPriority?.value : GrabPriority} /* default: 0 */  isRaw={typeof GrabPriority === "object" && "isRaw" in GrabPriority && GrabPriority.isRaw ? true : undefined} />
        </Component>
      );
    };
    