import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VolumePlaneSlicerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Mode?: member<any>;
HighlightColor?: member<[number, number, number, number]>;
HighlightRange?: member<number>;
_offItem?: member<any>;
_sliceItem?: member<any>;
_highlightItem?: member<any>;
_colorItem?: member<any>;
_arc?: member<any>;
_colorDialog?: member<any>;
_grabGrid?: member<any>;
    }
    
    export function VolumePlaneSlicer(props: VolumePlaneSlicerInput){
      const { id, persistentId, updateOrder, Enabled,
Mode,
HighlightColor,
HighlightRange,
_offItem,
_sliceItem,
_highlightItem,
_colorItem,
_arc,
_colorDialog,
_grabGrid, } = props;
    
      return (
        <Component type="FrooxEngine.VolumePlaneSlicer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VolumePlaneMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: Off */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="HighlightColor" id={typeof HighlightColor === "object" && "id" in HighlightColor ? HighlightColor?.id : undefined} value={typeof HighlightColor === "object" && "value" in HighlightColor ? HighlightColor?.value : HighlightColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HighlightRange" id={typeof HighlightRange === "object" && "id" in HighlightRange ? HighlightRange?.id : undefined} value={typeof HighlightRange === "object" && "value" in HighlightRange ? HighlightRange?.value : HighlightRange} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_offItem" id={typeof _offItem === "object" && "id" in _offItem ? _offItem?.id : undefined} value={typeof _offItem === "object" && "value" in _offItem ? _offItem?.value : _offItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_sliceItem" id={typeof _sliceItem === "object" && "id" in _sliceItem ? _sliceItem?.id : undefined} value={typeof _sliceItem === "object" && "value" in _sliceItem ? _sliceItem?.value : _sliceItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_highlightItem" id={typeof _highlightItem === "object" && "id" in _highlightItem ? _highlightItem?.id : undefined} value={typeof _highlightItem === "object" && "value" in _highlightItem ? _highlightItem?.value : _highlightItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_colorItem" id={typeof _colorItem === "object" && "id" in _colorItem ? _colorItem?.id : undefined} value={typeof _colorItem === "object" && "value" in _colorItem ? _colorItem?.value : _colorItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+ItemsArc]`} name="_arc" id={typeof _arc === "object" && "id" in _arc ? _arc?.id : undefined} value={typeof _arc === "object" && "value" in _arc ? _arc?.value : _arc} /* default: ID0 */  />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.NeosColorDialog]`} name="_colorDialog" id={typeof _colorDialog === "object" && "id" in _colorDialog ? _colorDialog?.id : undefined} value={typeof _colorDialog === "object" && "value" in _colorDialog ? _colorDialog?.value : _colorDialog} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_grabGrid" id={typeof _grabGrid === "object" && "id" in _grabGrid ? _grabGrid?.id : undefined} value={typeof _grabGrid === "object" && "value" in _grabGrid ? _grabGrid?.value : _grabGrid} /* default: ID0 */  />
        </Component>
      );
    };
    