import { member, Member, Component } from "../../../core";
    
    export interface MaskInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ShowMaskGraphic?: member<boolean>;
    }
    
    export function Mask(props: MaskInput){
      const { id, persistentId, updateOrder, Enabled,
ShowMaskGraphic, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.Mask" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowMaskGraphic" id={typeof ShowMaskGraphic === "object" && "id" in ShowMaskGraphic ? ShowMaskGraphic?.id : undefined} value={typeof ShowMaskGraphic === "object" && "value" in ShowMaskGraphic ? ShowMaskGraphic?.value : ShowMaskGraphic} /* default: false */  isRaw={typeof ShowMaskGraphic === "object" && "isRaw" in ShowMaskGraphic && ShowMaskGraphic.isRaw ? true : undefined} />
        </Component>
      );
    };
    