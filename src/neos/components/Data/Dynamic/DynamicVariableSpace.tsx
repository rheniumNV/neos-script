import { member, Member, Component } from "../../../core";
    
    export interface DynamicVariableSpaceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SpaceName?: member<any>;
OnlyDirectBinding?: member<boolean>;
    }
    
    export function DynamicVariableSpace(props: DynamicVariableSpaceInput){
      const { id, persistentId, updateOrder, Enabled,
SpaceName,
OnlyDirectBinding, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicVariableSpace" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SpaceName" id={typeof SpaceName === "object" && "id" in SpaceName ? SpaceName?.id : undefined} value={typeof SpaceName === "object" && "value" in SpaceName ? SpaceName?.value : SpaceName} /* default: <i>null</i> */  isRaw={typeof SpaceName === "object" && "isRaw" in SpaceName && SpaceName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OnlyDirectBinding" id={typeof OnlyDirectBinding === "object" && "id" in OnlyDirectBinding ? OnlyDirectBinding?.id : undefined} value={typeof OnlyDirectBinding === "object" && "value" in OnlyDirectBinding ? OnlyDirectBinding?.value : OnlyDirectBinding} /* default: false */  isRaw={typeof OnlyDirectBinding === "object" && "isRaw" in OnlyDirectBinding && OnlyDirectBinding.isRaw ? true : undefined} />
        </Component>
      );
    };
    