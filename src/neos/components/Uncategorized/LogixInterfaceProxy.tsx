import { member, Member, Component } from "../../core";
    
    export interface LogixInterfaceProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_worker?: member<any>;
_interfaceSlot?: member<any>;
_position?: member<[number, number, number]>;
_rotation?: member<any>;
_scale?: member<[number, number, number]>;
    }
    
    export function LogixInterfaceProxy(props: LogixInterfaceProxyInput){
      const { id, persistentId, updateOrder, Enabled,
_worker,
_interfaceSlot,
_position,
_rotation,
_scale, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.LogixInterfaceProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="_worker" id={typeof _worker === "object" && "id" in _worker ? _worker?.id : undefined} value={typeof _worker === "object" && "value" in _worker ? _worker?.value : _worker} /* default: ID0 */  isRaw={typeof _worker === "object" && "isRaw" in _worker && _worker.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_interfaceSlot" id={typeof _interfaceSlot === "object" && "id" in _interfaceSlot ? _interfaceSlot?.id : undefined} value={typeof _interfaceSlot === "object" && "value" in _interfaceSlot ? _interfaceSlot?.value : _interfaceSlot} /* default: ID0 */  isRaw={typeof _interfaceSlot === "object" && "isRaw" in _interfaceSlot && _interfaceSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: [0; 0; 0] */  isRaw={typeof _position === "object" && "isRaw" in _position && _position.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: [0; 0; 0; 1] */  isRaw={typeof _rotation === "object" && "isRaw" in _rotation && _rotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: [0; 0; 0] */  isRaw={typeof _scale === "object" && "isRaw" in _scale && _scale.isRaw ? true : undefined} />
        </Component>
      );
    };
    