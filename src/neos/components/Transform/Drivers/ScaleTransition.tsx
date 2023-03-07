import { member, Member, Component } from "../../../core";
    
    export interface ScaleTransitionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ShowField?: member<boolean>;
TransitionTimeField?: member<number>;
ShowScaleField?: member<[number, number, number]>;
HiddenScaleField?: member<[number, number, number]>;
CurveField?: member<any>;
_scaleDrive?: member<any>;
_enabledDrive?: member<any>;
    }
    
    export function ScaleTransition(props: ScaleTransitionInput){
      const { id, persistentId, updateOrder, Enabled,
ShowField,
TransitionTimeField,
ShowScaleField,
HiddenScaleField,
CurveField,
_scaleDrive,
_enabledDrive, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleTransition" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowField" id={typeof ShowField === "object" && "id" in ShowField ? ShowField?.id : undefined} value={typeof ShowField === "object" && "value" in ShowField ? ShowField?.value : ShowField} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TransitionTimeField" id={typeof TransitionTimeField === "object" && "id" in TransitionTimeField ? TransitionTimeField?.id : undefined} value={typeof TransitionTimeField === "object" && "value" in TransitionTimeField ? TransitionTimeField?.value : TransitionTimeField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ShowScaleField" id={typeof ShowScaleField === "object" && "id" in ShowScaleField ? ShowScaleField?.id : undefined} value={typeof ShowScaleField === "object" && "value" in ShowScaleField ? ShowScaleField?.value : ShowScaleField} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="HiddenScaleField" id={typeof HiddenScaleField === "object" && "id" in HiddenScaleField ? HiddenScaleField?.id : undefined} value={typeof HiddenScaleField === "object" && "value" in HiddenScaleField ? HiddenScaleField?.value : HiddenScaleField} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CurvePreset]`} name="CurveField" id={typeof CurveField === "object" && "id" in CurveField ? CurveField?.id : undefined} value={typeof CurveField === "object" && "value" in CurveField ? CurveField?.value : CurveField} /* default: Linear */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scaleDrive" id={typeof _scaleDrive === "object" && "id" in _scaleDrive ? _scaleDrive?.id : undefined} value={typeof _scaleDrive === "object" && "value" in _scaleDrive ? _scaleDrive?.value : _scaleDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_enabledDrive" id={typeof _enabledDrive === "object" && "id" in _enabledDrive ? _enabledDrive?.id : undefined} value={typeof _enabledDrive === "object" && "value" in _enabledDrive ? _enabledDrive?.value : _enabledDrive} /* default: ID0 */  />
        </Component>
      );
    };
    