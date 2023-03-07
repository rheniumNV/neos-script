import { member, Member, Component } from "../../../core";
    
    export interface StringJoinInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Operands?: member<any>;
Separator?: member<any>;
    }
    
    export function StringJoin(props: StringJoinInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Operands,
Separator, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.StringJoin" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LogiX.Input\`1[System.String]]`} name="Operands" id={typeof Operands === "object" && "id" in Operands ? Operands?.id : undefined} value={typeof Operands === "object" && "value" in Operands ? Operands?.value : Operands} /* default: FrooxEngine.SyncList`1[FrooxEngine.LogiX.Input`1[System.String]] */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Separator" id={typeof Separator === "object" && "id" in Separator ? Separator?.id : undefined} value={typeof Separator === "object" && "value" in Separator ? Separator?.value : Separator} /* default: ID0 */  />
        </Component>
      );
    };
    