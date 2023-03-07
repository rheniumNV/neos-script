import { member, Member, Component } from "../../../core";
    
    export interface Wobbler1DInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_baseValue?: member<number>;
_speed?: member<number>;
_magnitude?: member<number>;
_seed?: member<number>;
    }
    
    export function Wobbler1D(props: Wobbler1DInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_baseValue,
_speed,
_magnitude,
_seed, } = props;
    
      return (
        <Component type="FrooxEngine.Wobbler1D" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_baseValue" id={typeof _baseValue === "object" && "id" in _baseValue ? _baseValue?.id : undefined} value={typeof _baseValue === "object" && "value" in _baseValue ? _baseValue?.value : _baseValue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_speed" id={typeof _speed === "object" && "id" in _speed ? _speed?.id : undefined} value={typeof _speed === "object" && "value" in _speed ? _speed?.value : _speed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_magnitude" id={typeof _magnitude === "object" && "id" in _magnitude ? _magnitude?.id : undefined} value={typeof _magnitude === "object" && "value" in _magnitude ? _magnitude?.value : _magnitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_seed" id={typeof _seed === "object" && "id" in _seed ? _seed?.id : undefined} value={typeof _seed === "object" && "value" in _seed ? _seed?.value : _seed} /* default: 0 */  />
        </Component>
      );
    };
    