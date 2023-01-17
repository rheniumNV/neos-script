import { member, Member, Component } from "../../core";
    
    export interface FileBrowserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SelectedItem?: member<any>;
_previousSelectedItem?: member<any>;
AllowSelect?: member<boolean>;
ItemSize?: member<number>;
_selectedText?: member<any>;
_pathRoot?: member<any>;
_buttonsRoot?: member<any>;
_grid?: member<any>;
_tabSprite?: member<any>;
_loadingIndicator?: member<any>;
_swapper?: member<any>;
CurrentPath?: member<any>;
_lastPath?: member<any>;
_user?: member<any>;
_importButton?: member<any>;
_rawImportButton?: member<any>;
_createNewButton?: member<any>;
_reloadButton?: member<any>;
    }
    
    export function FileBrowser(props: FileBrowserInput){
      const { id, persistentId, updateOrder, Enabled,
SelectedItem,
_previousSelectedItem,
AllowSelect,
ItemSize,
_selectedText,
_pathRoot,
_buttonsRoot,
_grid,
_tabSprite,
_loadingIndicator,
_swapper,
CurrentPath,
_lastPath,
_user,
_importButton,
_rawImportButton,
_createNewButton,
_reloadButton, } = props;
    
      return (
        <Component type="FrooxEngine.FileBrowser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BrowserItem]`} name="SelectedItem" id={typeof SelectedItem === "object" && "id" in SelectedItem ? SelectedItem?.id : undefined} value={typeof SelectedItem === "object" && "value" in SelectedItem ? SelectedItem?.value : SelectedItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BrowserItem]`} name="_previousSelectedItem" id={typeof _previousSelectedItem === "object" && "id" in _previousSelectedItem ? _previousSelectedItem?.id : undefined} value={typeof _previousSelectedItem === "object" && "value" in _previousSelectedItem ? _previousSelectedItem?.value : _previousSelectedItem} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSelect" id={typeof AllowSelect === "object" && "id" in AllowSelect ? AllowSelect?.id : undefined} value={typeof AllowSelect === "object" && "value" in AllowSelect ? AllowSelect?.value : AllowSelect} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ItemSize" id={typeof ItemSize === "object" && "id" in ItemSize ? ItemSize?.id : undefined} value={typeof ItemSize === "object" && "value" in ItemSize ? ItemSize?.value : ItemSize} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_selectedText" id={typeof _selectedText === "object" && "id" in _selectedText ? _selectedText?.id : undefined} value={typeof _selectedText === "object" && "value" in _selectedText ? _selectedText?.value : _selectedText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_pathRoot" id={typeof _pathRoot === "object" && "id" in _pathRoot ? _pathRoot?.id : undefined} value={typeof _pathRoot === "object" && "value" in _pathRoot ? _pathRoot?.value : _pathRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_buttonsRoot" id={typeof _buttonsRoot === "object" && "id" in _buttonsRoot ? _buttonsRoot?.id : undefined} value={typeof _buttonsRoot === "object" && "value" in _buttonsRoot ? _buttonsRoot?.value : _buttonsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.GridLayout]`} name="_grid" id={typeof _grid === "object" && "id" in _grid ? _grid?.id : undefined} value={typeof _grid === "object" && "value" in _grid ? _grid?.value : _grid} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SpriteProvider]`} name="_tabSprite" id={typeof _tabSprite === "object" && "id" in _tabSprite ? _tabSprite?.id : undefined} value={typeof _tabSprite === "object" && "value" in _tabSprite ? _tabSprite?.value : _tabSprite} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_loadingIndicator" id={typeof _loadingIndicator === "object" && "id" in _loadingIndicator ? _loadingIndicator?.id : undefined} value={typeof _loadingIndicator === "object" && "value" in _loadingIndicator ? _loadingIndicator?.value : _loadingIndicator} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.SlideSwapRegion]`} name="_swapper" id={typeof _swapper === "object" && "id" in _swapper ? _swapper?.id : undefined} value={typeof _swapper === "object" && "value" in _swapper ? _swapper?.value : _swapper} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CurrentPath" id={typeof CurrentPath === "object" && "id" in CurrentPath ? CurrentPath?.id : undefined} value={typeof CurrentPath === "object" && "value" in CurrentPath ? CurrentPath?.value : CurrentPath} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_lastPath" id={typeof _lastPath === "object" && "id" in _lastPath ? _lastPath?.id : undefined} value={typeof _lastPath === "object" && "value" in _lastPath ? _lastPath?.value : _lastPath} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.MachineUserRef`} name="_user" id={typeof _user === "object" && "id" in _user ? _user?.id : undefined} value={typeof _user === "object" && "value" in _user ? _user?.value : _user} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.MachineUserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_importButton" id={typeof _importButton === "object" && "id" in _importButton ? _importButton?.id : undefined} value={typeof _importButton === "object" && "value" in _importButton ? _importButton?.value : _importButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_rawImportButton" id={typeof _rawImportButton === "object" && "id" in _rawImportButton ? _rawImportButton?.id : undefined} value={typeof _rawImportButton === "object" && "value" in _rawImportButton ? _rawImportButton?.value : _rawImportButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_createNewButton" id={typeof _createNewButton === "object" && "id" in _createNewButton ? _createNewButton?.id : undefined} value={typeof _createNewButton === "object" && "value" in _createNewButton ? _createNewButton?.value : _createNewButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_reloadButton" id={typeof _reloadButton === "object" && "id" in _reloadButton ? _reloadButton?.id : undefined} value={typeof _reloadButton === "object" && "value" in _reloadButton ? _reloadButton?.value : _reloadButton} /* default: ID0 */  />
        </Component>
      );
    };
    