import { member, Member, Component } from "../../../core";
    
    export interface UndoableDestroyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
PreserveAssets?: member<any>;
OnDestroyed?: member<any>;
    }
    
    export function UndoableDestroy(props: UndoableDestroyInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
PreserveAssets,
OnDestroyed, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Undo.UndoableDestroy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="PreserveAssets" id={typeof PreserveAssets === "object" && "id" in PreserveAssets ? PreserveAssets?.id : undefined} value={typeof PreserveAssets === "object" && "value" in PreserveAssets ? PreserveAssets?.value : PreserveAssets} /* default: ID0 */  isRaw={typeof PreserveAssets === "object" && "isRaw" in PreserveAssets && PreserveAssets.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDestroyed" id={typeof OnDestroyed === "object" && "id" in OnDestroyed ? OnDestroyed?.id : undefined} value={typeof OnDestroyed === "object" && "value" in OnDestroyed ? OnDestroyed?.value : OnDestroyed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDestroyed === "object" && "isRaw" in OnDestroyed && OnDestroyed.isRaw ? true : undefined} />
        </Component>
      );
    };
    