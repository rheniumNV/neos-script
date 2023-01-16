import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GrabberInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoUpdateUser?: member<any>;
ReleaseCheckRadius?: member<number>;
CorrespondingBodyNode?: member<any>;
_scaleReference?: member<any>;
_baseScale?: member<[number, number, number]>;
_baseDistance?: member<number>;
_holderSlot?: member<any>;
    }
    
    export function Grabber(props: GrabberInput){
      const { id, persistentId, updateOrder, Enabled,
AutoUpdateUser,
ReleaseCheckRadius,
CorrespondingBodyNode,
_scaleReference,
_baseScale,
_baseDistance,
_holderSlot, } = props;
    
      return (
        <Component type="FrooxEngine.Grabber" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="AutoUpdateUser" id={typeof AutoUpdateUser === "object" && "id" in AutoUpdateUser ? AutoUpdateUser?.id : undefined} value={typeof AutoUpdateUser === "object" && "value" in AutoUpdateUser ? AutoUpdateUser?.value : AutoUpdateUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ReleaseCheckRadius" id={typeof ReleaseCheckRadius === "object" && "id" in ReleaseCheckRadius ? ReleaseCheckRadius?.id : undefined} value={typeof ReleaseCheckRadius === "object" && "value" in ReleaseCheckRadius ? ReleaseCheckRadius?.value : ReleaseCheckRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BodyNode]`} name="CorrespondingBodyNode" id={typeof CorrespondingBodyNode === "object" && "id" in CorrespondingBodyNode ? CorrespondingBodyNode?.id : undefined} value={typeof CorrespondingBodyNode === "object" && "value" in CorrespondingBodyNode ? CorrespondingBodyNode?.value : CorrespondingBodyNode} /* default: NONE */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_scaleReference" id={typeof _scaleReference === "object" && "id" in _scaleReference ? _scaleReference?.id : undefined} value={typeof _scaleReference === "object" && "value" in _scaleReference ? _scaleReference?.value : _scaleReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_baseScale" id={typeof _baseScale === "object" && "id" in _baseScale ? _baseScale?.id : undefined} value={typeof _baseScale === "object" && "value" in _baseScale ? _baseScale?.value : _baseScale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_baseDistance" id={typeof _baseDistance === "object" && "id" in _baseDistance ? _baseDistance?.id : undefined} value={typeof _baseDistance === "object" && "value" in _baseDistance ? _baseDistance?.value : _baseDistance} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_holderSlot" id={typeof _holderSlot === "object" && "id" in _holderSlot ? _holderSlot?.id : undefined} value={typeof _holderSlot === "object" && "value" in _holderSlot ? _holderSlot?.value : _holderSlot} /* default: ID0 */  />
        </Component>
      );
    };
    