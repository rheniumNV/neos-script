import { member, Member, Component } from "../../core";
    
    export interface TrackedDevicePositionerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DeviceIndex?: member<number>;
CorrespondingBodyNode?: member<any>;
AutoBodyNode?: member<any>;
AlwaysRenderModel?: member<boolean>;
ReferenceModel?: member<any>;
BodyNodeRoot?: member<any>;
ObjectSlot?: member<any>;
IsTracking?: member<boolean>;
IsActive?: member<boolean>;
CreateAvatarObjectSlot?: member<boolean>;
ScreenFilter?: member<any>;
    }
    
    export function TrackedDevicePositioner(props: TrackedDevicePositionerInput){
      const { id, persistentId, updateOrder, Enabled,
DeviceIndex,
CorrespondingBodyNode,
AutoBodyNode,
AlwaysRenderModel,
ReferenceModel,
BodyNodeRoot,
ObjectSlot,
IsTracking,
IsActive,
CreateAvatarObjectSlot,
ScreenFilter, } = props;
    
      return (
        <Component type="FrooxEngine.TrackedDevicePositioner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DeviceIndex" id={typeof DeviceIndex === "object" && "id" in DeviceIndex ? DeviceIndex?.id : undefined} value={typeof DeviceIndex === "object" && "value" in DeviceIndex ? DeviceIndex?.value : DeviceIndex} /* default: 0 */  isRaw={typeof DeviceIndex === "object" && "isRaw" in DeviceIndex && DeviceIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BodyNode]`} name="CorrespondingBodyNode" id={typeof CorrespondingBodyNode === "object" && "id" in CorrespondingBodyNode ? CorrespondingBodyNode?.id : undefined} value={typeof CorrespondingBodyNode === "object" && "value" in CorrespondingBodyNode ? CorrespondingBodyNode?.value : CorrespondingBodyNode} /* default: NONE */  isRaw={typeof CorrespondingBodyNode === "object" && "isRaw" in CorrespondingBodyNode && CorrespondingBodyNode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[FrooxEngine.BodyNode]]`} name="AutoBodyNode" id={typeof AutoBodyNode === "object" && "id" in AutoBodyNode ? AutoBodyNode?.id : undefined} value={typeof AutoBodyNode === "object" && "value" in AutoBodyNode ? AutoBodyNode?.value : AutoBodyNode} /* default: <i>null</i> */  isRaw={typeof AutoBodyNode === "object" && "isRaw" in AutoBodyNode && AutoBodyNode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlwaysRenderModel" id={typeof AlwaysRenderModel === "object" && "id" in AlwaysRenderModel ? AlwaysRenderModel?.id : undefined} value={typeof AlwaysRenderModel === "object" && "value" in AlwaysRenderModel ? AlwaysRenderModel?.value : AlwaysRenderModel} /* default: false */  isRaw={typeof AlwaysRenderModel === "object" && "isRaw" in AlwaysRenderModel && AlwaysRenderModel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ReferenceModel" id={typeof ReferenceModel === "object" && "id" in ReferenceModel ? ReferenceModel?.id : undefined} value={typeof ReferenceModel === "object" && "value" in ReferenceModel ? ReferenceModel?.value : ReferenceModel} /* default: ID0 */  isRaw={typeof ReferenceModel === "object" && "isRaw" in ReferenceModel && ReferenceModel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="BodyNodeRoot" id={typeof BodyNodeRoot === "object" && "id" in BodyNodeRoot ? BodyNodeRoot?.id : undefined} value={typeof BodyNodeRoot === "object" && "value" in BodyNodeRoot ? BodyNodeRoot?.value : BodyNodeRoot} /* default: ID0 */  isRaw={typeof BodyNodeRoot === "object" && "isRaw" in BodyNodeRoot && BodyNodeRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarObjectSlot]`} name="ObjectSlot" id={typeof ObjectSlot === "object" && "id" in ObjectSlot ? ObjectSlot?.id : undefined} value={typeof ObjectSlot === "object" && "value" in ObjectSlot ? ObjectSlot?.value : ObjectSlot} /* default: ID0 */  isRaw={typeof ObjectSlot === "object" && "isRaw" in ObjectSlot && ObjectSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsTracking" id={typeof IsTracking === "object" && "id" in IsTracking ? IsTracking?.id : undefined} value={typeof IsTracking === "object" && "value" in IsTracking ? IsTracking?.value : IsTracking} /* default: false */  isRaw={typeof IsTracking === "object" && "isRaw" in IsTracking && IsTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsActive" id={typeof IsActive === "object" && "id" in IsActive ? IsActive?.id : undefined} value={typeof IsActive === "object" && "value" in IsActive ? IsActive?.value : IsActive} /* default: false */  isRaw={typeof IsActive === "object" && "isRaw" in IsActive && IsActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CreateAvatarObjectSlot" id={typeof CreateAvatarObjectSlot === "object" && "id" in CreateAvatarObjectSlot ? CreateAvatarObjectSlot?.id : undefined} value={typeof CreateAvatarObjectSlot === "object" && "value" in CreateAvatarObjectSlot ? CreateAvatarObjectSlot?.value : CreateAvatarObjectSlot} /* default: false */  isRaw={typeof CreateAvatarObjectSlot === "object" && "isRaw" in CreateAvatarObjectSlot && CreateAvatarObjectSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ScreenController]`} name="ScreenFilter" id={typeof ScreenFilter === "object" && "id" in ScreenFilter ? ScreenFilter?.id : undefined} value={typeof ScreenFilter === "object" && "value" in ScreenFilter ? ScreenFilter?.value : ScreenFilter} /* default: ID0 */  isRaw={typeof ScreenFilter === "object" && "isRaw" in ScreenFilter && ScreenFilter.isRaw ? true : undefined} />
        </Component>
      );
    };
    