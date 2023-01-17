import { member, Member, Component } from "../../core";
    
    export interface SlotInspectorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_selectionReference?: member<any>;
_rootSlot?: member<any>;
_childContainer?: member<any>;
_depth?: member<number>;
_expander?: member<any>;
_expanderIndicator?: member<any>;
_slotNameText?: member<any>;
    }
    
    export function SlotInspector(props: SlotInspectorInput){
      const { id, persistentId, updateOrder, Enabled,
_selectionReference,
_rootSlot,
_childContainer,
_depth,
_expander,
_expanderIndicator,
_slotNameText, } = props;
    
      return (
        <Component type="FrooxEngine.SlotInspector" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[FrooxEngine.Slot]]`} name="_selectionReference" id={typeof _selectionReference === "object" && "id" in _selectionReference ? _selectionReference?.id : undefined} value={typeof _selectionReference === "object" && "value" in _selectionReference ? _selectionReference?.value : _selectionReference} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rootSlot" id={typeof _rootSlot === "object" && "id" in _rootSlot ? _rootSlot?.id : undefined} value={typeof _rootSlot === "object" && "value" in _rootSlot ? _rootSlot?.value : _rootSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_childContainer" id={typeof _childContainer === "object" && "id" in _childContainer ? _childContainer?.id : undefined} value={typeof _childContainer === "object" && "value" in _childContainer ? _childContainer?.value : _childContainer} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_depth" id={typeof _depth === "object" && "id" in _depth ? _depth?.id : undefined} value={typeof _depth === "object" && "value" in _depth ? _depth?.value : _depth} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Expander]`} name="_expander" id={typeof _expander === "object" && "id" in _expander ? _expander?.id : undefined} value={typeof _expander === "object" && "value" in _expander ? _expander?.value : _expander} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextExpandIndicator]`} name="_expanderIndicator" id={typeof _expanderIndicator === "object" && "id" in _expanderIndicator ? _expanderIndicator?.id : undefined} value={typeof _expanderIndicator === "object" && "value" in _expanderIndicator ? _expanderIndicator?.value : _expanderIndicator} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_slotNameText" id={typeof _slotNameText === "object" && "id" in _slotNameText ? _slotNameText?.id : undefined} value={typeof _slotNameText === "object" && "value" in _slotNameText ? _slotNameText?.value : _slotNameText} /* default: ID0 */  />
        </Component>
      );
    };
    