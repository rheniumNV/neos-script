import { member, Member, Component } from "../../core";
    
    export interface InventoryLinkInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetName?: member<any>;
Target?: member<any>;
    }
    
    export function InventoryLink(props: InventoryLinkInput){
      const { id, persistentId, updateOrder, Enabled,
TargetName,
Target, } = props;
    
      return (
        <Component type="FrooxEngine.InventoryLink" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="TargetName" id={typeof TargetName === "object" && "id" in TargetName ? TargetName?.id : undefined} value={typeof TargetName === "object" && "value" in TargetName ? TargetName?.value : TargetName} /* default: <i>null</i> */  isRaw={typeof TargetName === "object" && "isRaw" in TargetName && TargetName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: <i>null</i> */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
        </Component>
      );
    };
    