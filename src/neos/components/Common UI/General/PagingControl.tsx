import { member, Member, Component } from "../../../core";
    
    export interface PagingControlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ItemsPerPage?: member<number>;
TotalItems?: member<number>;
HasMoreItems?: member<boolean>;
SkipItems?: member<number>;
NoItemsLabel?: member<any>;
PagingInfoLabel?: member<any>;
TotalPages?: member<any>;
RemainingItems?: member<any>;
_label?: member<string>;
_previousEnabled?: member<any>;
_nextEnabled?: member<any>;
    }
    
    export function PagingControl(props: PagingControlInput){
      const { id, persistentId, updateOrder, Enabled,
ItemsPerPage,
TotalItems,
HasMoreItems,
SkipItems,
NoItemsLabel,
PagingInfoLabel,
TotalPages,
RemainingItems,
_label,
_previousEnabled,
_nextEnabled, } = props;
    
      return (
        <Component type="FrooxEngine.PagingControl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ItemsPerPage" id={typeof ItemsPerPage === "object" && "id" in ItemsPerPage ? ItemsPerPage?.id : undefined} value={typeof ItemsPerPage === "object" && "value" in ItemsPerPage ? ItemsPerPage?.value : ItemsPerPage} /* default: 0 */  isRaw={typeof ItemsPerPage === "object" && "isRaw" in ItemsPerPage && ItemsPerPage.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="TotalItems" id={typeof TotalItems === "object" && "id" in TotalItems ? TotalItems?.id : undefined} value={typeof TotalItems === "object" && "value" in TotalItems ? TotalItems?.value : TotalItems} /* default: 0 */  isRaw={typeof TotalItems === "object" && "isRaw" in TotalItems && TotalItems.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HasMoreItems" id={typeof HasMoreItems === "object" && "id" in HasMoreItems ? HasMoreItems?.id : undefined} value={typeof HasMoreItems === "object" && "value" in HasMoreItems ? HasMoreItems?.value : HasMoreItems} /* default: false */  isRaw={typeof HasMoreItems === "object" && "isRaw" in HasMoreItems && HasMoreItems.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SkipItems" id={typeof SkipItems === "object" && "id" in SkipItems ? SkipItems?.id : undefined} value={typeof SkipItems === "object" && "value" in SkipItems ? SkipItems?.value : SkipItems} /* default: 0 */  isRaw={typeof SkipItems === "object" && "isRaw" in SkipItems && SkipItems.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="NoItemsLabel" id={typeof NoItemsLabel === "object" && "id" in NoItemsLabel ? NoItemsLabel?.id : undefined} value={typeof NoItemsLabel === "object" && "value" in NoItemsLabel ? NoItemsLabel?.value : NoItemsLabel} /* default: <i>null</i> */  isRaw={typeof NoItemsLabel === "object" && "isRaw" in NoItemsLabel && NoItemsLabel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="PagingInfoLabel" id={typeof PagingInfoLabel === "object" && "id" in PagingInfoLabel ? PagingInfoLabel?.id : undefined} value={typeof PagingInfoLabel === "object" && "value" in PagingInfoLabel ? PagingInfoLabel?.value : PagingInfoLabel} /* default: <i>null</i> */  isRaw={typeof PagingInfoLabel === "object" && "isRaw" in PagingInfoLabel && PagingInfoLabel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="TotalPages" id={typeof TotalPages === "object" && "id" in TotalPages ? TotalPages?.id : undefined} value={typeof TotalPages === "object" && "value" in TotalPages ? TotalPages?.value : TotalPages} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof TotalPages === "object" && "isRaw" in TotalPages && TotalPages.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="RemainingItems" id={typeof RemainingItems === "object" && "id" in RemainingItems ? RemainingItems?.id : undefined} value={typeof RemainingItems === "object" && "value" in RemainingItems ? RemainingItems?.value : RemainingItems} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof RemainingItems === "object" && "isRaw" in RemainingItems && RemainingItems.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_label" id={typeof _label === "object" && "id" in _label ? _label?.id : undefined} value={typeof _label === "object" && "value" in _label ? _label?.value : _label} /* default: ID0 */  isRaw={typeof _label === "object" && "isRaw" in _label && _label.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_previousEnabled" id={typeof _previousEnabled === "object" && "id" in _previousEnabled ? _previousEnabled?.id : undefined} value={typeof _previousEnabled === "object" && "value" in _previousEnabled ? _previousEnabled?.value : _previousEnabled} /* default: ID0 */  isRaw={typeof _previousEnabled === "object" && "isRaw" in _previousEnabled && _previousEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_nextEnabled" id={typeof _nextEnabled === "object" && "id" in _nextEnabled ? _nextEnabled?.id : undefined} value={typeof _nextEnabled === "object" && "value" in _nextEnabled ? _nextEnabled?.value : _nextEnabled} /* default: ID0 */  isRaw={typeof _nextEnabled === "object" && "isRaw" in _nextEnabled && _nextEnabled.isRaw ? true : undefined} />
        </Component>
      );
    };
    