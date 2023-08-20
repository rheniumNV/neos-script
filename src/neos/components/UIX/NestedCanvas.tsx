import { member, Member, Component } from "../../core";
    
    export interface NestedCanvasInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetCanvas?: member<any>;
_renderOffset?: member<any>;
_maskDepth?: member<any>;
    }
    
    export function NestedCanvas(props: NestedCanvasInput){
      const { id, persistentId, updateOrder, Enabled,
TargetCanvas,
_renderOffset,
_maskDepth, } = props;
    
      return (
        <Component type="FrooxEngine.NestedCanvas" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="TargetCanvas" id={typeof TargetCanvas === "object" && "id" in TargetCanvas ? TargetCanvas?.id : undefined} value={typeof TargetCanvas === "object" && "value" in TargetCanvas ? TargetCanvas?.value : TargetCanvas} /* default: ID0 */  isRaw={typeof TargetCanvas === "object" && "isRaw" in TargetCanvas && TargetCanvas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_renderOffset" id={typeof _renderOffset === "object" && "id" in _renderOffset ? _renderOffset?.id : undefined} value={typeof _renderOffset === "object" && "value" in _renderOffset ? _renderOffset?.value : _renderOffset} /* default: ID0 */  isRaw={typeof _renderOffset === "object" && "isRaw" in _renderOffset && _renderOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Int32]`} name="_maskDepth" id={typeof _maskDepth === "object" && "id" in _maskDepth ? _maskDepth?.id : undefined} value={typeof _maskDepth === "object" && "value" in _maskDepth ? _maskDepth?.value : _maskDepth} /* default: ID0 */  isRaw={typeof _maskDepth === "object" && "isRaw" in _maskDepth && _maskDepth.isRaw ? true : undefined} />
        </Component>
      );
    };
    