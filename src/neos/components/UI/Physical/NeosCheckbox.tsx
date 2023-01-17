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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsChecked" id={typeof IsChecked === "object" && "id" in IsChecked ? IsChecked?.id : undefined} value={typeof IsChecked === "object" && "value" in IsChecked ? IsChecked?.value : IsChecked} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabled" id={typeof IsEnabled === "object" && "id" in IsEnabled ? IsEnabled?.id : undefined} value={typeof IsEnabled === "object" && "value" in IsEnabled ? IsEnabled?.value : IsEnabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="DriveField" id={typeof DriveField === "object" && "id" in DriveField ? DriveField?.id : undefined} value={typeof DriveField === "object" && "value" in DriveField ? DriveField?.value : DriveField} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowWriteBack" id={typeof AllowWriteBack === "object" && "id" in AllowWriteBack ? AllowWriteBack?.id : undefined} value={typeof AllowWriteBack === "object" && "value" in AllowWriteBack ? AllowWriteBack?.value : AllowWriteBack} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BevelPercent" id={typeof BevelPercent === "object" && "id" in BevelPercent ? BevelPercent?.id : undefined} value={typeof BevelPercent === "object" && "value" in BevelPercent ? BevelPercent?.value : BevelPercent} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BevelBoxMesh]`} name="_shellMesh" id={typeof _shellMesh === "object" && "id" in _shellMesh ? _shellMesh?.id : undefined} value={typeof _shellMesh === "object" && "value" in _shellMesh ? _shellMesh?.value : _shellMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BevelBoxMesh]`} name="_checkMesh" id={typeof _checkMesh === "object" && "id" in _checkMesh ? _checkMesh?.id : undefined} value={typeof _checkMesh === "object" && "value" in _checkMesh ? _checkMesh?.value : _checkMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosHorizontalChoiceBar]`} name="_titleBar" id={typeof _titleBar === "object" && "id" in _titleBar ? _titleBar?.id : undefined} value={typeof _titleBar === "object" && "value" in _titleBar ? _titleBar?.value : _titleBar} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_shellSize" id={typeof _shellSize === "object" && "id" in _shellSize ? _shellSize?.id : undefined} value={typeof _shellSize === "object" && "value" in _shellSize ? _shellSize?.value : _shellSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_shellBevel" id={typeof _shellBevel === "object" && "id" in _shellBevel ? _shellBevel?.id : undefined} value={typeof _shellBevel === "object" && "value" in _shellBevel ? _shellBevel?.value : _shellBevel} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_checkSize" id={typeof _checkSize === "object" && "id" in _checkSize ? _checkSize?.id : undefined} value={typeof _checkSize === "object" && "value" in _checkSize ? _checkSize?.value : _checkSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_checkBevel" id={typeof _checkBevel === "object" && "id" in _checkBevel ? _checkBevel?.id : undefined} value={typeof _checkBevel === "object" && "value" in _checkBevel ? _checkBevel?.value : _checkBevel} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_shellMaterial" id={typeof _shellMaterial === "object" && "id" in _shellMaterial ? _shellMaterial?.id : undefined} value={typeof _shellMaterial === "object" && "value" in _shellMaterial ? _shellMaterial?.value : _shellMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_checkMaterial" id={typeof _checkMaterial === "object" && "id" in _checkMaterial ? _checkMaterial?.id : undefined} value={typeof _checkMaterial === "object" && "value" in _checkMaterial ? _checkMaterial?.value : _checkMaterial} /* default: ID0 */  />
        </Component>
      );
    };
    