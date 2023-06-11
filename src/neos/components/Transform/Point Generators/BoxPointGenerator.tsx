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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0; 0] */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Shell" id={typeof Shell === "object" && "id" in Shell ? Shell?.id : undefined} value={typeof Shell === "object" && "value" in Shell ? Shell?.value : Shell} /* default: false */  isRaw={typeof Shell === "object" && "isRaw" in Shell && Shell.isRaw ? true : undefined} />
        </Component>
      );
    };
    