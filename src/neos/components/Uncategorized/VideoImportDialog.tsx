import { member, Member, Component } from "../../core";
    
    export interface VideoImportDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
swapPanel?: member<any>;
path?: member<any>;
_videoType?: member<any>;
_stereoLayout?: member<any>;
_depthPreset?: member<any>;
    }
    
    export function VideoImportDialog(props: VideoImportDialogInput){
      const { id, persistentId, updateOrder, Enabled,
swapPanel,
path,
_videoType,
_stereoLayout,
_depthPreset, } = props;
    
      return (
        <Component type="FrooxEngine.VideoImportDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSwapCanvasPanel]`} name="swapPanel" id={typeof swapPanel === "object" && "id" in swapPanel ? swapPanel?.id : undefined} value={typeof swapPanel === "object" && "value" in swapPanel ? swapPanel?.value : swapPanel} /* default: ID0 */  isRaw={typeof swapPanel === "object" && "isRaw" in swapPanel && swapPanel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegateList\`1[System.Action\`1[FrooxEngine.UIX.UIBuilder]]`} name="path" id={typeof path === "object" && "id" in path ? path?.id : undefined} value={typeof path === "object" && "value" in path ? path?.value : path} /* default: FrooxEngine.SyncDelegateList`1[System.Action`1[FrooxEngine.UIX.UIBuilder]] */  isRaw={typeof path === "object" && "isRaw" in path && path.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VideoImportDialog+VideoType]`} name="_videoType" id={typeof _videoType === "object" && "id" in _videoType ? _videoType?.id : undefined} value={typeof _videoType === "object" && "value" in _videoType ? _videoType?.value : _videoType} /* default: Regular */  isRaw={typeof _videoType === "object" && "isRaw" in _videoType && _videoType.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StereoLayout]`} name="_stereoLayout" id={typeof _stereoLayout === "object" && "id" in _stereoLayout ? _stereoLayout?.id : undefined} value={typeof _stereoLayout === "object" && "value" in _stereoLayout ? _stereoLayout?.value : _stereoLayout} /* default: None */  isRaw={typeof _stereoLayout === "object" && "isRaw" in _stereoLayout && _stereoLayout.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VideoImportDialog+DepthPreset]`} name="_depthPreset" id={typeof _depthPreset === "object" && "id" in _depthPreset ? _depthPreset?.id : undefined} value={typeof _depthPreset === "object" && "value" in _depthPreset ? _depthPreset?.value : _depthPreset} /* default: Default */  isRaw={typeof _depthPreset === "object" && "isRaw" in _depthPreset && _depthPreset.isRaw ? true : undefined} />
        </Component>
      );
    };
    