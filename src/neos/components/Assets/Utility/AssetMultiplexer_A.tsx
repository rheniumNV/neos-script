import { member, Member, Component } from "../../../core";
    
    export interface AssetMultiplexer_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Index?: member<number>;
    }
    
    export function AssetMultiplexer_A(props: AssetMultiplexer_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder, Enabled,
Target,
Index, } = props;
    
      return (
        <Component type={`FrooxEngine.AssetMultiplexer\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.AssetRef\`1[A]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Index" id={typeof Index === "object" && "id" in Index ? Index?.id : undefined} value={typeof Index === "object" && "value" in Index ? Index?.value : Index} /* default: null */  isRaw={typeof Index === "object" && "isRaw" in Index && Index.isRaw ? true : undefined} />
        </Component>
      );
    };
    