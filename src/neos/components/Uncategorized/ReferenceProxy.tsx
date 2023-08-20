import { member, Member, Component } from "../../core";
    
    export interface ReferenceProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Reference?: member<any>;
SpawnInstanceOnTrigger?: member<boolean>;
    }
    
    export function ReferenceProxy(props: ReferenceProxyInput){
      const { id, persistentId, updateOrder, Enabled,
Reference,
SpawnInstanceOnTrigger, } = props;
    
      return (
        <Component type="FrooxEngine.ReferenceProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: ID0 */  isRaw={typeof Reference === "object" && "isRaw" in Reference && Reference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SpawnInstanceOnTrigger" id={typeof SpawnInstanceOnTrigger === "object" && "id" in SpawnInstanceOnTrigger ? SpawnInstanceOnTrigger?.id : undefined} value={typeof SpawnInstanceOnTrigger === "object" && "value" in SpawnInstanceOnTrigger ? SpawnInstanceOnTrigger?.value : SpawnInstanceOnTrigger} /* default: false */  isRaw={typeof SpawnInstanceOnTrigger === "object" && "isRaw" in SpawnInstanceOnTrigger && SpawnInstanceOnTrigger.isRaw ? true : undefined} />
        </Component>
      );
    };
    