import { member, Member, Component } from "../../../core";
    
    export interface NeosCheckboxInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Style?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
IsChecked?: member<boolean>;
IsEnabled?: member<boolean>;
DriveField?: member<any>;
AllowWriteBack?: member<boolean>;
Size?: member<number>;
BevelPercent?: member<number>;
Color?: member<[number, number, number, number]>;
_shellMesh?: member<any>;
_checkMesh?: member<any>;
_titleBar?: member<any>;
_shellSize?: member<any>;
_shellBevel?: member<any>;
_checkSize?: member<any>;
_checkBevel?: member<any>;
_colliderSize?: member<any>;
_shellMaterial?: member<any>;
_checkMaterial?: member<any>;
    }
    
    export function NeosCheckbox(props: NeosCheckboxInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
IsChecked,
IsEnabled,
DriveField,
AllowWriteBack,
Size,
BevelPercent,
Color,
_shellMesh,
_checkMesh,
_titleBar,
_shellSize,
_shellBevel,
_checkSize,
_checkBevel,
_colliderSize,
_shellMaterial,
_checkMaterial, } = props;
    
      return (
        <Component type="FrooxEngine.NeosCheckbox" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  isRaw={typeof Style === "object" && "isRaw" in Style && Style.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsChecked" id={typeof IsChecked === "object" && "id" in IsChecked ? IsChecked?.id : undefined} value={typeof IsChecked === "object" && "value" in IsChecked ? IsChecked?.value : IsChecked} /* default: false */  isRaw={typeof IsChecked === "object" && "isRaw" in IsChecked && IsChecked.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabled" id={typeof IsEnabled === "object" && "id" in IsEnabled ? IsEnabled?.id : undefined} value={typeof IsEnabled === "object" && "value" in IsEnabled ? IsEnabled?.value : IsEnabled} /* default: false */  isRaw={typeof IsEnabled === "object" && "isRaw" in IsEnabled && IsEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="DriveField" id={typeof DriveField === "object" && "id" in DriveField ? DriveField?.id : undefined} value={typeof DriveField === "object" && "value" in DriveField ? DriveField?.value : DriveField} /* default: ID0 */  isRaw={typeof DriveField === "object" && "isRaw" in DriveField && DriveField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowWriteBack" id={typeof AllowWriteBack === "object" && "id" in AllowWriteBack ? AllowWriteBack?.id : undefined} value={typeof AllowWriteBack === "object" && "value" in AllowWriteBack ? AllowWriteBack?.value : AllowWriteBack} /* default: false */  isRaw={typeof AllowWriteBack === "object" && "isRaw" in AllowWriteBack && AllowWriteBack.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: 0 */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BevelPercent" id={typeof BevelPercent === "object" && "id" in BevelPercent ? BevelPercent?.id : undefined} value={typeof BevelPercent === "object" && "value" in BevelPercent ? BevelPercent?.value : BevelPercent} /* default: 0 */  isRaw={typeof BevelPercent === "object" && "isRaw" in BevelPercent && BevelPercent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BevelBoxMesh]`} name="_shellMesh" id={typeof _shellMesh === "object" && "id" in _shellMesh ? _shellMesh?.id : undefined} value={typeof _shellMesh === "object" && "value" in _shellMesh ? _shellMesh?.value : _shellMesh} /* default: ID0 */  isRaw={typeof _shellMesh === "object" && "isRaw" in _shellMesh && _shellMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BevelBoxMesh]`} name="_checkMesh" id={typeof _checkMesh === "object" && "id" in _checkMesh ? _checkMesh?.id : undefined} value={typeof _checkMesh === "object" && "value" in _checkMesh ? _checkMesh?.value : _checkMesh} /* default: ID0 */  isRaw={typeof _checkMesh === "object" && "isRaw" in _checkMesh && _checkMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosHorizontalChoiceBar]`} name="_titleBar" id={typeof _titleBar === "object" && "id" in _titleBar ? _titleBar?.id : undefined} value={typeof _titleBar === "object" && "value" in _titleBar ? _titleBar?.value : _titleBar} /* default: ID0 */  isRaw={typeof _titleBar === "object" && "isRaw" in _titleBar && _titleBar.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_shellSize" id={typeof _shellSize === "object" && "id" in _shellSize ? _shellSize?.id : undefined} value={typeof _shellSize === "object" && "value" in _shellSize ? _shellSize?.value : _shellSize} /* default: ID0 */  isRaw={typeof _shellSize === "object" && "isRaw" in _shellSize && _shellSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_shellBevel" id={typeof _shellBevel === "object" && "id" in _shellBevel ? _shellBevel?.id : undefined} value={typeof _shellBevel === "object" && "value" in _shellBevel ? _shellBevel?.value : _shellBevel} /* default: ID0 */  isRaw={typeof _shellBevel === "object" && "isRaw" in _shellBevel && _shellBevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_checkSize" id={typeof _checkSize === "object" && "id" in _checkSize ? _checkSize?.id : undefined} value={typeof _checkSize === "object" && "value" in _checkSize ? _checkSize?.value : _checkSize} /* default: ID0 */  isRaw={typeof _checkSize === "object" && "isRaw" in _checkSize && _checkSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_checkBevel" id={typeof _checkBevel === "object" && "id" in _checkBevel ? _checkBevel?.id : undefined} value={typeof _checkBevel === "object" && "value" in _checkBevel ? _checkBevel?.value : _checkBevel} /* default: ID0 */  isRaw={typeof _checkBevel === "object" && "isRaw" in _checkBevel && _checkBevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  isRaw={typeof _colliderSize === "object" && "isRaw" in _colliderSize && _colliderSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_shellMaterial" id={typeof _shellMaterial === "object" && "id" in _shellMaterial ? _shellMaterial?.id : undefined} value={typeof _shellMaterial === "object" && "value" in _shellMaterial ? _shellMaterial?.value : _shellMaterial} /* default: ID0 */  isRaw={typeof _shellMaterial === "object" && "isRaw" in _shellMaterial && _shellMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_checkMaterial" id={typeof _checkMaterial === "object" && "id" in _checkMaterial ? _checkMaterial?.id : undefined} value={typeof _checkMaterial === "object" && "value" in _checkMaterial ? _checkMaterial?.value : _checkMaterial} /* default: ID0 */  isRaw={typeof _checkMaterial === "object" && "isRaw" in _checkMaterial && _checkMaterial.isRaw ? true : undefined} />
        </Component>
      );
    };
    