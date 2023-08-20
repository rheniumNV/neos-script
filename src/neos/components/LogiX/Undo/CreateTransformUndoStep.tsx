import { member, Member, Component } from "../../../core";
    
    export interface CreateTransformUndoStepInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
SaveParent?: member<any>;
SavePosition?: member<any>;
SaveRotation?: member<any>;
SaveScale?: member<any>;
OnCreated?: member<any>;
    }
    
    export function CreateTransformUndoStep(props: CreateTransformUndoStepInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
SaveParent,
SavePosition,
SaveRotation,
SaveScale,
OnCreated, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Undo.CreateTransformUndoStep" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="SaveParent" id={typeof SaveParent === "object" && "id" in SaveParent ? SaveParent?.id : undefined} value={typeof SaveParent === "object" && "value" in SaveParent ? SaveParent?.value : SaveParent} /* default: ID0 */  isRaw={typeof SaveParent === "object" && "isRaw" in SaveParent && SaveParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="SavePosition" id={typeof SavePosition === "object" && "id" in SavePosition ? SavePosition?.id : undefined} value={typeof SavePosition === "object" && "value" in SavePosition ? SavePosition?.value : SavePosition} /* default: ID0 */  isRaw={typeof SavePosition === "object" && "isRaw" in SavePosition && SavePosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="SaveRotation" id={typeof SaveRotation === "object" && "id" in SaveRotation ? SaveRotation?.id : undefined} value={typeof SaveRotation === "object" && "value" in SaveRotation ? SaveRotation?.value : SaveRotation} /* default: ID0 */  isRaw={typeof SaveRotation === "object" && "isRaw" in SaveRotation && SaveRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="SaveScale" id={typeof SaveScale === "object" && "id" in SaveScale ? SaveScale?.id : undefined} value={typeof SaveScale === "object" && "value" in SaveScale ? SaveScale?.value : SaveScale} /* default: ID0 */  isRaw={typeof SaveScale === "object" && "isRaw" in SaveScale && SaveScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnCreated" id={typeof OnCreated === "object" && "id" in OnCreated ? OnCreated?.id : undefined} value={typeof OnCreated === "object" && "value" in OnCreated ? OnCreated?.value : OnCreated} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnCreated === "object" && "isRaw" in OnCreated && OnCreated.isRaw ? true : undefined} />
        </Component>
      );
    };
    