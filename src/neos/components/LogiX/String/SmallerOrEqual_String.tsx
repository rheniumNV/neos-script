import { member, Member, Component } from "../../../core";
    
    export interface SmallerOrEqual_StringInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
A?: member<any>;
B?: member<any>;
ComparisonType?: member<any>;
    }
    
    export function SmallerOrEqual_String(props: SmallerOrEqual_StringInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
A,
B,
ComparisonType, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.SmallerOrEqual_String" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="A" id={typeof A === "object" && "id" in A ? A?.id : undefined} value={typeof A === "object" && "value" in A ? A?.value : A} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="B" id={typeof B === "object" && "id" in B ? B?.id : undefined} value={typeof B === "object" && "value" in B ? B?.value : B} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.StringComparison]`} name="ComparisonType" id={typeof ComparisonType === "object" && "id" in ComparisonType ? ComparisonType?.id : undefined} value={typeof ComparisonType === "object" && "value" in ComparisonType ? ComparisonType?.value : ComparisonType} /* default: ID0 */  />
        </Component>
      );
    };
    