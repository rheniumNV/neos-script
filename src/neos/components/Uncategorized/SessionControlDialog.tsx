import { member, Member, Component } from "../../core";
    
    export interface SessionControlDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ActiveTab?: member<any>;
_contentRoot?: member<any>;
_worldName?: member<any>;
_maxUsers?: member<any>;
_awayKickEnabled?: member<any>;
_awayKickMinutes?: member<any>;
_autosaveEnabled?: member<any>;
_autosaveMinutes?: member<any>;
_autocleanEnabled?: member<any>;
_autocleanMinutes?: member<any>;
_mobileFriendly?: member<any>;
_hideFromListing?: member<any>;
_description?: member<any>;
_worldNameButton?: member<any>;
_descriptionButton?: member<any>;
_maxUsersButton?: member<any>;
_awayKickEnabledButton?: member<any>;
_awayKickMinutesButton?: member<any>;
_autosaveEnabledButton?: member<any>;
_autosaveMinutesButton?: member<any>;
_autocleanEnabledButton?: member<any>;
_autocleanMinutesButton?: member<any>;
_mobileFriendlyButton?: member<any>;
_hideFromListingButton?: member<any>;
_permissionOverridesIndicator?: member<any>;
_permissionOverridesButton?: member<any>;
_getSessionOrb?: member<any>;
_getWorldOrb?: member<any>;
_editMode?: member<any>;
_copySessionURL?: member<any>;
_copyWorldURL?: member<any>;
_copyRecordURL?: member<any>;
_accessLevelRadios?: member<any>;
_accessLevelRadiosButtons?: member<any>;
_worldNameSync?: member<any>;
_descriptionSync?: member<any>;
_maxUsersSync?: member<any>;
_awayKickEnabledSync?: member<any>;
_awayKickMinutesSync?: member<any>;
_autosaveEnabledSync?: member<any>;
_autosaveMinutesSync?: member<any>;
_autocleanEnabledSync?: member<any>;
_autocleanSecondsSync?: member<any>;
_mobileFriendlySync?: member<any>;
_hideFromListingSync?: member<any>;
_editModeSync?: member<any>;
_accessLevelSync?: member<any>;
_uiContentRoot?: member<any>;
_slideSwap?: member<any>;
_saveWorld?: member<any>;
_saveWorldAs?: member<any>;
_saveWorldCopy?: member<any>;
_tabButtons?: member<any>;
    }
    
    export function SessionControlDialog(props: SessionControlDialogInput){
      const { id, persistentId, updateOrder, Enabled,
ActiveTab,
_contentRoot,
_worldName,
_maxUsers,
_awayKickEnabled,
_awayKickMinutes,
_autosaveEnabled,
_autosaveMinutes,
_autocleanEnabled,
_autocleanMinutes,
_mobileFriendly,
_hideFromListing,
_description,
_worldNameButton,
_descriptionButton,
_maxUsersButton,
_awayKickEnabledButton,
_awayKickMinutesButton,
_autosaveEnabledButton,
_autosaveMinutesButton,
_autocleanEnabledButton,
_autocleanMinutesButton,
_mobileFriendlyButton,
_hideFromListingButton,
_permissionOverridesIndicator,
_permissionOverridesButton,
_getSessionOrb,
_getWorldOrb,
_editMode,
_copySessionURL,
_copyWorldURL,
_copyRecordURL,
_accessLevelRadios,
_accessLevelRadiosButtons,
_worldNameSync,
_descriptionSync,
_maxUsersSync,
_awayKickEnabledSync,
_awayKickMinutesSync,
_autosaveEnabledSync,
_autosaveMinutesSync,
_autocleanEnabledSync,
_autocleanSecondsSync,
_mobileFriendlySync,
_hideFromListingSync,
_editModeSync,
_accessLevelSync,
_uiContentRoot,
_slideSwap,
_saveWorld,
_saveWorldAs,
_saveWorldCopy,
_tabButtons, } = props;
    
      return (
        <Component type="FrooxEngine.SessionControlDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.SessionControlDialog+Tab]`} name="ActiveTab" id={typeof ActiveTab === "object" && "id" in ActiveTab ? ActiveTab?.id : undefined} value={typeof ActiveTab === "object" && "value" in ActiveTab ? ActiveTab?.value : ActiveTab} /* default: Settings */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_contentRoot" id={typeof _contentRoot === "object" && "id" in _contentRoot ? _contentRoot?.id : undefined} value={typeof _contentRoot === "object" && "value" in _contentRoot ? _contentRoot?.value : _contentRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_worldName" id={typeof _worldName === "object" && "id" in _worldName ? _worldName?.id : undefined} value={typeof _worldName === "object" && "value" in _worldName ? _worldName?.value : _worldName} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IntTextEditorParser]`} name="_maxUsers" id={typeof _maxUsers === "object" && "id" in _maxUsers ? _maxUsers?.id : undefined} value={typeof _maxUsers === "object" && "value" in _maxUsers ? _maxUsers?.value : _maxUsers} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_awayKickEnabled" id={typeof _awayKickEnabled === "object" && "id" in _awayKickEnabled ? _awayKickEnabled?.id : undefined} value={typeof _awayKickEnabled === "object" && "value" in _awayKickEnabled ? _awayKickEnabled?.value : _awayKickEnabled} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="_awayKickMinutes" id={typeof _awayKickMinutes === "object" && "id" in _awayKickMinutes ? _awayKickMinutes?.id : undefined} value={typeof _awayKickMinutes === "object" && "value" in _awayKickMinutes ? _awayKickMinutes?.value : _awayKickMinutes} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_autosaveEnabled" id={typeof _autosaveEnabled === "object" && "id" in _autosaveEnabled ? _autosaveEnabled?.id : undefined} value={typeof _autosaveEnabled === "object" && "value" in _autosaveEnabled ? _autosaveEnabled?.value : _autosaveEnabled} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="_autosaveMinutes" id={typeof _autosaveMinutes === "object" && "id" in _autosaveMinutes ? _autosaveMinutes?.id : undefined} value={typeof _autosaveMinutes === "object" && "value" in _autosaveMinutes ? _autosaveMinutes?.value : _autosaveMinutes} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_autocleanEnabled" id={typeof _autocleanEnabled === "object" && "id" in _autocleanEnabled ? _autocleanEnabled?.id : undefined} value={typeof _autocleanEnabled === "object" && "value" in _autocleanEnabled ? _autocleanEnabled?.value : _autocleanEnabled} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="_autocleanMinutes" id={typeof _autocleanMinutes === "object" && "id" in _autocleanMinutes ? _autocleanMinutes?.id : undefined} value={typeof _autocleanMinutes === "object" && "value" in _autocleanMinutes ? _autocleanMinutes?.value : _autocleanMinutes} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_mobileFriendly" id={typeof _mobileFriendly === "object" && "id" in _mobileFriendly ? _mobileFriendly?.id : undefined} value={typeof _mobileFriendly === "object" && "value" in _mobileFriendly ? _mobileFriendly?.value : _mobileFriendly} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_hideFromListing" id={typeof _hideFromListing === "object" && "id" in _hideFromListing ? _hideFromListing?.id : undefined} value={typeof _hideFromListing === "object" && "value" in _hideFromListing ? _hideFromListing?.value : _hideFromListing} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_description" id={typeof _description === "object" && "id" in _description ? _description?.id : undefined} value={typeof _description === "object" && "value" in _description ? _description?.value : _description} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_worldNameButton" id={typeof _worldNameButton === "object" && "id" in _worldNameButton ? _worldNameButton?.id : undefined} value={typeof _worldNameButton === "object" && "value" in _worldNameButton ? _worldNameButton?.value : _worldNameButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_descriptionButton" id={typeof _descriptionButton === "object" && "id" in _descriptionButton ? _descriptionButton?.id : undefined} value={typeof _descriptionButton === "object" && "value" in _descriptionButton ? _descriptionButton?.value : _descriptionButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_maxUsersButton" id={typeof _maxUsersButton === "object" && "id" in _maxUsersButton ? _maxUsersButton?.id : undefined} value={typeof _maxUsersButton === "object" && "value" in _maxUsersButton ? _maxUsersButton?.value : _maxUsersButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_awayKickEnabledButton" id={typeof _awayKickEnabledButton === "object" && "id" in _awayKickEnabledButton ? _awayKickEnabledButton?.id : undefined} value={typeof _awayKickEnabledButton === "object" && "value" in _awayKickEnabledButton ? _awayKickEnabledButton?.value : _awayKickEnabledButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_awayKickMinutesButton" id={typeof _awayKickMinutesButton === "object" && "id" in _awayKickMinutesButton ? _awayKickMinutesButton?.id : undefined} value={typeof _awayKickMinutesButton === "object" && "value" in _awayKickMinutesButton ? _awayKickMinutesButton?.value : _awayKickMinutesButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_autosaveEnabledButton" id={typeof _autosaveEnabledButton === "object" && "id" in _autosaveEnabledButton ? _autosaveEnabledButton?.id : undefined} value={typeof _autosaveEnabledButton === "object" && "value" in _autosaveEnabledButton ? _autosaveEnabledButton?.value : _autosaveEnabledButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_autosaveMinutesButton" id={typeof _autosaveMinutesButton === "object" && "id" in _autosaveMinutesButton ? _autosaveMinutesButton?.id : undefined} value={typeof _autosaveMinutesButton === "object" && "value" in _autosaveMinutesButton ? _autosaveMinutesButton?.value : _autosaveMinutesButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_autocleanEnabledButton" id={typeof _autocleanEnabledButton === "object" && "id" in _autocleanEnabledButton ? _autocleanEnabledButton?.id : undefined} value={typeof _autocleanEnabledButton === "object" && "value" in _autocleanEnabledButton ? _autocleanEnabledButton?.value : _autocleanEnabledButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_autocleanMinutesButton" id={typeof _autocleanMinutesButton === "object" && "id" in _autocleanMinutesButton ? _autocleanMinutesButton?.id : undefined} value={typeof _autocleanMinutesButton === "object" && "value" in _autocleanMinutesButton ? _autocleanMinutesButton?.value : _autocleanMinutesButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_mobileFriendlyButton" id={typeof _mobileFriendlyButton === "object" && "id" in _mobileFriendlyButton ? _mobileFriendlyButton?.id : undefined} value={typeof _mobileFriendlyButton === "object" && "value" in _mobileFriendlyButton ? _mobileFriendlyButton?.value : _mobileFriendlyButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_hideFromListingButton" id={typeof _hideFromListingButton === "object" && "id" in _hideFromListingButton ? _hideFromListingButton?.id : undefined} value={typeof _hideFromListingButton === "object" && "value" in _hideFromListingButton ? _hideFromListingButton?.value : _hideFromListingButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_permissionOverridesIndicator" id={typeof _permissionOverridesIndicator === "object" && "id" in _permissionOverridesIndicator ? _permissionOverridesIndicator?.id : undefined} value={typeof _permissionOverridesIndicator === "object" && "value" in _permissionOverridesIndicator ? _permissionOverridesIndicator?.value : _permissionOverridesIndicator} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_permissionOverridesButton" id={typeof _permissionOverridesButton === "object" && "id" in _permissionOverridesButton ? _permissionOverridesButton?.id : undefined} value={typeof _permissionOverridesButton === "object" && "value" in _permissionOverridesButton ? _permissionOverridesButton?.value : _permissionOverridesButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_getSessionOrb" id={typeof _getSessionOrb === "object" && "id" in _getSessionOrb ? _getSessionOrb?.id : undefined} value={typeof _getSessionOrb === "object" && "value" in _getSessionOrb ? _getSessionOrb?.value : _getSessionOrb} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_getWorldOrb" id={typeof _getWorldOrb === "object" && "id" in _getWorldOrb ? _getWorldOrb?.id : undefined} value={typeof _getWorldOrb === "object" && "value" in _getWorldOrb ? _getWorldOrb?.value : _getWorldOrb} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_editMode" id={typeof _editMode === "object" && "id" in _editMode ? _editMode?.id : undefined} value={typeof _editMode === "object" && "value" in _editMode ? _editMode?.value : _editMode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_copySessionURL" id={typeof _copySessionURL === "object" && "id" in _copySessionURL ? _copySessionURL?.id : undefined} value={typeof _copySessionURL === "object" && "value" in _copySessionURL ? _copySessionURL?.value : _copySessionURL} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_copyWorldURL" id={typeof _copyWorldURL === "object" && "id" in _copyWorldURL ? _copyWorldURL?.id : undefined} value={typeof _copyWorldURL === "object" && "value" in _copyWorldURL ? _copyWorldURL?.value : _copyWorldURL} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_copyRecordURL" id={typeof _copyRecordURL === "object" && "id" in _copyRecordURL ? _copyRecordURL?.id : undefined} value={typeof _copyRecordURL === "object" && "value" in _copyRecordURL ? _copyRecordURL?.value : _copyRecordURL} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.UIX.Radio]`} name="_accessLevelRadios" id={typeof _accessLevelRadios === "object" && "id" in _accessLevelRadios ? _accessLevelRadios?.id : undefined} value={typeof _accessLevelRadios === "object" && "value" in _accessLevelRadios ? _accessLevelRadios?.value : _accessLevelRadios} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.UIX.Radio] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.UIX.Button]`} name="_accessLevelRadiosButtons" id={typeof _accessLevelRadiosButtons === "object" && "id" in _accessLevelRadiosButtons ? _accessLevelRadiosButtons?.id : undefined} value={typeof _accessLevelRadiosButtons === "object" && "value" in _accessLevelRadiosButtons ? _accessLevelRadiosButtons?.value : _accessLevelRadiosButtons} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.UIX.Button] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.String]]`} name="_worldNameSync" id={typeof _worldNameSync === "object" && "id" in _worldNameSync ? _worldNameSync?.id : undefined} value={typeof _worldNameSync === "object" && "value" in _worldNameSync ? _worldNameSync?.value : _worldNameSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.String]]`} name="_descriptionSync" id={typeof _descriptionSync === "object" && "id" in _descriptionSync ? _descriptionSync?.id : undefined} value={typeof _descriptionSync === "object" && "value" in _descriptionSync ? _descriptionSync?.value : _descriptionSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Int32]]`} name="_maxUsersSync" id={typeof _maxUsersSync === "object" && "id" in _maxUsersSync ? _maxUsersSync?.id : undefined} value={typeof _maxUsersSync === "object" && "value" in _maxUsersSync ? _maxUsersSync?.value : _maxUsersSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Boolean]]`} name="_awayKickEnabledSync" id={typeof _awayKickEnabledSync === "object" && "id" in _awayKickEnabledSync ? _awayKickEnabledSync?.id : undefined} value={typeof _awayKickEnabledSync === "object" && "value" in _awayKickEnabledSync ? _awayKickEnabledSync?.value : _awayKickEnabledSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Single]]`} name="_awayKickMinutesSync" id={typeof _awayKickMinutesSync === "object" && "id" in _awayKickMinutesSync ? _awayKickMinutesSync?.id : undefined} value={typeof _awayKickMinutesSync === "object" && "value" in _awayKickMinutesSync ? _awayKickMinutesSync?.value : _awayKickMinutesSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Boolean]]`} name="_autosaveEnabledSync" id={typeof _autosaveEnabledSync === "object" && "id" in _autosaveEnabledSync ? _autosaveEnabledSync?.id : undefined} value={typeof _autosaveEnabledSync === "object" && "value" in _autosaveEnabledSync ? _autosaveEnabledSync?.value : _autosaveEnabledSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Single]]`} name="_autosaveMinutesSync" id={typeof _autosaveMinutesSync === "object" && "id" in _autosaveMinutesSync ? _autosaveMinutesSync?.id : undefined} value={typeof _autosaveMinutesSync === "object" && "value" in _autosaveMinutesSync ? _autosaveMinutesSync?.value : _autosaveMinutesSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Boolean]]`} name="_autocleanEnabledSync" id={typeof _autocleanEnabledSync === "object" && "id" in _autocleanEnabledSync ? _autocleanEnabledSync?.id : undefined} value={typeof _autocleanEnabledSync === "object" && "value" in _autocleanEnabledSync ? _autocleanEnabledSync?.value : _autocleanEnabledSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Single]]`} name="_autocleanSecondsSync" id={typeof _autocleanSecondsSync === "object" && "id" in _autocleanSecondsSync ? _autocleanSecondsSync?.id : undefined} value={typeof _autocleanSecondsSync === "object" && "value" in _autocleanSecondsSync ? _autocleanSecondsSync?.value : _autocleanSecondsSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Boolean]]`} name="_mobileFriendlySync" id={typeof _mobileFriendlySync === "object" && "id" in _mobileFriendlySync ? _mobileFriendlySync?.id : undefined} value={typeof _mobileFriendlySync === "object" && "value" in _mobileFriendlySync ? _mobileFriendlySync?.value : _mobileFriendlySync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Boolean]]`} name="_hideFromListingSync" id={typeof _hideFromListingSync === "object" && "id" in _hideFromListingSync ? _hideFromListingSync?.id : undefined} value={typeof _hideFromListingSync === "object" && "value" in _hideFromListingSync ? _hideFromListingSync?.value : _hideFromListingSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[System.Boolean]]`} name="_editModeSync" id={typeof _editModeSync === "object" && "id" in _editModeSync ? _editModeSync?.id : undefined} value={typeof _editModeSync === "object" && "value" in _editModeSync ? _editModeSync?.value : _editModeSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldValueSync\`1[CloudX.Shared.SessionAccessLevel]]`} name="_accessLevelSync" id={typeof _accessLevelSync === "object" && "id" in _accessLevelSync ? _accessLevelSync?.id : undefined} value={typeof _accessLevelSync === "object" && "value" in _accessLevelSync ? _accessLevelSync?.value : _accessLevelSync} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_uiContentRoot" id={typeof _uiContentRoot === "object" && "id" in _uiContentRoot ? _uiContentRoot?.id : undefined} value={typeof _uiContentRoot === "object" && "value" in _uiContentRoot ? _uiContentRoot?.value : _uiContentRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.SlideSwapRegion]`} name="_slideSwap" id={typeof _slideSwap === "object" && "id" in _slideSwap ? _slideSwap?.id : undefined} value={typeof _slideSwap === "object" && "value" in _slideSwap ? _slideSwap?.value : _slideSwap} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_saveWorld" id={typeof _saveWorld === "object" && "id" in _saveWorld ? _saveWorld?.id : undefined} value={typeof _saveWorld === "object" && "value" in _saveWorld ? _saveWorld?.value : _saveWorld} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_saveWorldAs" id={typeof _saveWorldAs === "object" && "id" in _saveWorldAs ? _saveWorldAs?.id : undefined} value={typeof _saveWorldAs === "object" && "value" in _saveWorldAs ? _saveWorldAs?.value : _saveWorldAs} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_saveWorldCopy" id={typeof _saveWorldCopy === "object" && "id" in _saveWorldCopy ? _saveWorldCopy?.id : undefined} value={typeof _saveWorldCopy === "object" && "value" in _saveWorldCopy ? _saveWorldCopy?.value : _saveWorldCopy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.UIX.Button]`} name="_tabButtons" id={typeof _tabButtons === "object" && "id" in _tabButtons ? _tabButtons?.id : undefined} value={typeof _tabButtons === "object" && "value" in _tabButtons ? _tabButtons?.value : _tabButtons} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.UIX.Button] */  />
        </Component>
      );
    };
    