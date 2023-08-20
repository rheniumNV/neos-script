import { member, Member, Component } from "../../core";
    
    export interface SceneInspectorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Root?: member<any>;
ComponentView?: member<any>;
_rootText?: member<any>;
_componentText?: member<any>;
_hierarchyContentRoot?: member<any>;
_componentsContentRoot?: member<any>;
_currentComponent?: member<any>;
_currentRoot?: member<any>;
    }
    
    export function SceneInspector(props: SceneInspectorInput){
      const { id, persistentId, updateOrder, Enabled,
Root,
ComponentView,
_rootText,
_componentText,
_hierarchyContentRoot,
_componentsContentRoot,
_currentComponent,
_currentRoot, } = props;
    
      return (
        <Component type="FrooxEngine.SceneInspector" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  isRaw={typeof Root === "object" && "isRaw" in Root && Root.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ComponentView" id={typeof ComponentView === "object" && "id" in ComponentView ? ComponentView?.id : undefined} value={typeof ComponentView === "object" && "value" in ComponentView ? ComponentView?.value : ComponentView} /* default: ID0 */  isRaw={typeof ComponentView === "object" && "isRaw" in ComponentView && ComponentView.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Sync\`1[System.String]]`} name="_rootText" id={typeof _rootText === "object" && "id" in _rootText ? _rootText?.id : undefined} value={typeof _rootText === "object" && "value" in _rootText ? _rootText?.value : _rootText} /* default: ID0 */  isRaw={typeof _rootText === "object" && "isRaw" in _rootText && _rootText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Sync\`1[System.String]]`} name="_componentText" id={typeof _componentText === "object" && "id" in _componentText ? _componentText?.id : undefined} value={typeof _componentText === "object" && "value" in _componentText ? _componentText?.value : _componentText} /* default: ID0 */  isRaw={typeof _componentText === "object" && "isRaw" in _componentText && _componentText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_hierarchyContentRoot" id={typeof _hierarchyContentRoot === "object" && "id" in _hierarchyContentRoot ? _hierarchyContentRoot?.id : undefined} value={typeof _hierarchyContentRoot === "object" && "value" in _hierarchyContentRoot ? _hierarchyContentRoot?.value : _hierarchyContentRoot} /* default: ID0 */  isRaw={typeof _hierarchyContentRoot === "object" && "isRaw" in _hierarchyContentRoot && _hierarchyContentRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_componentsContentRoot" id={typeof _componentsContentRoot === "object" && "id" in _componentsContentRoot ? _componentsContentRoot?.id : undefined} value={typeof _componentsContentRoot === "object" && "value" in _componentsContentRoot ? _componentsContentRoot?.value : _componentsContentRoot} /* default: ID0 */  isRaw={typeof _componentsContentRoot === "object" && "isRaw" in _componentsContentRoot && _componentsContentRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_currentComponent" id={typeof _currentComponent === "object" && "id" in _currentComponent ? _currentComponent?.id : undefined} value={typeof _currentComponent === "object" && "value" in _currentComponent ? _currentComponent?.value : _currentComponent} /* default: ID0 */  isRaw={typeof _currentComponent === "object" && "isRaw" in _currentComponent && _currentComponent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_currentRoot" id={typeof _currentRoot === "object" && "id" in _currentRoot ? _currentRoot?.id : undefined} value={typeof _currentRoot === "object" && "value" in _currentRoot ? _currentRoot?.value : _currentRoot} /* default: ID0 */  isRaw={typeof _currentRoot === "object" && "isRaw" in _currentRoot && _currentRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    