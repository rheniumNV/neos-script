import { member, Member, Component } from "../../core";
    
    export interface SessionOrbsControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SpawnRadius?: member<number>;
SpawnHeight?: member<number>;
SpawnOffset?: member<[number, number, number]>;
_root?: member<any>;
MaxOrbs?: member<number>;
ShowHeadless?: member<boolean>;
    }
    
    export function SessionOrbsController(props: SessionOrbsControllerInput){
      const { id, persistentId, updateOrder, Enabled,
SpawnRadius,
SpawnHeight,
SpawnOffset,
_root,
MaxOrbs,
ShowHeadless, } = props;
    
      return (
        <Component type="FrooxEngine.SessionOrbsController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpawnRadius" id={typeof SpawnRadius === "object" && "id" in SpawnRadius ? SpawnRadius?.id : undefined} value={typeof SpawnRadius === "object" && "value" in SpawnRadius ? SpawnRadius?.value : SpawnRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpawnHeight" id={typeof SpawnHeight === "object" && "id" in SpawnHeight ? SpawnHeight?.id : undefined} value={typeof SpawnHeight === "object" && "value" in SpawnHeight ? SpawnHeight?.value : SpawnHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SpawnOffset" id={typeof SpawnOffset === "object" && "id" in SpawnOffset ? SpawnOffset?.id : undefined} value={typeof SpawnOffset === "object" && "value" in SpawnOffset ? SpawnOffset?.value : SpawnOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_root" id={typeof _root === "object" && "id" in _root ? _root?.id : undefined} value={typeof _root === "object" && "value" in _root ? _root?.value : _root} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxOrbs" id={typeof MaxOrbs === "object" && "id" in MaxOrbs ? MaxOrbs?.id : undefined} value={typeof MaxOrbs === "object" && "value" in MaxOrbs ? MaxOrbs?.value : MaxOrbs} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowHeadless" id={typeof ShowHeadless === "object" && "id" in ShowHeadless ? ShowHeadless?.id : undefined} value={typeof ShowHeadless === "object" && "value" in ShowHeadless ? ShowHeadless?.value : ShowHeadless} /* default: false */  />
        </Component>
      );
    };
    