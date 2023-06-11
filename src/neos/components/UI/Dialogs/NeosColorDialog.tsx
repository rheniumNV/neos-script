import { member, Member, Component } from "../../../core";
    
    export interface NeosColorDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Realtime?: member<boolean>;
TargetField?: member<any>;
_originalColor?: member<[number, number, number, number]>;
_hue?: member<number>;
_saturation?: member<number>;
_value?: member<number>;
_alpha?: member<number>;
_gain?: member<number>;
_rSlider?: member<any>;
_gSlider?: member<any>;
_bSlider?: member<any>;
_aSlider?: member<any>;
_gainSlider?: member<any>;
_rValue?: member<any>;
_gValue?: member<any>;
_bValue?: member<any>;
_aValue?: member<any>;
_gainValue?: member<any>;
_colorWheelMesh?: member<any>;
_okButton?: member<any>;
_cancelButton?: member<any>;
_style?: member<any>;
    }
    
    export function NeosColorDialog(props: NeosColorDialogInput){
      const { id, persistentId, updateOrder, Enabled,
Realtime,
TargetField,
_originalColor,
_hue,
_saturation,
_value,
_alpha,
_gain,
_rSlider,
_gSlider,
_bSlider,
_aSlider,
_gainSlider,
_rValue,
_gValue,
_bValue,
_aValue,
_gainValue,
_colorWheelMesh,
_okButton,
_cancelButton,
_style, } = props;
    
      return (
        <Component type="FrooxEngine.NeosColorDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Realtime" id={typeof Realtime === "object" && "id" in Realtime ? Realtime?.id : undefined} value={typeof Realtime === "object" && "value" in Realtime ? Realtime?.value : Realtime} /* default: false */  isRaw={typeof Realtime === "object" && "isRaw" in Realtime && Realtime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.color]]`} name="TargetField" id={typeof TargetField === "object" && "id" in TargetField ? TargetField?.id : undefined} value={typeof TargetField === "object" && "value" in TargetField ? TargetField?.value : TargetField} /* default: ID0 */  isRaw={typeof TargetField === "object" && "isRaw" in TargetField && TargetField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="_originalColor" id={typeof _originalColor === "object" && "id" in _originalColor ? _originalColor?.id : undefined} value={typeof _originalColor === "object" && "value" in _originalColor ? _originalColor?.value : _originalColor} /* default: [0; 0; 0; 0] */  isRaw={typeof _originalColor === "object" && "isRaw" in _originalColor && _originalColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_hue" id={typeof _hue === "object" && "id" in _hue ? _hue?.id : undefined} value={typeof _hue === "object" && "value" in _hue ? _hue?.value : _hue} /* default: 0 */  isRaw={typeof _hue === "object" && "isRaw" in _hue && _hue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_saturation" id={typeof _saturation === "object" && "id" in _saturation ? _saturation?.id : undefined} value={typeof _saturation === "object" && "value" in _saturation ? _saturation?.value : _saturation} /* default: 0 */  isRaw={typeof _saturation === "object" && "isRaw" in _saturation && _saturation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_value" id={typeof _value === "object" && "id" in _value ? _value?.id : undefined} value={typeof _value === "object" && "value" in _value ? _value?.value : _value} /* default: 0 */  isRaw={typeof _value === "object" && "isRaw" in _value && _value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_alpha" id={typeof _alpha === "object" && "id" in _alpha ? _alpha?.id : undefined} value={typeof _alpha === "object" && "value" in _alpha ? _alpha?.value : _alpha} /* default: 0 */  isRaw={typeof _alpha === "object" && "isRaw" in _alpha && _alpha.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_gain" id={typeof _gain === "object" && "id" in _gain ? _gain?.id : undefined} value={typeof _gain === "object" && "value" in _gain ? _gain?.value : _gain} /* default: 0 */  isRaw={typeof _gain === "object" && "isRaw" in _gain && _gain.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_rSlider" id={typeof _rSlider === "object" && "id" in _rSlider ? _rSlider?.id : undefined} value={typeof _rSlider === "object" && "value" in _rSlider ? _rSlider?.value : _rSlider} /* default: ID0 */  isRaw={typeof _rSlider === "object" && "isRaw" in _rSlider && _rSlider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_gSlider" id={typeof _gSlider === "object" && "id" in _gSlider ? _gSlider?.id : undefined} value={typeof _gSlider === "object" && "value" in _gSlider ? _gSlider?.value : _gSlider} /* default: ID0 */  isRaw={typeof _gSlider === "object" && "isRaw" in _gSlider && _gSlider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_bSlider" id={typeof _bSlider === "object" && "id" in _bSlider ? _bSlider?.id : undefined} value={typeof _bSlider === "object" && "value" in _bSlider ? _bSlider?.value : _bSlider} /* default: ID0 */  isRaw={typeof _bSlider === "object" && "isRaw" in _bSlider && _bSlider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_aSlider" id={typeof _aSlider === "object" && "id" in _aSlider ? _aSlider?.id : undefined} value={typeof _aSlider === "object" && "value" in _aSlider ? _aSlider?.value : _aSlider} /* default: ID0 */  isRaw={typeof _aSlider === "object" && "isRaw" in _aSlider && _aSlider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_gainSlider" id={typeof _gainSlider === "object" && "id" in _gainSlider ? _gainSlider?.id : undefined} value={typeof _gainSlider === "object" && "value" in _gainSlider ? _gainSlider?.value : _gainSlider} /* default: ID0 */  isRaw={typeof _gainSlider === "object" && "isRaw" in _gainSlider && _gainSlider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_rValue" id={typeof _rValue === "object" && "id" in _rValue ? _rValue?.id : undefined} value={typeof _rValue === "object" && "value" in _rValue ? _rValue?.value : _rValue} /* default: ID0 */  isRaw={typeof _rValue === "object" && "isRaw" in _rValue && _rValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_gValue" id={typeof _gValue === "object" && "id" in _gValue ? _gValue?.id : undefined} value={typeof _gValue === "object" && "value" in _gValue ? _gValue?.value : _gValue} /* default: ID0 */  isRaw={typeof _gValue === "object" && "isRaw" in _gValue && _gValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_bValue" id={typeof _bValue === "object" && "id" in _bValue ? _bValue?.id : undefined} value={typeof _bValue === "object" && "value" in _bValue ? _bValue?.value : _bValue} /* default: ID0 */  isRaw={typeof _bValue === "object" && "isRaw" in _bValue && _bValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_aValue" id={typeof _aValue === "object" && "id" in _aValue ? _aValue?.id : undefined} value={typeof _aValue === "object" && "value" in _aValue ? _aValue?.value : _aValue} /* default: ID0 */  isRaw={typeof _aValue === "object" && "isRaw" in _aValue && _aValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_gainValue" id={typeof _gainValue === "object" && "id" in _gainValue ? _gainValue?.id : undefined} value={typeof _gainValue === "object" && "value" in _gainValue ? _gainValue?.value : _gainValue} /* default: ID0 */  isRaw={typeof _gainValue === "object" && "isRaw" in _gainValue && _gainValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ColorWheelTriangleMesh]`} name="_colorWheelMesh" id={typeof _colorWheelMesh === "object" && "id" in _colorWheelMesh ? _colorWheelMesh?.id : undefined} value={typeof _colorWheelMesh === "object" && "value" in _colorWheelMesh ? _colorWheelMesh?.value : _colorWheelMesh} /* default: ID0 */  isRaw={typeof _colorWheelMesh === "object" && "isRaw" in _colorWheelMesh && _colorWheelMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosButton]`} name="_okButton" id={typeof _okButton === "object" && "id" in _okButton ? _okButton?.id : undefined} value={typeof _okButton === "object" && "value" in _okButton ? _okButton?.value : _okButton} /* default: ID0 */  isRaw={typeof _okButton === "object" && "isRaw" in _okButton && _okButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosButton]`} name="_cancelButton" id={typeof _cancelButton === "object" && "id" in _cancelButton ? _cancelButton?.id : undefined} value={typeof _cancelButton === "object" && "value" in _cancelButton ? _cancelButton?.value : _cancelButton} /* default: ID0 */  isRaw={typeof _cancelButton === "object" && "isRaw" in _cancelButton && _cancelButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosUIStyle]`} name="_style" id={typeof _style === "object" && "id" in _style ? _style?.id : undefined} value={typeof _style === "object" && "value" in _style ? _style?.value : _style} /* default: ID0 */  isRaw={typeof _style === "object" && "isRaw" in _style && _style.isRaw ? true : undefined} />
        </Component>
      );
    };
    