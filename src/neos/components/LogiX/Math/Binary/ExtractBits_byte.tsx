import { member, Member, Component } from "../../../../core";
    
    export interface ExtractBits_byteInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Integer?: member<any>;
    }
    
    export function ExtractBits_byte(props: ExtractBits_byteInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Integer, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Binary.ExtractBits_byte" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Byte]`} name="Integer" id={typeof Integer === "object" && "id" in Integer ? Integer?.id : undefined} value={typeof Integer === "object" && "value" in Integer ? Integer?.value : Integer} /* default: ID0 */  />
        </Component>
      );
    };
    