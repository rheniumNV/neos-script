import { member, Member, Component } from "../../../core";
    
    export interface TextFieldInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Editor?: member<any>;
__text?: member<any>;
EditingStarted?: member<any>;
EditingChanged?: member<any>;
EditingFinished?: member<any>;
    }
    
    export function TextField(props: TextFieldInput){
      const { id, persistentId, updateOrder, Enabled,
Editor,
__text,
EditingStarted,
EditingChanged,
EditingFinished, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.TextField" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextEditor]`} name="Editor" id={typeof Editor === "object" && "id" in Editor ? Editor?.id : undefined} value={typeof Editor === "object" && "value" in Editor ? Editor?.value : Editor} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="__text-ID" id={typeof __text === "object" && "id" in __text ? __text?.id : undefined} value={typeof __text === "object" && "value" in __text ? __text?.value : __text} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`} name="EditingStarted-ID" id={typeof EditingStarted === "object" && "id" in EditingStarted ? EditingStarted?.id : undefined} value={typeof EditingStarted === "object" && "value" in EditingStarted ? EditingStarted?.value : EditingStarted} /* default: FrooxEngine.WorldDelegate */ idOnly />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`} name="EditingChanged-ID" id={typeof EditingChanged === "object" && "id" in EditingChanged ? EditingChanged?.id : undefined} value={typeof EditingChanged === "object" && "value" in EditingChanged ? EditingChanged?.value : EditingChanged} /* default: FrooxEngine.WorldDelegate */ idOnly />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`} name="EditingFinished-ID" id={typeof EditingFinished === "object" && "id" in EditingFinished ? EditingFinished?.id : undefined} value={typeof EditingFinished === "object" && "value" in EditingFinished ? EditingFinished?.value : EditingFinished} /* default: FrooxEngine.WorldDelegate */ idOnly />
        </Component>
      );
    };
    