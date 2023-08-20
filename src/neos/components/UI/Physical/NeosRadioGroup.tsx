import { member, Member, Component } from "../../../core";
    
    export interface NeosRadioGroupInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Style?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
IsEnabled?: member<boolean>;
_selectedOption?: member<any>;
_choiceVisual?: member<any>;
_choicePosition?: member<any>;
_choiceRotation?: member<any>;
_choiceScale?: member<any>;
_choiceMaterial?: member<any>;
    }
    
    export function NeosRadioGroup(props: NeosRadioGroupInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
IsEnabled,
_selectedOption,
_choiceVisual,
_choicePosition,
_choiceRotation,
_choiceScale,
_choiceMaterial, } = props;
    
      return (
        <Component type="FrooxEngine.NeosRadioGroup" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  isRaw={typeof Style === "object" && "isRaw" in Style && Style.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabled" id={typeof IsEnabled === "object" && "id" in IsEnabled ? IsEnabled?.id : undefined} value={typeof IsEnabled === "object" && "value" in IsEnabled ? IsEnabled?.value : IsEnabled} /* default: false */  isRaw={typeof IsEnabled === "object" && "isRaw" in IsEnabled && IsEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosRadio]`} name="_selectedOption" id={typeof _selectedOption === "object" && "id" in _selectedOption ? _selectedOption?.id : undefined} value={typeof _selectedOption === "object" && "value" in _selectedOption ? _selectedOption?.value : _selectedOption} /* default: ID0 */  isRaw={typeof _selectedOption === "object" && "isRaw" in _selectedOption && _selectedOption.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_choiceVisual" id={typeof _choiceVisual === "object" && "id" in _choiceVisual ? _choiceVisual?.id : undefined} value={typeof _choiceVisual === "object" && "value" in _choiceVisual ? _choiceVisual?.value : _choiceVisual} /* default: ID0 */  isRaw={typeof _choiceVisual === "object" && "isRaw" in _choiceVisual && _choiceVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_choicePosition" id={typeof _choicePosition === "object" && "id" in _choicePosition ? _choicePosition?.id : undefined} value={typeof _choicePosition === "object" && "value" in _choicePosition ? _choicePosition?.value : _choicePosition} /* default: ID0 */  isRaw={typeof _choicePosition === "object" && "isRaw" in _choicePosition && _choicePosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_choiceRotation" id={typeof _choiceRotation === "object" && "id" in _choiceRotation ? _choiceRotation?.id : undefined} value={typeof _choiceRotation === "object" && "value" in _choiceRotation ? _choiceRotation?.value : _choiceRotation} /* default: ID0 */  isRaw={typeof _choiceRotation === "object" && "isRaw" in _choiceRotation && _choiceRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_choiceScale" id={typeof _choiceScale === "object" && "id" in _choiceScale ? _choiceScale?.id : undefined} value={typeof _choiceScale === "object" && "value" in _choiceScale ? _choiceScale?.value : _choiceScale} /* default: ID0 */  isRaw={typeof _choiceScale === "object" && "isRaw" in _choiceScale && _choiceScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_choiceMaterial" id={typeof _choiceMaterial === "object" && "id" in _choiceMaterial ? _choiceMaterial?.id : undefined} value={typeof _choiceMaterial === "object" && "value" in _choiceMaterial ? _choiceMaterial?.value : _choiceMaterial} /* default: ID0 */  isRaw={typeof _choiceMaterial === "object" && "isRaw" in _choiceMaterial && _choiceMaterial.isRaw ? true : undefined} />
        </Component>
      );
    };
    