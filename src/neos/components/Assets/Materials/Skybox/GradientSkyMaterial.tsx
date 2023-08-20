import { member, Member, Component } from "../../../../core";
    
    export interface GradientSkyMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
BaseColor?: member<[number, number, number, number]>;
_gradients?: member<any>;
    }
    
    export function GradientSkyMaterial(props: GradientSkyMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
BaseColor,
_gradients, } = props;
    
      return (
        <Component type="FrooxEngine.GradientSkyMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BaseColor" id={typeof BaseColor === "object" && "id" in BaseColor ? BaseColor?.id : undefined} value={typeof BaseColor === "object" && "value" in BaseColor ? BaseColor?.value : BaseColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BaseColor === "object" && "isRaw" in BaseColor && BaseColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.GradientSkyMaterial+Gradient]`} name="_gradients" id={typeof _gradients === "object" && "id" in _gradients ? _gradients?.id : undefined} value={typeof _gradients === "object" && "value" in _gradients ? _gradients?.value : _gradients} /* default: FrooxEngine.SyncList`1[FrooxEngine.GradientSkyMaterial+Gradient] */  isRaw={typeof _gradients === "object" && "isRaw" in _gradients && _gradients.isRaw ? true : undefined} />
        </Component>
      );
    };
    