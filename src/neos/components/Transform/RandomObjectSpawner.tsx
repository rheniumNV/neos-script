import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RandomObjectSpawnerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Templates?: member<any>;
SpawnSpace?: member<any>;
    }
    
    export function RandomObjectSpawner(props: RandomObjectSpawnerInput){
      const { id, persistentId, updateOrder, Enabled,
Templates,
SpawnSpace, } = props;
    
      return (
        <Component type="FrooxEngine.RandomObjectSpawner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomObjectSpawner+SpawnData]`} name="Templates" id={typeof Templates === "object" && "id" in Templates ? Templates?.id : undefined} value={typeof Templates === "object" && "value" in Templates ? Templates?.value : Templates} /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomObjectSpawner+SpawnData] */  />
<Member type={`FrooxEngine.RootSpace`} name="SpawnSpace" id={typeof SpawnSpace === "object" && "id" in SpawnSpace ? SpawnSpace?.id : undefined} value={typeof SpawnSpace === "object" && "value" in SpawnSpace ? SpawnSpace?.value : SpawnSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
        </Component>
      );
    };
    