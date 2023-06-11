import { member, Member, Component } from "../../../core";
    
    export interface SlideSwapRegionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_current?: member<any>;
    }
    
    export function SlideSwapRegion(props: SlideSwapRegionInput){
      const { id, persistentId, updateOrder, Enabled,
_current, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.SlideSwapRegion" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_current" id={typeof _current === "object" && "id" in _current ? _current?.id : undefined} value={typeof _current === "object" && "value" in _current ? _current?.value : _current} /* default: ID0 */  isRaw={typeof _current === "object" && "isRaw" in _current && _current.isRaw ? true : undefined} />
        </Component>
      );
    };
    