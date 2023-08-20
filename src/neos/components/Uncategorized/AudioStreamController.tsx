import { member, Member, Component } from "../../core";
    
    export interface AudioStreamControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_stream?: member<any>;
_audioOutput?: member<any>;
    }
    
    export function AudioStreamController(props: AudioStreamControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_stream,
_audioOutput, } = props;
    
      return (
        <Component type="FrooxEngine.AudioStreamController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OpusStream\`1[CodeX.StereoSample]]`} name="_stream" id={typeof _stream === "object" && "id" in _stream ? _stream?.id : undefined} value={typeof _stream === "object" && "value" in _stream ? _stream?.value : _stream} /* default: ID0 */  isRaw={typeof _stream === "object" && "isRaw" in _stream && _stream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="_audioOutput" id={typeof _audioOutput === "object" && "id" in _audioOutput ? _audioOutput?.id : undefined} value={typeof _audioOutput === "object" && "value" in _audioOutput ? _audioOutput?.value : _audioOutput} /* default: ID0 */  isRaw={typeof _audioOutput === "object" && "isRaw" in _audioOutput && _audioOutput.isRaw ? true : undefined} />
        </Component>
      );
    };
    