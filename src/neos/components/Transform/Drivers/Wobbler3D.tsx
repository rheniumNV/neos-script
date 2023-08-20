import { member, Member, Component } from "../../../core";
    
    export interface Wobbler3DInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_baseValue?: member<[number, number, number]>;
_speed?: member<[number, number, number]>;
_magnitude?: member<[number, number, number]>;
_seed?: member<[number, number, number]>;
    }
    
    export function Wobbler3D(props: Wobbler3DInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_baseValue,
_speed,
_magnitude,
_seed, } = props;
    
      return (
        <Component type="FrooxEngine.Wobbler3D" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_baseValue" id={typeof _baseValue === "object" && "id" in _baseValue ? _baseValue?.id : undefined} value={typeof _baseValue === "object" && "value" in _baseValue ? _baseValue?.value : _baseValue} /* default: [0; 0; 0] */  isRaw={typeof _baseValue === "object" && "isRaw" in _baseValue && _baseValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_speed" id={typeof _speed === "object" && "id" in _speed ? _speed?.id : undefined} value={typeof _speed === "object" && "value" in _speed ? _speed?.value : _speed} /* default: [0; 0; 0] */  isRaw={typeof _speed === "object" && "isRaw" in _speed && _speed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_magnitude" id={typeof _magnitude === "object" && "id" in _magnitude ? _magnitude?.id : undefined} value={typeof _magnitude === "object" && "value" in _magnitude ? _magnitude?.value : _magnitude} /* default: [0; 0; 0] */  isRaw={typeof _magnitude === "object" && "isRaw" in _magnitude && _magnitude.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_seed" id={typeof _seed === "object" && "id" in _seed ? _seed?.id : undefined} value={typeof _seed === "object" && "value" in _seed ? _seed?.value : _seed} /* default: [0; 0; 0] */  isRaw={typeof _seed === "object" && "isRaw" in _seed && _seed.isRaw ? true : undefined} />
        </Component>
      );
    };
    