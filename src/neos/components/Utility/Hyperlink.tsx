import { member, Member, Component } from "../../core";
    
    export interface HyperlinkInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
OpenOnce?: member<boolean>;
Reason?: member<any>;
    }
    
    export function Hyperlink(props: HyperlinkInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
OpenOnce,
Reason, } = props;
    
      return (
        <Component type="FrooxEngine.Hyperlink" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  isRaw={typeof URL === "object" && "isRaw" in URL && URL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OpenOnce" id={typeof OpenOnce === "object" && "id" in OpenOnce ? OpenOnce?.id : undefined} value={typeof OpenOnce === "object" && "value" in OpenOnce ? OpenOnce?.value : OpenOnce} /* default: false */  isRaw={typeof OpenOnce === "object" && "isRaw" in OpenOnce && OpenOnce.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Reason" id={typeof Reason === "object" && "id" in Reason ? Reason?.id : undefined} value={typeof Reason === "object" && "value" in Reason ? Reason?.value : Reason} /* default: <i>null</i> */  isRaw={typeof Reason === "object" && "isRaw" in Reason && Reason.isRaw ? true : undefined} />
        </Component>
      );
    };
    