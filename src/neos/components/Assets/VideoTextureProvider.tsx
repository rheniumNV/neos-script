import { member, Member, Component } from "../../core";
    
    export interface VideoTextureProviderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
Stream?: member<boolean>;
Volume?: member<number>;
ForcePlaybackEngine?: member<any>;
ForceVideoStreamingServiceParsing?: member<boolean>;
CurrentPlaybackEngine?: member<any>;
CurrentClockError?: member<any>;
FilterMode?: member<any>;
AnisotropicLevel?: member<number>;
WrapModeU?: member<any>;
WrapModeV?: member<any>;
AudioTrackIndex?: member<any>;
PreferAudioOnly?: member<boolean>;
MaxWidth?: member<any>;
MaxHeight?: member<any>;
    }
    
    export function VideoTextureProvider(props: VideoTextureProviderInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
Stream,
Volume,
ForcePlaybackEngine,
ForceVideoStreamingServiceParsing,
CurrentPlaybackEngine,
CurrentClockError,
FilterMode,
AnisotropicLevel,
WrapModeU,
WrapModeV,
AudioTrackIndex,
PreferAudioOnly,
MaxWidth,
MaxHeight, } = props;
    
      return (
        <Component type="FrooxEngine.VideoTextureProvider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  isRaw={typeof URL === "object" && "isRaw" in URL && URL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Stream" id={typeof Stream === "object" && "id" in Stream ? Stream?.id : undefined} value={typeof Stream === "object" && "value" in Stream ? Stream?.value : Stream} /* default: false */  isRaw={typeof Stream === "object" && "isRaw" in Stream && Stream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Volume" id={typeof Volume === "object" && "id" in Volume ? Volume?.id : undefined} value={typeof Volume === "object" && "value" in Volume ? Volume?.value : Volume} /* default: 0 */  isRaw={typeof Volume === "object" && "isRaw" in Volume && Volume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="ForcePlaybackEngine" id={typeof ForcePlaybackEngine === "object" && "id" in ForcePlaybackEngine ? ForcePlaybackEngine?.id : undefined} value={typeof ForcePlaybackEngine === "object" && "value" in ForcePlaybackEngine ? ForcePlaybackEngine?.value : ForcePlaybackEngine} /* default: <i>null</i> */  isRaw={typeof ForcePlaybackEngine === "object" && "isRaw" in ForcePlaybackEngine && ForcePlaybackEngine.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceVideoStreamingServiceParsing" id={typeof ForceVideoStreamingServiceParsing === "object" && "id" in ForceVideoStreamingServiceParsing ? ForceVideoStreamingServiceParsing?.id : undefined} value={typeof ForceVideoStreamingServiceParsing === "object" && "value" in ForceVideoStreamingServiceParsing ? ForceVideoStreamingServiceParsing?.value : ForceVideoStreamingServiceParsing} /* default: false */  isRaw={typeof ForceVideoStreamingServiceParsing === "object" && "isRaw" in ForceVideoStreamingServiceParsing && ForceVideoStreamingServiceParsing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="CurrentPlaybackEngine" id={typeof CurrentPlaybackEngine === "object" && "id" in CurrentPlaybackEngine ? CurrentPlaybackEngine?.id : undefined} value={typeof CurrentPlaybackEngine === "object" && "value" in CurrentPlaybackEngine ? CurrentPlaybackEngine?.value : CurrentPlaybackEngine} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof CurrentPlaybackEngine === "object" && "isRaw" in CurrentPlaybackEngine && CurrentPlaybackEngine.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CurrentClockError" id={typeof CurrentClockError === "object" && "id" in CurrentClockError ? CurrentClockError?.id : undefined} value={typeof CurrentClockError === "object" && "value" in CurrentClockError ? CurrentClockError?.value : CurrentClockError} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof CurrentClockError === "object" && "isRaw" in CurrentClockError && CurrentClockError.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureFilterMode]`} name="FilterMode" id={typeof FilterMode === "object" && "id" in FilterMode ? FilterMode?.id : undefined} value={typeof FilterMode === "object" && "value" in FilterMode ? FilterMode?.value : FilterMode} /* default: Point */  isRaw={typeof FilterMode === "object" && "isRaw" in FilterMode && FilterMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AnisotropicLevel" id={typeof AnisotropicLevel === "object" && "id" in AnisotropicLevel ? AnisotropicLevel?.id : undefined} value={typeof AnisotropicLevel === "object" && "value" in AnisotropicLevel ? AnisotropicLevel?.value : AnisotropicLevel} /* default: 0 */  isRaw={typeof AnisotropicLevel === "object" && "isRaw" in AnisotropicLevel && AnisotropicLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`} name="WrapModeU" id={typeof WrapModeU === "object" && "id" in WrapModeU ? WrapModeU?.id : undefined} value={typeof WrapModeU === "object" && "value" in WrapModeU ? WrapModeU?.value : WrapModeU} /* default: Repeat */  isRaw={typeof WrapModeU === "object" && "isRaw" in WrapModeU && WrapModeU.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureWrapMode]`} name="WrapModeV" id={typeof WrapModeV === "object" && "id" in WrapModeV ? WrapModeV?.id : undefined} value={typeof WrapModeV === "object" && "value" in WrapModeV ? WrapModeV?.value : WrapModeV} /* default: Repeat */  isRaw={typeof WrapModeV === "object" && "isRaw" in WrapModeV && WrapModeV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`} name="AudioTrackIndex" id={typeof AudioTrackIndex === "object" && "id" in AudioTrackIndex ? AudioTrackIndex?.id : undefined} value={typeof AudioTrackIndex === "object" && "value" in AudioTrackIndex ? AudioTrackIndex?.value : AudioTrackIndex} /* default: <i>null</i> */  isRaw={typeof AudioTrackIndex === "object" && "isRaw" in AudioTrackIndex && AudioTrackIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreferAudioOnly" id={typeof PreferAudioOnly === "object" && "id" in PreferAudioOnly ? PreferAudioOnly?.id : undefined} value={typeof PreferAudioOnly === "object" && "value" in PreferAudioOnly ? PreferAudioOnly?.value : PreferAudioOnly} /* default: false */  isRaw={typeof PreferAudioOnly === "object" && "isRaw" in PreferAudioOnly && PreferAudioOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`} name="MaxWidth" id={typeof MaxWidth === "object" && "id" in MaxWidth ? MaxWidth?.id : undefined} value={typeof MaxWidth === "object" && "value" in MaxWidth ? MaxWidth?.value : MaxWidth} /* default: <i>null</i> */  isRaw={typeof MaxWidth === "object" && "isRaw" in MaxWidth && MaxWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`} name="MaxHeight" id={typeof MaxHeight === "object" && "id" in MaxHeight ? MaxHeight?.id : undefined} value={typeof MaxHeight === "object" && "value" in MaxHeight ? MaxHeight?.value : MaxHeight} /* default: <i>null</i> */  isRaw={typeof MaxHeight === "object" && "isRaw" in MaxHeight && MaxHeight.isRaw ? true : undefined} />
        </Component>
      );
    };
    