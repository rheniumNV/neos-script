import { member, Member, Component } from "../../../core";
    
    export interface DevToolTipInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TipReference?: member<any>;
BlockGripEquip?: member<boolean>;
BlockRemoteEquip?: member<boolean>;
EquipName?: member<any>;
_overrideActiveTool?: member<any>;
_gripPosesGenerated?: member<boolean>;
SelectionMode?: member<any>;
InteractionMode?: member<any>;
_selectedAnchor?: member<any>;
_selectedAnchorHighlight?: member<any>;
_material?: member<any>;
_currentGizmo?: member<any>;
_previousGizmo?: member<any>;
    }
    
    export function DevToolTip(props: DevToolTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
SelectionMode,
InteractionMode,
_selectedAnchor,
_selectedAnchorHighlight,
_material,
_currentGizmo,
_previousGizmo, } = props;
    
      return (
        <Component type="FrooxEngine.DevToolTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.DevToolTip+Selection]`} name="SelectionMode" id={typeof SelectionMode === "object" && "id" in SelectionMode ? SelectionMode?.id : undefined} value={typeof SelectionMode === "object" && "value" in SelectionMode ? SelectionMode?.value : SelectionMode} /* default: Single */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.DevToolTip+Interaction]`} name="InteractionMode" id={typeof InteractionMode === "object" && "id" in InteractionMode ? InteractionMode?.id : undefined} value={typeof InteractionMode === "object" && "value" in InteractionMode ? InteractionMode?.value : InteractionMode} /* default: Tip */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PointAnchor]`} name="_selectedAnchor" id={typeof _selectedAnchor === "object" && "id" in _selectedAnchor ? _selectedAnchor?.id : undefined} value={typeof _selectedAnchor === "object" && "value" in _selectedAnchor ? _selectedAnchor?.value : _selectedAnchor} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_selectedAnchorHighlight" id={typeof _selectedAnchorHighlight === "object" && "id" in _selectedAnchorHighlight ? _selectedAnchorHighlight?.id : undefined} value={typeof _selectedAnchorHighlight === "object" && "value" in _selectedAnchorHighlight ? _selectedAnchorHighlight?.value : _selectedAnchorHighlight} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_currentGizmo" id={typeof _currentGizmo === "object" && "id" in _currentGizmo ? _currentGizmo?.id : undefined} value={typeof _currentGizmo === "object" && "value" in _currentGizmo ? _currentGizmo?.value : _currentGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_previousGizmo" id={typeof _previousGizmo === "object" && "id" in _previousGizmo ? _previousGizmo?.id : undefined} value={typeof _previousGizmo === "object" && "value" in _previousGizmo ? _previousGizmo?.value : _previousGizmo} /* default: ID0 */  />
        </Component>
      );
    };
    