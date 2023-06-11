import { member, Member, Component } from "../../../core";
    
    export interface AvatarUserReferenceAssignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AssignMode?: member<any>;
References?: member<any>;
    }
    
    export function AvatarUserReferenceAssigner(props: AvatarUserReferenceAssignerInput){
      const { id, persistentId, updateOrder, Enabled,
AssignMode,
References, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarUserReferenceAssigner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.AvatarUserReferenceAssigner+Mode]`} name="AssignMode" id={typeof AssignMode === "object" && "id" in AssignMode ? AssignMode?.id : undefined} value={typeof AssignMode === "object" && "value" in AssignMode ? AssignMode?.value : AssignMode} /* default: Whitelist */  isRaw={typeof AssignMode === "object" && "isRaw" in AssignMode && AssignMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.SyncRef\`1[FrooxEngine.User]]`} name="References" id={typeof References === "object" && "id" in References ? References?.id : undefined} value={typeof References === "object" && "value" in References ? References?.value : References} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.SyncRef`1[FrooxEngine.User]] */  isRaw={typeof References === "object" && "isRaw" in References && References.isRaw ? true : undefined} />
        </Component>
      );
    };
    