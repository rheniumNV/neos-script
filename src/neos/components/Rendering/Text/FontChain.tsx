import { member, Member, Component } from "../../../core";
    
    export interface FontChainInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
MainFont?: member<any>;
FallbackFonts?: member<any>;
    }
    
    export function FontChain(props: FontChainInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
MainFont,
FallbackFonts, } = props;
    
      return (
        <Component type="FrooxEngine.FontChain" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Font]`} name="MainFont" id={typeof MainFont === "object" && "id" in MainFont ? MainFont?.id : undefined} value={typeof MainFont === "object" && "value" in MainFont ? MainFont?.value : MainFont} /* default: ID0 */  isRaw={typeof MainFont === "object" && "isRaw" in MainFont && MainFont.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncAssetList\`1[FrooxEngine.Font]`} name="FallbackFonts" id={typeof FallbackFonts === "object" && "id" in FallbackFonts ? FallbackFonts?.id : undefined} value={typeof FallbackFonts === "object" && "value" in FallbackFonts ? FallbackFonts?.value : FallbackFonts} /* default: FrooxEngine.SyncAssetList`1[FrooxEngine.Font] */  isRaw={typeof FallbackFonts === "object" && "isRaw" in FallbackFonts && FallbackFonts.isRaw ? true : undefined} />
        </Component>
      );
    };
    