import { member, Member, Component } from "../../../core";
    
    export interface RectMesh_MInput {
        type:{M: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Mesh?: member<any>;
    }
    
    export function RectMesh_M(props: RectMesh_MInput){
      const {type:{M:{name: M},}, id, persistentId, updateOrder, Enabled,
Mesh, } = props;
    
      return (
        <Component type={`FrooxEngine.UIX.RectMesh\`1[${[M,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AudioSourceWaveformMesh`} name="Mesh" id={typeof Mesh === "object" && "id" in Mesh ? Mesh?.id : undefined} value={typeof Mesh === "object" && "value" in Mesh ? Mesh?.value : Mesh} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.AudioSourceWaveformMesh,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
        </Component>
      );
    };
    