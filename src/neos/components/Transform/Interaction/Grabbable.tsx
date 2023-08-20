import { member, Member, Component } from "../../../core";
    
    export interface GrabbableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ReparentOnRelease?: member<boolean>;
PreserveUserSpace?: member<boolean>;
DestroyOnRelease?: member<boolean>;
GrabPriority?: member<number>;
GrabPriorityWhenGrabbed?: member<any>;
CustomCanGrabCheck?: member<any>;
EditModeOnly?: member<boolean>;
AllowSteal?: member<boolean>;
DropOnDisable?: member<boolean>;
ActiveUserFilter?: member<any>;
OnlyUsers?: member<any>;
Scalable?: member<boolean>;
Receivable?: member<boolean>;
AllowOnlyPhysicalGrab?: member<boolean>;
_grabber?: member<any>;
_lastParent?: member<any>;
_lastParentIsUserSpace?: member<boolean>;
__legacyActiveUserRootOnly?: member<boolean>;
    }
    
    export function Grabbable(props: GrabbableInput){
      const { id, persistentId, updateOrder, Enabled,
ReparentOnRelease,
PreserveUserSpace,
DestroyOnRelease,
GrabPriority,
GrabPriorityWhenGrabbed,
CustomCanGrabCheck,
EditModeOnly,
AllowSteal,
DropOnDisable,
ActiveUserFilter,
OnlyUsers,
Scalable,
Receivable,
AllowOnlyPhysicalGrab,
_grabber,
_lastParent,
_lastParentIsUserSpace,
__legacyActiveUserRootOnly, } = props;
    
      return (
        <Component type="FrooxEngine.Grabbable" id={id} persistentId={persistentId} updateOrder={updateOrder} version={2}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ReparentOnRelease" id={typeof ReparentOnRelease === "object" && "id" in ReparentOnRelease ? ReparentOnRelease?.id : undefined} value={typeof ReparentOnRelease === "object" && "value" in ReparentOnRelease ? ReparentOnRelease?.value : ReparentOnRelease ?? true} /* default: false */  isRaw={typeof ReparentOnRelease === "object" && "isRaw" in ReparentOnRelease && ReparentOnRelease.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveUserSpace" id={typeof PreserveUserSpace === "object" && "id" in PreserveUserSpace ? PreserveUserSpace?.id : undefined} value={typeof PreserveUserSpace === "object" && "value" in PreserveUserSpace ? PreserveUserSpace?.value : PreserveUserSpace ?? true} /* default: false */  isRaw={typeof PreserveUserSpace === "object" && "isRaw" in PreserveUserSpace && PreserveUserSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DestroyOnRelease" id={typeof DestroyOnRelease === "object" && "id" in DestroyOnRelease ? DestroyOnRelease?.id : undefined} value={typeof DestroyOnRelease === "object" && "value" in DestroyOnRelease ? DestroyOnRelease?.value : DestroyOnRelease ?? false} /* default: false */  isRaw={typeof DestroyOnRelease === "object" && "isRaw" in DestroyOnRelease && DestroyOnRelease.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="GrabPriority" id={typeof GrabPriority === "object" && "id" in GrabPriority ? GrabPriority?.id : undefined} value={typeof GrabPriority === "object" && "value" in GrabPriority ? GrabPriority?.value : GrabPriority ?? 0} /* default: 0 */  isRaw={typeof GrabPriority === "object" && "isRaw" in GrabPriority && GrabPriority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Int32]]`} name="GrabPriorityWhenGrabbed" id={typeof GrabPriorityWhenGrabbed === "object" && "id" in GrabPriorityWhenGrabbed ? GrabPriorityWhenGrabbed?.id : undefined} value={typeof GrabPriorityWhenGrabbed === "object" && "value" in GrabPriorityWhenGrabbed ? GrabPriorityWhenGrabbed?.value : GrabPriorityWhenGrabbed ?? null} /* default: <i>null</i> */  isRaw={typeof GrabPriorityWhenGrabbed === "object" && "isRaw" in GrabPriorityWhenGrabbed && GrabPriorityWhenGrabbed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.GrabCheck]`} name="CustomCanGrabCheck" id={typeof CustomCanGrabCheck === "object" && "id" in CustomCanGrabCheck ? CustomCanGrabCheck?.id : undefined} value={typeof CustomCanGrabCheck === "object" && "value" in CustomCanGrabCheck ? CustomCanGrabCheck?.value : CustomCanGrabCheck ?? {"Target":null}} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof CustomCanGrabCheck === "object" && "isRaw" in CustomCanGrabCheck && CustomCanGrabCheck.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly ?? false} /* default: false */  isRaw={typeof EditModeOnly === "object" && "isRaw" in EditModeOnly && EditModeOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSteal" id={typeof AllowSteal === "object" && "id" in AllowSteal ? AllowSteal?.id : undefined} value={typeof AllowSteal === "object" && "value" in AllowSteal ? AllowSteal?.value : AllowSteal ?? false} /* default: false */  isRaw={typeof AllowSteal === "object" && "isRaw" in AllowSteal && AllowSteal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DropOnDisable" id={typeof DropOnDisable === "object" && "id" in DropOnDisable ? DropOnDisable?.id : undefined} value={typeof DropOnDisable === "object" && "value" in DropOnDisable ? DropOnDisable?.value : DropOnDisable ?? false} /* default: false */  isRaw={typeof DropOnDisable === "object" && "isRaw" in DropOnDisable && DropOnDisable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`} name="ActiveUserFilter" id={typeof ActiveUserFilter === "object" && "id" in ActiveUserFilter ? ActiveUserFilter?.id : undefined} value={typeof ActiveUserFilter === "object" && "value" in ActiveUserFilter ? ActiveUserFilter?.value : ActiveUserFilter ?? "Disabled"} /* default: Disabled */  isRaw={typeof ActiveUserFilter === "object" && "isRaw" in ActiveUserFilter && ActiveUserFilter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UserRef]`} name="OnlyUsers" id={typeof OnlyUsers === "object" && "id" in OnlyUsers ? OnlyUsers?.id : undefined} value={typeof OnlyUsers === "object" && "value" in OnlyUsers ? OnlyUsers?.value : OnlyUsers ?? []} /* default: FrooxEngine.SyncList`1[FrooxEngine.UserRef] */  isRaw={typeof OnlyUsers === "object" && "isRaw" in OnlyUsers && OnlyUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Scalable" id={typeof Scalable === "object" && "id" in Scalable ? Scalable?.id : undefined} value={typeof Scalable === "object" && "value" in Scalable ? Scalable?.value : Scalable ?? false} /* default: false */  isRaw={typeof Scalable === "object" && "isRaw" in Scalable && Scalable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Receivable" id={typeof Receivable === "object" && "id" in Receivable ? Receivable?.id : undefined} value={typeof Receivable === "object" && "value" in Receivable ? Receivable?.value : Receivable ?? true} /* default: false */  isRaw={typeof Receivable === "object" && "isRaw" in Receivable && Receivable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowOnlyPhysicalGrab" id={typeof AllowOnlyPhysicalGrab === "object" && "id" in AllowOnlyPhysicalGrab ? AllowOnlyPhysicalGrab?.id : undefined} value={typeof AllowOnlyPhysicalGrab === "object" && "value" in AllowOnlyPhysicalGrab ? AllowOnlyPhysicalGrab?.value : AllowOnlyPhysicalGrab ?? false} /* default: false */  isRaw={typeof AllowOnlyPhysicalGrab === "object" && "isRaw" in AllowOnlyPhysicalGrab && AllowOnlyPhysicalGrab.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_grabber" id={typeof _grabber === "object" && "id" in _grabber ? _grabber?.id : undefined} value={typeof _grabber === "object" && "value" in _grabber ? _grabber?.value : _grabber ?? null} /* default: ID0 */  isRaw={typeof _grabber === "object" && "isRaw" in _grabber && _grabber.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lastParent" id={typeof _lastParent === "object" && "id" in _lastParent ? _lastParent?.id : undefined} value={typeof _lastParent === "object" && "value" in _lastParent ? _lastParent?.value : _lastParent ?? null} /* default: ID0 */  isRaw={typeof _lastParent === "object" && "isRaw" in _lastParent && _lastParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_lastParentIsUserSpace" id={typeof _lastParentIsUserSpace === "object" && "id" in _lastParentIsUserSpace ? _lastParentIsUserSpace?.id : undefined} value={typeof _lastParentIsUserSpace === "object" && "value" in _lastParentIsUserSpace ? _lastParentIsUserSpace?.value : _lastParentIsUserSpace ?? false} /* default: false */  isRaw={typeof _lastParentIsUserSpace === "object" && "isRaw" in _lastParentIsUserSpace && _lastParentIsUserSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__legacyActiveUserRootOnly-ID" id={typeof __legacyActiveUserRootOnly === "object" && "id" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.id : undefined} value={typeof __legacyActiveUserRootOnly === "object" && "value" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.value : __legacyActiveUserRootOnly ?? false} /* default: false */ readOnly isRaw={typeof __legacyActiveUserRootOnly === "object" && "isRaw" in __legacyActiveUserRootOnly && __legacyActiveUserRootOnly.isRaw ? true : undefined} />
        </Component>
      );
    };
    