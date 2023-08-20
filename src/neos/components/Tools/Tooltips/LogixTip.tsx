import { member, Member, Component } from "../../../core";
    
    export interface LogixTipInput {
        
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
Material?: member<any>;
Label?: member<any>;
PackingRoot?: member<any>;
ShowExperimental?: member<boolean>;
ActiveNodeType?: member<any>;
_tempWireTarget?: member<any>;
_useProjectionInVR?: member<boolean>;
_traversal?: member<any>;
_extract?: member<any>;
_nodeSelector?: member<any>;
_longPressIndicator?: member<any>;
    }
    
    export function LogixTip(props: LogixTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
Material,
Label,
PackingRoot,
ShowExperimental,
ActiveNodeType,
_tempWireTarget,
_useProjectionInVR,
_traversal,
_extract,
_nodeSelector,
_longPressIndicator, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.LogixTip" id={id} persistentId={persistentId} updateOrder={updateOrder} version={2}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: ID0 */  isRaw={typeof Label === "object" && "isRaw" in Label && Label.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PackingRoot" id={typeof PackingRoot === "object" && "id" in PackingRoot ? PackingRoot?.id : undefined} value={typeof PackingRoot === "object" && "value" in PackingRoot ? PackingRoot?.value : PackingRoot} /* default: ID0 */  isRaw={typeof PackingRoot === "object" && "isRaw" in PackingRoot && PackingRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowExperimental" id={typeof ShowExperimental === "object" && "id" in ShowExperimental ? ShowExperimental?.id : undefined} value={typeof ShowExperimental === "object" && "value" in ShowExperimental ? ShowExperimental?.value : ShowExperimental} /* default: false */  isRaw={typeof ShowExperimental === "object" && "isRaw" in ShowExperimental && ShowExperimental.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncType`} name="ActiveNodeType" id={typeof ActiveNodeType === "object" && "id" in ActiveNodeType ? ActiveNodeType?.id : undefined} value={typeof ActiveNodeType === "object" && "value" in ActiveNodeType ? ActiveNodeType?.value : ActiveNodeType} /* default: <i>null</i> */  isRaw={typeof ActiveNodeType === "object" && "isRaw" in ActiveNodeType && ActiveNodeType.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_tempWireTarget" id={typeof _tempWireTarget === "object" && "id" in _tempWireTarget ? _tempWireTarget?.id : undefined} value={typeof _tempWireTarget === "object" && "value" in _tempWireTarget ? _tempWireTarget?.value : _tempWireTarget} /* default: ID0 */  isRaw={typeof _tempWireTarget === "object" && "isRaw" in _tempWireTarget && _tempWireTarget.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_useProjectionInVR" id={typeof _useProjectionInVR === "object" && "id" in _useProjectionInVR ? _useProjectionInVR?.id : undefined} value={typeof _useProjectionInVR === "object" && "value" in _useProjectionInVR ? _useProjectionInVR?.value : _useProjectionInVR} /* default: false */  isRaw={typeof _useProjectionInVR === "object" && "isRaw" in _useProjectionInVR && _useProjectionInVR.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.LogiX.LogixTraversal]`} name="_traversal" id={typeof _traversal === "object" && "id" in _traversal ? _traversal?.id : undefined} value={typeof _traversal === "object" && "value" in _traversal ? _traversal?.value : _traversal} /* default: Complete */  isRaw={typeof _traversal === "object" && "isRaw" in _traversal && _traversal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.LogiX.LogixTip+ExtractMode]`} name="_extract" id={typeof _extract === "object" && "id" in _extract ? _extract?.id : undefined} value={typeof _extract === "object" && "value" in _extract ? _extract?.value : _extract} /* default: Interface */  isRaw={typeof _extract === "object" && "isRaw" in _extract && _extract.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.LogiX.LogixNodeSelector]`} name="_nodeSelector" id={typeof _nodeSelector === "object" && "id" in _nodeSelector ? _nodeSelector?.id : undefined} value={typeof _nodeSelector === "object" && "value" in _nodeSelector ? _nodeSelector?.value : _nodeSelector} /* default: ID0 */  isRaw={typeof _nodeSelector === "object" && "isRaw" in _nodeSelector && _nodeSelector.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RingMesh]`} name="_longPressIndicator" id={typeof _longPressIndicator === "object" && "id" in _longPressIndicator ? _longPressIndicator?.id : undefined} value={typeof _longPressIndicator === "object" && "value" in _longPressIndicator ? _longPressIndicator?.value : _longPressIndicator} /* default: ID0 */  isRaw={typeof _longPressIndicator === "object" && "isRaw" in _longPressIndicator && _longPressIndicator.isRaw ? true : undefined} />
        </Component>
      );
    };
    