import { member, Member, Component } from "../../../core";
    
    export interface NeosProgressBarInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Style?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
IsEnabledField?: member<boolean>;
Progress?: member<number>;
BarColorField?: member<[number, number, number, number]>;
ContainerColorField?: member<[number, number, number, number]>;
WidthField?: member<number>;
HeightField?: member<number>;
ThicknessField?: member<number>;
SlantField?: member<number>;
_barMesh?: member<any>;
_containerMesh?: member<any>;
_barMaterial?: member<any>;
_containerMaterial?: member<any>;
_barPosition?: member<any>;
_colliderSize?: member<any>;
    }
    
    export function NeosProgressBar(props: NeosProgressBarInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
IsEnabledField,
Progress,
BarColorField,
ContainerColorField,
WidthField,
HeightField,
ThicknessField,
SlantField,
_barMesh,
_containerMesh,
_barMaterial,
_containerMaterial,
_barPosition,
_colliderSize, } = props;
    
      return (
        <Component type="FrooxEngine.NeosProgressBar" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabledField" id={typeof IsEnabledField === "object" && "id" in IsEnabledField ? IsEnabledField?.id : undefined} value={typeof IsEnabledField === "object" && "value" in IsEnabledField ? IsEnabledField?.value : IsEnabledField} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Progress" id={typeof Progress === "object" && "id" in Progress ? Progress?.id : undefined} value={typeof Progress === "object" && "value" in Progress ? Progress?.value : Progress} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BarColorField" id={typeof BarColorField === "object" && "id" in BarColorField ? BarColorField?.id : undefined} value={typeof BarColorField === "object" && "value" in BarColorField ? BarColorField?.value : BarColorField} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ContainerColorField" id={typeof ContainerColorField === "object" && "id" in ContainerColorField ? ContainerColorField?.id : undefined} value={typeof ContainerColorField === "object" && "value" in ContainerColorField ? ContainerColorField?.value : ContainerColorField} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="WidthField" id={typeof WidthField === "object" && "id" in WidthField ? WidthField?.id : undefined} value={typeof WidthField === "object" && "value" in WidthField ? WidthField?.value : WidthField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightField" id={typeof HeightField === "object" && "id" in HeightField ? HeightField?.id : undefined} value={typeof HeightField === "object" && "value" in HeightField ? HeightField?.value : HeightField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ThicknessField" id={typeof ThicknessField === "object" && "id" in ThicknessField ? ThicknessField?.id : undefined} value={typeof ThicknessField === "object" && "value" in ThicknessField ? ThicknessField?.value : ThicknessField} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SlantField" id={typeof SlantField === "object" && "id" in SlantField ? SlantField?.id : undefined} value={typeof SlantField === "object" && "value" in SlantField ? SlantField?.value : SlantField} /* default: 0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_barMesh" id={typeof _barMesh === "object" && "id" in _barMesh ? _barMesh?.id : undefined} value={typeof _barMesh === "object" && "value" in _barMesh ? _barMesh?.value : _barMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_containerMesh" id={typeof _containerMesh === "object" && "id" in _containerMesh ? _containerMesh?.id : undefined} value={typeof _containerMesh === "object" && "value" in _containerMesh ? _containerMesh?.value : _containerMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_barMaterial" id={typeof _barMaterial === "object" && "id" in _barMaterial ? _barMaterial?.id : undefined} value={typeof _barMaterial === "object" && "value" in _barMaterial ? _barMaterial?.value : _barMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_containerMaterial" id={typeof _containerMaterial === "object" && "id" in _containerMaterial ? _containerMaterial?.id : undefined} value={typeof _containerMaterial === "object" && "value" in _containerMaterial ? _containerMaterial?.value : _containerMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_barPosition" id={typeof _barPosition === "object" && "id" in _barPosition ? _barPosition?.id : undefined} value={typeof _barPosition === "object" && "value" in _barPosition ? _barPosition?.value : _barPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  />
        </Component>
      );
    };
    