import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RadiantSearchBarInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SearchTerm?: member<any>;
IsSearching?: member<boolean>;
SearchAnimTileSpeed?: member<number>;
SearchAnimColor?: member<[number, number, number, number]>;
_textField?: member<any>;
_searchText?: member<any>;
_defaultText?: member<any>;
_searchingVisual?: member<any>;
_cancelButton?: member<any>;
_defaultVisible?: member<any>;
_searchingAnimationColor?: member<any>;
_searchingTextureOffset?: member<any>;
    }
    
    export function RadiantSearchBar(props: RadiantSearchBarInput){
      const { id, persistentId, updateOrder, Enabled,
SearchTerm,
IsSearching,
SearchAnimTileSpeed,
SearchAnimColor,
_textField,
_searchText,
_defaultText,
_searchingVisual,
_cancelButton,
_defaultVisible,
_searchingAnimationColor,
_searchingTextureOffset, } = props;
    
      return (
        <Component type="FrooxEngine.RadiantSearchBar" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SearchTerm" id={typeof SearchTerm === "object" && "id" in SearchTerm ? SearchTerm?.id : undefined} value={typeof SearchTerm === "object" && "value" in SearchTerm ? SearchTerm?.value : SearchTerm} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsSearching" id={typeof IsSearching === "object" && "id" in IsSearching ? IsSearching?.id : undefined} value={typeof IsSearching === "object" && "value" in IsSearching ? IsSearching?.value : IsSearching} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SearchAnimTileSpeed" id={typeof SearchAnimTileSpeed === "object" && "id" in SearchAnimTileSpeed ? SearchAnimTileSpeed?.id : undefined} value={typeof SearchAnimTileSpeed === "object" && "value" in SearchAnimTileSpeed ? SearchAnimTileSpeed?.value : SearchAnimTileSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SearchAnimColor" id={typeof SearchAnimColor === "object" && "id" in SearchAnimColor ? SearchAnimColor?.id : undefined} value={typeof SearchAnimColor === "object" && "value" in SearchAnimColor ? SearchAnimColor?.value : SearchAnimColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_textField" id={typeof _textField === "object" && "id" in _textField ? _textField?.id : undefined} value={typeof _textField === "object" && "value" in _textField ? _textField?.value : _textField} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.UIX.Text]`} name="_searchText" id={typeof _searchText === "object" && "id" in _searchText ? _searchText?.id : undefined} value={typeof _searchText === "object" && "value" in _searchText ? _searchText?.value : _searchText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_defaultText" id={typeof _defaultText === "object" && "id" in _defaultText ? _defaultText?.id : undefined} value={typeof _defaultText === "object" && "value" in _defaultText ? _defaultText?.value : _defaultText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TiledRawImage]`} name="_searchingVisual" id={typeof _searchingVisual === "object" && "id" in _searchingVisual ? _searchingVisual?.id : undefined} value={typeof _searchingVisual === "object" && "value" in _searchingVisual ? _searchingVisual?.value : _searchingVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_cancelButton" id={typeof _cancelButton === "object" && "id" in _cancelButton ? _cancelButton?.id : undefined} value={typeof _cancelButton === "object" && "value" in _cancelButton ? _cancelButton?.value : _cancelButton} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_defaultVisible" id={typeof _defaultVisible === "object" && "id" in _defaultVisible ? _defaultVisible?.id : undefined} value={typeof _defaultVisible === "object" && "value" in _defaultVisible ? _defaultVisible?.value : _defaultVisible} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_searchingAnimationColor" id={typeof _searchingAnimationColor === "object" && "id" in _searchingAnimationColor ? _searchingAnimationColor?.id : undefined} value={typeof _searchingAnimationColor === "object" && "value" in _searchingAnimationColor ? _searchingAnimationColor?.value : _searchingAnimationColor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_searchingTextureOffset" id={typeof _searchingTextureOffset === "object" && "id" in _searchingTextureOffset ? _searchingTextureOffset?.id : undefined} value={typeof _searchingTextureOffset === "object" && "value" in _searchingTextureOffset ? _searchingTextureOffset?.value : _searchingTextureOffset} /* default: ID0 */  />
        </Component>
      );
    };
    