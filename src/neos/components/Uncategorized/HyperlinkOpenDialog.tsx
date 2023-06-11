import { member, Member, Component } from "../../core";
    
    export interface HyperlinkOpenDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
_hyperlinkText?: member<any>;
_reasonText?: member<any>;
_openButton?: member<any>;
    }
    
    export function HyperlinkOpenDialog(props: HyperlinkOpenDialogInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
_hyperlinkText,
_reasonText,
_openButton, } = props;
    
      return (
        <Component type="FrooxEngine.HyperlinkOpenDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  isRaw={typeof URL === "object" && "isRaw" in URL && URL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_hyperlinkText" id={typeof _hyperlinkText === "object" && "id" in _hyperlinkText ? _hyperlinkText?.id : undefined} value={typeof _hyperlinkText === "object" && "value" in _hyperlinkText ? _hyperlinkText?.value : _hyperlinkText} /* default: ID0 */  isRaw={typeof _hyperlinkText === "object" && "isRaw" in _hyperlinkText && _hyperlinkText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_reasonText" id={typeof _reasonText === "object" && "id" in _reasonText ? _reasonText?.id : undefined} value={typeof _reasonText === "object" && "value" in _reasonText ? _reasonText?.value : _reasonText} /* default: ID0 */  isRaw={typeof _reasonText === "object" && "isRaw" in _reasonText && _reasonText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_openButton" id={typeof _openButton === "object" && "id" in _openButton ? _openButton?.id : undefined} value={typeof _openButton === "object" && "value" in _openButton ? _openButton?.value : _openButton} /* default: ID0 */  isRaw={typeof _openButton === "object" && "isRaw" in _openButton && _openButton.isRaw ? true : undefined} />
        </Component>
      );
    };
    