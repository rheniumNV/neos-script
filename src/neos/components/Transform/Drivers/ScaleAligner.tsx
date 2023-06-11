import { member, Member, Component } from "../../../core";
    
    export interface ScaleAlignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoAddChildren?: member<boolean>;
BaseSize?: member<[number, number, number]>;
Increment?: member<[number, number, number]>;
Multiplier?: member<[number, number, number]>;
NonUniform?: member<boolean>;
_targets?: member<any>;
    }
    
    export function ScaleAligner(props: ScaleAlignerInput){
      const { id, persistentId, updateOrder, Enabled,
AutoAddChildren,
BaseSize,
Increment,
Multiplier,
NonUniform,
_targets, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleAligner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddChildren" id={typeof AutoAddChildren === "object" && "id" in AutoAddChildren ? AutoAddChildren?.id : undefined} value={typeof AutoAddChildren === "object" && "value" in AutoAddChildren ? AutoAddChildren?.value : AutoAddChildren} /* default: false */  isRaw={typeof AutoAddChildren === "object" && "isRaw" in AutoAddChildren && AutoAddChildren.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="BaseSize" id={typeof BaseSize === "object" && "id" in BaseSize ? BaseSize?.id : undefined} value={typeof BaseSize === "object" && "value" in BaseSize ? BaseSize?.value : BaseSize} /* default: [0; 0; 0] */  isRaw={typeof BaseSize === "object" && "isRaw" in BaseSize && BaseSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Increment" id={typeof Increment === "object" && "id" in Increment ? Increment?.id : undefined} value={typeof Increment === "object" && "value" in Increment ? Increment?.value : Increment} /* default: [0; 0; 0] */  isRaw={typeof Increment === "object" && "isRaw" in Increment && Increment.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Multiplier" id={typeof Multiplier === "object" && "id" in Multiplier ? Multiplier?.id : undefined} value={typeof Multiplier === "object" && "value" in Multiplier ? Multiplier?.value : Multiplier} /* default: [0; 0; 0] */  isRaw={typeof Multiplier === "object" && "isRaw" in Multiplier && Multiplier.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="NonUniform" id={typeof NonUniform === "object" && "id" in NonUniform ? NonUniform?.id : undefined} value={typeof NonUniform === "object" && "value" in NonUniform ? NonUniform?.value : NonUniform} /* default: false */  isRaw={typeof NonUniform === "object" && "isRaw" in NonUniform && NonUniform.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.ScaleAligner+Target]`} name="_targets" id={typeof _targets === "object" && "id" in _targets ? _targets?.id : undefined} value={typeof _targets === "object" && "value" in _targets ? _targets?.value : _targets} /* default: FrooxEngine.SyncList`1[FrooxEngine.ScaleAligner+Target] */  isRaw={typeof _targets === "object" && "isRaw" in _targets && _targets.isRaw ? true : undefined} />
        </Component>
      );
    };
    