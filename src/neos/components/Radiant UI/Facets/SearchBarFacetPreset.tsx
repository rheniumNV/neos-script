import { member, Member, Component } from "../../../core";
    
    export interface SearchBarFacetPresetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_searchBar?: member<any>;
    }
    
    export function SearchBarFacetPreset(props: SearchBarFacetPresetInput){
      const { id, persistentId, updateOrder, Enabled,
_searchBar, } = props;
    
      return (
        <Component type="FrooxEngine.SearchBarFacetPreset" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RadiantSearchBar]`} name="_searchBar" id={typeof _searchBar === "object" && "id" in _searchBar ? _searchBar?.id : undefined} value={typeof _searchBar === "object" && "value" in _searchBar ? _searchBar?.value : _searchBar} /* default: ID0 */  isRaw={typeof _searchBar === "object" && "isRaw" in _searchBar && _searchBar.isRaw ? true : undefined} />
        </Component>
      );
    };
    