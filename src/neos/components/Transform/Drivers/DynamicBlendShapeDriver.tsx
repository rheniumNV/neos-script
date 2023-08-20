import { member, Member, Component } from "../../../core";
    
    export interface DynamicBlendShapeDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Renderer?: member<any>;
BlendShapes?: member<any>;
_lastRenderer?: member<any>;
    }
    
    export function DynamicBlendShapeDriver(props: DynamicBlendShapeDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Renderer,
BlendShapes,
_lastRenderer, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicBlendShapeDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SkinnedMeshRenderer]`} name="Renderer" id={typeof Renderer === "object" && "id" in Renderer ? Renderer?.id : undefined} value={typeof Renderer === "object" && "value" in Renderer ? Renderer?.value : Renderer} /* default: ID0 */  isRaw={typeof Renderer === "object" && "isRaw" in Renderer && Renderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.DynamicBlendShapeDriver+BlendShape]`} name="BlendShapes" id={typeof BlendShapes === "object" && "id" in BlendShapes ? BlendShapes?.id : undefined} value={typeof BlendShapes === "object" && "value" in BlendShapes ? BlendShapes?.value : BlendShapes} /* default: FrooxEngine.SyncList`1[FrooxEngine.DynamicBlendShapeDriver+BlendShape] */  isRaw={typeof BlendShapes === "object" && "isRaw" in BlendShapes && BlendShapes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SkinnedMeshRenderer]`} name="_lastRenderer" id={typeof _lastRenderer === "object" && "id" in _lastRenderer ? _lastRenderer?.id : undefined} value={typeof _lastRenderer === "object" && "value" in _lastRenderer ? _lastRenderer?.value : _lastRenderer} /* default: ID0 */  isRaw={typeof _lastRenderer === "object" && "isRaw" in _lastRenderer && _lastRenderer.isRaw ? true : undefined} />
        </Component>
      );
    };
    