import { member, Member, Component } from "../../../core";
    
    export interface FlipAtUserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UpSpace?: member<any>;
_rotation?: member<any>;
    }
    
    export function FlipAtUser(props: FlipAtUserInput){
      const { id, persistentId, updateOrder, Enabled,
UpSpace,
_rotation, } = props;
    
      return (
        <Component type="FrooxEngine.FlipAtUser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="UpSpace" id={typeof UpSpace === "object" && "id" in UpSpace ? UpSpace?.id : undefined} value={typeof UpSpace === "object" && "value" in UpSpace ? UpSpace?.value : UpSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof UpSpace === "object" && "isRaw" in UpSpace && UpSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  isRaw={typeof _rotation === "object" && "isRaw" in _rotation && _rotation.isRaw ? true : undefined} />
        </Component>
      );
    };
    