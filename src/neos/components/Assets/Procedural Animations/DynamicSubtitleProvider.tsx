import { member, Member, Component } from "../../../core";
    
    export interface DynamicSubtitleProviderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
AssetURL?: member<any>;
    }
    
    export function DynamicSubtitleProvider(props: DynamicSubtitleProviderInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
AssetURL, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicSubtitleProvider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="AssetURL" id={typeof AssetURL === "object" && "id" in AssetURL ? AssetURL?.id : undefined} value={typeof AssetURL === "object" && "value" in AssetURL ? AssetURL?.value : AssetURL} /* default: <i>null</i> */  isRaw={typeof AssetURL === "object" && "isRaw" in AssetURL && AssetURL.isRaw ? true : undefined} />
        </Component>
      );
    };
    