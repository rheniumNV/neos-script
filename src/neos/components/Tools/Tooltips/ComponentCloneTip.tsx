import { member, Member, Component } from "../../../core";
    
    export interface ComponentCloneTipInput {
        
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
EnsureSingleInstance?: member<boolean>;
AllowPickup?: member<boolean>;
_label?: member<any>;
_templateRoot?: member<any>;
    }
    
    export function ComponentCloneTip(props: ComponentCloneTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
ApplyToObjectRoot,
EnsureSingleInstance,
AllowPickup,
_label,
_templateRoot, } = props;
    
      return (
        <Component type="FrooxEngine.ComponentCloneTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ApplyToObjectRoot" id={typeof ApplyToObjectRoot === "object" && "id" in ApplyToObjectRoot ? ApplyToObjectRoot?.id : undefined} value={typeof ApplyToObjectRoot === "object" && "value" in ApplyToObjectRoot ? ApplyToObjectRoot?.value : ApplyToObjectRoot} /* default: false */  isRaw={typeof ApplyToObjectRoot === "object" && "isRaw" in ApplyToObjectRoot && ApplyToObjectRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EnsureSingleInstance" id={typeof EnsureSingleInstance === "object" && "id" in EnsureSingleInstance ? EnsureSingleInstance?.id : undefined} value={typeof EnsureSingleInstance === "object" && "value" in EnsureSingleInstance ? EnsureSingleInstance?.value : EnsureSingleInstance} /* default: false */  isRaw={typeof EnsureSingleInstance === "object" && "isRaw" in EnsureSingleInstance && EnsureSingleInstance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowPickup" id={typeof AllowPickup === "object" && "id" in AllowPickup ? AllowPickup?.id : undefined} value={typeof AllowPickup === "object" && "value" in AllowPickup ? AllowPickup?.value : AllowPickup} /* default: false */  isRaw={typeof AllowPickup === "object" && "isRaw" in AllowPickup && AllowPickup.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_label" id={typeof _label === "object" && "id" in _label ? _label?.id : undefined} value={typeof _label === "object" && "value" in _label ? _label?.value : _label} /* default: ID0 */  isRaw={typeof _label === "object" && "isRaw" in _label && _label.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_templateRoot" id={typeof _templateRoot === "object" && "id" in _templateRoot ? _templateRoot?.id : undefined} value={typeof _templateRoot === "object" && "value" in _templateRoot ? _templateRoot?.value : _templateRoot} /* default: ID0 */  isRaw={typeof _templateRoot === "object" && "isRaw" in _templateRoot && _templateRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    