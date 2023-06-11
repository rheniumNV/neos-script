import { member, Member, Component } from "../../../../core";
    
    export interface EulerAngles_doubleQInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Q?: member<any>;
    }
    
    export function EulerAngles_doubleQ(props: EulerAngles_doubleQInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Q, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Quaternions.EulerAngles_doubleQ" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.doubleQ]`} name="Q" id={typeof Q === "object" && "id" in Q ? Q?.id : undefined} value={typeof Q === "object" && "value" in Q ? Q?.value : Q} /* default: ID0 */  isRaw={typeof Q === "object" && "isRaw" in Q && Q.isRaw ? true : undefined} />
        </Component>
      );
    };
    