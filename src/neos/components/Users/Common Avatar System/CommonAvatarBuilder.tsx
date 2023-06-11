import { member, Member, Component } from "../../../core";
    
    export interface CommonAvatarBuilderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LoadCloudAvatars?: member<boolean>;
CustomAvatarTemplates?: member<any>;
AutoInject?: member<any>;
SetupNameBadges?: member<boolean>;
SetupIconBadges?: member<boolean>;
SetupServerVoice?: member<boolean>;
SetupClientVoice?: member<boolean>;
SetupServerTools?: member<boolean>;
SetupClientTools?: member<boolean>;
SetupLocomotion?: member<boolean>;
AllowLocomotion?: member<boolean>;
DefaultHostSilenced?: member<boolean>;
DefaultClientSilenced?: member<boolean>;
LocomotionModules?: member<any>;
ForceDefaultLocomotionModule?: member<any>;
SyncActiveLocomotionModule?: member<boolean>;
SetupItemShelves?: member<boolean>;
ParentClientsToServer?: member<boolean>;
AlignTracking?: member<boolean>;
EmptyAvatarSlotHandler?: member<any>;
FillEmptySlots?: member<boolean>;
    }
    
    export function CommonAvatarBuilder(props: CommonAvatarBuilderInput){
      const { id, persistentId, updateOrder, Enabled,
LoadCloudAvatars,
CustomAvatarTemplates,
AutoInject,
SetupNameBadges,
SetupIconBadges,
SetupServerVoice,
SetupClientVoice,
SetupServerTools,
SetupClientTools,
SetupLocomotion,
AllowLocomotion,
DefaultHostSilenced,
DefaultClientSilenced,
LocomotionModules,
ForceDefaultLocomotionModule,
SyncActiveLocomotionModule,
SetupItemShelves,
ParentClientsToServer,
AlignTracking,
EmptyAvatarSlotHandler,
FillEmptySlots, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatarBuilder" id={id} persistentId={persistentId} updateOrder={updateOrder} version={3}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LoadCloudAvatars" id={typeof LoadCloudAvatars === "object" && "id" in LoadCloudAvatars ? LoadCloudAvatars?.id : undefined} value={typeof LoadCloudAvatars === "object" && "value" in LoadCloudAvatars ? LoadCloudAvatars?.value : LoadCloudAvatars} /* default: false */  isRaw={typeof LoadCloudAvatars === "object" && "isRaw" in LoadCloudAvatars && LoadCloudAvatars.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatarBuilder+AvatarTemplate]`} name="CustomAvatarTemplates" id={typeof CustomAvatarTemplates === "object" && "id" in CustomAvatarTemplates ? CustomAvatarTemplates?.id : undefined} value={typeof CustomAvatarTemplates === "object" && "value" in CustomAvatarTemplates ? CustomAvatarTemplates?.value : CustomAvatarTemplates} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatarBuilder+AvatarTemplate] */  isRaw={typeof CustomAvatarTemplates === "object" && "isRaw" in CustomAvatarTemplates && CustomAvatarTemplates.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="AutoInject" id={typeof AutoInject === "object" && "id" in AutoInject ? AutoInject?.id : undefined} value={typeof AutoInject === "object" && "value" in AutoInject ? AutoInject?.value : AutoInject} /* default: ID0 */  isRaw={typeof AutoInject === "object" && "isRaw" in AutoInject && AutoInject.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupNameBadges" id={typeof SetupNameBadges === "object" && "id" in SetupNameBadges ? SetupNameBadges?.id : undefined} value={typeof SetupNameBadges === "object" && "value" in SetupNameBadges ? SetupNameBadges?.value : SetupNameBadges} /* default: false */  isRaw={typeof SetupNameBadges === "object" && "isRaw" in SetupNameBadges && SetupNameBadges.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupIconBadges" id={typeof SetupIconBadges === "object" && "id" in SetupIconBadges ? SetupIconBadges?.id : undefined} value={typeof SetupIconBadges === "object" && "value" in SetupIconBadges ? SetupIconBadges?.value : SetupIconBadges} /* default: false */  isRaw={typeof SetupIconBadges === "object" && "isRaw" in SetupIconBadges && SetupIconBadges.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupServerVoice" id={typeof SetupServerVoice === "object" && "id" in SetupServerVoice ? SetupServerVoice?.id : undefined} value={typeof SetupServerVoice === "object" && "value" in SetupServerVoice ? SetupServerVoice?.value : SetupServerVoice} /* default: false */  isRaw={typeof SetupServerVoice === "object" && "isRaw" in SetupServerVoice && SetupServerVoice.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupClientVoice" id={typeof SetupClientVoice === "object" && "id" in SetupClientVoice ? SetupClientVoice?.id : undefined} value={typeof SetupClientVoice === "object" && "value" in SetupClientVoice ? SetupClientVoice?.value : SetupClientVoice} /* default: false */  isRaw={typeof SetupClientVoice === "object" && "isRaw" in SetupClientVoice && SetupClientVoice.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupServerTools" id={typeof SetupServerTools === "object" && "id" in SetupServerTools ? SetupServerTools?.id : undefined} value={typeof SetupServerTools === "object" && "value" in SetupServerTools ? SetupServerTools?.value : SetupServerTools} /* default: false */  isRaw={typeof SetupServerTools === "object" && "isRaw" in SetupServerTools && SetupServerTools.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupClientTools" id={typeof SetupClientTools === "object" && "id" in SetupClientTools ? SetupClientTools?.id : undefined} value={typeof SetupClientTools === "object" && "value" in SetupClientTools ? SetupClientTools?.value : SetupClientTools} /* default: false */  isRaw={typeof SetupClientTools === "object" && "isRaw" in SetupClientTools && SetupClientTools.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupLocomotion" id={typeof SetupLocomotion === "object" && "id" in SetupLocomotion ? SetupLocomotion?.id : undefined} value={typeof SetupLocomotion === "object" && "value" in SetupLocomotion ? SetupLocomotion?.value : SetupLocomotion} /* default: false */  isRaw={typeof SetupLocomotion === "object" && "isRaw" in SetupLocomotion && SetupLocomotion.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowLocomotion" id={typeof AllowLocomotion === "object" && "id" in AllowLocomotion ? AllowLocomotion?.id : undefined} value={typeof AllowLocomotion === "object" && "value" in AllowLocomotion ? AllowLocomotion?.value : AllowLocomotion} /* default: false */  isRaw={typeof AllowLocomotion === "object" && "isRaw" in AllowLocomotion && AllowLocomotion.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DefaultHostSilenced" id={typeof DefaultHostSilenced === "object" && "id" in DefaultHostSilenced ? DefaultHostSilenced?.id : undefined} value={typeof DefaultHostSilenced === "object" && "value" in DefaultHostSilenced ? DefaultHostSilenced?.value : DefaultHostSilenced} /* default: false */  isRaw={typeof DefaultHostSilenced === "object" && "isRaw" in DefaultHostSilenced && DefaultHostSilenced.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DefaultClientSilenced" id={typeof DefaultClientSilenced === "object" && "id" in DefaultClientSilenced ? DefaultClientSilenced?.id : undefined} value={typeof DefaultClientSilenced === "object" && "value" in DefaultClientSilenced ? DefaultClientSilenced?.value : DefaultClientSilenced} /* default: false */  isRaw={typeof DefaultClientSilenced === "object" && "isRaw" in DefaultClientSilenced && DefaultClientSilenced.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="LocomotionModules" id={typeof LocomotionModules === "object" && "id" in LocomotionModules ? LocomotionModules?.id : undefined} value={typeof LocomotionModules === "object" && "value" in LocomotionModules ? LocomotionModules?.value : LocomotionModules} /* default: ID0 */  isRaw={typeof LocomotionModules === "object" && "isRaw" in LocomotionModules && LocomotionModules.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ILocomotionModule]`} name="ForceDefaultLocomotionModule" id={typeof ForceDefaultLocomotionModule === "object" && "id" in ForceDefaultLocomotionModule ? ForceDefaultLocomotionModule?.id : undefined} value={typeof ForceDefaultLocomotionModule === "object" && "value" in ForceDefaultLocomotionModule ? ForceDefaultLocomotionModule?.value : ForceDefaultLocomotionModule} /* default: ID0 */  isRaw={typeof ForceDefaultLocomotionModule === "object" && "isRaw" in ForceDefaultLocomotionModule && ForceDefaultLocomotionModule.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SyncActiveLocomotionModule" id={typeof SyncActiveLocomotionModule === "object" && "id" in SyncActiveLocomotionModule ? SyncActiveLocomotionModule?.id : undefined} value={typeof SyncActiveLocomotionModule === "object" && "value" in SyncActiveLocomotionModule ? SyncActiveLocomotionModule?.value : SyncActiveLocomotionModule} /* default: false */  isRaw={typeof SyncActiveLocomotionModule === "object" && "isRaw" in SyncActiveLocomotionModule && SyncActiveLocomotionModule.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SetupItemShelves" id={typeof SetupItemShelves === "object" && "id" in SetupItemShelves ? SetupItemShelves?.id : undefined} value={typeof SetupItemShelves === "object" && "value" in SetupItemShelves ? SetupItemShelves?.value : SetupItemShelves} /* default: false */  isRaw={typeof SetupItemShelves === "object" && "isRaw" in SetupItemShelves && SetupItemShelves.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ParentClientsToServer" id={typeof ParentClientsToServer === "object" && "id" in ParentClientsToServer ? ParentClientsToServer?.id : undefined} value={typeof ParentClientsToServer === "object" && "value" in ParentClientsToServer ? ParentClientsToServer?.value : ParentClientsToServer} /* default: false */  isRaw={typeof ParentClientsToServer === "object" && "isRaw" in ParentClientsToServer && ParentClientsToServer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlignTracking" id={typeof AlignTracking === "object" && "id" in AlignTracking ? AlignTracking?.id : undefined} value={typeof AlignTracking === "object" && "value" in AlignTracking ? AlignTracking?.value : AlignTracking} /* default: false */  isRaw={typeof AlignTracking === "object" && "isRaw" in AlignTracking && AlignTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.IEmptyAvatarSlotHandler]`} name="EmptyAvatarSlotHandler" id={typeof EmptyAvatarSlotHandler === "object" && "id" in EmptyAvatarSlotHandler ? EmptyAvatarSlotHandler?.id : undefined} value={typeof EmptyAvatarSlotHandler === "object" && "value" in EmptyAvatarSlotHandler ? EmptyAvatarSlotHandler?.value : EmptyAvatarSlotHandler} /* default: ID0 */  isRaw={typeof EmptyAvatarSlotHandler === "object" && "isRaw" in EmptyAvatarSlotHandler && EmptyAvatarSlotHandler.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FillEmptySlots" id={typeof FillEmptySlots === "object" && "id" in FillEmptySlots ? FillEmptySlots?.id : undefined} value={typeof FillEmptySlots === "object" && "value" in FillEmptySlots ? FillEmptySlots?.value : FillEmptySlots} /* default: false */  isRaw={typeof FillEmptySlots === "object" && "isRaw" in FillEmptySlots && FillEmptySlots.isRaw ? true : undefined} />
        </Component>
      );
    };
    