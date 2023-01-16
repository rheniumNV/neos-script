import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ValueEqualityDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetValue?: member<any>;
Reference?: member<any>;
Target?: member<any>;
UseApproximateComparison?: member<boolean>;
    }
    
    export function ValueEqualityDriver_T(props: ValueEqualityDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
TargetValue,
Reference,
Target,
UseApproximateComparison, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueEqualityDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetValue" id={typeof TargetValue === "object" && "id" in TargetValue ? TargetValue?.id : undefined} value={typeof TargetValue === "object" && "value" in TargetValue ? TargetValue?.value : TargetValue} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: null */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseApproximateComparison" id={typeof UseApproximateComparison === "object" && "id" in UseApproximateComparison ? UseApproximateComparison?.id : undefined} value={typeof UseApproximateComparison === "object" && "value" in UseApproximateComparison ? UseApproximateComparison?.value : UseApproximateComparison} /* default: null */  />
        </Component>
      );
    };
    