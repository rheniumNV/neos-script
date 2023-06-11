import { member, Member, Component } from "../../../../core";
    
    export interface HandSlotInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
UserRoot?: member<any>;
Chirality?: member<any>;
    }
    
    export function HandSlot(props: HandSlotInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
UserRoot,
Chirality, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.HandSlot" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.UserRoot]`} name="UserRoot" id={typeof UserRoot === "object" && "id" in UserRoot ? UserRoot?.id : undefined} value={typeof UserRoot === "object" && "value" in UserRoot ? UserRoot?.value : UserRoot} /* default: ID0 */  isRaw={typeof UserRoot === "object" && "isRaw" in UserRoot && UserRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Chirality" id={typeof Chirality === "object" && "id" in Chirality ? Chirality?.id : undefined} value={typeof Chirality === "object" && "value" in Chirality ? Chirality?.value : Chirality} /* default: ID0 */  isRaw={typeof Chirality === "object" && "isRaw" in Chirality && Chirality.isRaw ? true : undefined} />
        </Component>
      );
    };
    