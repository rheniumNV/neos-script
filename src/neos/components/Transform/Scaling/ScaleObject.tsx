import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ScaleObjectInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Manager?: member<any>;
ScalePower?: member<number>;
ScalePosition?: member<[number, number, number]>;
OverrideFarTransitionOffset?: member<any>;
CustomTransition?: member<boolean>;
TransitionLerp?: member<any>;
_active?: member<any>;
_position?: member<any>;
_scale?: member<any>;
    }
    
    export function ScaleObject(props: ScaleObjectInput){
      const { id, persistentId, updateOrder, Enabled,
Manager,
ScalePower,
ScalePosition,
OverrideFarTransitionOffset,
CustomTransition,
TransitionLerp,
_active,
_position,
_scale, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleObject" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ScaleObjectManager]`} name="Manager" id={typeof Manager === "object" && "id" in Manager ? Manager?.id : undefined} value={typeof Manager === "object" && "value" in Manager ? Manager?.value : Manager} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ScalePower" id={typeof ScalePower === "object" && "id" in ScalePower ? ScalePower?.id : undefined} value={typeof ScalePower === "object" && "value" in ScalePower ? ScalePower?.value : ScalePower} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ScalePosition" id={typeof ScalePosition === "object" && "id" in ScalePosition ? ScalePosition?.id : undefined} value={typeof ScalePosition === "object" && "value" in ScalePosition ? ScalePosition?.value : ScalePosition} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="OverrideFarTransitionOffset" id={typeof OverrideFarTransitionOffset === "object" && "id" in OverrideFarTransitionOffset ? OverrideFarTransitionOffset?.id : undefined} value={typeof OverrideFarTransitionOffset === "object" && "value" in OverrideFarTransitionOffset ? OverrideFarTransitionOffset?.value : OverrideFarTransitionOffset} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CustomTransition" id={typeof CustomTransition === "object" && "id" in CustomTransition ? CustomTransition?.id : undefined} value={typeof CustomTransition === "object" && "value" in CustomTransition ? CustomTransition?.value : CustomTransition} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="TransitionLerp" id={typeof TransitionLerp === "object" && "id" in TransitionLerp ? TransitionLerp?.id : undefined} value={typeof TransitionLerp === "object" && "value" in TransitionLerp ? TransitionLerp?.value : TransitionLerp} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_active" id={typeof _active === "object" && "id" in _active ? _active?.id : undefined} value={typeof _active === "object" && "value" in _active ? _active?.value : _active} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: ID0 */  />
        </Component>
      );
    };
    