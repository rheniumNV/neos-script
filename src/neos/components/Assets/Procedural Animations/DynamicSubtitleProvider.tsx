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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="AssetURL" id={typeof AssetURL === "object" && "id" in AssetURL ? AssetURL?.id : undefined} value={typeof AssetURL === "object" && "value" in AssetURL ? AssetURL?.value : AssetURL} /* default: <i>null</i> */  />
        </Component>
      );
    };
    