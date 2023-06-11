import { member, Member, Component } from "../../core";
    
    export interface FullBodyCalibratorDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
_currentPanel?: member<any>;
_container?: member<any>;
_calibrator?: member<any>;
_currentPage?: member<any>;
_confirmTrackers?: member<any>;
_resetTrackers?: member<any>;
_calibrateAvatar?: member<any>;
_heightCompensation?: member<any>;
_useSymmetry?: member<any>;
_showBodyOverlay?: member<any>;
_showAvatarOverlay?: member<any>;
_hipsMapping?: member<any>;
_feetMapping?: member<any>;
_chestMapping?: member<any>;
_elbowsMapping?: member<any>;
_kneesMapping?: member<any>;
_heightField?: member<any>;
_heightWarning?: member<any>;
_useImperial?: member<boolean>;
    }
    
    export function FullBodyCalibratorDialog(props: FullBodyCalibratorDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
_currentPanel,
_container,
_calibrator,
_currentPage,
_confirmTrackers,
_resetTrackers,
_calibrateAvatar,
_heightCompensation,
_useSymmetry,
_showBodyOverlay,
_showAvatarOverlay,
_hipsMapping,
_feetMapping,
_chestMapping,
_elbowsMapping,
_kneesMapping,
_heightField,
_heightWarning,
_useImperial, } = props;
    
      return (
        <Component type="FrooxEngine.FullBodyCalibratorDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  isRaw={typeof _canvas === "object" && "isRaw" in _canvas && _canvas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  isRaw={typeof _panel === "object" && "isRaw" in _panel && _panel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_currentPanel" id={typeof _currentPanel === "object" && "id" in _currentPanel ? _currentPanel?.id : undefined} value={typeof _currentPanel === "object" && "value" in _currentPanel ? _currentPanel?.value : _currentPanel} /* default: ID0 */  isRaw={typeof _currentPanel === "object" && "isRaw" in _currentPanel && _currentPanel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_container" id={typeof _container === "object" && "id" in _container ? _container?.id : undefined} value={typeof _container === "object" && "value" in _container ? _container?.value : _container} /* default: ID0 */  isRaw={typeof _container === "object" && "isRaw" in _container && _container.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FullBodyCalibrator]`} name="_calibrator" id={typeof _calibrator === "object" && "id" in _calibrator ? _calibrator?.id : undefined} value={typeof _calibrator === "object" && "value" in _calibrator ? _calibrator?.value : _calibrator} /* default: ID0 */  isRaw={typeof _calibrator === "object" && "isRaw" in _calibrator && _calibrator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.FullBodyCalibratorDialog+Page]`} name="_currentPage" id={typeof _currentPage === "object" && "id" in _currentPage ? _currentPage?.id : undefined} value={typeof _currentPage === "object" && "value" in _currentPage ? _currentPage?.value : _currentPage} /* default: MappingTrackers */  isRaw={typeof _currentPage === "object" && "isRaw" in _currentPage && _currentPage.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_confirmTrackers" id={typeof _confirmTrackers === "object" && "id" in _confirmTrackers ? _confirmTrackers?.id : undefined} value={typeof _confirmTrackers === "object" && "value" in _confirmTrackers ? _confirmTrackers?.value : _confirmTrackers} /* default: ID0 */  isRaw={typeof _confirmTrackers === "object" && "isRaw" in _confirmTrackers && _confirmTrackers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_resetTrackers" id={typeof _resetTrackers === "object" && "id" in _resetTrackers ? _resetTrackers?.id : undefined} value={typeof _resetTrackers === "object" && "value" in _resetTrackers ? _resetTrackers?.value : _resetTrackers} /* default: ID0 */  isRaw={typeof _resetTrackers === "object" && "isRaw" in _resetTrackers && _resetTrackers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_calibrateAvatar" id={typeof _calibrateAvatar === "object" && "id" in _calibrateAvatar ? _calibrateAvatar?.id : undefined} value={typeof _calibrateAvatar === "object" && "value" in _calibrateAvatar ? _calibrateAvatar?.value : _calibrateAvatar} /* default: ID0 */  isRaw={typeof _calibrateAvatar === "object" && "isRaw" in _calibrateAvatar && _calibrateAvatar.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Slider\`1[System.Single]]`} name="_heightCompensation" id={typeof _heightCompensation === "object" && "id" in _heightCompensation ? _heightCompensation?.id : undefined} value={typeof _heightCompensation === "object" && "value" in _heightCompensation ? _heightCompensation?.value : _heightCompensation} /* default: ID0 */  isRaw={typeof _heightCompensation === "object" && "isRaw" in _heightCompensation && _heightCompensation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_useSymmetry" id={typeof _useSymmetry === "object" && "id" in _useSymmetry ? _useSymmetry?.id : undefined} value={typeof _useSymmetry === "object" && "value" in _useSymmetry ? _useSymmetry?.value : _useSymmetry} /* default: ID0 */  isRaw={typeof _useSymmetry === "object" && "isRaw" in _useSymmetry && _useSymmetry.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_showBodyOverlay" id={typeof _showBodyOverlay === "object" && "id" in _showBodyOverlay ? _showBodyOverlay?.id : undefined} value={typeof _showBodyOverlay === "object" && "value" in _showBodyOverlay ? _showBodyOverlay?.value : _showBodyOverlay} /* default: ID0 */  isRaw={typeof _showBodyOverlay === "object" && "isRaw" in _showBodyOverlay && _showBodyOverlay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_showAvatarOverlay" id={typeof _showAvatarOverlay === "object" && "id" in _showAvatarOverlay ? _showAvatarOverlay?.id : undefined} value={typeof _showAvatarOverlay === "object" && "value" in _showAvatarOverlay ? _showAvatarOverlay?.value : _showAvatarOverlay} /* default: ID0 */  isRaw={typeof _showAvatarOverlay === "object" && "isRaw" in _showAvatarOverlay && _showAvatarOverlay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_hipsMapping" id={typeof _hipsMapping === "object" && "id" in _hipsMapping ? _hipsMapping?.id : undefined} value={typeof _hipsMapping === "object" && "value" in _hipsMapping ? _hipsMapping?.value : _hipsMapping} /* default: ID0 */  isRaw={typeof _hipsMapping === "object" && "isRaw" in _hipsMapping && _hipsMapping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_feetMapping" id={typeof _feetMapping === "object" && "id" in _feetMapping ? _feetMapping?.id : undefined} value={typeof _feetMapping === "object" && "value" in _feetMapping ? _feetMapping?.value : _feetMapping} /* default: ID0 */  isRaw={typeof _feetMapping === "object" && "isRaw" in _feetMapping && _feetMapping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_chestMapping" id={typeof _chestMapping === "object" && "id" in _chestMapping ? _chestMapping?.id : undefined} value={typeof _chestMapping === "object" && "value" in _chestMapping ? _chestMapping?.value : _chestMapping} /* default: ID0 */  isRaw={typeof _chestMapping === "object" && "isRaw" in _chestMapping && _chestMapping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_elbowsMapping" id={typeof _elbowsMapping === "object" && "id" in _elbowsMapping ? _elbowsMapping?.id : undefined} value={typeof _elbowsMapping === "object" && "value" in _elbowsMapping ? _elbowsMapping?.value : _elbowsMapping} /* default: ID0 */  isRaw={typeof _elbowsMapping === "object" && "isRaw" in _elbowsMapping && _elbowsMapping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_kneesMapping" id={typeof _kneesMapping === "object" && "id" in _kneesMapping ? _kneesMapping?.id : undefined} value={typeof _kneesMapping === "object" && "value" in _kneesMapping ? _kneesMapping?.value : _kneesMapping} /* default: ID0 */  isRaw={typeof _kneesMapping === "object" && "isRaw" in _kneesMapping && _kneesMapping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.QuantityTextEditorParser\`1[QuantityX.Distance]]`} name="_heightField" id={typeof _heightField === "object" && "id" in _heightField ? _heightField?.id : undefined} value={typeof _heightField === "object" && "value" in _heightField ? _heightField?.value : _heightField} /* default: ID0 */  isRaw={typeof _heightField === "object" && "isRaw" in _heightField && _heightField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_heightWarning" id={typeof _heightWarning === "object" && "id" in _heightWarning ? _heightWarning?.id : undefined} value={typeof _heightWarning === "object" && "value" in _heightWarning ? _heightWarning?.value : _heightWarning} /* default: ID0 */  isRaw={typeof _heightWarning === "object" && "isRaw" in _heightWarning && _heightWarning.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_useImperial" id={typeof _useImperial === "object" && "id" in _useImperial ? _useImperial?.id : undefined} value={typeof _useImperial === "object" && "value" in _useImperial ? _useImperial?.value : _useImperial} /* default: false */  isRaw={typeof _useImperial === "object" && "isRaw" in _useImperial && _useImperial.isRaw ? true : undefined} />
        </Component>
      );
    };
    