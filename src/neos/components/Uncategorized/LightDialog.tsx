import { member, Member, Component } from "../../core";
    
    export interface LightDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_intensitySlider?: member<any>;
_shadowStrengthSlider?: member<any>;
_closeButton?: member<any>;
_style?: member<any>;
    }
    
    export function LightDialog(props: LightDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_intensitySlider,
_shadowStrengthSlider,
_closeButton,
_style, } = props;
    
      return (
        <Component type="FrooxEngine.LightDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_intensitySlider" id={typeof _intensitySlider === "object" && "id" in _intensitySlider ? _intensitySlider?.id : undefined} value={typeof _intensitySlider === "object" && "value" in _intensitySlider ? _intensitySlider?.value : _intensitySlider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_shadowStrengthSlider" id={typeof _shadowStrengthSlider === "object" && "id" in _shadowStrengthSlider ? _shadowStrengthSlider?.id : undefined} value={typeof _shadowStrengthSlider === "object" && "value" in _shadowStrengthSlider ? _shadowStrengthSlider?.value : _shadowStrengthSlider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosButton]`} name="_closeButton" id={typeof _closeButton === "object" && "id" in _closeButton ? _closeButton?.id : undefined} value={typeof _closeButton === "object" && "value" in _closeButton ? _closeButton?.value : _closeButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosUIStyle]`} name="_style" id={typeof _style === "object" && "id" in _style ? _style?.id : undefined} value={typeof _style === "object" && "value" in _style ? _style?.value : _style} /* default: ID0 */  />
        </Component>
      );
    };
    