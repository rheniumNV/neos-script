import { member, Member, Component } from "../../core";
    
    export interface TransferGrabbableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PasteOnGrab?: member<boolean>;
_indicatorMaterial?: member<any>;
    }
    
    export function TransferGrabbable(props: TransferGrabbableInput){
      const { id, persistentId, updateOrder, Enabled,
PasteOnGrab,
_indicatorMaterial, } = props;
    
      return (
        <Component type="FrooxEngine.TransferGrabbable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PasteOnGrab" id={typeof PasteOnGrab === "object" && "id" in PasteOnGrab ? PasteOnGrab?.id : undefined} value={typeof PasteOnGrab === "object" && "value" in PasteOnGrab ? PasteOnGrab?.value : PasteOnGrab} /* default: false */  isRaw={typeof PasteOnGrab === "object" && "isRaw" in PasteOnGrab && PasteOnGrab.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="_indicatorMaterial" id={typeof _indicatorMaterial === "object" && "id" in _indicatorMaterial ? _indicatorMaterial?.id : undefined} value={typeof _indicatorMaterial === "object" && "value" in _indicatorMaterial ? _indicatorMaterial?.value : _indicatorMaterial} /* default: ID0 */  isRaw={typeof _indicatorMaterial === "object" && "isRaw" in _indicatorMaterial && _indicatorMaterial.isRaw ? true : undefined} />
        </Component>
      );
    };
    