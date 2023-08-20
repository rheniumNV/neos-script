import { member, Member, Component } from "../../../core";
    
    export interface TextEditorEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<any>;
EditingStarted?: member<any>;
EditingChanged?: member<any>;
EditingFinished?: member<any>;
SubmitPressed?: member<any>;
    }
    
    export function TextEditorEvents(props: TextEditorEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
EditingStarted,
EditingChanged,
EditingFinished,
SubmitPressed, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.TextEditorEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.TextEditor]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="EditingStarted" id={typeof EditingStarted === "object" && "id" in EditingStarted ? EditingStarted?.id : undefined} value={typeof EditingStarted === "object" && "value" in EditingStarted ? EditingStarted?.value : EditingStarted} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof EditingStarted === "object" && "isRaw" in EditingStarted && EditingStarted.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="EditingChanged" id={typeof EditingChanged === "object" && "id" in EditingChanged ? EditingChanged?.id : undefined} value={typeof EditingChanged === "object" && "value" in EditingChanged ? EditingChanged?.value : EditingChanged} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof EditingChanged === "object" && "isRaw" in EditingChanged && EditingChanged.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="EditingFinished" id={typeof EditingFinished === "object" && "id" in EditingFinished ? EditingFinished?.id : undefined} value={typeof EditingFinished === "object" && "value" in EditingFinished ? EditingFinished?.value : EditingFinished} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof EditingFinished === "object" && "isRaw" in EditingFinished && EditingFinished.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="SubmitPressed" id={typeof SubmitPressed === "object" && "id" in SubmitPressed ? SubmitPressed?.id : undefined} value={typeof SubmitPressed === "object" && "value" in SubmitPressed ? SubmitPressed?.value : SubmitPressed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof SubmitPressed === "object" && "isRaw" in SubmitPressed && SubmitPressed.isRaw ? true : undefined} />
        </Component>
      );
    };
    