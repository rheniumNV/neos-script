import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarUserReferenceAssignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AssignMode?: member<any>;
    }
    
    export function AvatarUserReferenceAssigner(props: AvatarUserReferenceAssignerInput){
      const { id, persistentId, updateOrder, Enabled,
AssignMode, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarUserReferenceAssigner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.AvatarUserReferenceAssigner+Mode]`} name="AssignMode" id={typeof AssignMode === "object" && "id" in AssignMode ? AssignMode?.id : undefined} value={typeof AssignMode === "object" && "value" in AssignMode ? AssignMode?.value : AssignMode} /* default: Whitelist */  />
        </Component>
      );
    };
    