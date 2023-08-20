import { member, Member, Component } from "../../../core";
    
    export interface GrabbableReparentBlockInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DontReparent?: member<boolean>;
MaxDepth?: member<number>;
    }
    
    export function GrabbableReparentBlock(props: GrabbableReparentBlockInput){
      const { id, persistentId, updateOrder, Enabled,
DontReparent,
MaxDepth, } = props;
    
      return (
        <Component type="FrooxEngine.GrabbableReparentBlock" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DontReparent" id={typeof DontReparent === "object" && "id" in DontReparent ? DontReparent?.id : undefined} value={typeof DontReparent === "object" && "value" in DontReparent ? DontReparent?.value : DontReparent} /* default: false */  isRaw={typeof DontReparent === "object" && "isRaw" in DontReparent && DontReparent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxDepth" id={typeof MaxDepth === "object" && "id" in MaxDepth ? MaxDepth?.id : undefined} value={typeof MaxDepth === "object" && "value" in MaxDepth ? MaxDepth?.value : MaxDepth} /* default: 0 */  isRaw={typeof MaxDepth === "object" && "isRaw" in MaxDepth && MaxDepth.isRaw ? true : undefined} />
        </Component>
      );
    };
    