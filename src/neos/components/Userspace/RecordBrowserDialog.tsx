import { member, Member, Component } from "../../core";
    
    export interface RecordBrowserDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CurrentPage?: member<any>;
DetailRecord?: member<any>;
Private?: member<boolean>;
SearchTag?: member<any>;
SearchOwner?: member<any>;
SearchOwnerType?: member<any>;
MaxTimestamp?: member<any>;
SearchSortBy?: member<any>;
SearchSortDirection?: member<any>;
SearchRecordType?: member<any>;
SubmittedTo?: member<any>;
FixedSearchTags?: member<any>;
_listingContainer?: member<any>;
_detailContainer?: member<any>;
_listingAnchorMin?: member<any>;
_listingAnchorMax?: member<any>;
_detailAnchorMin?: member<any>;
_detailAnchorMax?: member<any>;
_searchTextField?: member<any>;
_searchingMessage?: member<any>;
_featuredOnly?: member<any>;
_newButton?: member<any>;
_popularButton?: member<any>;
_updatedButton?: member<any>;
_recordsListRoot?: member<any>;
_listScrollRect?: member<any>;
_previousButton?: member<any>;
_pageText?: member<any>;
_nextButton?: member<any>;
_detailHeader?: member<any>;
_detailPreview?: member<any>;
_detailCreatedBy?: member<any>;
_detailTipButton?: member<any>;
_detailPublishedTime?: member<any>;
_detailLastUpdated?: member<any>;
_detailVisits?: member<any>;
_detailDescription?: member<any>;
_detailTagsRoot?: member<any>;
_adminActionsRoot?: member<any>;
    }
    
    export function RecordBrowserDialog(props: RecordBrowserDialogInput){
      const { id, persistentId, updateOrder, Enabled,
CurrentPage,
DetailRecord,
Private,
SearchTag,
SearchOwner,
SearchOwnerType,
MaxTimestamp,
SearchSortBy,
SearchSortDirection,
SearchRecordType,
SubmittedTo,
FixedSearchTags,
_listingContainer,
_detailContainer,
_listingAnchorMin,
_listingAnchorMax,
_detailAnchorMin,
_detailAnchorMax,
_searchTextField,
_searchingMessage,
_featuredOnly,
_newButton,
_popularButton,
_updatedButton,
_recordsListRoot,
_listScrollRect,
_previousButton,
_pageText,
_nextButton,
_detailHeader,
_detailPreview,
_detailCreatedBy,
_detailTipButton,
_detailPublishedTime,
_detailLastUpdated,
_detailVisits,
_detailDescription,
_detailTagsRoot,
_adminActionsRoot, } = props;
    
      return (
        <Component type="FrooxEngine.RecordBrowserDialog" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.RecordBrowserDialog+Page]`} name="CurrentPage" id={typeof CurrentPage === "object" && "id" in CurrentPage ? CurrentPage?.id : undefined} value={typeof CurrentPage === "object" && "value" in CurrentPage ? CurrentPage?.value : CurrentPage} /* default: Listing */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="DetailRecord" id={typeof DetailRecord === "object" && "id" in DetailRecord ? DetailRecord?.id : undefined} value={typeof DetailRecord === "object" && "value" in DetailRecord ? DetailRecord?.value : DetailRecord} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Private" id={typeof Private === "object" && "id" in Private ? Private?.id : undefined} value={typeof Private === "object" && "value" in Private ? Private?.value : Private} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SearchTag" id={typeof SearchTag === "object" && "id" in SearchTag ? SearchTag?.id : undefined} value={typeof SearchTag === "object" && "value" in SearchTag ? SearchTag?.value : SearchTag} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SearchOwner" id={typeof SearchOwner === "object" && "id" in SearchOwner ? SearchOwner?.id : undefined} value={typeof SearchOwner === "object" && "value" in SearchOwner ? SearchOwner?.value : SearchOwner} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.OwnerType]`} name="SearchOwnerType" id={typeof SearchOwnerType === "object" && "id" in SearchOwnerType ? SearchOwnerType?.id : undefined} value={typeof SearchOwnerType === "object" && "value" in SearchOwnerType ? SearchOwnerType?.value : SearchOwnerType} /* default: Machine */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.DateTime]]`} name="MaxTimestamp" id={typeof MaxTimestamp === "object" && "id" in MaxTimestamp ? MaxTimestamp?.id : undefined} value={typeof MaxTimestamp === "object" && "value" in MaxTimestamp ? MaxTimestamp?.value : MaxTimestamp} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.SearchSortParameter]`} name="SearchSortBy" id={typeof SearchSortBy === "object" && "id" in SearchSortBy ? SearchSortBy?.id : undefined} value={typeof SearchSortBy === "object" && "value" in SearchSortBy ? SearchSortBy?.value : SearchSortBy} /* default: CreationDate */  />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.SearchSortDirection]`} name="SearchSortDirection" id={typeof SearchSortDirection === "object" && "id" in SearchSortDirection ? SearchSortDirection?.id : undefined} value={typeof SearchSortDirection === "object" && "value" in SearchSortDirection ? SearchSortDirection?.value : SearchSortDirection} /* default: Ascending */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SearchRecordType" id={typeof SearchRecordType === "object" && "id" in SearchRecordType ? SearchRecordType?.id : undefined} value={typeof SearchRecordType === "object" && "value" in SearchRecordType ? SearchRecordType?.value : SearchRecordType} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SubmittedTo" id={typeof SubmittedTo === "object" && "id" in SubmittedTo ? SubmittedTo?.id : undefined} value={typeof SubmittedTo === "object" && "value" in SubmittedTo ? SubmittedTo?.value : SubmittedTo} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="FixedSearchTags" id={typeof FixedSearchTags === "object" && "id" in FixedSearchTags ? FixedSearchTags?.id : undefined} value={typeof FixedSearchTags === "object" && "value" in FixedSearchTags ? FixedSearchTags?.value : FixedSearchTags} /* default: FrooxEngine.SyncFieldList`1[System.String] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_listingContainer" id={typeof _listingContainer === "object" && "id" in _listingContainer ? _listingContainer?.id : undefined} value={typeof _listingContainer === "object" && "value" in _listingContainer ? _listingContainer?.value : _listingContainer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_detailContainer" id={typeof _detailContainer === "object" && "id" in _detailContainer ? _detailContainer?.id : undefined} value={typeof _detailContainer === "object" && "value" in _detailContainer ? _detailContainer?.value : _detailContainer} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_listingAnchorMin" id={typeof _listingAnchorMin === "object" && "id" in _listingAnchorMin ? _listingAnchorMin?.id : undefined} value={typeof _listingAnchorMin === "object" && "value" in _listingAnchorMin ? _listingAnchorMin?.value : _listingAnchorMin} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_listingAnchorMax" id={typeof _listingAnchorMax === "object" && "id" in _listingAnchorMax ? _listingAnchorMax?.id : undefined} value={typeof _listingAnchorMax === "object" && "value" in _listingAnchorMax ? _listingAnchorMax?.value : _listingAnchorMax} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_detailAnchorMin" id={typeof _detailAnchorMin === "object" && "id" in _detailAnchorMin ? _detailAnchorMin?.id : undefined} value={typeof _detailAnchorMin === "object" && "value" in _detailAnchorMin ? _detailAnchorMin?.value : _detailAnchorMin} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_detailAnchorMax" id={typeof _detailAnchorMax === "object" && "id" in _detailAnchorMax ? _detailAnchorMax?.id : undefined} value={typeof _detailAnchorMax === "object" && "value" in _detailAnchorMax ? _detailAnchorMax?.value : _detailAnchorMax} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_searchTextField" id={typeof _searchTextField === "object" && "id" in _searchTextField ? _searchTextField?.id : undefined} value={typeof _searchTextField === "object" && "value" in _searchTextField ? _searchTextField?.value : _searchTextField} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_searchingMessage" id={typeof _searchingMessage === "object" && "id" in _searchingMessage ? _searchingMessage?.id : undefined} value={typeof _searchingMessage === "object" && "value" in _searchingMessage ? _searchingMessage?.value : _searchingMessage} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.UIX.Checkbox]`} name="_featuredOnly" id={typeof _featuredOnly === "object" && "id" in _featuredOnly ? _featuredOnly?.id : undefined} value={typeof _featuredOnly === "object" && "value" in _featuredOnly ? _featuredOnly?.value : _featuredOnly} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_newButton" id={typeof _newButton === "object" && "id" in _newButton ? _newButton?.id : undefined} value={typeof _newButton === "object" && "value" in _newButton ? _newButton?.value : _newButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_popularButton" id={typeof _popularButton === "object" && "id" in _popularButton ? _popularButton?.id : undefined} value={typeof _popularButton === "object" && "value" in _popularButton ? _popularButton?.value : _popularButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_updatedButton" id={typeof _updatedButton === "object" && "id" in _updatedButton ? _updatedButton?.id : undefined} value={typeof _updatedButton === "object" && "value" in _updatedButton ? _updatedButton?.value : _updatedButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_recordsListRoot" id={typeof _recordsListRoot === "object" && "id" in _recordsListRoot ? _recordsListRoot?.id : undefined} value={typeof _recordsListRoot === "object" && "value" in _recordsListRoot ? _recordsListRoot?.value : _recordsListRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.ScrollRect]`} name="_listScrollRect" id={typeof _listScrollRect === "object" && "id" in _listScrollRect ? _listScrollRect?.id : undefined} value={typeof _listScrollRect === "object" && "value" in _listScrollRect ? _listScrollRect?.value : _listScrollRect} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_previousButton" id={typeof _previousButton === "object" && "id" in _previousButton ? _previousButton?.id : undefined} value={typeof _previousButton === "object" && "value" in _previousButton ? _previousButton?.value : _previousButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_pageText" id={typeof _pageText === "object" && "id" in _pageText ? _pageText?.id : undefined} value={typeof _pageText === "object" && "value" in _pageText ? _pageText?.value : _pageText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_nextButton" id={typeof _nextButton === "object" && "id" in _nextButton ? _nextButton?.id : undefined} value={typeof _nextButton === "object" && "value" in _nextButton ? _nextButton?.value : _nextButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_detailHeader" id={typeof _detailHeader === "object" && "id" in _detailHeader ? _detailHeader?.id : undefined} value={typeof _detailHeader === "object" && "value" in _detailHeader ? _detailHeader?.value : _detailHeader} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_detailPreview" id={typeof _detailPreview === "object" && "id" in _detailPreview ? _detailPreview?.id : undefined} value={typeof _detailPreview === "object" && "value" in _detailPreview ? _detailPreview?.value : _detailPreview} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_detailCreatedBy" id={typeof _detailCreatedBy === "object" && "id" in _detailCreatedBy ? _detailCreatedBy?.id : undefined} value={typeof _detailCreatedBy === "object" && "value" in _detailCreatedBy ? _detailCreatedBy?.value : _detailCreatedBy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_detailTipButton" id={typeof _detailTipButton === "object" && "id" in _detailTipButton ? _detailTipButton?.id : undefined} value={typeof _detailTipButton === "object" && "value" in _detailTipButton ? _detailTipButton?.value : _detailTipButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_detailPublishedTime" id={typeof _detailPublishedTime === "object" && "id" in _detailPublishedTime ? _detailPublishedTime?.id : undefined} value={typeof _detailPublishedTime === "object" && "value" in _detailPublishedTime ? _detailPublishedTime?.value : _detailPublishedTime} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_detailLastUpdated" id={typeof _detailLastUpdated === "object" && "id" in _detailLastUpdated ? _detailLastUpdated?.id : undefined} value={typeof _detailLastUpdated === "object" && "value" in _detailLastUpdated ? _detailLastUpdated?.value : _detailLastUpdated} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_detailVisits" id={typeof _detailVisits === "object" && "id" in _detailVisits ? _detailVisits?.id : undefined} value={typeof _detailVisits === "object" && "value" in _detailVisits ? _detailVisits?.value : _detailVisits} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_detailDescription" id={typeof _detailDescription === "object" && "id" in _detailDescription ? _detailDescription?.id : undefined} value={typeof _detailDescription === "object" && "value" in _detailDescription ? _detailDescription?.value : _detailDescription} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_detailTagsRoot" id={typeof _detailTagsRoot === "object" && "id" in _detailTagsRoot ? _detailTagsRoot?.id : undefined} value={typeof _detailTagsRoot === "object" && "value" in _detailTagsRoot ? _detailTagsRoot?.value : _detailTagsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_adminActionsRoot" id={typeof _adminActionsRoot === "object" && "id" in _adminActionsRoot ? _adminActionsRoot?.id : undefined} value={typeof _adminActionsRoot === "object" && "value" in _adminActionsRoot ? _adminActionsRoot?.value : _adminActionsRoot} /* default: ID0 */  />
        </Component>
      );
    };
    