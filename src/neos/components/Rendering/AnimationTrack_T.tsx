import { member, Member, Component } from "../../core";
    
    export interface AnimationTrack_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_node?: member<any>;
_component?: member<any>;
_property?: member<any>;
    }
    
    export function AnimationTrack_T(props: AnimationTrack_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_node,
_component,
_property, } = props;
    
      return (
        <Component type={`FrooxEngine.AnimationTrack\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_node" id={typeof _node === "object" && "id" in _node ? _node?.id : undefined} value={typeof _node === "object" && "value" in _node ? _node?.value : _node} /* default: <i>null</i> */  isRaw={typeof _node === "object" && "isRaw" in _node && _node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_component" id={typeof _component === "object" && "id" in _component ? _component?.id : undefined} value={typeof _component === "object" && "value" in _component ? _component?.value : _component} /* default: <i>null</i> */  isRaw={typeof _component === "object" && "isRaw" in _component && _component.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_property" id={typeof _property === "object" && "id" in _property ? _property?.id : undefined} value={typeof _property === "object" && "value" in _property ? _property?.value : _property} /* default: <i>null</i> */  isRaw={typeof _property === "object" && "isRaw" in _property && _property.isRaw ? true : undefined} />
        </Component>
      );
    };
    