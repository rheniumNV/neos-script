import { member, Member, Component } from "../../core";
    
    export interface AvatarLogixTransferWizardInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LogixRoot?: member<any>;
NewAvatar?: member<any>;
    }
    
    export function AvatarLogixTransferWizard(props: AvatarLogixTransferWizardInput){
      const { id, persistentId, updateOrder, Enabled,
LogixRoot,
NewAvatar, } = props;
    
      return (
        <Component type="FrooxEngine.AvatarLogixTransferWizard" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="LogixRoot" id={typeof LogixRoot === "object" && "id" in LogixRoot ? LogixRoot?.id : undefined} value={typeof LogixRoot === "object" && "value" in LogixRoot ? LogixRoot?.value : LogixRoot} /* default: ID0 */  isRaw={typeof LogixRoot === "object" && "isRaw" in LogixRoot && LogixRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="NewAvatar" id={typeof NewAvatar === "object" && "id" in NewAvatar ? NewAvatar?.id : undefined} value={typeof NewAvatar === "object" && "value" in NewAvatar ? NewAvatar?.value : NewAvatar} /* default: ID0 */  isRaw={typeof NewAvatar === "object" && "isRaw" in NewAvatar && NewAvatar.isRaw ? true : undefined} />
        </Component>
      );
    };
    