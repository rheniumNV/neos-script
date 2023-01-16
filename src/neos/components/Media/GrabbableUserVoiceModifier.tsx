import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GrabbableUserVoiceModifierInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
StateOnGrabbed?: member<any>;
StateOnReleased?: member<any>;
_originalEnabled?: member<boolean>;
_originalSpatialize?: member<boolean>;
_originalSpatialBlend?: member<number>;
    }
    
    export function GrabbableUserVoiceModifier(props: GrabbableUserVoiceModifierInput){
      const { id, persistentId, updateOrder, Enabled,
StateOnGrabbed,
StateOnReleased,
_originalEnabled,
_originalSpatialize,
_originalSpatialBlend, } = props;
    
      return (
        <Component type="FrooxEngine.GrabbableUserVoiceModifier" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.GrabbableUserVoiceModifier+VoiceState]`} name="StateOnGrabbed" id={typeof StateOnGrabbed === "object" && "id" in StateOnGrabbed ? StateOnGrabbed?.id : undefined} value={typeof StateOnGrabbed === "object" && "value" in StateOnGrabbed ? StateOnGrabbed?.value : StateOnGrabbed} /* default: Original */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.GrabbableUserVoiceModifier+VoiceState]`} name="StateOnReleased" id={typeof StateOnReleased === "object" && "id" in StateOnReleased ? StateOnReleased?.id : undefined} value={typeof StateOnReleased === "object" && "value" in StateOnReleased ? StateOnReleased?.value : StateOnReleased} /* default: Original */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_originalEnabled" id={typeof _originalEnabled === "object" && "id" in _originalEnabled ? _originalEnabled?.id : undefined} value={typeof _originalEnabled === "object" && "value" in _originalEnabled ? _originalEnabled?.value : _originalEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_originalSpatialize" id={typeof _originalSpatialize === "object" && "id" in _originalSpatialize ? _originalSpatialize?.id : undefined} value={typeof _originalSpatialize === "object" && "value" in _originalSpatialize ? _originalSpatialize?.value : _originalSpatialize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_originalSpatialBlend" id={typeof _originalSpatialBlend === "object" && "id" in _originalSpatialBlend ? _originalSpatialBlend?.id : undefined} value={typeof _originalSpatialBlend === "object" && "value" in _originalSpatialBlend ? _originalSpatialBlend?.value : _originalSpatialBlend} /* default: 0 */  />
        </Component>
      );
    };
    