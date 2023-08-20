import { member, Member, Component } from "../../core";
    
    export interface UndoManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MaxUndoSteps?: member<number>;
UnsavedChanges?: member<boolean>;
    }
    
    export function UndoManager(props: UndoManagerInput){
      const { id, persistentId, updateOrder, Enabled,
MaxUndoSteps,
UnsavedChanges, } = props;
    
      return (
        <Component type="FrooxEngine.Undo.UndoManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxUndoSteps" id={typeof MaxUndoSteps === "object" && "id" in MaxUndoSteps ? MaxUndoSteps?.id : undefined} value={typeof MaxUndoSteps === "object" && "value" in MaxUndoSteps ? MaxUndoSteps?.value : MaxUndoSteps} /* default: 0 */  isRaw={typeof MaxUndoSteps === "object" && "isRaw" in MaxUndoSteps && MaxUndoSteps.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UnsavedChanges-ID" id={typeof UnsavedChanges === "object" && "id" in UnsavedChanges ? UnsavedChanges?.id : undefined} value={typeof UnsavedChanges === "object" && "value" in UnsavedChanges ? UnsavedChanges?.value : UnsavedChanges} /* default: false */ readOnly isRaw={typeof UnsavedChanges === "object" && "isRaw" in UnsavedChanges && UnsavedChanges.isRaw ? true : undefined} />
        </Component>
      );
    };
    