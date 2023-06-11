import { member, Member, Component } from "../../core";
    
    export interface BipedRigInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ForwardAxis?: member<any>;
    }
    
    export function BipedRig(props: BipedRigInput){
      const { id, persistentId, updateOrder, Enabled,
ForwardAxis, } = props;
    
      return (
        <Component type="FrooxEngine.BipedRig" id={id} persistentId={persistentId} updateOrder={updateOrder} version={2}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="ForwardAxis" id={typeof ForwardAxis === "object" && "id" in ForwardAxis ? ForwardAxis?.id : undefined} value={typeof ForwardAxis === "object" && "value" in ForwardAxis ? ForwardAxis?.value : ForwardAxis} /* default: <i>null</i> */  isRaw={typeof ForwardAxis === "object" && "isRaw" in ForwardAxis && ForwardAxis.isRaw ? true : undefined} />
        </Component>
      );
    };
    