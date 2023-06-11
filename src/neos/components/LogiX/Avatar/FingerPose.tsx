import { member, Member, Component } from "../../../core";
    
    export interface FingerPoseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
PoseSource?: member<any>;
FingerNode?: member<any>;
    }
    
    export function FingerPose(props: FingerPoseInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
PoseSource,
FingerNode, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Avatar.FingerPose" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IFingerPoseSource]`} name="PoseSource" id={typeof PoseSource === "object" && "id" in PoseSource ? PoseSource?.id : undefined} value={typeof PoseSource === "object" && "value" in PoseSource ? PoseSource?.value : PoseSource} /* default: ID0 */  isRaw={typeof PoseSource === "object" && "isRaw" in PoseSource && PoseSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.BodyNode]`} name="FingerNode" id={typeof FingerNode === "object" && "id" in FingerNode ? FingerNode?.id : undefined} value={typeof FingerNode === "object" && "value" in FingerNode ? FingerNode?.value : FingerNode} /* default: ID0 */  isRaw={typeof FingerNode === "object" && "isRaw" in FingerNode && FingerNode.isRaw ? true : undefined} />
        </Component>
      );
    };
    