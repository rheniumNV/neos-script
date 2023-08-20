import { member, Member, Component } from "../../../core";
    
    export interface AvatarRawToolDataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ControllerSide?: member<any>;
PressingPrimary?: member<any>;
PressingSecondary?: member<any>;
PressingGrab?: member<any>;
PrimaryStrength?: member<any>;
SecondaryAxis?: member<any>;
_activeUser?: member<any>;
_strengthStream?: member<any>;
_axisStream?: member<any>;
_primaryStream?: member<any>;
_secondaryStream?: member<any>;
_grabStream?: member<any>;
    }
    
    export function AvatarRawToolData(props: AvatarRawToolDataInput){
      const { id, persistentId, updateOrder, Enabled,
ControllerSide,
PressingPrimary,
PressingSecondary,
PressingGrab,
PrimaryStrength,
SecondaryAxis,
_activeUser,
_strengthStream,
_axisStream,
_primaryStream,
_secondaryStream,
_grabStream, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarRawToolData" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="ControllerSide" id={typeof ControllerSide === "object" && "id" in ControllerSide ? ControllerSide?.id : undefined} value={typeof ControllerSide === "object" && "value" in ControllerSide ? ControllerSide?.value : ControllerSide} /* default: Left */  isRaw={typeof ControllerSide === "object" && "isRaw" in ControllerSide && ControllerSide.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="PressingPrimary" id={typeof PressingPrimary === "object" && "id" in PressingPrimary ? PressingPrimary?.id : undefined} value={typeof PressingPrimary === "object" && "value" in PressingPrimary ? PressingPrimary?.value : PressingPrimary} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof PressingPrimary === "object" && "isRaw" in PressingPrimary && PressingPrimary.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="PressingSecondary" id={typeof PressingSecondary === "object" && "id" in PressingSecondary ? PressingSecondary?.id : undefined} value={typeof PressingSecondary === "object" && "value" in PressingSecondary ? PressingSecondary?.value : PressingSecondary} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof PressingSecondary === "object" && "isRaw" in PressingSecondary && PressingSecondary.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="PressingGrab" id={typeof PressingGrab === "object" && "id" in PressingGrab ? PressingGrab?.id : undefined} value={typeof PressingGrab === "object" && "value" in PressingGrab ? PressingGrab?.value : PressingGrab} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof PressingGrab === "object" && "isRaw" in PressingGrab && PressingGrab.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="PrimaryStrength" id={typeof PrimaryStrength === "object" && "id" in PrimaryStrength ? PrimaryStrength?.id : undefined} value={typeof PrimaryStrength === "object" && "value" in PrimaryStrength ? PrimaryStrength?.value : PrimaryStrength} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof PrimaryStrength === "object" && "isRaw" in PrimaryStrength && PrimaryStrength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float2]`} name="SecondaryAxis" id={typeof SecondaryAxis === "object" && "id" in SecondaryAxis ? SecondaryAxis?.id : undefined} value={typeof SecondaryAxis === "object" && "value" in SecondaryAxis ? SecondaryAxis?.value : SecondaryAxis} /* default: FrooxEngine.RawOutput`1[BaseX.float2] */  isRaw={typeof SecondaryAxis === "object" && "isRaw" in SecondaryAxis && SecondaryAxis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_activeUser" id={typeof _activeUser === "object" && "id" in _activeUser ? _activeUser?.id : undefined} value={typeof _activeUser === "object" && "value" in _activeUser ? _activeUser?.value : _activeUser} /* default: ID0 */  isRaw={typeof _activeUser === "object" && "isRaw" in _activeUser && _activeUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_strengthStream" id={typeof _strengthStream === "object" && "id" in _strengthStream ? _strengthStream?.id : undefined} value={typeof _strengthStream === "object" && "value" in _strengthStream ? _strengthStream?.value : _strengthStream} /* default: ID0 */  isRaw={typeof _strengthStream === "object" && "isRaw" in _strengthStream && _strengthStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_axisStream" id={typeof _axisStream === "object" && "id" in _axisStream ? _axisStream?.id : undefined} value={typeof _axisStream === "object" && "value" in _axisStream ? _axisStream?.value : _axisStream} /* default: ID0 */  isRaw={typeof _axisStream === "object" && "isRaw" in _axisStream && _axisStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_primaryStream" id={typeof _primaryStream === "object" && "id" in _primaryStream ? _primaryStream?.id : undefined} value={typeof _primaryStream === "object" && "value" in _primaryStream ? _primaryStream?.value : _primaryStream} /* default: ID0 */  isRaw={typeof _primaryStream === "object" && "isRaw" in _primaryStream && _primaryStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_secondaryStream" id={typeof _secondaryStream === "object" && "id" in _secondaryStream ? _secondaryStream?.id : undefined} value={typeof _secondaryStream === "object" && "value" in _secondaryStream ? _secondaryStream?.value : _secondaryStream} /* default: ID0 */  isRaw={typeof _secondaryStream === "object" && "isRaw" in _secondaryStream && _secondaryStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_grabStream" id={typeof _grabStream === "object" && "id" in _grabStream ? _grabStream?.id : undefined} value={typeof _grabStream === "object" && "value" in _grabStream ? _grabStream?.value : _grabStream} /* default: ID0 */  isRaw={typeof _grabStream === "object" && "isRaw" in _grabStream && _grabStream.isRaw ? true : undefined} />
        </Component>
      );
    };
    