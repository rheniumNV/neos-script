import { member, Member, Component } from "../../core";
    
    export interface WorldOrbInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SessionStartingUser?: member<any>;
URL?: member<any>;
ActiveSessionURLs?: member<any>;
CreateIfNotExists?: member<any>;
OpenActionOverride?: member<any>;
Visit?: member<any>;
ActiveUsers?: member<number>;
RecordStateUpdated?: member<boolean>;
IsPublic?: member<boolean>;
IsForPatrons?: member<boolean>;
CanModify?: member<boolean>;
LongPressIndicatorColor?: member<[number, number, number, number]>;
LongPressTime?: member<number>;
_longPressIndicator?: member<any>;
_longPressIndicatorMaterial?: member<any>;
Touched?: member<any>;
LongPressTriggered?: member<any>;
_lastFetchedUrl?: member<any>;
_orbRoot?: member<any>;
_infoRoot?: member<any>;
_thumbTex?: member<any>;
_thumbMaterial?: member<any>;
_shellMaterial?: member<any>;
_nameText?: member<any>;
_creatorText?: member<any>;
_visitsText?: member<any>;
_usersText?: member<any>;
_namePosition?: member<any>;
_creatorPosition?: member<any>;
_visitsPosition?: member<any>;
_usersPosition?: member<any>;
_userCountText?: member<string>;
_sizeDrive?: member<any>;
_iconSlot?: member<any>;
_iconTexture?: member<any>;
_iconMaterial?: member<any>;
_iconPosition?: member<any>;
_sessionStartDialog?: member<any>;
_lastTouch?: member<number>;
_lastFlash?: member<number>;
    }
    
    export function WorldOrb(props: WorldOrbInput){
      const { id, persistentId, updateOrder, Enabled,
SessionStartingUser,
URL,
ActiveSessionURLs,
CreateIfNotExists,
OpenActionOverride,
Visit,
ActiveUsers,
RecordStateUpdated,
IsPublic,
IsForPatrons,
CanModify,
LongPressIndicatorColor,
LongPressTime,
_longPressIndicator,
_longPressIndicatorMaterial,
Touched,
LongPressTriggered,
_lastFetchedUrl,
_orbRoot,
_infoRoot,
_thumbTex,
_thumbMaterial,
_shellMaterial,
_nameText,
_creatorText,
_visitsText,
_usersText,
_namePosition,
_creatorPosition,
_visitsPosition,
_usersPosition,
_userCountText,
_sizeDrive,
_iconSlot,
_iconTexture,
_iconMaterial,
_iconPosition,
_sessionStartDialog,
_lastTouch,
_lastFlash, } = props;
    
      return (
        <Component type="FrooxEngine.WorldOrb" id={id} persistentId={persistentId} updateOrder={updateOrder} version={4}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="SessionStartingUser" id={typeof SessionStartingUser === "object" && "id" in SessionStartingUser ? SessionStartingUser?.id : undefined} value={typeof SessionStartingUser === "object" && "value" in SessionStartingUser ? SessionStartingUser?.value : SessionStartingUser} /* default: ID0 */  isRaw={typeof SessionStartingUser === "object" && "isRaw" in SessionStartingUser && SessionStartingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  isRaw={typeof URL === "object" && "isRaw" in URL && URL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.Uri]`} name="ActiveSessionURLs" id={typeof ActiveSessionURLs === "object" && "id" in ActiveSessionURLs ? ActiveSessionURLs?.id : undefined} value={typeof ActiveSessionURLs === "object" && "value" in ActiveSessionURLs ? ActiveSessionURLs?.value : ActiveSessionURLs} /* default: FrooxEngine.SyncFieldList`1[System.Uri] */  isRaw={typeof ActiveSessionURLs === "object" && "isRaw" in ActiveSessionURLs && ActiveSessionURLs.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.WorldCreator]`} name="CreateIfNotExists" id={typeof CreateIfNotExists === "object" && "id" in CreateIfNotExists ? CreateIfNotExists?.id : undefined} value={typeof CreateIfNotExists === "object" && "value" in CreateIfNotExists ? CreateIfNotExists?.value : CreateIfNotExists} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof CreateIfNotExists === "object" && "isRaw" in CreateIfNotExists && CreateIfNotExists.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.WorldOrb]]`} name="OpenActionOverride" id={typeof OpenActionOverride === "object" && "id" in OpenActionOverride ? OpenActionOverride?.id : undefined} value={typeof OpenActionOverride === "object" && "value" in OpenActionOverride ? OpenActionOverride?.value : OpenActionOverride} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OpenActionOverride === "object" && "isRaw" in OpenActionOverride && OpenActionOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.WorldOrb+VisitState]`} name="Visit" id={typeof Visit === "object" && "id" in Visit ? Visit?.id : undefined} value={typeof Visit === "object" && "value" in Visit ? Visit?.value : Visit} /* default: Visited */  isRaw={typeof Visit === "object" && "isRaw" in Visit && Visit.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ActiveUsers" id={typeof ActiveUsers === "object" && "id" in ActiveUsers ? ActiveUsers?.id : undefined} value={typeof ActiveUsers === "object" && "value" in ActiveUsers ? ActiveUsers?.value : ActiveUsers} /* default: 0 */  isRaw={typeof ActiveUsers === "object" && "isRaw" in ActiveUsers && ActiveUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RecordStateUpdated-ID" id={typeof RecordStateUpdated === "object" && "id" in RecordStateUpdated ? RecordStateUpdated?.id : undefined} value={typeof RecordStateUpdated === "object" && "value" in RecordStateUpdated ? RecordStateUpdated?.value : RecordStateUpdated} /* default: false */ readOnly isRaw={typeof RecordStateUpdated === "object" && "isRaw" in RecordStateUpdated && RecordStateUpdated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsPublic" id={typeof IsPublic === "object" && "id" in IsPublic ? IsPublic?.id : undefined} value={typeof IsPublic === "object" && "value" in IsPublic ? IsPublic?.value : IsPublic} /* default: false */  isRaw={typeof IsPublic === "object" && "isRaw" in IsPublic && IsPublic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsForPatrons" id={typeof IsForPatrons === "object" && "id" in IsForPatrons ? IsForPatrons?.id : undefined} value={typeof IsForPatrons === "object" && "value" in IsForPatrons ? IsForPatrons?.value : IsForPatrons} /* default: false */  isRaw={typeof IsForPatrons === "object" && "isRaw" in IsForPatrons && IsForPatrons.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CanModify" id={typeof CanModify === "object" && "id" in CanModify ? CanModify?.id : undefined} value={typeof CanModify === "object" && "value" in CanModify ? CanModify?.value : CanModify} /* default: false */  isRaw={typeof CanModify === "object" && "isRaw" in CanModify && CanModify.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="LongPressIndicatorColor" id={typeof LongPressIndicatorColor === "object" && "id" in LongPressIndicatorColor ? LongPressIndicatorColor?.id : undefined} value={typeof LongPressIndicatorColor === "object" && "value" in LongPressIndicatorColor ? LongPressIndicatorColor?.value : LongPressIndicatorColor} /* default: [0; 0; 0; 0] */  isRaw={typeof LongPressIndicatorColor === "object" && "isRaw" in LongPressIndicatorColor && LongPressIndicatorColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LongPressTime" id={typeof LongPressTime === "object" && "id" in LongPressTime ? LongPressTime?.id : undefined} value={typeof LongPressTime === "object" && "value" in LongPressTime ? LongPressTime?.value : LongPressTime} /* default: 0 */  isRaw={typeof LongPressTime === "object" && "isRaw" in LongPressTime && LongPressTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RingMesh]`} name="_longPressIndicator" id={typeof _longPressIndicator === "object" && "id" in _longPressIndicator ? _longPressIndicator?.id : undefined} value={typeof _longPressIndicator === "object" && "value" in _longPressIndicator ? _longPressIndicator?.value : _longPressIndicator} /* default: ID0 */  isRaw={typeof _longPressIndicator === "object" && "isRaw" in _longPressIndicator && _longPressIndicator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_longPressIndicatorMaterial" id={typeof _longPressIndicatorMaterial === "object" && "id" in _longPressIndicatorMaterial ? _longPressIndicatorMaterial?.id : undefined} value={typeof _longPressIndicatorMaterial === "object" && "value" in _longPressIndicatorMaterial ? _longPressIndicatorMaterial?.value : _longPressIndicatorMaterial} /* default: ID0 */  isRaw={typeof _longPressIndicatorMaterial === "object" && "isRaw" in _longPressIndicatorMaterial && _longPressIndicatorMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`2[FrooxEngine.WorldOrb,FrooxEngine.TouchEventInfo]]`} name="Touched" id={typeof Touched === "object" && "id" in Touched ? Touched?.id : undefined} value={typeof Touched === "object" && "value" in Touched ? Touched?.value : Touched} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Touched === "object" && "isRaw" in Touched && Touched.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.WorldOrb]]`} name="LongPressTriggered" id={typeof LongPressTriggered === "object" && "id" in LongPressTriggered ? LongPressTriggered?.id : undefined} value={typeof LongPressTriggered === "object" && "value" in LongPressTriggered ? LongPressTriggered?.value : LongPressTriggered} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof LongPressTriggered === "object" && "isRaw" in LongPressTriggered && LongPressTriggered.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="_lastFetchedUrl" id={typeof _lastFetchedUrl === "object" && "id" in _lastFetchedUrl ? _lastFetchedUrl?.id : undefined} value={typeof _lastFetchedUrl === "object" && "value" in _lastFetchedUrl ? _lastFetchedUrl?.value : _lastFetchedUrl} /* default: <i>null</i> */  isRaw={typeof _lastFetchedUrl === "object" && "isRaw" in _lastFetchedUrl && _lastFetchedUrl.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_orbRoot" id={typeof _orbRoot === "object" && "id" in _orbRoot ? _orbRoot?.id : undefined} value={typeof _orbRoot === "object" && "value" in _orbRoot ? _orbRoot?.value : _orbRoot} /* default: ID0 */  isRaw={typeof _orbRoot === "object" && "isRaw" in _orbRoot && _orbRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_infoRoot" id={typeof _infoRoot === "object" && "id" in _infoRoot ? _infoRoot?.id : undefined} value={typeof _infoRoot === "object" && "value" in _infoRoot ? _infoRoot?.value : _infoRoot} /* default: ID0 */  isRaw={typeof _infoRoot === "object" && "isRaw" in _infoRoot && _infoRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_thumbTex" id={typeof _thumbTex === "object" && "id" in _thumbTex ? _thumbTex?.id : undefined} value={typeof _thumbTex === "object" && "value" in _thumbTex ? _thumbTex?.value : _thumbTex} /* default: ID0 */  isRaw={typeof _thumbTex === "object" && "isRaw" in _thumbTex && _thumbTex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Projection360Material]`} name="_thumbMaterial" id={typeof _thumbMaterial === "object" && "id" in _thumbMaterial ? _thumbMaterial?.id : undefined} value={typeof _thumbMaterial === "object" && "value" in _thumbMaterial ? _thumbMaterial?.value : _thumbMaterial} /* default: ID0 */  isRaw={typeof _thumbMaterial === "object" && "isRaw" in _thumbMaterial && _thumbMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_shellMaterial" id={typeof _shellMaterial === "object" && "id" in _shellMaterial ? _shellMaterial?.id : undefined} value={typeof _shellMaterial === "object" && "value" in _shellMaterial ? _shellMaterial?.value : _shellMaterial} /* default: ID0 */  isRaw={typeof _shellMaterial === "object" && "isRaw" in _shellMaterial && _shellMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_nameText" id={typeof _nameText === "object" && "id" in _nameText ? _nameText?.id : undefined} value={typeof _nameText === "object" && "value" in _nameText ? _nameText?.value : _nameText} /* default: ID0 */  isRaw={typeof _nameText === "object" && "isRaw" in _nameText && _nameText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_creatorText" id={typeof _creatorText === "object" && "id" in _creatorText ? _creatorText?.id : undefined} value={typeof _creatorText === "object" && "value" in _creatorText ? _creatorText?.value : _creatorText} /* default: ID0 */  isRaw={typeof _creatorText === "object" && "isRaw" in _creatorText && _creatorText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_visitsText" id={typeof _visitsText === "object" && "id" in _visitsText ? _visitsText?.id : undefined} value={typeof _visitsText === "object" && "value" in _visitsText ? _visitsText?.value : _visitsText} /* default: ID0 */  isRaw={typeof _visitsText === "object" && "isRaw" in _visitsText && _visitsText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_usersText" id={typeof _usersText === "object" && "id" in _usersText ? _usersText?.id : undefined} value={typeof _usersText === "object" && "value" in _usersText ? _usersText?.value : _usersText} /* default: ID0 */  isRaw={typeof _usersText === "object" && "isRaw" in _usersText && _usersText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_namePosition" id={typeof _namePosition === "object" && "id" in _namePosition ? _namePosition?.id : undefined} value={typeof _namePosition === "object" && "value" in _namePosition ? _namePosition?.value : _namePosition} /* default: ID0 */  isRaw={typeof _namePosition === "object" && "isRaw" in _namePosition && _namePosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_creatorPosition" id={typeof _creatorPosition === "object" && "id" in _creatorPosition ? _creatorPosition?.id : undefined} value={typeof _creatorPosition === "object" && "value" in _creatorPosition ? _creatorPosition?.value : _creatorPosition} /* default: ID0 */  isRaw={typeof _creatorPosition === "object" && "isRaw" in _creatorPosition && _creatorPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_visitsPosition" id={typeof _visitsPosition === "object" && "id" in _visitsPosition ? _visitsPosition?.id : undefined} value={typeof _visitsPosition === "object" && "value" in _visitsPosition ? _visitsPosition?.value : _visitsPosition} /* default: ID0 */  isRaw={typeof _visitsPosition === "object" && "isRaw" in _visitsPosition && _visitsPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_usersPosition" id={typeof _usersPosition === "object" && "id" in _usersPosition ? _usersPosition?.id : undefined} value={typeof _usersPosition === "object" && "value" in _usersPosition ? _usersPosition?.value : _usersPosition} /* default: ID0 */  isRaw={typeof _usersPosition === "object" && "isRaw" in _usersPosition && _usersPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_userCountText" id={typeof _userCountText === "object" && "id" in _userCountText ? _userCountText?.id : undefined} value={typeof _userCountText === "object" && "value" in _userCountText ? _userCountText?.value : _userCountText} /* default: ID0 */  isRaw={typeof _userCountText === "object" && "isRaw" in _userCountText && _userCountText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_sizeDrive" id={typeof _sizeDrive === "object" && "id" in _sizeDrive ? _sizeDrive?.id : undefined} value={typeof _sizeDrive === "object" && "value" in _sizeDrive ? _sizeDrive?.value : _sizeDrive} /* default: ID0 */  isRaw={typeof _sizeDrive === "object" && "isRaw" in _sizeDrive && _sizeDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_iconSlot" id={typeof _iconSlot === "object" && "id" in _iconSlot ? _iconSlot?.id : undefined} value={typeof _iconSlot === "object" && "value" in _iconSlot ? _iconSlot?.value : _iconSlot} /* default: ID0 */  isRaw={typeof _iconSlot === "object" && "isRaw" in _iconSlot && _iconSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_iconTexture" id={typeof _iconTexture === "object" && "id" in _iconTexture ? _iconTexture?.id : undefined} value={typeof _iconTexture === "object" && "value" in _iconTexture ? _iconTexture?.value : _iconTexture} /* default: ID0 */  isRaw={typeof _iconTexture === "object" && "isRaw" in _iconTexture && _iconTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_iconMaterial" id={typeof _iconMaterial === "object" && "id" in _iconMaterial ? _iconMaterial?.id : undefined} value={typeof _iconMaterial === "object" && "value" in _iconMaterial ? _iconMaterial?.value : _iconMaterial} /* default: ID0 */  isRaw={typeof _iconMaterial === "object" && "isRaw" in _iconMaterial && _iconMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_iconPosition" id={typeof _iconPosition === "object" && "id" in _iconPosition ? _iconPosition?.id : undefined} value={typeof _iconPosition === "object" && "value" in _iconPosition ? _iconPosition?.value : _iconPosition} /* default: ID0 */  isRaw={typeof _iconPosition === "object" && "isRaw" in _iconPosition && _iconPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.NewWorldDialog]`} name="_sessionStartDialog" id={typeof _sessionStartDialog === "object" && "id" in _sessionStartDialog ? _sessionStartDialog?.id : undefined} value={typeof _sessionStartDialog === "object" && "value" in _sessionStartDialog ? _sessionStartDialog?.value : _sessionStartDialog} /* default: ID0 */  isRaw={typeof _sessionStartDialog === "object" && "isRaw" in _sessionStartDialog && _sessionStartDialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="_lastTouch-ID" id={typeof _lastTouch === "object" && "id" in _lastTouch ? _lastTouch?.id : undefined} value={typeof _lastTouch === "object" && "value" in _lastTouch ? _lastTouch?.value : _lastTouch} /* default: 0 */ readOnly isRaw={typeof _lastTouch === "object" && "isRaw" in _lastTouch && _lastTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="_lastFlash-ID" id={typeof _lastFlash === "object" && "id" in _lastFlash ? _lastFlash?.id : undefined} value={typeof _lastFlash === "object" && "value" in _lastFlash ? _lastFlash?.value : _lastFlash} /* default: 0 */ readOnly isRaw={typeof _lastFlash === "object" && "isRaw" in _lastFlash && _lastFlash.isRaw ? true : undefined} />
        </Component>
      );
    };
    