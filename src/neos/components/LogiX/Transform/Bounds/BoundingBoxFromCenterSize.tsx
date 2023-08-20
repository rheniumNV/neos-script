import { member, Member, Component } from "../../../../core";
    
    export interface BoundingBoxFromCenterSizeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Center?: member<any>;
Size?: member<any>;
    }
    
    export function BoundingBoxFromCenterSize(props: BoundingBoxFromCenterSizeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Center,
Size, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Transform.BoundingBoxFromCenterSize" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Center" id={typeof Center === "object" && "id" in Center ? Center?.id : undefined} value={typeof Center === "object" && "value" in Center ? Center?.value : Center} /* default: ID0 */  isRaw={typeof Center === "object" && "isRaw" in Center && Center.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: ID0 */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
        </Component>
      );
    };
    