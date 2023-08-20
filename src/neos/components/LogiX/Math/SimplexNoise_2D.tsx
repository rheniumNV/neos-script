import { member, Member, Component } from "../../../core";
    
    export interface SimplexNoise_2DInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Position?: member<any>;
    }
    
    export function SimplexNoise_2D(props: SimplexNoise_2DInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Position, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.SimplexNoise_2D" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float2]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: ID0 */  isRaw={typeof Position === "object" && "isRaw" in Position && Position.isRaw ? true : undefined} />
        </Component>
      );
    };
    