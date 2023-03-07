import { member, Member, Component } from "../../../core";
    
    export interface PagingControlFacetPresetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_pagingControl?: member<any>;
    }
    
    export function PagingControlFacetPreset(props: PagingControlFacetPresetInput){
      const { id, persistentId, updateOrder, Enabled,
_pagingControl, } = props;
    
      return (
        <Component type="FrooxEngine.PagingControlFacetPreset" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PagingControl]`} name="_pagingControl" id={typeof _pagingControl === "object" && "id" in _pagingControl ? _pagingControl?.id : undefined} value={typeof _pagingControl === "object" && "value" in _pagingControl ? _pagingControl?.value : _pagingControl} /* default: ID0 */  />
        </Component>
      );
    };
    