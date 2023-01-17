import { member, Member, Component } from "../../../core";
    
    export interface RawDataTooltipInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TipReference?: member<any>;
BlockGripEquip?: member<boolean>;
BlockRemoteEquip?: member<boolean>;
EquipName?: member<any>;
_overrideActiveTool?: member<any>;
_gripPosesGenerated?: member<boolean>;
LocalTipOffset?: member<[number, number, number]>;
LocalTipReference?: member<any>;
UseLaser?: member<boolean>;
BlockPrimaryWhenTouching?: member<boolean>;
UseSecondary?: member<boolean>;
AllowUseWhenHolding?: member<boolean>;
Equipped?: member<boolean>;
ControllerType?: member<any>;
ControllerSide?: member<any>;
PrimaryStrength?: member<any>;
SecondaryAxis?: member<any>;
Primary?: member<any>;
Secondary?: member<any>;
_primaryStrengthStream?: member<any>;
_secondaryAxisStream?: member<any>;
_primaryStream?: member<any>;
_secondaryStream?: member<any>;
_rawStrength?: member<number>;
_rawAxis?: member<[number, number]>;
_rawPrimary?: member<boolean>;
_rawSecondary?: member<boolean>;
UniqueTutorialKey?: member<any>;
PrimaryTutorialDescription?: member<any>;
SecondaryTutorialDescription?: member<any>;
    }
    
    export function RawDataTooltip(props: RawDataTooltipInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
LocalTipOffset,
LocalTipReference,
UseLaser,
BlockPrimaryWhenTouching,
UseSecondary,
AllowUseWhenHolding,
Equipped,
ControllerType,
ControllerSide,
PrimaryStrength,
SecondaryAxis,
Primary,
Secondary,
_primaryStrengthStream,
_secondaryAxisStream,
_primaryStream,
_secondaryStream,
_rawStrength,
_rawAxis,
_rawPrimary,
_rawSecondary,
UniqueTutorialKey,
PrimaryTutorialDescription,
SecondaryTutorialDescription, } = props;
    
      return (
        <Component type="FrooxEngine.RawDataTooltip" id={id} persistentId={persistentId} updateOrder={updateOrder} version={3}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalTipOffset" id={typeof LocalTipOffset === "object" && "id" in LocalTipOffset ? LocalTipOffset?.id : undefined} value={typeof LocalTipOffset === "object" && "value" in LocalTipOffset ? LocalTipOffset?.value : LocalTipOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="LocalTipReference" id={typeof LocalTipReference === "object" && "id" in LocalTipReference ? LocalTipReference?.id : undefined} value={typeof LocalTipReference === "object" && "value" in LocalTipReference ? LocalTipReference?.value : LocalTipReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseLaser" id={typeof UseLaser === "object" && "id" in UseLaser ? UseLaser?.id : undefined} value={typeof UseLaser === "object" && "value" in UseLaser ? UseLaser?.value : UseLaser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockPrimaryWhenTouching" id={typeof BlockPrimaryWhenTouching === "object" && "id" in BlockPrimaryWhenTouching ? BlockPrimaryWhenTouching?.id : undefined} value={typeof BlockPrimaryWhenTouching === "object" && "value" in BlockPrimaryWhenTouching ? BlockPrimaryWhenTouching?.value : BlockPrimaryWhenTouching} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseSecondary" id={typeof UseSecondary === "object" && "id" in UseSecondary ? UseSecondary?.id : undefined} value={typeof UseSecondary === "object" && "value" in UseSecondary ? UseSecondary?.value : UseSecondary} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowUseWhenHolding" id={typeof AllowUseWhenHolding === "object" && "id" in AllowUseWhenHolding ? AllowUseWhenHolding?.id : undefined} value={typeof AllowUseWhenHolding === "object" && "value" in AllowUseWhenHolding ? AllowUseWhenHolding?.value : AllowUseWhenHolding} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Equipped" id={typeof Equipped === "object" && "id" in Equipped ? Equipped?.id : undefined} value={typeof Equipped === "object" && "value" in Equipped ? Equipped?.value : Equipped} /* default: false */  />
<Member type={`FrooxEngine.SyncType`} name="ControllerType" id={typeof ControllerType === "object" && "id" in ControllerType ? ControllerType?.id : undefined} value={typeof ControllerType === "object" && "value" in ControllerType ? ControllerType?.value : ControllerType} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="ControllerSide" id={typeof ControllerSide === "object" && "id" in ControllerSide ? ControllerSide?.id : undefined} value={typeof ControllerSide === "object" && "value" in ControllerSide ? ControllerSide?.value : ControllerSide} /* default: Left */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="PrimaryStrength" id={typeof PrimaryStrength === "object" && "id" in PrimaryStrength ? PrimaryStrength?.id : undefined} value={typeof PrimaryStrength === "object" && "value" in PrimaryStrength ? PrimaryStrength?.value : PrimaryStrength} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float2]`} name="SecondaryAxis" id={typeof SecondaryAxis === "object" && "id" in SecondaryAxis ? SecondaryAxis?.id : undefined} value={typeof SecondaryAxis === "object" && "value" in SecondaryAxis ? SecondaryAxis?.value : SecondaryAxis} /* default: FrooxEngine.RawOutput`1[BaseX.float2] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="Primary" id={typeof Primary === "object" && "id" in Primary ? Primary?.id : undefined} value={typeof Primary === "object" && "value" in Primary ? Primary?.value : Primary} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="Secondary" id={typeof Secondary === "object" && "id" in Secondary ? Secondary?.id : undefined} value={typeof Secondary === "object" && "value" in Secondary ? Secondary?.value : Secondary} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_primaryStrengthStream" id={typeof _primaryStrengthStream === "object" && "id" in _primaryStrengthStream ? _primaryStrengthStream?.id : undefined} value={typeof _primaryStrengthStream === "object" && "value" in _primaryStrengthStream ? _primaryStrengthStream?.value : _primaryStrengthStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_secondaryAxisStream" id={typeof _secondaryAxisStream === "object" && "id" in _secondaryAxisStream ? _secondaryAxisStream?.id : undefined} value={typeof _secondaryAxisStream === "object" && "value" in _secondaryAxisStream ? _secondaryAxisStream?.value : _secondaryAxisStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_primaryStream" id={typeof _primaryStream === "object" && "id" in _primaryStream ? _primaryStream?.id : undefined} value={typeof _primaryStream === "object" && "value" in _primaryStream ? _primaryStream?.value : _primaryStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_secondaryStream" id={typeof _secondaryStream === "object" && "id" in _secondaryStream ? _secondaryStream?.id : undefined} value={typeof _secondaryStream === "object" && "value" in _secondaryStream ? _secondaryStream?.value : _secondaryStream} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_rawStrength" id={typeof _rawStrength === "object" && "id" in _rawStrength ? _rawStrength?.id : undefined} value={typeof _rawStrength === "object" && "value" in _rawStrength ? _rawStrength?.value : _rawStrength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="_rawAxis" id={typeof _rawAxis === "object" && "id" in _rawAxis ? _rawAxis?.id : undefined} value={typeof _rawAxis === "object" && "value" in _rawAxis ? _rawAxis?.value : _rawAxis} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_rawPrimary" id={typeof _rawPrimary === "object" && "id" in _rawPrimary ? _rawPrimary?.id : undefined} value={typeof _rawPrimary === "object" && "value" in _rawPrimary ? _rawPrimary?.value : _rawPrimary} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_rawSecondary" id={typeof _rawSecondary === "object" && "id" in _rawSecondary ? _rawSecondary?.id : undefined} value={typeof _rawSecondary === "object" && "value" in _rawSecondary ? _rawSecondary?.value : _rawSecondary} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="UniqueTutorialKey" id={typeof UniqueTutorialKey === "object" && "id" in UniqueTutorialKey ? UniqueTutorialKey?.id : undefined} value={typeof UniqueTutorialKey === "object" && "value" in UniqueTutorialKey ? UniqueTutorialKey?.value : UniqueTutorialKey} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="PrimaryTutorialDescription" id={typeof PrimaryTutorialDescription === "object" && "id" in PrimaryTutorialDescription ? PrimaryTutorialDescription?.id : undefined} value={typeof PrimaryTutorialDescription === "object" && "value" in PrimaryTutorialDescription ? PrimaryTutorialDescription?.value : PrimaryTutorialDescription} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SecondaryTutorialDescription" id={typeof SecondaryTutorialDescription === "object" && "id" in SecondaryTutorialDescription ? SecondaryTutorialDescription?.id : undefined} value={typeof SecondaryTutorialDescription === "object" && "value" in SecondaryTutorialDescription ? SecondaryTutorialDescription?.value : SecondaryTutorialDescription} /* default: <i>null</i> */  />
        </Component>
      );
    };
    