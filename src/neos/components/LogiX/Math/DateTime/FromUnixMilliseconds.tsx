import { member, Member, Component } from "../../../../core";
    
    export interface FromUnixMillisecondsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
UnixMiliseconds?: member<any>;
IsLocal?: member<any>;
    }
    
    export function FromUnixMilliseconds(props: FromUnixMillisecondsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
UnixMiliseconds,
IsLocal, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Time.FromUnixMilliseconds" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int64]`} name="UnixMiliseconds" id={typeof UnixMiliseconds === "object" && "id" in UnixMiliseconds ? UnixMiliseconds?.id : undefined} value={typeof UnixMiliseconds === "object" && "value" in UnixMiliseconds ? UnixMiliseconds?.value : UnixMiliseconds} /* default: ID0 */  isRaw={typeof UnixMiliseconds === "object" && "isRaw" in UnixMiliseconds && UnixMiliseconds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IsLocal" id={typeof IsLocal === "object" && "id" in IsLocal ? IsLocal?.id : undefined} value={typeof IsLocal === "object" && "value" in IsLocal ? IsLocal?.value : IsLocal} /* default: ID0 */  isRaw={typeof IsLocal === "object" && "isRaw" in IsLocal && IsLocal.isRaw ? true : undefined} />
        </Component>
      );
    };
    