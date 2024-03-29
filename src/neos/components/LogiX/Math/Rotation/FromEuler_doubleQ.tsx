import { member, Member, Component } from "../../../../core";
    
    export interface FromEuler_doubleQInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Angles?: member<any>;
    }
    
    export function FromEuler_doubleQ(props: FromEuler_doubleQInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Angles, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Quaternions.FromEuler_doubleQ" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double3]`} name="Angles" id={typeof Angles === "object" && "id" in Angles ? Angles?.id : undefined} value={typeof Angles === "object" && "value" in Angles ? Angles?.value : Angles} /* default: ID0 */  isRaw={typeof Angles === "object" && "isRaw" in Angles && Angles.isRaw ? true : undefined} />
        </Component>
      );
    };
    