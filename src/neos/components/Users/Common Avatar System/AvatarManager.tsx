import { member, Member, Component } from "../../../core";
    
    export interface AvatarManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_objectGroups?: member<any>;
_currentAnchor?: member<any>;
AutoAddNameBadge?: member<boolean>;
AutoAddIconBadge?: member<boolean>;
AutoAddLiveIndicator?: member<boolean>;
EmptySlotHandler?: member<any>;
DefaultScale?: member<number>;
NameTagText?: member<any>;
NameTagColor?: member<[number, number, number, number]>;
NameTagOutline?: member<[number, number, number, number]>;
NameTagBackground?: member<[number, number, number, number]>;
_badgeTemplates?: member<any>;
_autoNameBadge?: member<any>;
_autoIconBadge?: member<any>;
_autoLiveIndicator?: member<any>;
    }
    
    export function AvatarManager(props: AvatarManagerInput){
      const { id, persistentId, updateOrder, Enabled,
_objectGroups,
_currentAnchor,
AutoAddNameBadge,
AutoAddIconBadge,
AutoAddLiveIndicator,
EmptySlotHandler,
DefaultScale,
NameTagText,
NameTagColor,
NameTagOutline,
NameTagBackground,
_badgeTemplates,
_autoNameBadge,
_autoIconBadge,
_autoLiveIndicator, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.AvatarManager+EquippedGroup]`} name="_objectGroups" id={typeof _objectGroups === "object" && "id" in _objectGroups ? _objectGroups?.id : undefined} value={typeof _objectGroups === "object" && "value" in _objectGroups ? _objectGroups?.value : _objectGroups} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.AvatarManager+EquippedGroup] */  isRaw={typeof _objectGroups === "object" && "isRaw" in _objectGroups && _objectGroups.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LinkRef\`1[FrooxEngine.CommonAvatar.AvatarAnchor]`} name="_currentAnchor" id={typeof _currentAnchor === "object" && "id" in _currentAnchor ? _currentAnchor?.id : undefined} value={typeof _currentAnchor === "object" && "value" in _currentAnchor ? _currentAnchor?.value : _currentAnchor} /* default: ID0 */  isRaw={typeof _currentAnchor === "object" && "isRaw" in _currentAnchor && _currentAnchor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddNameBadge" id={typeof AutoAddNameBadge === "object" && "id" in AutoAddNameBadge ? AutoAddNameBadge?.id : undefined} value={typeof AutoAddNameBadge === "object" && "value" in AutoAddNameBadge ? AutoAddNameBadge?.value : AutoAddNameBadge} /* default: false */  isRaw={typeof AutoAddNameBadge === "object" && "isRaw" in AutoAddNameBadge && AutoAddNameBadge.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddIconBadge" id={typeof AutoAddIconBadge === "object" && "id" in AutoAddIconBadge ? AutoAddIconBadge?.id : undefined} value={typeof AutoAddIconBadge === "object" && "value" in AutoAddIconBadge ? AutoAddIconBadge?.value : AutoAddIconBadge} /* default: false */  isRaw={typeof AutoAddIconBadge === "object" && "isRaw" in AutoAddIconBadge && AutoAddIconBadge.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddLiveIndicator" id={typeof AutoAddLiveIndicator === "object" && "id" in AutoAddLiveIndicator ? AutoAddLiveIndicator?.id : undefined} value={typeof AutoAddLiveIndicator === "object" && "value" in AutoAddLiveIndicator ? AutoAddLiveIndicator?.value : AutoAddLiveIndicator} /* default: false */  isRaw={typeof AutoAddLiveIndicator === "object" && "isRaw" in AutoAddLiveIndicator && AutoAddLiveIndicator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.IEmptyAvatarSlotHandler]`} name="EmptySlotHandler" id={typeof EmptySlotHandler === "object" && "id" in EmptySlotHandler ? EmptySlotHandler?.id : undefined} value={typeof EmptySlotHandler === "object" && "value" in EmptySlotHandler ? EmptySlotHandler?.value : EmptySlotHandler} /* default: ID0 */  isRaw={typeof EmptySlotHandler === "object" && "isRaw" in EmptySlotHandler && EmptySlotHandler.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DefaultScale" id={typeof DefaultScale === "object" && "id" in DefaultScale ? DefaultScale?.id : undefined} value={typeof DefaultScale === "object" && "value" in DefaultScale ? DefaultScale?.value : DefaultScale} /* default: 0 */  isRaw={typeof DefaultScale === "object" && "isRaw" in DefaultScale && DefaultScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="NameTagText" id={typeof NameTagText === "object" && "id" in NameTagText ? NameTagText?.id : undefined} value={typeof NameTagText === "object" && "value" in NameTagText ? NameTagText?.value : NameTagText} /* default: <i>null</i> */  isRaw={typeof NameTagText === "object" && "isRaw" in NameTagText && NameTagText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NameTagColor" id={typeof NameTagColor === "object" && "id" in NameTagColor ? NameTagColor?.id : undefined} value={typeof NameTagColor === "object" && "value" in NameTagColor ? NameTagColor?.value : NameTagColor} /* default: [0; 0; 0; 0] */  isRaw={typeof NameTagColor === "object" && "isRaw" in NameTagColor && NameTagColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NameTagOutline" id={typeof NameTagOutline === "object" && "id" in NameTagOutline ? NameTagOutline?.id : undefined} value={typeof NameTagOutline === "object" && "value" in NameTagOutline ? NameTagOutline?.value : NameTagOutline} /* default: [0; 0; 0; 0] */  isRaw={typeof NameTagOutline === "object" && "isRaw" in NameTagOutline && NameTagOutline.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NameTagBackground" id={typeof NameTagBackground === "object" && "id" in NameTagBackground ? NameTagBackground?.id : undefined} value={typeof NameTagBackground === "object" && "value" in NameTagBackground ? NameTagBackground?.value : NameTagBackground} /* default: [0; 0; 0; 0] */  isRaw={typeof NameTagBackground === "object" && "isRaw" in NameTagBackground && NameTagBackground.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_badgeTemplates" id={typeof _badgeTemplates === "object" && "id" in _badgeTemplates ? _badgeTemplates?.id : undefined} value={typeof _badgeTemplates === "object" && "value" in _badgeTemplates ? _badgeTemplates?.value : _badgeTemplates} /* default: ID0 */  isRaw={typeof _badgeTemplates === "object" && "isRaw" in _badgeTemplates && _badgeTemplates.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_autoNameBadge" id={typeof _autoNameBadge === "object" && "id" in _autoNameBadge ? _autoNameBadge?.id : undefined} value={typeof _autoNameBadge === "object" && "value" in _autoNameBadge ? _autoNameBadge?.value : _autoNameBadge} /* default: ID0 */  isRaw={typeof _autoNameBadge === "object" && "isRaw" in _autoNameBadge && _autoNameBadge.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_autoIconBadge" id={typeof _autoIconBadge === "object" && "id" in _autoIconBadge ? _autoIconBadge?.id : undefined} value={typeof _autoIconBadge === "object" && "value" in _autoIconBadge ? _autoIconBadge?.value : _autoIconBadge} /* default: ID0 */  isRaw={typeof _autoIconBadge === "object" && "isRaw" in _autoIconBadge && _autoIconBadge.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_autoLiveIndicator" id={typeof _autoLiveIndicator === "object" && "id" in _autoLiveIndicator ? _autoLiveIndicator?.id : undefined} value={typeof _autoLiveIndicator === "object" && "value" in _autoLiveIndicator ? _autoLiveIndicator?.value : _autoLiveIndicator} /* default: ID0 */  isRaw={typeof _autoLiveIndicator === "object" && "isRaw" in _autoLiveIndicator && _autoLiveIndicator.isRaw ? true : undefined} />
        </Component>
      );
    };
    