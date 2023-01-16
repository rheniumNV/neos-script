import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NeosRadioInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Style?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
IsEnabled?: member<boolean>;
Radius?: member<number>;
Color?: member<[number, number, number, number]>;
Selected?: member<any>;
_colliderRadius?: member<any>;
_icosphere?: member<any>;
_material?: member<any>;
_group?: member<any>;
_orderNumber?: member<number>;
    }
    
    export function NeosRadio(props: NeosRadioInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
IsEnabled,
Radius,
Color,
Selected,
_colliderRadius,
_icosphere,
_material,
_group,
_orderNumber, } = props;
    
      return (
        <Component type="FrooxEngine.NeosRadio" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsEnabled" id={typeof IsEnabled === "object" && "id" in IsEnabled ? IsEnabled?.id : undefined} value={typeof IsEnabled === "object" && "value" in IsEnabled ? IsEnabled?.value : IsEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="Selected" id={typeof Selected === "object" && "id" in Selected ? Selected?.id : undefined} value={typeof Selected === "object" && "value" in Selected ? Selected?.value : Selected} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_colliderRadius" id={typeof _colliderRadius === "object" && "id" in _colliderRadius ? _colliderRadius?.id : undefined} value={typeof _colliderRadius === "object" && "value" in _colliderRadius ? _colliderRadius?.value : _colliderRadius} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.IcoSphereMesh]`} name="_icosphere" id={typeof _icosphere === "object" && "id" in _icosphere ? _icosphere?.id : undefined} value={typeof _icosphere === "object" && "value" in _icosphere ? _icosphere?.value : _icosphere} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosRadioGroup]`} name="_group" id={typeof _group === "object" && "id" in _group ? _group?.id : undefined} value={typeof _group === "object" && "value" in _group ? _group?.value : _group} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_orderNumber" id={typeof _orderNumber === "object" && "id" in _orderNumber ? _orderNumber?.id : undefined} value={typeof _orderNumber === "object" && "value" in _orderNumber ? _orderNumber?.value : _orderNumber} /* default: 0 */  />
        </Component>
      );
    };
    