import { member, Member, Component } from "../../core";
    
    export interface WorldLightSourcesWizardInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Root?: member<any>;
ProcessPointLights?: member<boolean>;
ProcessSpotLights?: member<boolean>;
ProcessDirectionalLights?: member<boolean>;
ProcessDisabled?: member<boolean>;
TargetShadowType?: member<any>;
_tag?: member<any>;
_intensityField?: member<any>;
_rangeField?: member<any>;
    }
    
    export function WorldLightSourcesWizard(props: WorldLightSourcesWizardInput){
      const { id, persistentId, updateOrder, Enabled,
Root,
ProcessPointLights,
ProcessSpotLights,
ProcessDirectionalLights,
ProcessDisabled,
TargetShadowType,
_tag,
_intensityField,
_rangeField, } = props;
    
      return (
        <Component type="FrooxEngine.WorldLightSourcesWizard" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  isRaw={typeof Root === "object" && "isRaw" in Root && Root.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProcessPointLights" id={typeof ProcessPointLights === "object" && "id" in ProcessPointLights ? ProcessPointLights?.id : undefined} value={typeof ProcessPointLights === "object" && "value" in ProcessPointLights ? ProcessPointLights?.value : ProcessPointLights} /* default: false */  isRaw={typeof ProcessPointLights === "object" && "isRaw" in ProcessPointLights && ProcessPointLights.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProcessSpotLights" id={typeof ProcessSpotLights === "object" && "id" in ProcessSpotLights ? ProcessSpotLights?.id : undefined} value={typeof ProcessSpotLights === "object" && "value" in ProcessSpotLights ? ProcessSpotLights?.value : ProcessSpotLights} /* default: false */  isRaw={typeof ProcessSpotLights === "object" && "isRaw" in ProcessSpotLights && ProcessSpotLights.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProcessDirectionalLights" id={typeof ProcessDirectionalLights === "object" && "id" in ProcessDirectionalLights ? ProcessDirectionalLights?.id : undefined} value={typeof ProcessDirectionalLights === "object" && "value" in ProcessDirectionalLights ? ProcessDirectionalLights?.value : ProcessDirectionalLights} /* default: false */  isRaw={typeof ProcessDirectionalLights === "object" && "isRaw" in ProcessDirectionalLights && ProcessDirectionalLights.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProcessDisabled" id={typeof ProcessDisabled === "object" && "id" in ProcessDisabled ? ProcessDisabled?.id : undefined} value={typeof ProcessDisabled === "object" && "value" in ProcessDisabled ? ProcessDisabled?.value : ProcessDisabled} /* default: false */  isRaw={typeof ProcessDisabled === "object" && "isRaw" in ProcessDisabled && ProcessDisabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ShadowType]`} name="TargetShadowType" id={typeof TargetShadowType === "object" && "id" in TargetShadowType ? TargetShadowType?.id : undefined} value={typeof TargetShadowType === "object" && "value" in TargetShadowType ? TargetShadowType?.value : TargetShadowType} /* default: None */  isRaw={typeof TargetShadowType === "object" && "isRaw" in TargetShadowType && TargetShadowType.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_tag" id={typeof _tag === "object" && "id" in _tag ? _tag?.id : undefined} value={typeof _tag === "object" && "value" in _tag ? _tag?.value : _tag} /* default: ID0 */  isRaw={typeof _tag === "object" && "isRaw" in _tag && _tag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="_intensityField" id={typeof _intensityField === "object" && "id" in _intensityField ? _intensityField?.id : undefined} value={typeof _intensityField === "object" && "value" in _intensityField ? _intensityField?.value : _intensityField} /* default: ID0 */  isRaw={typeof _intensityField === "object" && "isRaw" in _intensityField && _intensityField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="_rangeField" id={typeof _rangeField === "object" && "id" in _rangeField ? _rangeField?.id : undefined} value={typeof _rangeField === "object" && "value" in _rangeField ? _rangeField?.value : _rangeField} /* default: ID0 */  isRaw={typeof _rangeField === "object" && "isRaw" in _rangeField && _rangeField.isRaw ? true : undefined} />
        </Component>
      );
    };
    