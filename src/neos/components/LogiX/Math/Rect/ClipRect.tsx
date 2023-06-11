import { member, Member, Component } from "../../../../core";
    
    export interface ClipRectInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Rect?: member<any>;
Mask?: member<any>;
    }
    
    export function ClipRect(props: ClipRectInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Rect,
Mask, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Rects.ClipRect" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.Rect]`} name="Rect" id={typeof Rect === "object" && "id" in Rect ? Rect?.id : undefined} value={typeof Rect === "object" && "value" in Rect ? Rect?.value : Rect} /* default: ID0 */  isRaw={typeof Rect === "object" && "isRaw" in Rect && Rect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.Rect]`} name="Mask" id={typeof Mask === "object" && "id" in Mask ? Mask?.id : undefined} value={typeof Mask === "object" && "value" in Mask ? Mask?.value : Mask} /* default: ID0 */  isRaw={typeof Mask === "object" && "isRaw" in Mask && Mask.isRaw ? true : undefined} />
        </Component>
      );
    };
    