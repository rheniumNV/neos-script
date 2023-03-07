import { member, Member, Component } from "../../core";
    
    export interface InventoryBrowserInput {
        
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
CustomItemSpawn?: member<any>;
_user?: member<any>;
_autoReinitialize?: member<boolean>;
_initFunction?: member<any>;
_currentPath?: member<any>;
_currentOwnerId?: member<any>;
_addNewButton?: member<any>;
_deleteButton?: member<any>;
_inventoriesButton?: member<any>;
_generateLinkButton?: member<any>;
_makePrivateButton?: member<any>;
_addCurrentAvatar?: member<any>;
_lastSpecialItemType?: member<any>;
    }
    
    export function InventoryBrowser(props: InventoryBrowserInput){
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
CustomItemSpawn,
_user,
_autoReinitialize,
_initFunction,
_currentPath,
_currentOwnerId,
_addNewButton,
_deleteButton,
_inventoriesButton,
_generateLinkButton,
_makePrivateButton,
_addCurrentAvatar,
_lastSpecialItemType, } = props;
    
      return (
        <Component type="FrooxEngine.InventoryBrowser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
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
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.Record]]`} name="CustomItemSpawn" id={typeof CustomItemSpawn === "object" && "id" in CustomItemSpawn ? CustomItemSpawn?.id : undefined} value={typeof CustomItemSpawn === "object" && "value" in CustomItemSpawn ? CustomItemSpawn?.value : CustomItemSpawn} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.UserRef`} name="_user" id={typeof _user === "object" && "id" in _user ? _user?.id : undefined} value={typeof _user === "object" && "value" in _user ? _user?.value : _user} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_autoReinitialize" id={typeof _autoReinitialize === "object" && "id" in _autoReinitialize ? _autoReinitialize?.id : undefined} value={typeof _autoReinitialize === "object" && "value" in _autoReinitialize ? _autoReinitialize?.value : _autoReinitialize} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`1[FrooxEngine.RecordDirectory]]`} name="_initFunction" id={typeof _initFunction === "object" && "id" in _initFunction ? _initFunction?.id : undefined} value={typeof _initFunction === "object" && "value" in _initFunction ? _initFunction?.value : _initFunction} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_currentPath" id={typeof _currentPath === "object" && "id" in _currentPath ? _currentPath?.id : undefined} value={typeof _currentPath === "object" && "value" in _currentPath ? _currentPath?.value : _currentPath} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_currentOwnerId" id={typeof _currentOwnerId === "object" && "id" in _currentOwnerId ? _currentOwnerId?.id : undefined} value={typeof _currentOwnerId === "object" && "value" in _currentOwnerId ? _currentOwnerId?.value : _currentOwnerId} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_addNewButton" id={typeof _addNewButton === "object" && "id" in _addNewButton ? _addNewButton?.id : undefined} value={typeof _addNewButton === "object" && "value" in _addNewButton ? _addNewButton?.value : _addNewButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_deleteButton" id={typeof _deleteButton === "object" && "id" in _deleteButton ? _deleteButton?.id : undefined} value={typeof _deleteButton === "object" && "value" in _deleteButton ? _deleteButton?.value : _deleteButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_inventoriesButton" id={typeof _inventoriesButton === "object" && "id" in _inventoriesButton ? _inventoriesButton?.id : undefined} value={typeof _inventoriesButton === "object" && "value" in _inventoriesButton ? _inventoriesButton?.value : _inventoriesButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_generateLinkButton" id={typeof _generateLinkButton === "object" && "id" in _generateLinkButton ? _generateLinkButton?.id : undefined} value={typeof _generateLinkButton === "object" && "value" in _generateLinkButton ? _generateLinkButton?.value : _generateLinkButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_makePrivateButton" id={typeof _makePrivateButton === "object" && "id" in _makePrivateButton ? _makePrivateButton?.id : undefined} value={typeof _makePrivateButton === "object" && "value" in _makePrivateButton ? _makePrivateButton?.value : _makePrivateButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_addCurrentAvatar" id={typeof _addCurrentAvatar === "object" && "id" in _addCurrentAvatar ? _addCurrentAvatar?.id : undefined} value={typeof _addCurrentAvatar === "object" && "value" in _addCurrentAvatar ? _addCurrentAvatar?.value : _addCurrentAvatar} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.InventoryBrowser+SpecialItemType]`} name="_lastSpecialItemType" id={typeof _lastSpecialItemType === "object" && "id" in _lastSpecialItemType ? _lastSpecialItemType?.id : undefined} value={typeof _lastSpecialItemType === "object" && "value" in _lastSpecialItemType ? _lastSpecialItemType?.value : _lastSpecialItemType} /* default: None */  />
        </Component>
      );
    };
    