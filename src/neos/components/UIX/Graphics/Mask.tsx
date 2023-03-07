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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowMaskGraphic" id={typeof ShowMaskGraphic === "object" && "id" in ShowMaskGraphic ? ShowMaskGraphic?.id : undefined} value={typeof ShowMaskGraphic === "object" && "value" in ShowMaskGraphic ? ShowMaskGraphic?.value : ShowMaskGraphic} /* default: false */  />
        </Component>
      );
    };
    