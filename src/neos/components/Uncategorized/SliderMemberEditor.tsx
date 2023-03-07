import { member, Member, Component } from "../../core";
    
    export interface SliderMemberEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Continuous?: member<boolean>;
_path?: member<any>;
_target?: member<any>;
_slider?: member<any>;
_sliderValue?: member<any>;
_textEditor?: member<any>;
    }
    
    export function SliderMemberEditor(props: SliderMemberEditorInput){
      const { id, persistentId, updateOrder, Enabled,
Continuous,
_path,
_target,
_slider,
_sliderValue,
_textEditor, } = props;
    
      return (
        <Component type="FrooxEngine.SliderMemberEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Continuous" id={typeof Continuous === "object" && "id" in Continuous ? Continuous?.id : undefined} value={typeof Continuous === "object" && "value" in Continuous ? Continuous?.value : Continuous} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_path" id={typeof _path === "object" && "id" in _path ? _path?.id : undefined} value={typeof _path === "object" && "value" in _path ? _path?.value : _path} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Slider\`1[System.Single]]`} name="_slider" id={typeof _slider === "object" && "id" in _slider ? _slider?.id : undefined} value={typeof _slider === "object" && "value" in _slider ? _slider?.value : _slider} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_sliderValue" id={typeof _sliderValue === "object" && "id" in _sliderValue ? _sliderValue?.id : undefined} value={typeof _sliderValue === "object" && "value" in _sliderValue ? _sliderValue?.value : _sliderValue} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PrimitiveMemberEditor]`} name="_textEditor" id={typeof _textEditor === "object" && "id" in _textEditor ? _textEditor?.id : undefined} value={typeof _textEditor === "object" && "value" in _textEditor ? _textEditor?.value : _textEditor} /* default: ID0 */  />
        </Component>
      );
    };
    