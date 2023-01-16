import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FromUnixSecondsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
UnixSeconds?: member<any>;
IsLocal?: member<any>;
    }
    
    export function FromUnixSeconds(props: FromUnixSecondsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
UnixSeconds,
IsLocal, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Time.FromUnixSeconds" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int64]`} name="UnixSeconds" id={typeof UnixSeconds === "object" && "id" in UnixSeconds ? UnixSeconds?.id : undefined} value={typeof UnixSeconds === "object" && "value" in UnixSeconds ? UnixSeconds?.value : UnixSeconds} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IsLocal" id={typeof IsLocal === "object" && "id" in IsLocal ? IsLocal?.id : undefined} value={typeof IsLocal === "object" && "value" in IsLocal ? IsLocal?.value : IsLocal} /* default: ID0 */  />
        </Component>
      );
    };
    