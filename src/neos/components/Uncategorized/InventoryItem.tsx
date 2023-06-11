import { member, Member, Component } from "../../core";
    
    export interface InventoryItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RelativeToUserRoot?: member<boolean>;
SavedRotation?: member<any>;
SavedScale?: member<[number, number, number]>;
    }
    
    export function InventoryItem(props: InventoryItemInput){
      const { id, persistentId, updateOrder, Enabled,
RelativeToUserRoot,
SavedRotation,
SavedScale, } = props;
    
      return (
        <Component type="FrooxEngine.InventoryItem" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RelativeToUserRoot" id={typeof RelativeToUserRoot === "object" && "id" in RelativeToUserRoot ? RelativeToUserRoot?.id : undefined} value={typeof RelativeToUserRoot === "object" && "value" in RelativeToUserRoot ? RelativeToUserRoot?.value : RelativeToUserRoot} /* default: false */  isRaw={typeof RelativeToUserRoot === "object" && "isRaw" in RelativeToUserRoot && RelativeToUserRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="SavedRotation" id={typeof SavedRotation === "object" && "id" in SavedRotation ? SavedRotation?.id : undefined} value={typeof SavedRotation === "object" && "value" in SavedRotation ? SavedRotation?.value : SavedRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof SavedRotation === "object" && "isRaw" in SavedRotation && SavedRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SavedScale" id={typeof SavedScale === "object" && "id" in SavedScale ? SavedScale?.id : undefined} value={typeof SavedScale === "object" && "value" in SavedScale ? SavedScale?.value : SavedScale} /* default: [0; 0; 0] */  isRaw={typeof SavedScale === "object" && "isRaw" in SavedScale && SavedScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    