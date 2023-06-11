import { member, Member, Component } from "../../../../core";
    
    export interface SetDatetimeKindNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
DateTimeInput?: member<any>;
DateTimeKind?: member<any>;
    }
    
    export function SetDatetimeKindNode(props: SetDatetimeKindNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
DateTimeInput,
DateTimeKind, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Time.SetDatetimeKindNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.DateTime]`} name="DateTimeInput" id={typeof DateTimeInput === "object" && "id" in DateTimeInput ? DateTimeInput?.id : undefined} value={typeof DateTimeInput === "object" && "value" in DateTimeInput ? DateTimeInput?.value : DateTimeInput} /* default: ID0 */  isRaw={typeof DateTimeInput === "object" && "isRaw" in DateTimeInput && DateTimeInput.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.DateTimeKind]`} name="DateTimeKind" id={typeof DateTimeKind === "object" && "id" in DateTimeKind ? DateTimeKind?.id : undefined} value={typeof DateTimeKind === "object" && "value" in DateTimeKind ? DateTimeKind?.value : DateTimeKind} /* default: ID0 */  isRaw={typeof DateTimeKind === "object" && "isRaw" in DateTimeKind && DateTimeKind.isRaw ? true : undefined} />
        </Component>
      );
    };
    