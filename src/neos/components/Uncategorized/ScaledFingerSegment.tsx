import { member, Member, Component } from "../../core";
    
    export interface ScaledFingerSegmentInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_scale?: member<any>;
_offset?: member<any>;
_nextJoint?: member<any>;
_bodyNode?: member<any>;
Width?: member<number>;
    }
    
    export function ScaledFingerSegment(props: ScaledFingerSegmentInput){
      const { id, persistentId, updateOrder, Enabled,
_scale,
_offset,
_nextJoint,
_bodyNode,
Width, } = props;
    
      return (
        <Component type="FrooxEngine.ScaledFingerSegment" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: ID0 */  isRaw={typeof _scale === "object" && "isRaw" in _scale && _scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_offset" id={typeof _offset === "object" && "id" in _offset ? _offset?.id : undefined} value={typeof _offset === "object" && "value" in _offset ? _offset?.value : _offset} /* default: ID0 */  isRaw={typeof _offset === "object" && "isRaw" in _offset && _offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_nextJoint" id={typeof _nextJoint === "object" && "id" in _nextJoint ? _nextJoint?.id : undefined} value={typeof _nextJoint === "object" && "value" in _nextJoint ? _nextJoint?.value : _nextJoint} /* default: ID0 */  isRaw={typeof _nextJoint === "object" && "isRaw" in _nextJoint && _nextJoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BodyNode]`} name="_bodyNode" id={typeof _bodyNode === "object" && "id" in _bodyNode ? _bodyNode?.id : undefined} value={typeof _bodyNode === "object" && "value" in _bodyNode ? _bodyNode?.value : _bodyNode} /* default: NONE */  isRaw={typeof _bodyNode === "object" && "isRaw" in _bodyNode && _bodyNode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  isRaw={typeof Width === "object" && "isRaw" in Width && Width.isRaw ? true : undefined} />
        </Component>
      );
    };
    