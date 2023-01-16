import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ClassroomHighlightInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_manager?: member<any>;
_hover?: member<boolean>;
_highlightRoot?: member<any>;
_material?: member<any>;
    }
    
    export function ClassroomHighlight(props: ClassroomHighlightInput){
      const { id, persistentId, updateOrder, Enabled,
_manager,
_hover,
_highlightRoot,
_material, } = props;
    
      return (
        <Component type="BusinessX.ClassroomHighlight" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[BusinessX.ClassroomHighlightManager]`} name="_manager" id={typeof _manager === "object" && "id" in _manager ? _manager?.id : undefined} value={typeof _manager === "object" && "value" in _manager ? _manager?.value : _manager} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_hover" id={typeof _hover === "object" && "id" in _hover ? _hover?.id : undefined} value={typeof _hover === "object" && "value" in _hover ? _hover?.value : _hover} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_highlightRoot" id={typeof _highlightRoot === "object" && "id" in _highlightRoot ? _highlightRoot?.id : undefined} value={typeof _highlightRoot === "object" && "value" in _highlightRoot ? _highlightRoot?.value : _highlightRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  />
        </Component>
      );
    };
    