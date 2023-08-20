import { member, Member, Component } from "../../../core";
    
    export interface Panner2DInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_offset?: member<[number, number]>;
_preOffset?: member<[number, number]>;
_speed?: member<[number, number]>;
_repeat?: member<[number, number]>;
PingPong?: member<boolean>;
    }
    
    export function Panner2D(props: Panner2DInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_offset,
_preOffset,
_speed,
_repeat,
PingPong, } = props;
    
      return (
        <Component type="FrooxEngine.Panner2D" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="_offset" id={typeof _offset === "object" && "id" in _offset ? _offset?.id : undefined} value={typeof _offset === "object" && "value" in _offset ? _offset?.value : _offset} /* default: [0; 0] */  isRaw={typeof _offset === "object" && "isRaw" in _offset && _offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="_preOffset" id={typeof _preOffset === "object" && "id" in _preOffset ? _preOffset?.id : undefined} value={typeof _preOffset === "object" && "value" in _preOffset ? _preOffset?.value : _preOffset} /* default: [0; 0] */  isRaw={typeof _preOffset === "object" && "isRaw" in _preOffset && _preOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="_speed" id={typeof _speed === "object" && "id" in _speed ? _speed?.id : undefined} value={typeof _speed === "object" && "value" in _speed ? _speed?.value : _speed} /* default: [0; 0] */  isRaw={typeof _speed === "object" && "isRaw" in _speed && _speed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="_repeat" id={typeof _repeat === "object" && "id" in _repeat ? _repeat?.id : undefined} value={typeof _repeat === "object" && "value" in _repeat ? _repeat?.value : _repeat} /* default: [0; 0] */  isRaw={typeof _repeat === "object" && "isRaw" in _repeat && _repeat.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PingPong" id={typeof PingPong === "object" && "id" in PingPong ? PingPong?.id : undefined} value={typeof PingPong === "object" && "value" in PingPong ? PingPong?.value : PingPong} /* default: false */  isRaw={typeof PingPong === "object" && "isRaw" in PingPong && PingPong.isRaw ? true : undefined} />
        </Component>
      );
    };
    