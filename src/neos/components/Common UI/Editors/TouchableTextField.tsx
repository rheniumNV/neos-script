import { member, Member, Component } from "../../../core";
    
    export interface TouchableTextFieldInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TextEditor?: member<any>;
AcceptOutOfSightTouch?: member<boolean>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
EditModeOnly?: member<boolean>;
ActiveUserRootOnly?: member<boolean>;
    }
    
    export function TouchableTextField(props: TouchableTextFieldInput){
      const { id, persistentId, updateOrder, Enabled,
TextEditor,
AcceptOutOfSightTouch,
AcceptPhysicalTouch,
AcceptRemoteTouch,
EditModeOnly,
ActiveUserRootOnly, } = props;
    
      return (
        <Component type="FrooxEngine.TouchableTextField" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextEditor]`} name="TextEditor" id={typeof TextEditor === "object" && "id" in TextEditor ? TextEditor?.id : undefined} value={typeof TextEditor === "object" && "value" in TextEditor ? TextEditor?.value : TextEditor} /* default: ID0 */  isRaw={typeof TextEditor === "object" && "isRaw" in TextEditor && TextEditor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  isRaw={typeof AcceptOutOfSightTouch === "object" && "isRaw" in AcceptOutOfSightTouch && AcceptOutOfSightTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  isRaw={typeof EditModeOnly === "object" && "isRaw" in EditModeOnly && EditModeOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ActiveUserRootOnly" id={typeof ActiveUserRootOnly === "object" && "id" in ActiveUserRootOnly ? ActiveUserRootOnly?.id : undefined} value={typeof ActiveUserRootOnly === "object" && "value" in ActiveUserRootOnly ? ActiveUserRootOnly?.value : ActiveUserRootOnly} /* default: false */  isRaw={typeof ActiveUserRootOnly === "object" && "isRaw" in ActiveUserRootOnly && ActiveUserRootOnly.isRaw ? true : undefined} />
        </Component>
      );
    };
    