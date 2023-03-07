import { member, Member, Component } from "../../core";
    
    export interface HostAccessDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HostKey?: member<any>;
_hostText?: member<any>;
_reasonText?: member<any>;
_allowButton?: member<any>;
    }
    
    export function HostAccessDialog(props: HostAccessDialogInput){
      const { id, persistentId, updateOrder, Enabled,
HostKey,
_hostText,
_reasonText,
_allowButton, } = props;
    
      return (
        <Component type="FrooxEngine.HostAccessDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="HostKey" id={typeof HostKey === "object" && "id" in HostKey ? HostKey?.id : undefined} value={typeof HostKey === "object" && "value" in HostKey ? HostKey?.value : HostKey} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_hostText" id={typeof _hostText === "object" && "id" in _hostText ? _hostText?.id : undefined} value={typeof _hostText === "object" && "value" in _hostText ? _hostText?.value : _hostText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_reasonText" id={typeof _reasonText === "object" && "id" in _reasonText ? _reasonText?.id : undefined} value={typeof _reasonText === "object" && "value" in _reasonText ? _reasonText?.value : _reasonText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_allowButton" id={typeof _allowButton === "object" && "id" in _allowButton ? _allowButton?.id : undefined} value={typeof _allowButton === "object" && "value" in _allowButton ? _allowButton?.value : _allowButton} /* default: ID0 */  />
        </Component>
      );
    };
    