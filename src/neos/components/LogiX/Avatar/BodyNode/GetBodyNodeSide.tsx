import { member, Member, Component } from "../../../../core";
    
    export interface GetBodyNodeSideInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Node?: member<any>;
Side?: member<any>;
    }
    
    export function GetBodyNodeSide(props: GetBodyNodeSideInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Node,
Side, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Utility.GetBodyNodeSide" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.BodyNode]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: ID0 */  isRaw={typeof Side === "object" && "isRaw" in Side && Side.isRaw ? true : undefined} />
        </Component>
      );
    };
    