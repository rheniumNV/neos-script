import { member, Member, Component } from "../../core";
    
    export interface MemberProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Member?: member<any>;
    }
    
    export function MemberProxy(props: MemberProxyInput){
      const { id, persistentId, updateOrder, Enabled,
Member, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.MemberProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef`} name="Member" id={typeof Member === "object" && "id" in Member ? Member?.id : undefined} value={typeof Member === "object" && "value" in Member ? Member?.value : Member} /* default: ID0 */  isRaw={typeof Member === "object" && "isRaw" in Member && Member.isRaw ? true : undefined} />
        </Component>
      );
    };
    