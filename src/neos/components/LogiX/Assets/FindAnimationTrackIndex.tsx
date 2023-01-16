import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FindAnimationTrackIndexInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Animation?: member<any>;
Node?: member<any>;
Property?: member<any>;
    }
    
    export function FindAnimationTrackIndex(props: FindAnimationTrackIndexInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Animation,
Node,
Property, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Assets.FindAnimationTrackIndex" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Animation]`} name="Animation" id={typeof Animation === "object" && "id" in Animation ? Animation?.id : undefined} value={typeof Animation === "object" && "value" in Animation ? Animation?.value : Animation} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Property" id={typeof Property === "object" && "id" in Property ? Property?.id : undefined} value={typeof Property === "object" && "value" in Property ? Property?.value : Property} /* default: ID0 */  />
        </Component>
      );
    };
    