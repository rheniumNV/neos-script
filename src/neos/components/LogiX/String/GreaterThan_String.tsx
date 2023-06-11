import { member, Member, Component } from "../../../core";
    
    export interface GreaterThan_StringInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
A?: member<any>;
B?: member<any>;
ComparisonType?: member<any>;
    }
    
    export function GreaterThan_String(props: GreaterThan_StringInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
A,
B,
ComparisonType, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.GreaterThan_String" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="A" id={typeof A === "object" && "id" in A ? A?.id : undefined} value={typeof A === "object" && "value" in A ? A?.value : A} /* default: ID0 */  isRaw={typeof A === "object" && "isRaw" in A && A.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="B" id={typeof B === "object" && "id" in B ? B?.id : undefined} value={typeof B === "object" && "value" in B ? B?.value : B} /* default: ID0 */  isRaw={typeof B === "object" && "isRaw" in B && B.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.StringComparison]`} name="ComparisonType" id={typeof ComparisonType === "object" && "id" in ComparisonType ? ComparisonType?.id : undefined} value={typeof ComparisonType === "object" && "value" in ComparisonType ? ComparisonType?.value : ComparisonType} /* default: ID0 */  isRaw={typeof ComparisonType === "object" && "isRaw" in ComparisonType && ComparisonType.isRaw ? true : undefined} />
        </Component>
      );
    };
    