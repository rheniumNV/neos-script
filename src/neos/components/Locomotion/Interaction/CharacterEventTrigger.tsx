import { member, Member, Component } from "../../../core";
    
    export interface CharacterEventTriggerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TriggersOnly?: member<boolean>;
TriggerEntered?: member<any>;
TriggerLeft?: member<any>;
IgnoreParentUser?: member<boolean>;
    }
    
    export function CharacterEventTrigger(props: CharacterEventTriggerInput){
      const { id, persistentId, updateOrder, Enabled,
TriggersOnly,
TriggerEntered,
TriggerLeft,
IgnoreParentUser, } = props;
    
      return (
        <Component type="FrooxEngine.CharacterEventTrigger" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TriggersOnly" id={typeof TriggersOnly === "object" && "id" in TriggersOnly ? TriggersOnly?.id : undefined} value={typeof TriggersOnly === "object" && "value" in TriggersOnly ? TriggersOnly?.value : TriggersOnly} /* default: false */  isRaw={typeof TriggersOnly === "object" && "isRaw" in TriggersOnly && TriggersOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegateList\`1[System.Action\`1[BaseX.float3]]`} name="TriggerEntered" id={typeof TriggerEntered === "object" && "id" in TriggerEntered ? TriggerEntered?.id : undefined} value={typeof TriggerEntered === "object" && "value" in TriggerEntered ? TriggerEntered?.value : TriggerEntered} /* default: FrooxEngine.SyncDelegateList`1[System.Action`1[BaseX.float3]] */  isRaw={typeof TriggerEntered === "object" && "isRaw" in TriggerEntered && TriggerEntered.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegateList\`1[System.Action\`1[BaseX.float3]]`} name="TriggerLeft" id={typeof TriggerLeft === "object" && "id" in TriggerLeft ? TriggerLeft?.id : undefined} value={typeof TriggerLeft === "object" && "value" in TriggerLeft ? TriggerLeft?.value : TriggerLeft} /* default: FrooxEngine.SyncDelegateList`1[System.Action`1[BaseX.float3]] */  isRaw={typeof TriggerLeft === "object" && "isRaw" in TriggerLeft && TriggerLeft.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreParentUser" id={typeof IgnoreParentUser === "object" && "id" in IgnoreParentUser ? IgnoreParentUser?.id : undefined} value={typeof IgnoreParentUser === "object" && "value" in IgnoreParentUser ? IgnoreParentUser?.value : IgnoreParentUser} /* default: false */  isRaw={typeof IgnoreParentUser === "object" && "isRaw" in IgnoreParentUser && IgnoreParentUser.isRaw ? true : undefined} />
        </Component>
      );
    };
    