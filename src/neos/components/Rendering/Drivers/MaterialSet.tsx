import { member, Member, Component } from "../../../core";
    
    export interface MaterialSetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ActiveSetIndex?: member<number>;
Target?: member<any>;
Sets?: member<any>;
    }
    
    export function MaterialSet(props: MaterialSetInput){
      const { id, persistentId, updateOrder, Enabled,
ActiveSetIndex,
Target,
Sets, } = props;
    
      return (
        <Component type="FrooxEngine.MaterialSet" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ActiveSetIndex" id={typeof ActiveSetIndex === "object" && "id" in ActiveSetIndex ? ActiveSetIndex?.id : undefined} value={typeof ActiveSetIndex === "object" && "value" in ActiveSetIndex ? ActiveSetIndex?.value : ActiveSetIndex} /* default: 0 */  isRaw={typeof ActiveSetIndex === "object" && "isRaw" in ActiveSetIndex && ActiveSetIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncAssetList\`1[FrooxEngine.Material]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.SyncAssetList\`1[FrooxEngine.Material]]`} name="Sets" id={typeof Sets === "object" && "id" in Sets ? Sets?.id : undefined} value={typeof Sets === "object" && "value" in Sets ? Sets?.value : Sets} /* default: FrooxEngine.SyncList`1[FrooxEngine.SyncAssetList`1[FrooxEngine.Material]] */  isRaw={typeof Sets === "object" && "isRaw" in Sets && Sets.isRaw ? true : undefined} />
        </Component>
      );
    };
    