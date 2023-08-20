import { member, Member, Component } from "../../core";
    
    export interface CharacterColliderWorldLinkInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TriggersOnly?: member<boolean>;
OpenOnContactStart?: member<boolean>;
OpenOnContactStay?: member<boolean>;
OpenOnContactEnd?: member<boolean>;
WorldLink?: member<any>;
    }
    
    export function CharacterColliderWorldLink(props: CharacterColliderWorldLinkInput){
      const { id, persistentId, updateOrder, Enabled,
TriggersOnly,
OpenOnContactStart,
OpenOnContactStay,
OpenOnContactEnd,
WorldLink, } = props;
    
      return (
        <Component type="FrooxEngine.CharacterColliderWorldLink" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TriggersOnly" id={typeof TriggersOnly === "object" && "id" in TriggersOnly ? TriggersOnly?.id : undefined} value={typeof TriggersOnly === "object" && "value" in TriggersOnly ? TriggersOnly?.value : TriggersOnly} /* default: false */  isRaw={typeof TriggersOnly === "object" && "isRaw" in TriggersOnly && TriggersOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OpenOnContactStart" id={typeof OpenOnContactStart === "object" && "id" in OpenOnContactStart ? OpenOnContactStart?.id : undefined} value={typeof OpenOnContactStart === "object" && "value" in OpenOnContactStart ? OpenOnContactStart?.value : OpenOnContactStart} /* default: false */  isRaw={typeof OpenOnContactStart === "object" && "isRaw" in OpenOnContactStart && OpenOnContactStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OpenOnContactStay" id={typeof OpenOnContactStay === "object" && "id" in OpenOnContactStay ? OpenOnContactStay?.id : undefined} value={typeof OpenOnContactStay === "object" && "value" in OpenOnContactStay ? OpenOnContactStay?.value : OpenOnContactStay} /* default: false */  isRaw={typeof OpenOnContactStay === "object" && "isRaw" in OpenOnContactStay && OpenOnContactStay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OpenOnContactEnd" id={typeof OpenOnContactEnd === "object" && "id" in OpenOnContactEnd ? OpenOnContactEnd?.id : undefined} value={typeof OpenOnContactEnd === "object" && "value" in OpenOnContactEnd ? OpenOnContactEnd?.value : OpenOnContactEnd} /* default: false */  isRaw={typeof OpenOnContactEnd === "object" && "isRaw" in OpenOnContactEnd && OpenOnContactEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldLink]`} name="WorldLink" id={typeof WorldLink === "object" && "id" in WorldLink ? WorldLink?.id : undefined} value={typeof WorldLink === "object" && "value" in WorldLink ? WorldLink?.value : WorldLink} /* default: ID0 */  isRaw={typeof WorldLink === "object" && "isRaw" in WorldLink && WorldLink.isRaw ? true : undefined} />
        </Component>
      );
    };
    