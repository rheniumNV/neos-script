import { member, Member, Component } from "../../../core";
    
    export interface PositionAtUserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
PositionAtLocalUser?: member<boolean>;
TargetPositionOffset?: member<[number, number, number]>;
TargetRotationOffset?: member<any>;
PositionOffset?: member<[number, number, number]>;
RotationOffset?: member<any>;
PositionSource?: member<any>;
RotationSource?: member<any>;
PositionDrive?: member<any>;
RotationDrive?: member<any>;
    }
    
    export function PositionAtUser(props: PositionAtUserInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser,
PositionAtLocalUser,
TargetPositionOffset,
TargetRotationOffset,
PositionOffset,
RotationOffset,
PositionSource,
RotationSource,
PositionDrive,
RotationDrive, } = props;
    
      return (
        <Component type="FrooxEngine.PositionAtUser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: ID0 */  isRaw={typeof TargetUser === "object" && "isRaw" in TargetUser && TargetUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PositionAtLocalUser" id={typeof PositionAtLocalUser === "object" && "id" in PositionAtLocalUser ? PositionAtLocalUser?.id : undefined} value={typeof PositionAtLocalUser === "object" && "value" in PositionAtLocalUser ? PositionAtLocalUser?.value : PositionAtLocalUser} /* default: false */  isRaw={typeof PositionAtLocalUser === "object" && "isRaw" in PositionAtLocalUser && PositionAtLocalUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetPositionOffset" id={typeof TargetPositionOffset === "object" && "id" in TargetPositionOffset ? TargetPositionOffset?.id : undefined} value={typeof TargetPositionOffset === "object" && "value" in TargetPositionOffset ? TargetPositionOffset?.value : TargetPositionOffset} /* default: [0; 0; 0] */  isRaw={typeof TargetPositionOffset === "object" && "isRaw" in TargetPositionOffset && TargetPositionOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="TargetRotationOffset" id={typeof TargetRotationOffset === "object" && "id" in TargetRotationOffset ? TargetRotationOffset?.id : undefined} value={typeof TargetRotationOffset === "object" && "value" in TargetRotationOffset ? TargetRotationOffset?.value : TargetRotationOffset} /* default: [0; 0; 0; 1] */  isRaw={typeof TargetRotationOffset === "object" && "isRaw" in TargetRotationOffset && TargetRotationOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="PositionOffset" id={typeof PositionOffset === "object" && "id" in PositionOffset ? PositionOffset?.id : undefined} value={typeof PositionOffset === "object" && "value" in PositionOffset ? PositionOffset?.value : PositionOffset} /* default: [0; 0; 0] */  isRaw={typeof PositionOffset === "object" && "isRaw" in PositionOffset && PositionOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RotationOffset" id={typeof RotationOffset === "object" && "id" in RotationOffset ? RotationOffset?.id : undefined} value={typeof RotationOffset === "object" && "value" in RotationOffset ? RotationOffset?.value : RotationOffset} /* default: [0; 0; 0; 1] */  isRaw={typeof RotationOffset === "object" && "isRaw" in RotationOffset && RotationOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="PositionSource" id={typeof PositionSource === "object" && "id" in PositionSource ? PositionSource?.id : undefined} value={typeof PositionSource === "object" && "value" in PositionSource ? PositionSource?.value : PositionSource} /* default: None */  isRaw={typeof PositionSource === "object" && "isRaw" in PositionSource && PositionSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="RotationSource" id={typeof RotationSource === "object" && "id" in RotationSource ? RotationSource?.id : undefined} value={typeof RotationSource === "object" && "value" in RotationSource ? RotationSource?.value : RotationSource} /* default: None */  isRaw={typeof RotationSource === "object" && "isRaw" in RotationSource && RotationSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="PositionDrive" id={typeof PositionDrive === "object" && "id" in PositionDrive ? PositionDrive?.id : undefined} value={typeof PositionDrive === "object" && "value" in PositionDrive ? PositionDrive?.value : PositionDrive} /* default: ID0 */  isRaw={typeof PositionDrive === "object" && "isRaw" in PositionDrive && PositionDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="RotationDrive" id={typeof RotationDrive === "object" && "id" in RotationDrive ? RotationDrive?.id : undefined} value={typeof RotationDrive === "object" && "value" in RotationDrive ? RotationDrive?.value : RotationDrive} /* default: ID0 */  isRaw={typeof RotationDrive === "object" && "isRaw" in RotationDrive && RotationDrive.isRaw ? true : undefined} />
        </Component>
      );
    };
    