import { member, Member, Component } from "../../../core";
    
    export interface CloseContextMenuInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Summoner?: member<any>;
    }
    
    export function CloseContextMenu(props: CloseContextMenuInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Summoner, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.CloseContextMenu" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IWorldElement]`} name="Summoner" id={typeof Summoner === "object" && "id" in Summoner ? Summoner?.id : undefined} value={typeof Summoner === "object" && "value" in Summoner ? Summoner?.value : Summoner} /* default: ID0 */  isRaw={typeof Summoner === "object" && "isRaw" in Summoner && Summoner.isRaw ? true : undefined} />
        </Component>
      );
    };
    