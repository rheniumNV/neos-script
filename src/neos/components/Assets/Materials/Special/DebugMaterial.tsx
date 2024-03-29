import { member, Member, Component } from "../../../../core";
    
    export interface DebugMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
Scale?: member<number>;
Offset?: member<[number, number, number]>;
Visualize?: member<any>;
Normalize?: member<boolean>;
RenderQueue?: member<number>;
    }
    
    export function DebugMaterial(props: DebugMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
Scale,
Offset,
Visualize,
Normalize,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.DebugMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: 0 */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: [0; 0; 0] */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.DebugMaterial+MeshData]`} name="Visualize" id={typeof Visualize === "object" && "id" in Visualize ? Visualize?.id : undefined} value={typeof Visualize === "object" && "value" in Visualize ? Visualize?.value : Visualize} /* default: Position */  isRaw={typeof Visualize === "object" && "isRaw" in Visualize && Visualize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Normalize" id={typeof Normalize === "object" && "id" in Normalize ? Normalize?.id : undefined} value={typeof Normalize === "object" && "value" in Normalize ? Normalize?.value : Normalize} /* default: false */  isRaw={typeof Normalize === "object" && "isRaw" in Normalize && Normalize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
        </Component>
      );
    };
    