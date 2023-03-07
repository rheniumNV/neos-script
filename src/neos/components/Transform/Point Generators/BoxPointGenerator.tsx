import { member, Member, Component } from "../../../core";
    
    export interface BoxPointGeneratorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Size?: member<[number, number, number]>;
Shell?: member<boolean>;
    }
    
    export function BoxPointGenerator(props: BoxPointGeneratorInput){
      const { id, persistentId, updateOrder, Enabled,
Size,
Shell, } = props;
    
      return (
        <Component type="FrooxEngine.BoxPointGenerator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Shell" id={typeof Shell === "object" && "id" in Shell ? Shell?.id : undefined} value={typeof Shell === "object" && "value" in Shell ? Shell?.value : Shell} /* default: false */  />
        </Component>
      );
    };
    