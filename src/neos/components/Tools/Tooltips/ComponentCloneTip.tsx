import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ApplyToObjectRoot" id={typeof ApplyToObjectRoot === "object" && "id" in ApplyToObjectRoot ? ApplyToObjectRoot?.id : undefined} value={typeof ApplyToObjectRoot === "object" && "value" in ApplyToObjectRoot ? ApplyToObjectRoot?.value : ApplyToObjectRoot} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EnsureSingleInstance" id={typeof EnsureSingleInstance === "object" && "id" in EnsureSingleInstance ? EnsureSingleInstance?.id : undefined} value={typeof EnsureSingleInstance === "object" && "value" in EnsureSingleInstance ? EnsureSingleInstance?.value : EnsureSingleInstance} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowPickup" id={typeof AllowPickup === "object" && "id" in AllowPickup ? AllowPickup?.id : undefined} value={typeof AllowPickup === "object" && "value" in AllowPickup ? AllowPickup?.value : AllowPickup} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_label" id={typeof _label === "object" && "id" in _label ? _label?.id : undefined} value={typeof _label === "object" && "value" in _label ? _label?.value : _label} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_templateRoot" id={typeof _templateRoot === "object" && "id" in _templateRoot ? _templateRoot?.id : undefined} value={typeof _templateRoot === "object" && "value" in _templateRoot ? _templateRoot?.value : _templateRoot} /* default: ID0 */  />
        </Component>
      );
    };
    