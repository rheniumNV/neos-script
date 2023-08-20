import { member, Member, Component } from "../../core";
    
    export interface GripPoseReferenceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HandSide?: member<any>;
_rootPos?: member<[number, number, number]>;
TipReference?: member<any>;
ShowVisual?: member<boolean>;
DisableSlider?: member<boolean>;
_activeVisual?: member<any>;
    }
    
    export function GripPoseReference(props: GripPoseReferenceInput){
      const { id, persistentId, updateOrder, Enabled,
HandSide,
_rootPos,
TipReference,
ShowVisual,
DisableSlider,
_activeVisual, } = props;
    
      return (
        <Component type="FrooxEngine.GripPoseReference" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="HandSide" id={typeof HandSide === "object" && "id" in HandSide ? HandSide?.id : undefined} value={typeof HandSide === "object" && "value" in HandSide ? HandSide?.value : HandSide} /* default: Left */  isRaw={typeof HandSide === "object" && "isRaw" in HandSide && HandSide.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_rootPos" id={typeof _rootPos === "object" && "id" in _rootPos ? _rootPos?.id : undefined} value={typeof _rootPos === "object" && "value" in _rootPos ? _rootPos?.value : _rootPos} /* default: [0; 0; 0] */  isRaw={typeof _rootPos === "object" && "isRaw" in _rootPos && _rootPos.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowVisual-ID" id={typeof ShowVisual === "object" && "id" in ShowVisual ? ShowVisual?.id : undefined} value={typeof ShowVisual === "object" && "value" in ShowVisual ? ShowVisual?.value : ShowVisual} /* default: false */ readOnly isRaw={typeof ShowVisual === "object" && "isRaw" in ShowVisual && ShowVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableSlider-ID" id={typeof DisableSlider === "object" && "id" in DisableSlider ? DisableSlider?.id : undefined} value={typeof DisableSlider === "object" && "value" in DisableSlider ? DisableSlider?.value : DisableSlider} /* default: false */ readOnly isRaw={typeof DisableSlider === "object" && "isRaw" in DisableSlider && DisableSlider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
        </Component>
      );
    };
    