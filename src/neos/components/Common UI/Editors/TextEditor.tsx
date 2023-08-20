import { member, Member, Component } from "../../../core";
    
    export interface TextEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Text?: member<any>;
Undo?: member<boolean>;
UndoDescription?: member<any>;
FinishHandling?: member<any>;
AutoCaretColorField?: member<boolean>;
CaretColorField?: member<[number, number, number, number]>;
SelectionColorField?: member<[number, number, number, number]>;
EditingStarted?: member<any>;
EditingChanged?: member<any>;
EditingFinished?: member<any>;
SubmitPressed?: member<any>;
    }
    
    export function TextEditor(props: TextEditorInput){
      const { id, persistentId, updateOrder, Enabled,
Text,
Undo,
UndoDescription,
FinishHandling,
AutoCaretColorField,
CaretColorField,
SelectionColorField,
EditingStarted,
EditingChanged,
EditingFinished,
SubmitPressed, } = props;
    
      return (
        <Component type="FrooxEngine.TextEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IText]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: ID0 */  isRaw={typeof Text === "object" && "isRaw" in Text && Text.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Undo" id={typeof Undo === "object" && "id" in Undo ? Undo?.id : undefined} value={typeof Undo === "object" && "value" in Undo ? Undo?.value : Undo} /* default: false */  isRaw={typeof Undo === "object" && "isRaw" in Undo && Undo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="UndoDescription" id={typeof UndoDescription === "object" && "id" in UndoDescription ? UndoDescription?.id : undefined} value={typeof UndoDescription === "object" && "value" in UndoDescription ? UndoDescription?.value : UndoDescription} /* default: <i>null</i> */  isRaw={typeof UndoDescription === "object" && "isRaw" in UndoDescription && UndoDescription.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextEditor+FinishAction]`} name="FinishHandling" id={typeof FinishHandling === "object" && "id" in FinishHandling ? FinishHandling?.id : undefined} value={typeof FinishHandling === "object" && "value" in FinishHandling ? FinishHandling?.value : FinishHandling} /* default: LeaveAsIs */  isRaw={typeof FinishHandling === "object" && "isRaw" in FinishHandling && FinishHandling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoCaretColorField" id={typeof AutoCaretColorField === "object" && "id" in AutoCaretColorField ? AutoCaretColorField?.id : undefined} value={typeof AutoCaretColorField === "object" && "value" in AutoCaretColorField ? AutoCaretColorField?.value : AutoCaretColorField} /* default: false */  isRaw={typeof AutoCaretColorField === "object" && "isRaw" in AutoCaretColorField && AutoCaretColorField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="CaretColorField" id={typeof CaretColorField === "object" && "id" in CaretColorField ? CaretColorField?.id : undefined} value={typeof CaretColorField === "object" && "value" in CaretColorField ? CaretColorField?.value : CaretColorField} /* default: [0; 0; 0; 0] */  isRaw={typeof CaretColorField === "object" && "isRaw" in CaretColorField && CaretColorField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SelectionColorField" id={typeof SelectionColorField === "object" && "id" in SelectionColorField ? SelectionColorField?.id : undefined} value={typeof SelectionColorField === "object" && "value" in SelectionColorField ? SelectionColorField?.value : SelectionColorField} /* default: [0; 0; 0; 0] */  isRaw={typeof SelectionColorField === "object" && "isRaw" in SelectionColorField && SelectionColorField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`} name="EditingStarted" id={typeof EditingStarted === "object" && "id" in EditingStarted ? EditingStarted?.id : undefined} value={typeof EditingStarted === "object" && "value" in EditingStarted ? EditingStarted?.value : EditingStarted} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof EditingStarted === "object" && "isRaw" in EditingStarted && EditingStarted.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`} name="EditingChanged" id={typeof EditingChanged === "object" && "id" in EditingChanged ? EditingChanged?.id : undefined} value={typeof EditingChanged === "object" && "value" in EditingChanged ? EditingChanged?.value : EditingChanged} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof EditingChanged === "object" && "isRaw" in EditingChanged && EditingChanged.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`} name="EditingFinished" id={typeof EditingFinished === "object" && "id" in EditingFinished ? EditingFinished?.id : undefined} value={typeof EditingFinished === "object" && "value" in EditingFinished ? EditingFinished?.value : EditingFinished} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof EditingFinished === "object" && "isRaw" in EditingFinished && EditingFinished.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.TextEditor]]`} name="SubmitPressed" id={typeof SubmitPressed === "object" && "id" in SubmitPressed ? SubmitPressed?.id : undefined} value={typeof SubmitPressed === "object" && "value" in SubmitPressed ? SubmitPressed?.value : SubmitPressed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof SubmitPressed === "object" && "isRaw" in SubmitPressed && SubmitPressed.isRaw ? true : undefined} />
        </Component>
      );
    };
    