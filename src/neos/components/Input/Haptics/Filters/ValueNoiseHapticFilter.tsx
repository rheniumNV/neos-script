import { member, Member, Component } from "../../../../core";
    
    export interface ValueNoiseHapticFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MinValue?: member<number>;
MaxValue?: member<number>;
    }
    
    export function ValueNoiseHapticFilter(props: ValueNoiseHapticFilterInput){
      const { id, persistentId, updateOrder, Enabled,
MinValue,
MaxValue, } = props;
    
      return (
        <Component type="FrooxEngine.ValueNoiseHapticFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinValue" id={typeof MinValue === "object" && "id" in MinValue ? MinValue?.id : undefined} value={typeof MinValue === "object" && "value" in MinValue ? MinValue?.value : MinValue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxValue" id={typeof MaxValue === "object" && "id" in MaxValue ? MaxValue?.id : undefined} value={typeof MaxValue === "object" && "value" in MaxValue ? MaxValue?.value : MaxValue} /* default: 0 */  />
        </Component>
      );
    };
    