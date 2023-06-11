import { member, Member, Component } from "../../../core";
    
    export interface AudioClipAssetMetadataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AudioClip?: member<any>;
SampleRate?: member<any>;
Channels?: member<any>;
ChannelCount?: member<any>;
SampleCount?: member<any>;
Duration?: member<any>;
Extension?: member<any>;
CodecInfo?: member<any>;
FullyDecoded?: member<any>;
    }
    
    export function AudioClipAssetMetadata(props: AudioClipAssetMetadataInput){
      const { id, persistentId, updateOrder, Enabled,
AudioClip,
SampleRate,
Channels,
ChannelCount,
SampleCount,
Duration,
Extension,
CodecInfo,
FullyDecoded, } = props;
    
      return (
        <Component type="FrooxEngine.AudioClipAssetMetadata" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="AudioClip" id={typeof AudioClip === "object" && "id" in AudioClip ? AudioClip?.id : undefined} value={typeof AudioClip === "object" && "value" in AudioClip ? AudioClip?.value : AudioClip} /* default: ID0 */  isRaw={typeof AudioClip === "object" && "isRaw" in AudioClip && AudioClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="SampleRate" id={typeof SampleRate === "object" && "id" in SampleRate ? SampleRate?.id : undefined} value={typeof SampleRate === "object" && "value" in SampleRate ? SampleRate?.value : SampleRate} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof SampleRate === "object" && "isRaw" in SampleRate && SampleRate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[CodeX.ChannelConfiguration]`} name="Channels" id={typeof Channels === "object" && "id" in Channels ? Channels?.id : undefined} value={typeof Channels === "object" && "value" in Channels ? Channels?.value : Channels} /* default: FrooxEngine.RawOutput`1[CodeX.ChannelConfiguration] */  isRaw={typeof Channels === "object" && "isRaw" in Channels && Channels.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="ChannelCount" id={typeof ChannelCount === "object" && "id" in ChannelCount ? ChannelCount?.id : undefined} value={typeof ChannelCount === "object" && "value" in ChannelCount ? ChannelCount?.value : ChannelCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof ChannelCount === "object" && "isRaw" in ChannelCount && ChannelCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="SampleCount" id={typeof SampleCount === "object" && "id" in SampleCount ? SampleCount?.id : undefined} value={typeof SampleCount === "object" && "value" in SampleCount ? SampleCount?.value : SampleCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof SampleCount === "object" && "isRaw" in SampleCount && SampleCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Double]`} name="Duration" id={typeof Duration === "object" && "id" in Duration ? Duration?.id : undefined} value={typeof Duration === "object" && "value" in Duration ? Duration?.value : Duration} /* default: FrooxEngine.RawOutput`1[System.Double] */  isRaw={typeof Duration === "object" && "isRaw" in Duration && Duration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="Extension" id={typeof Extension === "object" && "id" in Extension ? Extension?.id : undefined} value={typeof Extension === "object" && "value" in Extension ? Extension?.value : Extension} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof Extension === "object" && "isRaw" in Extension && Extension.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="CodecInfo" id={typeof CodecInfo === "object" && "id" in CodecInfo ? CodecInfo?.id : undefined} value={typeof CodecInfo === "object" && "value" in CodecInfo ? CodecInfo?.value : CodecInfo} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof CodecInfo === "object" && "isRaw" in CodecInfo && CodecInfo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="FullyDecoded" id={typeof FullyDecoded === "object" && "id" in FullyDecoded ? FullyDecoded?.id : undefined} value={typeof FullyDecoded === "object" && "value" in FullyDecoded ? FullyDecoded?.value : FullyDecoded} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof FullyDecoded === "object" && "isRaw" in FullyDecoded && FullyDecoded.isRaw ? true : undefined} />
        </Component>
      );
    };
    