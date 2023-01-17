import { member, Member, Component } from "../../core";
    
    export interface InteractiveCameraUserItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Control?: member<any>;
_username?: member<any>;
_voiceDefault?: member<any>;
_voiceMute?: member<any>;
_voiceShout?: member<any>;
_voiceBroadcast?: member<any>;
_groupAuto?: member<any>;
_groupExclude?: member<any>;
_groupInclude?: member<any>;
_cameraOperator?: member<any>;
_framingTarget?: member<any>;
_volumeSlider?: member<any>;
    }
    
    export function InteractiveCameraUserItem(props: InteractiveCameraUserItemInput){
      const { id, persistentId, updateOrder, Enabled,
Control,
_username,
_voiceDefault,
_voiceMute,
_voiceShout,
_voiceBroadcast,
_groupAuto,
_groupExclude,
_groupInclude,
_cameraOperator,
_framingTarget,
_volumeSlider, } = props;
    
      return (
        <Component type="FrooxEngine.InteractiveCameraUserItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraControl]`} name="Control" id={typeof Control === "object" && "id" in Control ? Control?.id : undefined} value={typeof Control === "object" && "value" in Control ? Control?.value : Control} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_username" id={typeof _username === "object" && "id" in _username ? _username?.id : undefined} value={typeof _username === "object" && "value" in _username ? _username?.value : _username} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_voiceDefault" id={typeof _voiceDefault === "object" && "id" in _voiceDefault ? _voiceDefault?.id : undefined} value={typeof _voiceDefault === "object" && "value" in _voiceDefault ? _voiceDefault?.value : _voiceDefault} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_voiceMute" id={typeof _voiceMute === "object" && "id" in _voiceMute ? _voiceMute?.id : undefined} value={typeof _voiceMute === "object" && "value" in _voiceMute ? _voiceMute?.value : _voiceMute} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_voiceShout" id={typeof _voiceShout === "object" && "id" in _voiceShout ? _voiceShout?.id : undefined} value={typeof _voiceShout === "object" && "value" in _voiceShout ? _voiceShout?.value : _voiceShout} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_voiceBroadcast" id={typeof _voiceBroadcast === "object" && "id" in _voiceBroadcast ? _voiceBroadcast?.id : undefined} value={typeof _voiceBroadcast === "object" && "value" in _voiceBroadcast ? _voiceBroadcast?.value : _voiceBroadcast} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_groupAuto" id={typeof _groupAuto === "object" && "id" in _groupAuto ? _groupAuto?.id : undefined} value={typeof _groupAuto === "object" && "value" in _groupAuto ? _groupAuto?.value : _groupAuto} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_groupExclude" id={typeof _groupExclude === "object" && "id" in _groupExclude ? _groupExclude?.id : undefined} value={typeof _groupExclude === "object" && "value" in _groupExclude ? _groupExclude?.value : _groupExclude} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_groupInclude" id={typeof _groupInclude === "object" && "id" in _groupInclude ? _groupInclude?.id : undefined} value={typeof _groupInclude === "object" && "value" in _groupInclude ? _groupInclude?.value : _groupInclude} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_cameraOperator" id={typeof _cameraOperator === "object" && "id" in _cameraOperator ? _cameraOperator?.id : undefined} value={typeof _cameraOperator === "object" && "value" in _cameraOperator ? _cameraOperator?.value : _cameraOperator} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_framingTarget" id={typeof _framingTarget === "object" && "id" in _framingTarget ? _framingTarget?.id : undefined} value={typeof _framingTarget === "object" && "value" in _framingTarget ? _framingTarget?.value : _framingTarget} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Slider\`1[System.Single]]`} name="_volumeSlider" id={typeof _volumeSlider === "object" && "id" in _volumeSlider ? _volumeSlider?.id : undefined} value={typeof _volumeSlider === "object" && "value" in _volumeSlider ? _volumeSlider?.value : _volumeSlider} /* default: ID0 */  />
        </Component>
      );
    };
    