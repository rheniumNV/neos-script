import { member, Member, Component } from "../../core";
    
    export interface DebugHandsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
Chirality?: member<any>;
    }
    
    export function DebugHands(props: DebugHandsInput){
      const { id, persistentId, updateOrder, Enabled,
User,
Chirality, } = props;
    
      return (
        <Component type="FrooxEngine.DebugHands" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="Chirality" id={typeof Chirality === "object" && "id" in Chirality ? Chirality?.id : undefined} value={typeof Chirality === "object" && "value" in Chirality ? Chirality?.value : Chirality} /* default: Left */  isRaw={typeof Chirality === "object" && "isRaw" in Chirality && Chirality.isRaw ? true : undefined} />
        </Component>
      );
    };
    