import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GridContainerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
EditMode?: member<boolean>;
FacetsRoot?: member<any>;
_background?: member<any>;
_content?: member<any>;
_overlay?: member<any>;
CellSize?: member<[number, number]>;
Padding?: member<[number, number]>;
    }
    
    export function GridContainer(props: GridContainerInput){
      const { id, persistentId, updateOrder, Enabled,
EditMode,
FacetsRoot,
_background,
_content,
_overlay,
CellSize,
Padding, } = props;
    
      return (
        <Component type="FrooxEngine.GridContainer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditMode" id={typeof EditMode === "object" && "id" in EditMode ? EditMode?.id : undefined} value={typeof EditMode === "object" && "value" in EditMode ? EditMode?.value : EditMode} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="FacetsRoot" id={typeof FacetsRoot === "object" && "id" in FacetsRoot ? FacetsRoot?.id : undefined} value={typeof FacetsRoot === "object" && "value" in FacetsRoot ? FacetsRoot?.value : FacetsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_background" id={typeof _background === "object" && "id" in _background ? _background?.id : undefined} value={typeof _background === "object" && "value" in _background ? _background?.value : _background} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_content" id={typeof _content === "object" && "id" in _content ? _content?.id : undefined} value={typeof _content === "object" && "value" in _content ? _content?.value : _content} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_overlay" id={typeof _overlay === "object" && "id" in _overlay ? _overlay?.id : undefined} value={typeof _overlay === "object" && "value" in _overlay ? _overlay?.value : _overlay} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="CellSize" id={typeof CellSize === "object" && "id" in CellSize ? CellSize?.id : undefined} value={typeof CellSize === "object" && "value" in CellSize ? CellSize?.value : CellSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Padding" id={typeof Padding === "object" && "id" in Padding ? Padding?.id : undefined} value={typeof Padding === "object" && "value" in Padding ? Padding?.value : Padding} /* default: [0; 0] */  />
        </Component>
      );
    };
    