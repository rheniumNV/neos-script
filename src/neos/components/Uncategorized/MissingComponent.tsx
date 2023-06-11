import { member, Member, Component } from "../../core";
    
    export interface MissingComponentInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Type?: member<any>;
    }
    
    export function MissingComponent(props: MissingComponentInput){
      const { id, persistentId, updateOrder, Enabled,
Type, } = props;
    
      return (
        <Component type="FrooxEngine.MissingComponent" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Type" id={typeof Type === "object" && "id" in Type ? Type?.id : undefined} value={typeof Type === "object" && "value" in Type ? Type?.value : Type} /* default: <i>null</i> */  isRaw={typeof Type === "object" && "isRaw" in Type && Type.isRaw ? true : undefined} />
        </Component>
      );
    };
    