import { member, Member, Component } from "../../../core";
    
    export interface ObjectSlicerTipInput {
        
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
ApplyToObjectRoot?: member<boolean>;
EdgeColor?: member<[number, number, number, number]>;
EdgeStart?: member<number>;
EdgeEnd?: member<number>;
_slicers?: member<any>;
_sliceMaterials?: member<any>;
    }
    
    export function ObjectSlicerTip(props: ObjectSlicerTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
ApplyToObjectRoot,
EdgeColor,
EdgeStart,
EdgeEnd,
_slicers,
_sliceMaterials, } = props;
    
      return (
        <Component type="FrooxEngine.ObjectSlicerTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ApplyToObjectRoot" id={typeof ApplyToObjectRoot === "object" && "id" in ApplyToObjectRoot ? ApplyToObjectRoot?.id : undefined} value={typeof ApplyToObjectRoot === "object" && "value" in ApplyToObjectRoot ? ApplyToObjectRoot?.value : ApplyToObjectRoot} /* default: false */  isRaw={typeof ApplyToObjectRoot === "object" && "isRaw" in ApplyToObjectRoot && ApplyToObjectRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EdgeColor" id={typeof EdgeColor === "object" && "id" in EdgeColor ? EdgeColor?.id : undefined} value={typeof EdgeColor === "object" && "value" in EdgeColor ? EdgeColor?.value : EdgeColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EdgeColor === "object" && "isRaw" in EdgeColor && EdgeColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeStart" id={typeof EdgeStart === "object" && "id" in EdgeStart ? EdgeStart?.id : undefined} value={typeof EdgeStart === "object" && "value" in EdgeStart ? EdgeStart?.value : EdgeStart} /* default: 0 */  isRaw={typeof EdgeStart === "object" && "isRaw" in EdgeStart && EdgeStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeEnd" id={typeof EdgeEnd === "object" && "id" in EdgeEnd ? EdgeEnd?.id : undefined} value={typeof EdgeEnd === "object" && "value" in EdgeEnd ? EdgeEnd?.value : EdgeEnd} /* default: 0 */  isRaw={typeof EdgeEnd === "object" && "isRaw" in EdgeEnd && EdgeEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.GenericSlicer]`} name="_slicers" id={typeof _slicers === "object" && "id" in _slicers ? _slicers?.id : undefined} value={typeof _slicers === "object" && "value" in _slicers ? _slicers?.value : _slicers} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.GenericSlicer] */  isRaw={typeof _slicers === "object" && "isRaw" in _slicers && _slicers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.PBS_Slice]`} name="_sliceMaterials" id={typeof _sliceMaterials === "object" && "id" in _sliceMaterials ? _sliceMaterials?.id : undefined} value={typeof _sliceMaterials === "object" && "value" in _sliceMaterials ? _sliceMaterials?.value : _sliceMaterials} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.PBS_Slice] */  isRaw={typeof _sliceMaterials === "object" && "isRaw" in _sliceMaterials && _sliceMaterials.isRaw ? true : undefined} />
        </Component>
      );
    };
    