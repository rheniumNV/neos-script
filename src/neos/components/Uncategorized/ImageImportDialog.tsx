import { member, Member, Component } from "../../core";
    
    export interface ImageImportDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
swapPanel?: member<any>;
path?: member<any>;
_projection?: member<any>;
_layout?: member<any>;
_screenshot?: member<boolean>;
_lut?: member<boolean>;
    }
    
    export function ImageImportDialog(props: ImageImportDialogInput){
      const { id, persistentId, updateOrder, Enabled,
swapPanel,
path,
_projection,
_layout,
_screenshot,
_lut, } = props;
    
      return (
        <Component type="FrooxEngine.ImageImportDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSwapCanvasPanel]`} name="swapPanel" id={typeof swapPanel === "object" && "id" in swapPanel ? swapPanel?.id : undefined} value={typeof swapPanel === "object" && "value" in swapPanel ? swapPanel?.value : swapPanel} /* default: ID0 */  isRaw={typeof swapPanel === "object" && "isRaw" in swapPanel && swapPanel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegateList\`1[System.Action\`1[FrooxEngine.UIX.UIBuilder]]`} name="path" id={typeof path === "object" && "id" in path ? path?.id : undefined} value={typeof path === "object" && "value" in path ? path?.value : path} /* default: FrooxEngine.SyncDelegateList`1[System.Action`1[FrooxEngine.UIX.UIBuilder]] */  isRaw={typeof path === "object" && "isRaw" in path && path.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ImageProjection]`} name="_projection" id={typeof _projection === "object" && "id" in _projection ? _projection?.id : undefined} value={typeof _projection === "object" && "value" in _projection ? _projection?.value : _projection} /* default: Perspective */  isRaw={typeof _projection === "object" && "isRaw" in _projection && _projection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StereoLayout]`} name="_layout" id={typeof _layout === "object" && "id" in _layout ? _layout?.id : undefined} value={typeof _layout === "object" && "value" in _layout ? _layout?.value : _layout} /* default: None */  isRaw={typeof _layout === "object" && "isRaw" in _layout && _layout.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_screenshot" id={typeof _screenshot === "object" && "id" in _screenshot ? _screenshot?.id : undefined} value={typeof _screenshot === "object" && "value" in _screenshot ? _screenshot?.value : _screenshot} /* default: false */  isRaw={typeof _screenshot === "object" && "isRaw" in _screenshot && _screenshot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_lut" id={typeof _lut === "object" && "id" in _lut ? _lut?.id : undefined} value={typeof _lut === "object" && "value" in _lut ? _lut?.value : _lut} /* default: false */  isRaw={typeof _lut === "object" && "isRaw" in _lut && _lut.isRaw ? true : undefined} />
        </Component>
      );
    };
    