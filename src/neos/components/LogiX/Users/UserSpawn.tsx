import { member, Member, Component } from "../../../core";
    
    export interface UserSpawnInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnSpawn?: member<any>;
    }
    
    export function UserSpawn(props: UserSpawnInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnSpawn, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.UserSpawn" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSpawn" id={typeof OnSpawn === "object" && "id" in OnSpawn ? OnSpawn?.id : undefined} value={typeof OnSpawn === "object" && "value" in OnSpawn ? OnSpawn?.value : OnSpawn} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnSpawn === "object" && "isRaw" in OnSpawn && OnSpawn.isRaw ? true : undefined} />
        </Component>
      );
    };
    