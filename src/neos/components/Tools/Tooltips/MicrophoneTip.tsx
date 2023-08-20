import { member, Member, Component } from "../../../core";
    
    export interface MicrophoneTipInput {
        
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
Format?: member<any>;
Quality?: member<number>;
Mode?: member<any>;
Source?: member<any>;
RecordingUser?: member<any>;
IsRecording?: member<any>;
    }
    
    export function MicrophoneTip(props: MicrophoneTipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
Format,
Quality,
Mode,
Source,
RecordingUser,
IsRecording, } = props;
    
      return (
        <Component type="FrooxEngine.MicrophoneTip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  isRaw={typeof TipReference === "object" && "isRaw" in TipReference && TipReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  isRaw={typeof BlockGripEquip === "object" && "isRaw" in BlockGripEquip && BlockGripEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  isRaw={typeof BlockRemoteEquip === "object" && "isRaw" in BlockRemoteEquip && BlockRemoteEquip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  isRaw={typeof EquipName === "object" && "isRaw" in EquipName && EquipName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  isRaw={typeof _overrideActiveTool === "object" && "isRaw" in _overrideActiveTool && _overrideActiveTool.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  isRaw={typeof _gripPosesGenerated === "object" && "isRaw" in _gripPosesGenerated && _gripPosesGenerated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MicrophoneTip+RecordFormat]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: WAV */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Quality" id={typeof Quality === "object" && "id" in Quality ? Quality?.id : undefined} value={typeof Quality === "object" && "value" in Quality ? Quality?.value : Quality} /* default: 0 */  isRaw={typeof Quality === "object" && "isRaw" in Quality && Quality.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MicrophoneTip+RecordMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: Hold */  isRaw={typeof Mode === "object" && "isRaw" in Mode && Mode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MicrophoneTip+DataSource]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: FilteredAndNormalized */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="RecordingUser" id={typeof RecordingUser === "object" && "id" in RecordingUser ? RecordingUser?.id : undefined} value={typeof RecordingUser === "object" && "value" in RecordingUser ? RecordingUser?.value : RecordingUser} /* default: ID0 */  isRaw={typeof RecordingUser === "object" && "isRaw" in RecordingUser && RecordingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsRecording" id={typeof IsRecording === "object" && "id" in IsRecording ? IsRecording?.id : undefined} value={typeof IsRecording === "object" && "value" in IsRecording ? IsRecording?.value : IsRecording} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof IsRecording === "object" && "isRaw" in IsRecording && IsRecording.isRaw ? true : undefined} />
        </Component>
      );
    };
    