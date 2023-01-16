import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ComposeFingerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Finger?: member<any>;
Segment?: member<any>;
Chirality?: member<any>;
    }
    
    export function ComposeFinger(props: ComposeFingerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Finger,
Segment,
Chirality, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Utility.ComposeFinger" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.FingerType]`} name="Finger" id={typeof Finger === "object" && "id" in Finger ? Finger?.id : undefined} value={typeof Finger === "object" && "value" in Finger ? Finger?.value : Finger} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.FingerSegmentType]`} name="Segment" id={typeof Segment === "object" && "id" in Segment ? Segment?.id : undefined} value={typeof Segment === "object" && "value" in Segment ? Segment?.value : Segment} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Chirality" id={typeof Chirality === "object" && "id" in Chirality ? Chirality?.id : undefined} value={typeof Chirality === "object" && "value" in Chirality ? Chirality?.value : Chirality} /* default: ID0 */  />
        </Component>
      );
    };
    