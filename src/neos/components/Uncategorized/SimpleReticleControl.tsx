import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SimpleReticleControlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ControlUser?: member<any>;
MouseSensitivity?: member<[number, number]>;
HorizontalAngle?: member<number>;
VerticalAngle?: member<number>;
MinVerticalAngle?: member<number>;
MaxVerticalAngle?: member<number>;
MinHorizontalAngle?: member<number>;
MaxHorizontalAngle?: member<number>;
_reticleSlot?: member<any>;
_reticleRotation?: member<any>;
_mouseControl?: member<any>;
    }
    
    export function SimpleReticleControl(props: SimpleReticleControlInput){
      const { id, persistentId, updateOrder, Enabled,
ControlUser,
MouseSensitivity,
HorizontalAngle,
VerticalAngle,
MinVerticalAngle,
MaxVerticalAngle,
MinHorizontalAngle,
MaxHorizontalAngle,
_reticleSlot,
_reticleRotation,
_mouseControl, } = props;
    
      return (
        <Component type="FrooxEngine.SimpleReticleControl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="ControlUser" id={typeof ControlUser === "object" && "id" in ControlUser ? ControlUser?.id : undefined} value={typeof ControlUser === "object" && "value" in ControlUser ? ControlUser?.value : ControlUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MouseSensitivity" id={typeof MouseSensitivity === "object" && "id" in MouseSensitivity ? MouseSensitivity?.id : undefined} value={typeof MouseSensitivity === "object" && "value" in MouseSensitivity ? MouseSensitivity?.value : MouseSensitivity} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HorizontalAngle" id={typeof HorizontalAngle === "object" && "id" in HorizontalAngle ? HorizontalAngle?.id : undefined} value={typeof HorizontalAngle === "object" && "value" in HorizontalAngle ? HorizontalAngle?.value : HorizontalAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VerticalAngle" id={typeof VerticalAngle === "object" && "id" in VerticalAngle ? VerticalAngle?.id : undefined} value={typeof VerticalAngle === "object" && "value" in VerticalAngle ? VerticalAngle?.value : VerticalAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinVerticalAngle" id={typeof MinVerticalAngle === "object" && "id" in MinVerticalAngle ? MinVerticalAngle?.id : undefined} value={typeof MinVerticalAngle === "object" && "value" in MinVerticalAngle ? MinVerticalAngle?.value : MinVerticalAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxVerticalAngle" id={typeof MaxVerticalAngle === "object" && "id" in MaxVerticalAngle ? MaxVerticalAngle?.id : undefined} value={typeof MaxVerticalAngle === "object" && "value" in MaxVerticalAngle ? MaxVerticalAngle?.value : MaxVerticalAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinHorizontalAngle" id={typeof MinHorizontalAngle === "object" && "id" in MinHorizontalAngle ? MinHorizontalAngle?.id : undefined} value={typeof MinHorizontalAngle === "object" && "value" in MinHorizontalAngle ? MinHorizontalAngle?.value : MinHorizontalAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxHorizontalAngle" id={typeof MaxHorizontalAngle === "object" && "id" in MaxHorizontalAngle ? MaxHorizontalAngle?.id : undefined} value={typeof MaxHorizontalAngle === "object" && "value" in MaxHorizontalAngle ? MaxHorizontalAngle?.value : MaxHorizontalAngle} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_reticleSlot" id={typeof _reticleSlot === "object" && "id" in _reticleSlot ? _reticleSlot?.id : undefined} value={typeof _reticleSlot === "object" && "value" in _reticleSlot ? _reticleSlot?.value : _reticleSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_reticleRotation" id={typeof _reticleRotation === "object" && "id" in _reticleRotation ? _reticleRotation?.id : undefined} value={typeof _reticleRotation === "object" && "value" in _reticleRotation ? _reticleRotation?.value : _reticleRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SimpleMouseControl]`} name="_mouseControl" id={typeof _mouseControl === "object" && "id" in _mouseControl ? _mouseControl?.id : undefined} value={typeof _mouseControl === "object" && "value" in _mouseControl ? _mouseControl?.value : _mouseControl} /* default: ID0 */  />
        </Component>
      );
    };
    