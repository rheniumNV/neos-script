import { member, Member, Component } from "../../../core";
    
    export interface GlueTipInput {
        
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
GlueMode?: member<any>;
_indicatorColor?: member<any>;
_activeGlues?: member<any>;
    }
    
    export function GlueTip(props: GlueTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
GlueMode,
_indicatorColor,
_activeGlues, } = props;
    
      return (
        <Component type="FrooxEngine.GlueTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Glue+Mode]`} name="GlueMode" id={typeof GlueMode === "object" && "id" in GlueMode ? GlueMode?.id : undefined} value={typeof GlueMode === "object" && "value" in GlueMode ? GlueMode?.value : GlueMode} /* default: ParentObjects */  isRaw={typeof GlueMode === "object" && "isRaw" in GlueMode && GlueMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_indicatorColor" id={typeof _indicatorColor === "object" && "id" in _indicatorColor ? _indicatorColor?.id : undefined} value={typeof _indicatorColor === "object" && "value" in _indicatorColor ? _indicatorColor?.value : _indicatorColor} /* default: ID0 */  isRaw={typeof _indicatorColor === "object" && "isRaw" in _indicatorColor && _indicatorColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Glue]`} name="_activeGlues" id={typeof _activeGlues === "object" && "id" in _activeGlues ? _activeGlues?.id : undefined} value={typeof _activeGlues === "object" && "value" in _activeGlues ? _activeGlues?.value : _activeGlues} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Glue] */  isRaw={typeof _activeGlues === "object" && "isRaw" in _activeGlues && _activeGlues.isRaw ? true : undefined} />
        </Component>
      );
    };
    