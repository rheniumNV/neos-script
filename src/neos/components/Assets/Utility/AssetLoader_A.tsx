import { member, Member, Component } from "../../../core";
    
    export interface AssetLoader_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Asset?: member<any>;
    }
    
    export function AssetLoader_A(props: AssetLoader_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder, Enabled,
Asset, } = props;
    
      return (
        <Component type={`FrooxEngine.AssetLoader\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[A]`} name="Asset" id={typeof Asset === "object" && "id" in Asset ? Asset?.id : undefined} value={typeof Asset === "object" && "value" in Asset ? Asset?.value : Asset} /* default: null */  isRaw={typeof Asset === "object" && "isRaw" in Asset && Asset.isRaw ? true : undefined} />
        </Component>
      );
    };
    