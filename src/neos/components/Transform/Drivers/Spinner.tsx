import { member, Member, Component } from "../../../core";
    
    export interface SpinnerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Range?: member<[number, number, number]>;
_target?: member<any>;
_offset?: member<any>;
_speed?: member<[number, number, number]>;
    }
    
    export function Spinner(props: SpinnerInput){
      const { id, persistentId, updateOrder, Enabled,
Range,
_target,
_offset,
_speed, } = props;
    
      return (
        <Component type="FrooxEngine.Spinner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Range" id={typeof Range === "object" && "id" in Range ? Range?.id : undefined} value={typeof Range === "object" && "value" in Range ? Range?.value : Range} /* default: [0; 0; 0] */  isRaw={typeof Range === "object" && "isRaw" in Range && Range.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_offset" id={typeof _offset === "object" && "id" in _offset ? _offset?.id : undefined} value={typeof _offset === "object" && "value" in _offset ? _offset?.value : _offset} /* default: [0; 0; 0; 1] */  isRaw={typeof _offset === "object" && "isRaw" in _offset && _offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_speed" id={typeof _speed === "object" && "id" in _speed ? _speed?.id : undefined} value={typeof _speed === "object" && "value" in _speed ? _speed?.value : _speed} /* default: [0; 0; 0] */  isRaw={typeof _speed === "object" && "isRaw" in _speed && _speed.isRaw ? true : undefined} />
        </Component>
      );
    };
    