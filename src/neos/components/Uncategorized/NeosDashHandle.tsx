import { member, Member, Component } from "../../core";
    
    export interface NeosDashHandleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Dash?: member<any>;
MinRadius?: member<number>;
MaxRadius?: member<number>;
_grabber?: member<any>;
_reference?: member<any>;
_referenceDistanceOffset?: member<number>;
_referenceTiltOffset?: member<number>;
_referenceHeightOffset?: member<[number, number, number]>;
    }
    
    export function NeosDashHandle(props: NeosDashHandleInput){
      const { id, persistentId, updateOrder, Enabled,
Dash,
MinRadius,
MaxRadius,
_grabber,
_reference,
_referenceDistanceOffset,
_referenceTiltOffset,
_referenceHeightOffset, } = props;
    
      return (
        <Component type="FrooxEngine.NeosDashHandle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosDash]`} name="Dash" id={typeof Dash === "object" && "id" in Dash ? Dash?.id : undefined} value={typeof Dash === "object" && "value" in Dash ? Dash?.value : Dash} /* default: ID0 */  isRaw={typeof Dash === "object" && "isRaw" in Dash && Dash.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinRadius" id={typeof MinRadius === "object" && "id" in MinRadius ? MinRadius?.id : undefined} value={typeof MinRadius === "object" && "value" in MinRadius ? MinRadius?.value : MinRadius} /* default: 0 */  isRaw={typeof MinRadius === "object" && "isRaw" in MinRadius && MinRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxRadius" id={typeof MaxRadius === "object" && "id" in MaxRadius ? MaxRadius?.id : undefined} value={typeof MaxRadius === "object" && "value" in MaxRadius ? MaxRadius?.value : MaxRadius} /* default: 0 */  isRaw={typeof MaxRadius === "object" && "isRaw" in MaxRadius && MaxRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_grabber" id={typeof _grabber === "object" && "id" in _grabber ? _grabber?.id : undefined} value={typeof _grabber === "object" && "value" in _grabber ? _grabber?.value : _grabber} /* default: ID0 */  isRaw={typeof _grabber === "object" && "isRaw" in _grabber && _grabber.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_reference" id={typeof _reference === "object" && "id" in _reference ? _reference?.id : undefined} value={typeof _reference === "object" && "value" in _reference ? _reference?.value : _reference} /* default: ID0 */  isRaw={typeof _reference === "object" && "isRaw" in _reference && _reference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_referenceDistanceOffset" id={typeof _referenceDistanceOffset === "object" && "id" in _referenceDistanceOffset ? _referenceDistanceOffset?.id : undefined} value={typeof _referenceDistanceOffset === "object" && "value" in _referenceDistanceOffset ? _referenceDistanceOffset?.value : _referenceDistanceOffset} /* default: 0 */  isRaw={typeof _referenceDistanceOffset === "object" && "isRaw" in _referenceDistanceOffset && _referenceDistanceOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_referenceTiltOffset" id={typeof _referenceTiltOffset === "object" && "id" in _referenceTiltOffset ? _referenceTiltOffset?.id : undefined} value={typeof _referenceTiltOffset === "object" && "value" in _referenceTiltOffset ? _referenceTiltOffset?.value : _referenceTiltOffset} /* default: 0 */  isRaw={typeof _referenceTiltOffset === "object" && "isRaw" in _referenceTiltOffset && _referenceTiltOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_referenceHeightOffset" id={typeof _referenceHeightOffset === "object" && "id" in _referenceHeightOffset ? _referenceHeightOffset?.id : undefined} value={typeof _referenceHeightOffset === "object" && "value" in _referenceHeightOffset ? _referenceHeightOffset?.value : _referenceHeightOffset} /* default: [0; 0; 0] */  isRaw={typeof _referenceHeightOffset === "object" && "isRaw" in _referenceHeightOffset && _referenceHeightOffset.isRaw ? true : undefined} />
        </Component>
      );
    };
    