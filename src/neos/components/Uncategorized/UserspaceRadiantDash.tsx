import { member, Member, Component } from "../../core";
    
    export interface UserspaceRadiantDashInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BlockOpenClose?: member<boolean>;
Freeform?: member<boolean>;
_dash?: member<any>;
_dashVisualRoot?: member<any>;
_positioner?: member<any>;
_modalOverlay?: member<any>;
_legacyInventoryPanel?: member<any>;
_legacyInventory?: member<any>;
_slider?: member<any>;
_lookat?: member<any>;
_uiEditModeToggle?: member<any>;
_alwaysOnFacetRoot?: member<any>;
_screensWorkspace?: member<any>;
_topWorkspace?: member<any>;
    }
    
    export function UserspaceRadiantDash(props: UserspaceRadiantDashInput){
      const { id, persistentId, updateOrder, Enabled,
BlockOpenClose,
Freeform,
_dash,
_dashVisualRoot,
_positioner,
_modalOverlay,
_legacyInventoryPanel,
_legacyInventory,
_slider,
_lookat,
_uiEditModeToggle,
_alwaysOnFacetRoot,
_screensWorkspace,
_topWorkspace, } = props;
    
      return (
        <Component type="FrooxEngine.UserspaceRadiantDash" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockOpenClose" id={typeof BlockOpenClose === "object" && "id" in BlockOpenClose ? BlockOpenClose?.id : undefined} value={typeof BlockOpenClose === "object" && "value" in BlockOpenClose ? BlockOpenClose?.value : BlockOpenClose} /* default: false */  isRaw={typeof BlockOpenClose === "object" && "isRaw" in BlockOpenClose && BlockOpenClose.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Freeform" id={typeof Freeform === "object" && "id" in Freeform ? Freeform?.id : undefined} value={typeof Freeform === "object" && "value" in Freeform ? Freeform?.value : Freeform} /* default: false */  isRaw={typeof Freeform === "object" && "isRaw" in Freeform && Freeform.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RadiantDash]`} name="_dash" id={typeof _dash === "object" && "id" in _dash ? _dash?.id : undefined} value={typeof _dash === "object" && "value" in _dash ? _dash?.value : _dash} /* default: ID0 */  isRaw={typeof _dash === "object" && "isRaw" in _dash && _dash.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_dashVisualRoot" id={typeof _dashVisualRoot === "object" && "id" in _dashVisualRoot ? _dashVisualRoot?.id : undefined} value={typeof _dashVisualRoot === "object" && "value" in _dashVisualRoot ? _dashVisualRoot?.value : _dashVisualRoot} /* default: ID0 */  isRaw={typeof _dashVisualRoot === "object" && "isRaw" in _dashVisualRoot && _dashVisualRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UserInterfacePositioner]`} name="_positioner" id={typeof _positioner === "object" && "id" in _positioner ? _positioner?.id : undefined} value={typeof _positioner === "object" && "value" in _positioner ? _positioner?.value : _positioner} /* default: ID0 */  isRaw={typeof _positioner === "object" && "isRaw" in _positioner && _positioner.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ModalOverlayManager]`} name="_modalOverlay" id={typeof _modalOverlay === "object" && "id" in _modalOverlay ? _modalOverlay?.id : undefined} value={typeof _modalOverlay === "object" && "value" in _modalOverlay ? _modalOverlay?.value : _modalOverlay} /* default: ID0 */  isRaw={typeof _modalOverlay === "object" && "isRaw" in _modalOverlay && _modalOverlay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosCanvasPanel]`} name="_legacyInventoryPanel" id={typeof _legacyInventoryPanel === "object" && "id" in _legacyInventoryPanel ? _legacyInventoryPanel?.id : undefined} value={typeof _legacyInventoryPanel === "object" && "value" in _legacyInventoryPanel ? _legacyInventoryPanel?.value : _legacyInventoryPanel} /* default: ID0 */  isRaw={typeof _legacyInventoryPanel === "object" && "isRaw" in _legacyInventoryPanel && _legacyInventoryPanel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InventoryBrowser]`} name="_legacyInventory" id={typeof _legacyInventory === "object" && "id" in _legacyInventory ? _legacyInventory?.id : undefined} value={typeof _legacyInventory === "object" && "value" in _legacyInventory ? _legacyInventory?.value : _legacyInventory} /* default: ID0 */  isRaw={typeof _legacyInventory === "object" && "isRaw" in _legacyInventory && _legacyInventory.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slider]`} name="_slider" id={typeof _slider === "object" && "id" in _slider ? _slider?.id : undefined} value={typeof _slider === "object" && "value" in _slider ? _slider?.value : _slider} /* default: ID0 */  isRaw={typeof _slider === "object" && "isRaw" in _slider && _slider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LookAt]`} name="_lookat" id={typeof _lookat === "object" && "id" in _lookat ? _lookat?.id : undefined} value={typeof _lookat === "object" && "value" in _lookat ? _lookat?.value : _lookat} /* default: ID0 */  isRaw={typeof _lookat === "object" && "isRaw" in _lookat && _lookat.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_uiEditModeToggle" id={typeof _uiEditModeToggle === "object" && "id" in _uiEditModeToggle ? _uiEditModeToggle?.id : undefined} value={typeof _uiEditModeToggle === "object" && "value" in _uiEditModeToggle ? _uiEditModeToggle?.value : _uiEditModeToggle} /* default: ID0 */  isRaw={typeof _uiEditModeToggle === "object" && "isRaw" in _uiEditModeToggle && _uiEditModeToggle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_alwaysOnFacetRoot" id={typeof _alwaysOnFacetRoot === "object" && "id" in _alwaysOnFacetRoot ? _alwaysOnFacetRoot?.id : undefined} value={typeof _alwaysOnFacetRoot === "object" && "value" in _alwaysOnFacetRoot ? _alwaysOnFacetRoot?.value : _alwaysOnFacetRoot} /* default: ID0 */  isRaw={typeof _alwaysOnFacetRoot === "object" && "isRaw" in _alwaysOnFacetRoot && _alwaysOnFacetRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Workspace]`} name="_screensWorkspace" id={typeof _screensWorkspace === "object" && "id" in _screensWorkspace ? _screensWorkspace?.id : undefined} value={typeof _screensWorkspace === "object" && "value" in _screensWorkspace ? _screensWorkspace?.value : _screensWorkspace} /* default: ID0 */  isRaw={typeof _screensWorkspace === "object" && "isRaw" in _screensWorkspace && _screensWorkspace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Workspace]`} name="_topWorkspace" id={typeof _topWorkspace === "object" && "id" in _topWorkspace ? _topWorkspace?.id : undefined} value={typeof _topWorkspace === "object" && "value" in _topWorkspace ? _topWorkspace?.value : _topWorkspace} /* default: ID0 */  isRaw={typeof _topWorkspace === "object" && "isRaw" in _topWorkspace && _topWorkspace.isRaw ? true : undefined} />
        </Component>
      );
    };
    