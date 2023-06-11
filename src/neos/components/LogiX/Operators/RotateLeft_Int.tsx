import { member, Member, Component } from "../../../core";
    
    export interface RotateLeft_IntInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
A?: member<any>;
Rotate?: member<any>;
    }
    
    export function RotateLeft_Int(props: RotateLeft_IntInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
A,
Rotate, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.RotateLeft_Int" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="A" id={typeof A === "object" && "id" in A ? A?.id : undefined} value={typeof A === "object" && "value" in A ? A?.value : A} /* default: ID0 */  isRaw={typeof A === "object" && "isRaw" in A && A.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Rotate" id={typeof Rotate === "object" && "id" in Rotate ? Rotate?.id : undefined} value={typeof Rotate === "object" && "value" in Rotate ? Rotate?.value : Rotate} /* default: ID0 */  isRaw={typeof Rotate === "object" && "isRaw" in Rotate && Rotate.isRaw ? true : undefined} />
        </Component>
      );
    };
    