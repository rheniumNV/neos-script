import { member, Member, Component } from "../../core";
    
    export interface AssetProxy_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AssetReference?: member<any>;
    }
    
    export function AssetProxy_A(props: AssetProxy_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder, Enabled,
AssetReference, } = props;
    
      return (
        <Component type={`FrooxEngine.AssetProxy\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[A]`} name="AssetReference" id={typeof AssetReference === "object" && "id" in AssetReference ? AssetReference?.id : undefined} value={typeof AssetReference === "object" && "value" in AssetReference ? AssetReference?.value : AssetReference} /* default: null */  isRaw={typeof AssetReference === "object" && "isRaw" in AssetReference && AssetReference.isRaw ? true : undefined} />
        </Component>
      );
    };
    